import { expect, test } from "@playwright/test"

test("landing page exposes the project boundary and primary destinations", async ({ page }) => {
  await page.goto("./")

  await expect(page.getByRole("heading", { name: /Small plugins/, level: 1 })).toBeVisible()
  await expect(page.getByText("One runtime. Independent plugins")).toBeVisible()
  await expect(page.getByRole("link", { name: "Explore the demo" })).toHaveAttribute(
    "href",
    "https://sajoluo.github.io/reliaforge-frontend/",
  )
  await expect(page.getByRole("link", { name: "Read the guide" })).toHaveAttribute(
    "href",
    "/reliaforge/guide/getting-started.html",
  )
  await expect(page.locator(".VPHomeHero .actions a")).toHaveCount(2)
  await expect(page.getByRole("link", { name: "Open the read-only ReliaForge demo" })).toHaveAttribute(
    "href",
    "https://sajoluo.github.io/reliaforge-frontend/",
  )
  await expect(page.getByRole("img", { name: "ReliaForge console showing runtime health and the example plugin catalog" })).toBeVisible()
})

test("Chinese landing page exposes equivalent localized destinations", async ({ page }) => {
  await page.goto("./zh/")

  await expect(page.locator("html")).toHaveAttribute("lang", "zh-CN")
  await expect(page.getByRole("heading", { name: /小巧插件/, level: 1 })).toBeVisible()
  await expect(page.getByText("一个运行时，多个独立插件")).toBeVisible()
  await expect(page.getByRole("link", { name: "体验在线演示" })).toHaveAttribute(
    "href",
    "https://sajoluo.github.io/reliaforge-frontend/#/zh/",
  )
  await expect(page.getByRole("link", { name: "阅读指南" })).toHaveAttribute(
    "href",
    "/reliaforge/zh/guide/getting-started.html",
  )
  await expect(page.locator(".VPHomeHero .actions a")).toHaveCount(2)
  await expect(page.getByRole("link", { name: "打开只读版 ReliaForge 在线演示" })).toHaveAttribute(
    "href",
    "https://sajoluo.github.io/reliaforge-frontend/#/zh/",
  )
  await expect(page.getByRole("img", { name: "展示运行时健康状态与示例插件目录的 ReliaForge 控制台" })).toBeVisible()
})

test("guide navigation works under the GitHub Pages base path", async ({ page }) => {
  await page.goto("./")
  await page.getByRole("link", { name: "Read the guide" }).click()

  await expect(page).toHaveURL(/\/reliaforge\/guide\/getting-started(?:\.html)?$/)
  await expect(page.getByRole("heading", { name: "Getting started", level: 1 })).toBeVisible()
  await page.reload()
  await expect(page.getByRole("heading", { name: "Getting started", level: 1 })).toBeVisible()
})

test("Chinese direct documentation routes reload with localized chrome", async ({ page }, testInfo) => {
  await page.goto("./zh/guide/getting-started.html")

  await expect(page).toHaveURL(/\/reliaforge\/zh\/guide\/getting-started\.html$/)
  await expect(page.locator("html")).toHaveAttribute("lang", "zh-CN")
  await expect(page.getByRole("heading", { name: "快速开始", level: 1 })).toBeVisible()
  await expect(page.getByRole("button", { name: "搜索文档" })).toBeVisible()
  if (testInfo.project.name === "chromium") {
    await expect(page.locator(".VPNavBarMenu").getByRole("link", { name: "指南", exact: true })).toBeVisible()
    await expect(page.locator(".VPNavBarAppearance .VPSwitchAppearance")).toHaveAttribute(
      "title",
      /切换到(?:浅色|深色)主题/,
    )
  }
  await page.reload()
  await expect(page.getByRole("heading", { name: "快速开始", level: 1 })).toBeVisible()
})

test("language menu preserves the corresponding documentation route", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "chromium", "Desktop locale-menu contract")
  await page.goto("./guide/architecture.html")

  const englishMenu = page.locator(".VPNavBarTranslations").getByRole("button", { name: "Change language" })
  await englishMenu.click()
  const chineseLink = page.locator(".VPNavBarTranslations").getByRole("link", { name: "简体中文" })
  await expect(chineseLink).toHaveAttribute("href", "/reliaforge/zh/guide/architecture.html")
  await chineseLink.click()

  await expect(page).toHaveURL(/\/reliaforge\/zh\/guide\/architecture\.html$/)
  await expect(page.locator("html")).toHaveAttribute("lang", "zh-CN")
  await expect(page.getByRole("heading", { name: "架构", level: 1 })).toBeVisible()

  const chineseMenu = page.locator(".VPNavBarTranslations").getByRole("button", { name: "切换语言" })
  await chineseMenu.click()
  const englishLink = page.locator(".VPNavBarTranslations").getByRole("link", { name: "English" })
  await expect(englishLink).toHaveAttribute("href", "/reliaforge/guide/architecture.html")
  await englishLink.click()
  await expect(page).toHaveURL(/\/reliaforge\/guide\/architecture\.html$/)
  await expect(page.locator("html")).toHaveAttribute("lang", "en-US")
})

test.describe("deterministic site locale URLs", () => {
  test.use({ locale: "zh-CN" })

  test("browser language never redirects the English root", async ({ page }) => {
    await page.goto("./")

    await expect(page).toHaveURL(/\/reliaforge\/$/)
    await expect(page.locator("html")).toHaveAttribute("lang", "en-US")
  })
})

test("mobile navigation is usable without horizontal page overflow", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile-chromium", "Mobile-only site contract")
  for (const locale of [
    { route: "./", label: "English", appearance: "Appearance" },
    { route: "./zh/", label: "简体中文", appearance: "外观" },
  ]) {
    await page.goto(locale.route)

    const hamburger = page.locator(".VPNavBarHamburger")
    await expect(hamburger).toBeVisible()
    await hamburger.click()
    await expect(page.locator(".VPNavScreen")).toBeVisible()
    await expect(page.locator(".VPNavScreenTranslations")).toContainText(locale.label)
    await expect(page.locator(".VPNavScreenAppearance")).toContainText(locale.appearance)

    const sizes = await page.evaluate(() => ({
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
    }))
    expect(sizes.scrollWidth).toBeLessThanOrEqual(sizes.clientWidth)
  }
})

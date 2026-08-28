import { expect, test } from "@playwright/test"

test("landing page exposes the project boundary and primary destinations", async ({ page }) => {
  await page.goto("./")

  await expect(page.getByRole("heading", { name: /Small plugins/, level: 1 })).toBeVisible()
  await expect(page.getByText("Build the tool. Reuse the platform")).toBeVisible()
  await expect(page.getByRole("link", { name: "Try the demo" })).toHaveAttribute(
    "href",
    "https://demo.reliaforge.dev/",
  )
  await expect(page.getByRole("link", { name: "Get started" })).toHaveAttribute(
    "href",
    "/guide/getting-started.html",
  )
  await expect(page.locator(".VPHomeHero .actions a")).toHaveCount(2)
  await expect(page.getByRole("link", { name: "Open the read-only ReliaForge demo" })).toHaveAttribute(
    "href",
    "https://demo.reliaforge.dev/",
  )
  await expect(page.getByRole("img", { name: "ReliaForge console with runtime health and example plugins" })).toBeVisible()
})

test("Chinese landing page exposes equivalent localized destinations", async ({ page }) => {
  await page.goto("./zh/")

  await expect(page.locator("html")).toHaveAttribute("lang", "zh-CN")
  await expect(page.getByRole("heading", { name: /小巧插件/, level: 1 })).toBeVisible()
  await expect(page.getByText("业务逻辑各自开发，平台能力统一复用")).toBeVisible()
  await expect(page.getByRole("link", { name: "在线体验" })).toHaveAttribute(
    "href",
    "https://demo.reliaforge.dev/#/zh/",
  )
  await expect(page.getByRole("link", { name: "开始使用" })).toHaveAttribute(
    "href",
    "/zh/guide/getting-started.html",
  )
  await expect(page.locator(".VPHomeHero .actions a")).toHaveCount(2)
  await expect(page.getByRole("link", { name: "打开 ReliaForge 只读在线演示" })).toHaveAttribute(
    "href",
    "https://demo.reliaforge.dev/#/zh/",
  )
  await expect(page.getByRole("img", { name: "ReliaForge 控制台，显示运行状态和示例插件列表" })).toBeVisible()
})

test("guide navigation works from the custom-domain root", async ({ page }) => {
  await page.goto("./")
  await page.getByRole("link", { name: "Get started" }).click()

  await expect(page).toHaveURL(/\/guide\/getting-started(?:\.html)?$/)
  await expect(page.getByRole("heading", { name: "Getting started", level: 1 })).toBeVisible()
  await page.reload()
  await expect(page.getByRole("heading", { name: "Getting started", level: 1 })).toBeVisible()
})

test("Chinese direct documentation routes reload with localized chrome", async ({ page }, testInfo) => {
  await page.goto("./zh/guide/getting-started.html")

  await expect(page).toHaveURL(/\/zh\/guide\/getting-started\.html$/)
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
  await expect(chineseLink).toHaveAttribute("href", "/zh/guide/architecture.html")
  await chineseLink.click()

  await expect(page).toHaveURL(/\/zh\/guide\/architecture\.html$/)
  await expect(page.locator("html")).toHaveAttribute("lang", "zh-CN")
  await expect(page.getByRole("heading", { name: "架构", level: 1 })).toBeVisible()

  const chineseMenu = page.locator(".VPNavBarTranslations").getByRole("button", { name: "切换语言" })
  await chineseMenu.click()
  const englishLink = page.locator(".VPNavBarTranslations").getByRole("link", { name: "English" })
  await expect(englishLink).toHaveAttribute("href", "/guide/architecture.html")
  await englishLink.click()
  await expect(page).toHaveURL(/\/guide\/architecture\.html$/)
  await expect(page.locator("html")).toHaveAttribute("lang", "en-US")
})

test.describe("deterministic site locale URLs", () => {
  test.use({ locale: "zh-CN" })

  test("browser language never redirects the English root", async ({ page }) => {
    await page.goto("./")

    await expect(page).toHaveURL(/\/$/)
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

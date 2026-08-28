import { defineConfig } from "vitepress"

const siteUrl = "https://reliaforge.dev/"

const englishSidebar = [
  {
    text: "Guide",
    items: [
      { text: "Getting started", link: "/guide/getting-started" },
      { text: "Core concepts", link: "/guide/core-concepts" },
      { text: "Architecture", link: "/guide/architecture" },
      { text: "Develop a plugin", link: "/guide/plugin-development" },
      { text: "Deploy the console", link: "/guide/deploying-console" },
    ],
  },
  {
    text: "Reference",
    items: [
      { text: "Security model", link: "/reference/security" },
      { text: "Repository ownership", link: "/reference/repositories" },
      { text: "Compatibility", link: "/reference/compatibility" },
    ],
  },
  {
    text: "Project",
    items: [{ text: "Roadmap", link: "/project/roadmap" }],
  },
]

const chineseSidebar = [
  {
    text: "指南",
    items: [
      { text: "快速开始", link: "/zh/guide/getting-started" },
      { text: "核心概念", link: "/zh/guide/core-concepts" },
      { text: "架构", link: "/zh/guide/architecture" },
      { text: "开发插件", link: "/zh/guide/plugin-development" },
      { text: "部署控制台", link: "/zh/guide/deploying-console" },
    ],
  },
  {
    text: "参考",
    items: [
      { text: "安全模型", link: "/zh/reference/security" },
      { text: "仓库职责", link: "/zh/reference/repositories" },
      { text: "兼容性", link: "/zh/reference/compatibility" },
    ],
  },
  {
    text: "项目",
    items: [{ text: "路线图", link: "/zh/project/roadmap" }],
  },
]

export default defineConfig({
  lang: "en-US",
  title: "ReliaForge",
  description: "A lightweight platform for lifecycle-managed operations plugins.",
  base: "/",
  locales: {
    root: {
      label: "English",
      lang: "en-US",
      title: "ReliaForge",
      description: "A lightweight platform for lifecycle-managed operations plugins.",
    },
    zh: {
      label: "简体中文",
      lang: "zh-CN",
      title: "ReliaForge",
      description: "一个用于管理运维插件生命周期的轻量级平台。",
      link: "/zh/",
      themeConfig: {
        nav: [
          { text: "指南", link: "/zh/guide/getting-started" },
          { text: "架构", link: "/zh/guide/architecture" },
          { text: "安全", link: "/zh/reference/security" },
          { text: "在线演示", link: "https://demo.reliaforge.dev/#/zh/" },
        ],
        sidebar: chineseSidebar,
        search: {
          provider: "local",
          options: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                displayDetails: "显示详细列表",
                resetButtonTitle: "清除搜索",
                backButtonTitle: "关闭搜索",
                noResultsText: "没有找到相关结果",
                footer: {
                  selectText: "选择",
                  selectKeyAriaLabel: "回车键",
                  navigateText: "切换",
                  navigateUpKeyAriaLabel: "向上箭头",
                  navigateDownKeyAriaLabel: "向下箭头",
                  closeText: "关闭",
                  closeKeyAriaLabel: "Esc 键",
                },
              },
            },
          },
        },
        editLink: {
          pattern: "https://github.com/SajoLuo/reliaforge/edit/main/docs/:path",
          text: "在 GitHub 上编辑此页",
        },
        footer: {
          message: "基于 MIT 许可证发布。",
          copyright: "版权所有 © 2026 Sajo Luo",
        },
        outline: { level: [2, 3], label: "本页内容" },
        lastUpdated: { text: "最后更新" },
        darkModeSwitchLabel: "外观",
        lightModeSwitchTitle: "切换到浅色主题",
        darkModeSwitchTitle: "切换到深色主题",
        sidebarMenuLabel: "菜单",
        returnToTopLabel: "返回顶部",
        langMenuLabel: "切换语言",
        skipToContentLabel: "跳到正文",
        docFooter: { prev: "上一页", next: "下一页" },
        notFound: {
          title: "页面未找到",
          quote: "这个页面不存在，或已被移动。",
          linkLabel: "返回首页",
          linkText: "返回首页",
        },
      },
    },
  },
  lastUpdated: true,
  cleanUrls: false,
  sitemap: { hostname: siteUrl },
  head: [
    ["meta", { name: "theme-color", content: "#fbfbfa", media: "(prefers-color-scheme: light)" }],
    ["meta", { name: "theme-color", content: "#0b0d0c", media: "(prefers-color-scheme: dark)" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: "ReliaForge" }],
    ["meta", { property: "og:description", content: "Small plugins. Clear boundaries. Reliable operations tooling." }],
    ["meta", { property: "og:image", content: `${siteUrl}console-preview.png` }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["link", { rel: "icon", type: "image/png", href: "/mark.png" }],
  ],
  themeConfig: {
    logo: "/mark.png",
    siteTitle: "ReliaForge",
    nav: [
      { text: "Guide", link: "/guide/getting-started" },
      { text: "Architecture", link: "/guide/architecture" },
      { text: "Security", link: "/reference/security" },
      { text: "Demo", link: "https://demo.reliaforge.dev/" },
    ],
    sidebar: englishSidebar,
    socialLinks: [
      { icon: "github", link: "https://github.com/SajoLuo/reliaforge" },
    ],
    search: { provider: "local" },
    i18nRouting: true,
    editLink: {
      pattern: "https://github.com/SajoLuo/reliaforge/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2026 Sajo Luo",
    },
    outline: { level: [2, 3], label: "On this page" },
    lastUpdated: { text: "Last updated" },
  },
})

import { h } from "vue"
import { useData, withBase, type Theme } from "vitepress"
import DefaultTheme from "vitepress/theme"
import "./custom.css"

interface HeroPreviewConfig {
  src: string
  alt: string
  href: string
  label: string
}

function HeroPreview() {
  const { frontmatter } = useData()
  const preview = frontmatter.value.heroPreview as HeroPreviewConfig | undefined

  if (!preview) return null

  return h("a", {
    class: "hero-preview",
    href: preview.href,
    "aria-label": preview.label,
  }, [
    h("img", {
      src: withBase(preview.src),
      alt: preview.alt,
      width: 2560,
      height: 1600,
    }),
  ])
}

export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout, null, {
    "home-hero-image": () => h(HeroPreview),
  }),
} satisfies Theme

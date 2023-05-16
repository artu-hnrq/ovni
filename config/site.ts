export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Ovni",
  description:
    "Sua agência de viagens espaciais.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Excursões",
      href: "tour/",
    },
  ],
  links: {
    twitter: "https://twitter.com/artu_hnrq",
    github: "https://github.com/artu-hnrq",
    docs: "https://ui.shadcn.com",
  },
}

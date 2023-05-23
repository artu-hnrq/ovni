import * as icons from 'lucide-react'

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Next.js",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  iconNav: [
    {
      title: "Twitter",
      href: "https://twitter.com/artu-hnrq",
      icon: icons.Twitter,
      external: true,
    },
    {
      title: "GitHub",
      href: "https://github.com/artu-hnrq",
      icon: icons.Github,
      external: true,
    },

  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}

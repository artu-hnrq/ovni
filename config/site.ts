import { Icons } from '@/components/icons'

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
      title: "Excursões",
      href: "/tour",
      icon: Icons.Tour,
    },
    {
      title: "Clientes",
      href: "/customer",
      icon: Icons.Customer,
    },

  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}

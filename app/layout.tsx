import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { Sidebar } from "@/components/sidebar"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen font-sans antialiased", fontSans.variable,
            "bg-gradient-to-b from-gray-300 via-slate-300 to-zinc-300",
            "dark:from-gray-700 dark:via-slate-700 dark:to-zinc-700",
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="
              sticky top-0 z-40 h-1.5 w-full
              bg-gradient-to-r from-lime-500 via-emerald-500-500 to-cyan-500
            "/>

            <Sidebar />

            <div className="relative flex min-h-screen flex-col">
              <div className="flex-1">
                {children}
              </div>
            </div>

            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html >
    </>
  )
}

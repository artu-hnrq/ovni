import './globals.sass'
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
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
            "font-sans antialiased", fontSans.variable,
            "min-h-screen",
            "bg-gray-200 dark:bg-gray-700",
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {/* <div className="
              sticky top-0 z-40 h-1.5 w-full
              bg-gradient-to-r from-lime-500 via-emerald-500 to-cyan-500
            "/> */}

            <Sidebar />

            <main className="relative flex flex-col items-center">
              <div className="
                flex flex-col items-start
                w-full max-w-screen-2xl min-h-screen
                p-8
              ">
                {children}
              </div>
            </main>

            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html >
    </>
  )
}

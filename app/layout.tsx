import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { Sidebar } from "@/components/core/sidebar"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { LogoOnly } from "@/components/brand"

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
            "min-h-screen font-sans antialiased",
            "bg-slate-50 dark:bg-slate-900",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="className" defaultTheme="system" enableSystem>
            <TooltipProvider delayDuration={700} skipDelayDuration={50}>

              <div className="fixed z-35 h-1 w-full bg-gradient-to-r from-lime-500 via-green-500 to-cyan-500" />

              <div className="relative flex flex-col items-center min-w-screen min-h-screen ">

                {/* <div className="fixed top-4 left-5 z-50 flex items-center justify-center mx-3">
                  <LogoOnly className="w-15 h-15" />
                </div> */}

                <SiteHeader />
                <header className="fixed top-0 left-0 z-40">
                  <Sidebar />
                </header>


                <div className="flex-1 col-start-end min-w-full max-w-screen-xl gap-4 mb-4">
                  {children}
                </div>

              </div>
              <TailwindIndicator />
            </TooltipProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}

import Link from "next/link"
import * as icons from 'lucide-react'


function _Sidebar({ items }: any) {
  return (
    <div className="fixed left-0 z-40 w-min h-full flex items-start py-20 transition-all duration-500 -translate-x-full sm:translate-x-0" aria-label="Sidebar">
      <nav className="flex flex-col items-start w-fit h-fit group hover:shadow border border-transparent rounded-r overflow-hidden text-slate-700 hover:bg-white">

        <div className="flex flex-col items-start w-full p-2 gap-1 border-gray-700">
          <Link
            href="/tour"
            className="flex items-center justify-center rounded hover:bg-slate-700 hover:text-gray-300"
          >
            <div className="flex items-center justify-center w-10 h-10">
              <icons.Compass size={20} />
            </div>
            {/* <p className="pr-2 hidden group-hover:inline-flex">Excursões</p> */}
          </Link>
          <Link
            href="/people"
            className="flex items-center justify-center w-10 h-10 rounded hover:bg-slate-700 hover:text-gray-300"
          >
            <icons.Users size={20} />
          </Link>

        </div>
      </nav >
    </div >
  )
}
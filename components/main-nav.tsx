import * as React from "react"
import Link from "next/link"

import { NavItemProps } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { LogoOnly } from "@/components/brand"

interface MainNavProps {
  items?: NavItemProps[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <LogoOnly className="w-10" />
        <span className="hidden font-bold sm:inline-block hover:text-lime-500 transition-colors duration-400">
          {siteConfig.name}
        </span>
      </Link>
      {items?.length ? (
        <nav className="hidden gap-8 md:flex items-center">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex-1 items-center text-lg font-semibold text-muted-foreground sm:text-sm",
                    "p-0.5 px-4 h-fit rounded-lg",
                    "hover:text-lime-500 transition-colors duration-100",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null
      }
    </div >
  )
}

import Link from "next/link"

import { NavItemProps } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"


export function Sidebar() {
  return (
    <header className={cn(
      "fixed top-0 left-0 z-50 w-fit h-full",
      "border-r bg-background",
    )}>
      <div className={cn(
        "flex flex-col items-center gap-6 md:gap-10",
        "h-full py-4 px-2", "sm:justify-between sm:space-y-0"
      )}>

        <Link href="/" className="flex justify-center space-x-2">
          <Icons.logo className="h-6 w-6" />
        </Link>

        <Nav items={siteConfig.iconNav} />
        <ThemeToggle />
      </div>
    </header >
  )
}


interface NavProps {
  className?: string,
  items?: NavItemProps[]
}

export function Nav({ className, items }: NavProps) {
  return (
    <nav className={cn(
      "flex flex-col items-center space-y-2",
    )}>
      {items?.map((item, index) => (
        <NavItem key={index} item={item} />
      ))}
    </nav>
  )
}

export function NavItem({ item }: { item: NavItemProps }) {
  let attr = item.external ? { target: "_blank", rel: "noreferrer" } : {}

  return (
    <Link href={item.href} {...attr}>
      <div className={cn(
        buttonVariants({ size: "sm", variant: "ghost", }),
        item.disabled && "cursor-not-allowed opacity-80",
        item.active && "bg-slate-200 dark:bg-slate-700"
      )}>
        <item.icon className="h-5 w-5 fill-lime-500 dark:fill-none" />
        <span className="sr-only">{item.title}</span>
      </div>
    </Link >
  )
}
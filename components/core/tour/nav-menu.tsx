'use client'

import Link from "next/link"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { Ovni } from "@/lib/sdk"
import Tour from "@/components/core/tour"
import { TourConfig } from "@/config/tour"

import { cn } from "@/lib/utils"
import { NavMenuItemProps } from "@/types/nav"



interface NavMenuProps {
    children?: React.ReactNode,
    tour: Ovni.Tour,
}

export default function NavMenu({ children, tour }: NavMenuProps) {

    let menu: NavMenuItemProps[] = TourConfig.getNavMenuProps(tour)

    return (
        <NavigationMenu className="h-8 rounded bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 overflow-hidden">
            <NavigationMenuList className="space-x-0">
                {menu.map((props: NavMenuItemProps) => (
                    <NavMenuItem {...props} />
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export function NavMenuItem({ children, label, href, active, icon }: NavMenuItemProps) {
    const Icon = icon

    return (
        <NavigationMenuItem>
            <Link href={href} legacyBehavior passHref>
                <NavigationMenuLink className={cn(
                    navigationMenuTriggerStyle(),
                    "inline-flex items-center justify-center rounded-md text-xs font-semibold",
                    "bg-transparent hover:bg-gray-50 dark:hover:bg-gray-950 hover:text-accent-foreground transition-colors",
                    "data-[active]:bg-white dark:data-[active]:bg-black",
                    "m-0"
                )}
                    active={active}
                >
                    <div className="flex items-center justify-center">
                        <Icon size={18} className="mr-2 fill-sky-400 dark:fill-none" />
                        {label}
                    </div>
                </NavigationMenuLink>
            </Link>
        </NavigationMenuItem >
    )
}
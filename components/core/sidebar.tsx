"use client"

import Link from "next/link"
import * as icons from 'lucide-react'

import { NavItemProps } from "@/types/nav"

import { cn, dark } from "@/lib/utils"
import { usePathname } from "next/navigation"

import { ThemeToggle } from "@/components/theme-toggle"
import { Separator } from "@/components/ui/separator"
import { LogoOnly } from "../brand"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip"
import { buttonVariants } from "../ui/button"


export interface SidebarProps {
    className?: string,
}

export function Sidebar({ className }: SidebarProps) {
    const pathname = usePathname()

    let navigation: NavItemProps[][] = [
        [
            {
                title: "Excursões",
                href: "/tour",
                icon: icons.Compass,
            },
            {
                title: "Pessoas",
                href: "/people",
                icon: icons.Users,
            }
        ],
        [
            {
                title: "Configurações",
                href: "/settings",
                icon: icons.Settings,
            }
        ]
    ]

    return (
        <aside className={cn(
            "flex flex-col items-center justify-start gap-2",
            "py-2",
            "w-fit h-screen overflow-x-hidden",
            "bg-white dark:bg-gray-900",
            "border-r-2 border-gray-200"
        )}>
            <LogoOnly className="flex-1 p-1 hover:scale-110" />
            <Separator className="h-[1.5px] bg-gray-200" />

            <TooltipProvider delayDuration={700} skipDelayDuration={50}>
                <nav className={cn(
                    "flex flex-col items-start gap-2",
                    "w-fit h-full overflow-hidden",
                    "p-2",
                    "border border-transparent",
                    "text-gray-900",
                    "group",
                )}>
                    {navigation.map((section) => (
                        <>
                            <NavGroup className="">
                                {section.map((nav_item, index) => (
                                    <SidebarNavItem
                                        key={index}
                                        active={pathname === nav_item.href}
                                        {...nav_item}
                                    />
                                ))}
                            </NavGroup>
                            <Separator className="h-[1.5px] bg-gray-200 last:hidden" />
                        </>
                    ))}
                </nav >
            </TooltipProvider>
        </aside >
    )
}

export function NavGroup({ className, children }: { className: string, children: React.ReactNode }) {
    return (
        <li className={cn(
            "flex flex-col items-start gap-2",
            "w-fit h-fit overflow-hidden",
            className,
        )}>
            {children}
        </li>
    )
}

export function SidebarNavItem(props: NavItemProps) {

    return (
        <Tooltip>
            <TooltipTrigger>
                <Link
                    href={props.href}
                    // className={cn(
                    //     "flex items-center justify-start",
                    //     "w-full h-fit rounded-lg",
                    //     "border-2 border-transparent",
                    //     "group/link",
                    //     "hover:bg-gray-200",
                    // )}
                    className={cn(
                        "inline-flex items-center justify-center",
                        "h-8 px-1.5",
                        "border-2 border-transparent rounded-md transition-colors ring-offset-background",
                        "text-sm font-medium",

                        "hover:bg-accent hover:text-accent-foreground",

                        "disabled:opacity-50 disabled:pointer-events-none",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                        props.active && "bg-accent text-accent-foreground",
                    )}
                >
                    <props.icon size={18} className="m-1.5 group-hover/link:text-gray-800" />
                </Link>
                <TooltipContent side="right" className={cn(
                    "relative right-[-0.25rem]",
                    "p-1 px-1.5 rounded-md",
                    "text-xs font-medium text-white",
                    "bg-gray-700 ",
                )}>
                    <p>{props.title}</p>
                </TooltipContent>
            </TooltipTrigger>
        </Tooltip>
    )
}

'use client'

import Link from "next/link"
import { usePathname } from 'next/navigation'

import Tour from "@/lib/sdk/tour"
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

import {
    Tooltip as _Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"


import * as icons from 'lucide-react';


import { cn } from "@/lib/utils"

interface NavMenuProps {
    children?: React.ReactNode,
    tour: Tour,
}

export default function NavMenu({ children, tour }: NavMenuProps) {

    const pathname = usePathname();

    let menu: NavMenuItemProps[] = [
        {
            label: 'Dashboard',
            href: `/tour/${tour.record_id}`,
            icon: icons.LayoutDashboard
        },
        {
            label: 'Viagens',
            href: `/tour/${tour.record_id}/trip`,
            icon: icons.Map
        },
        {
            label: 'Vendas',
            href: `/tour/${tour.record_id}/sales`,
            icon: icons.Banknote
        },
    ].map((props) => ({
        ...props,
        active: pathname === props.href,
        icon: <props.icon size={14} />
    }))

    return (
        <NavigationMenu className="w-full h-12 p-2 mb-4 border-b border-gray-200">
            <NavigationMenuList>
                {menu.map((props: NavMenuItemProps) => (
                    <NavMenuItem {...props} />
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    )
}

interface NavMenuItemProps {
    children?: React.ReactNode,
    label: string,
    href: string,
    active: boolean,
    icon: React.ReactNode,

}

export function NavMenuItem({ children, label, href, active, icon }: NavMenuItemProps) {
    return (
        <Tooltip content={label}>
            <NavigationMenuItem>
                <Link href={href} legacyBehavior passHref>
                    <NavigationMenuLink
                        className={cn(
                            "inline-flex items-center justify-center rounded-md text-sm font-medium",
                            "h-6 py-2 px-4 gap-2 group w-max",
                            "transition-transform",
                            "bg-background hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-accent-foreground transition-colors",
                            "data-[active]:bg-gray-100 dark:data-[active]:bg-slate-800 data-[active]:border-2 data-[active]:border-lime-400",
                            "focus:outline-none focus:bg-accent focus:text-accent-foreground disabled:opacity-50 disabled:pointer-events-none",
                        )}
                        active={active}
                    >
                        {icon}
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem >
        </Tooltip>
    )
}

function Tooltip({ children, content }: { children: React.ReactNode, content: React.ReactNode }) {
    return (

        <_Tooltip>
            <TooltipTrigger asChild>
                {children}
            </TooltipTrigger>
            <TooltipContent>
                <p>{content}</p>
            </TooltipContent>
        </_Tooltip>

    )
}

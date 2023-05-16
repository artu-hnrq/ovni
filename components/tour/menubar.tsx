'use client'

import Link from "next/link"

import Tour from "@/lib/sdk/tour"
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"


import { Icon, LucideIcon } from '@/components/ui/icon'

import { cn } from "@/lib/utils"

interface MenubarMenuProps {
    children?: React.ReactNode,
    trigger: String,
    items: MenubarItemProps[],

}

interface MenubarItemProps {
    children?: React.ReactNode,
    label: String
    shortcut: String,
    icon: LucideIcon,
}


export default function Menu({ children, tour }: { children?: React.ReactNode, tour: Tour }) {

    let menu: MenubarMenuProps[] = [
        {
            trigger: 'Viagens', items: [
                { label: '+Nova', shortcut: 'ctrl+.', icon: 'Airplay' },
            ]
        },

        {
            trigger: 'Vendas', items: [
                { label: '+Nova', shortcut: '', icon: 'Airplay' },
            ]
        },
    ]


    return (
        <Menubar className="w-fit h-fit mb-4">
            {menu.map(({ trigger, items }: MenubarMenuProps) => (
                <MenubarMenu>
                    <MenubarTrigger className="text-xs">{trigger}</MenubarTrigger>
                    <MenubarContent>
                        {items.map(item => (
                            <MenuItem {...item} />
                        ))}
                    </MenubarContent>
                </MenubarMenu>
            ))}
        </Menubar>
    )
}

export function MenuItem({ label, shortcut, icon }: MenubarItemProps) {
    return (
        <MenubarItem className="">
            {label} {shortcut ? <MenubarShortcut>{shortcut}</MenubarShortcut> : null}
        </MenubarItem>
    )
}

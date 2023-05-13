'use client'
import { usePathname } from 'next/navigation';
import * as Brand from './brand'
import Icon from './Icon';
import Link from 'next/link';



export default function Nav({ className, pages }) {
    return (
        <nav class="my-4 w-full h-fit max-w-screen-xl rounded-lg shadow-md bg-white border-b-2 border-b-gray-100 dark:border-gray-600 dark:bg-gray-900">
            <Brand.LogoOnly className='absolute mx-auto' size={70} />
            <div class="flex flex-wrap items-end justify-between mx-auto max-w-screen-lg p-2 relative">
                <CollapsableMenu>
                    {Object.entries(pages).map(([text, path]) => {
                        return <NavItem href={path}>{text}</NavItem>
                    })}
                </CollapsableMenu>
            </div>
        </nav >
    )
}

function CollapsableMenu({ children, icon = 'Menu', slug = 'nav-menu' }) {
    return (
        <>
            <button data-collapse-toggle={slug} type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full" aria-expanded="false">
                <span class="sr-only">Menu</span>
                <Icon>{icon}</Icon>
            </button>
            <div id={slug} class="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1">
                <ul class="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    {children}
                </ul>
            </div>
        </>
    )
}

function NavItem({ children, href }) {
    const pathname = usePathname();

    return (
        <li class={pathname === href ? 'text-brand' : 'text-gray-900'}>
            <Link
                href={href}
                class="block py-2 pl-3 pr-4 rounded font-medium hover:bg-gray-100 md:hover:bg-transparent md:hover:text-brand md:p-0 dark:text-white md:dark:hover:text-brand dark:hover:bg-gray-700 dark:hover:text-brand md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
            >
                {children}
            </Link >
        </li>
    );
}
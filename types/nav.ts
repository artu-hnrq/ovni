import * as icons from 'lucide-react'

export interface NavItem {
  title: string
  href: string
  disabled?: boolean
  external?: boolean
}

export interface NavItemProps extends NavItem {
  icon: icons.LucideIcon,
  active?: boolean
}

export interface NavMenuItemProps {
  children?: React.ReactNode,
  label: string,
  href: string,
  active: boolean,
  icon: icons.LucideIcon,

}
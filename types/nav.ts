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

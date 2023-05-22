import { LucideIcon } from 'lucide-react'

export interface NavItemProps {
  title: string
  href: string
  icon: LucideIcon
  active?: boolean
  disabled?: boolean
  external?: boolean
}

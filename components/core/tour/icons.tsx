import {
  Armchair,
  Banknote,
  LayoutDashboard,
  Map,
  Wallet,
  type Icon as LucideIcon,
} from "lucide-react"

export type Icon = LucideIcon

const Icons = {
  Revenue: Banknote,
  AveragePrice: Armchair,

  Dashboard: LayoutDashboard,
  Trips: Map,
  Sales: Wallet,

}

export default Icons

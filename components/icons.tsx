import {
  ArrowLeft,
  Compass,
  Github,
  LucideProps,
  MapPin,
  Moon,
  Plus,
  SunMedium,
  Twitter,
  type Icon as LucideIcon,
  User,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  Tour: Compass,
  Waypoint: MapPin,
  Customer: User,

  Create: Plus,

  Back: ArrowLeft,

  Sun: SunMedium,
  Moon: Moon,

  Twitter: Twitter,
  GitHub: Github,
}

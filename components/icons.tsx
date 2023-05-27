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
  // https://icons8.com/icon/9677/sci-fi
  Ovni: () => <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAABuUlEQVR4nK2WzytEURTHP6TGSn5GKcpGsqAoWSjJguZfwF9gY2M1EhYW/gRlgWJhw97CQiwkTUrEjDEzSCgWQ9Pk6ea8el7v3Xsf863TNPeeez/vnTnn20CwBoEN4AK4BU6BVWAUqAw5E1kzwBfghERaoCfAA5ABDoB5oNMWMgCUNBBTlIB1oN4EWrO47BNIAF1ADKgGeuSNXiTnRvZDlbQATWjO1wJ7kqdK2hyWmDFArk0l4adZdiV/Oyzp2ABSDWCjOuBZmqrbv9kktdWBPoAGS9iCnFl2F+JADihadtaSJahX8g/dhaznkqKnc8JC5fRZgGJSunwQ6E6e2PRWeaDdAKoQ0JO7MC4wBRkDGoFXC9gl0KYBdUjeme5ppi1/rxzQH3JHQnJ2TLOwbwkrAos+25mSDlX770CNDtYKPEbwuYLMYTpgbxILky38w2QdiU0TSA3xVRlASRPENdlUhIF2AuLeBpKU7yOWbe+EjMIv+e3IhXhn4+gPoC0/yG9HXoirKmBW2tYWNKwDKafQqQVYAd40AGVBc0GH/XakU9xX5pTMkfo8l/8OQ5RBWYsyl0VRyvwvRSkz362gTQByj3/mAAAAAElFTkSuQmCC" />,

  Twitter: Twitter,
  GitHub: Github,
}

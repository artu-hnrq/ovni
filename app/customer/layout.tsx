import { cn } from "@/lib/utils"


interface RootLayoutProps {
  children: React.ReactNode
}

export default function CustomerLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex-1 flex w-full">
      <div className="flex flex-col w-1/3">


      </div>

      <div className="flex flex-col w-full">
        {children}
      </div>
    </div>
  )
}

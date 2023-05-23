import { cn } from "@/lib/utils"

import sdk from "@/lib/sdk"
import Tour from "@/components/core/tour"


interface LayoutProps {
  children: React.ReactNode
  params: { id: string }
}

export default async function TourLayout({ children, params }: LayoutProps) {
  let tour = await sdk.Tour.retrieve(params.id)

  return (
    <div className="flex-1 flex w-full">
      <div className="flex flex-col gap-8 w-1/4 h-full p-2">
        <Tour.Thumbnail tour={tour} className={cn(
          "rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]",
        )} />

      </div>

      <div className="flex flex-col w-full p-8">
        {children}
      </div>
    </div>
  )
}

import { cn } from "@/lib/utils"

import sdk from "@/lib/sdk"
import Tour from "@/components/core/tour"
import { TourConfig } from "@/config/tour"
import { AttributeBadgeProps } from "@/components/core/tour/attribute-badge"
import { Separator } from "@/components/ui/separator"


interface LayoutProps {
  children: React.ReactNode
  params: { id: string }
}

export default async function TourLayout({ children, params }: LayoutProps) {
  let tour = await sdk.Tour.retrieve(params.id)

  let attribute_badges = TourConfig.getAttributeBadges(tour) as AttributeBadgeProps[]

  return (
    <div className="flex-1 flex gap-6 w-full">
      <div className="flex flex-col gap-4 w-1/3 h-full p-2 py-4">

        <Tour.Thumbnail tour={tour} className={cn(
          "rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]",
        )} />

        <div className="flex flex-col gap-6 px-2">
          <div><Tour.Heading tour={tour} /></div>

          <div className="
            flex flex-col gap-4
            rounded p-4 h-fit
          ">
            <Tour.OccupancyProgressBar tour={tour} />

            <div className="
              flex flex-wrap justify-evenly items-center
              rounded p-4
            ">
              {attribute_badges.map((props, index) => (
                <Tour.AttributeBadge
                  key={index}
                  {...props}
                />
              ))}
            </div>
          </div>
        </div>

      </div>


      <div className="flex flex-col justify-centers py-16 w-min ">
        <Separator orientation="vertical" className="bg-slate-300 dark:bg-slate-600 w-[0.5px]" />
      </div>

      <div className="flex flex-col w-full p-8">
        {children}
      </div>
    </div >
  )
}



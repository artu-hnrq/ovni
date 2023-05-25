import { cn } from "@/lib/utils"

import sdk from "@/lib/sdk"
import Tour from "@/components/core/tour"
import { TourConfig } from "@/config/tour"
import GoBackButton from "@/components/core/go-back-button"
import { Separator } from "@/components/ui/separator"

interface LayoutProps {
  children: React.ReactNode
  params: { id: string }
}

export default async function TourLayout({ children, params }: LayoutProps) {
  let tour = await sdk.Tour.retrieve(params.id)

  let attribute_badges = TourConfig.getAttributeBadgesProps(tour)

  return (

    <div className="flex-1 flex gap-12 w-full py-4">

      <GoBackButton href="/tour" />

      <div className="flex flex-col gap-4 w-1/3 h-full sticky top-12">

        <Tour.Thumbnail tour={tour} className={cn(
          "rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]",
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

      <div className="flex flex-col justify-centers py-16 w-min">
        <Separator orientation="vertical" className="bg-slate-300 dark:bg-slate-600 w-[0.5px]" />
      </div>

      <div className="flex flex-col gap-2 w-full">
        <div className="flex w-fit">
          <Tour.NavMenu tour={tour} />
        </div>

        <div className="flex-1">
          {children}
        </div>
      </div>
    </div >
  )
}




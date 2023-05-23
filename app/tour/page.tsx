import Link from "next/link"
import Tour from "@/components/core/tour"

import sdk from "@/lib/sdk"
import { cn } from "@/lib/utils"


export default async function TourListPage() {

  let tours = await sdk.Tour.list()

  return (
    <div className="
      flex flex-col items-start gap-8
      max-w-screen-md h-full p-8
    ">
      <h1 className="
        text-xl font-extrabold leading-tight tracking-tighter
        sm:text-2xl md:text-3xl lg:text-4xl
      ">
        {/* TODO: Implement object orienting */}
        Excursões
      </h1>

      {tours.map((tour) => (
        <Tour.Thumbnail tour={tour} className={cn(
          "rounded-xl border-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]",
          "hover:scale-110 hover:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] hover:border-lime-400",
          "transition-all duration-150 delay-75 ease-in-out",
        )} />
      ))}

    </div>
  )
}

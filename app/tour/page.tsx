
import Tour from "@/components/core/tour"
import { List } from '@/components/generic'

import sdk, { Ovni } from "@/lib/sdk"


export default async function TourListPage() {
  let tours = await sdk.Tour.list()

  return (
    <div className="
      flex flex-col items-start gap-8
      max-w-screen-md h-full p-8
    ">
      <div className="container">
        <h1 className="
          font-extrabold leading-tight tracking-tighter
          text-muted-700 dark:text-muted-200
          text-xl sm:text-2xl md:text-3xl lg:text-4xl
        ">
          {/* TODO: Implement object orienting */}
          Excursões
        </h1>
      </div>

      <List
        className=""
        collection={tours}
        item_component={(tour: Ovni.Tour) => (
          <Tour.LinkItem tour={tour} />
        )}
      />

    </div >
  )
}






import Tour from "@/components/core/tour"
import sdk from "@/lib/sdk"


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

      <div className="flex flex-wrap gap-4 justify-center w-full">
        {tours.map((tour) => (
          <Tour.Card
            tour={tour}
            className="
              rounded-xl border-2 border-transparent
              transition-all duration-150 delay-75 ease-in-out
              hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-600
            " />
        ))}
      </div>

    </div >
  )
}





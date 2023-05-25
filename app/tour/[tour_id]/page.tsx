import sdk from "@/lib/sdk"
import Tour from "@/components/core/tour"
import OccupancyProgressBar from "@/components/core/occupancy-progress-bar"
import { TourConfig } from "@/config/tour"


export default async function TourDashboardPage({ params }: { params: { tour_id: string } }) {
    let tour = await sdk.Tour.retrieve(params.tour_id)

    let attribute_badges = TourConfig.getAttributeBadgesProps(tour)

    return (
        <section className="container grid items-center gap-16 py-6 md:py-10">

            <div className="
            flex flex-col gap-4
            rounded p-4 h-fit w-1/3
          ">
                <OccupancyProgressBar fillable={tour} />

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

        </section>
    )
}

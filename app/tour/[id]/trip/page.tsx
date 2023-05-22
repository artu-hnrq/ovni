import { cn } from "@/lib/utils"
import sdk from "@/lib/sdk"

import RouteTimeline from "./route-timeline"


export default async function Page({ params }: { params: { id: string } }) {
    let tour = await sdk.Tour.retrieve(params.id)

    return (
        < div className={cn(
            "flex flex-col items-center justify-center",
            "md:flex-row md:items-start md:justify-around",
            "gap-4 p-4"
        )}>
            {
                tour.trips ? tour.trips.map((trip_id, index) => (
                    <div key={index} className="flex-1 h-full mx-6">
                        {/* @ts-ignore */}
                        <Route trip_id={trip_id} />
                    </div>
                )) : null
            }
        </div>
    )
}

async function Route({ trip_id }: { trip_id: string }) {
    let trip = await sdk.Trip.retrieve(trip_id)

    let waypoints = await sdk.Waypoint.list({
        formula: `trip_id='${trip_id}'`,
        sort: [{ field: 'index', direction: 'asc' }]
    })

    return RouteTimeline({ waypoints })
}
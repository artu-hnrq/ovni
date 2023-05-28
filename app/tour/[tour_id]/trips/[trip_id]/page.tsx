import OccupancyProgressBar from "@/components/core/occupancy-progress-bar"

import { cn } from "@/lib/utils"
import sdk, { Ovni } from "@/lib/sdk"
import Trip from "@/components/core/trip"



export interface TripDetailsPageProps {
    params: {
        tour_id: string
        trip_id: string
    }
}


export default async function TripDetailsPage({ params }: TripDetailsPageProps) {
    // let trip = await sdk.Trip.retrieve(params.trip_id)

    let trip = await sdk.Trip.retrieve(params.trip_id)

    return (
        <section className="flex flex-col gap-4">
            <div className={cn(
                "flex items-center gap-4",
                "w-full h-fit mb-4 p-4 px-8",
                "rounded-xl bg-white dark:bg-gray-900",
                "sticky top-12",
            )} >
                <Trip.Heading trip={trip} />

                <OccupancyProgressBar fillable={trip} className='w-60' />
            </div >

            <div className="flex-1">
                {/* @ts-ignore */}
                <BoardingList trip={trip} />
            </div>
        </section >
    )
}

async function BoardingList({ trip }: { trip: Ovni.Trip }) {
    let tickets = await sdk.Ticket.list({
        formula: `trip='${trip.title}'`,
        sort: [
            { field: 'datetime', direction: 'desc' }
        ]
    })

    let waypoints = await sdk.Waypoint.list({
        formula: `trip='${trip.title}'`,
        sort: [{ field: 'index', direction: 'asc' }]
    })

    let boarding_list = waypoints.map(waypoint => {
        return {
            ...waypoint,
            tickets: tickets.filter(ticket => ticket.boarding[0] === waypoint.record_id)
        }
    })

    return (
        <>
            <Trip.BoardingListTable boarding_list={boarding_list} />
        </>
    )
}
import OccupancyProgressBar from "@/components/core/occupancy-progress-bar"

import RouteTimeline from "./route-timeline"
import TicketTable, { TicketsPerWaypoint } from "./ticket-table"

import { cn, format_datetime } from "@/lib/utils"
import sdk, { Ovni } from "@/lib/sdk"
import { Ticket } from "lucide-react"


export interface PageProps {
    params: {
        tour_id: string
        trip_id: string
    }
}


export default async function Page({ params }: PageProps) {
    // let trip = await sdk.Trip.retrieve(params.trip_id)

    let trips = await sdk.Trip.list({
        formula: `tour_id='${params.tour_id}'`,
        sort: [
            { field: 'departure', direction: 'asc' }
        ]
    })

    const selected_trip = trips.find(trip => trip.record_id === params.trip_id) || trips[0]

    return (
        <section className="flex flex-col gap-4">
            <div className={cn(
                "flex items-center gap-4",
                "w-full h-fit mb-4 p-4 px-8",
                "rounded-xl bg-white dark:bg-gray-900",
                "sticky top-12",
            )} >
                < h1 className={
                    cn(
                        "text-xl md:text-2xl lg:text-3xl",
                        "font-extrabold leading-tight tracking-tighter",
                        "flex-1",
                    )}>
                    {selected_trip.title}
                    <time className="block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        {format_datetime(selected_trip.departure, "HH:mm")}
                    </time>
                </h1>

                <OccupancyProgressBar fillable={selected_trip} className='w-60' />
            </div >

            <div className="flex-1">
                {/* @ts-ignore */}
                <Tickets trip={selected_trip} />
            </div>
        </section >
    )
}

export async function Route({ trip }: { trip: Ovni.Trip }) {
    let waypoints = await sdk.Waypoint.list({
        formula: `trip_id='${trip.record_id}'`,
        sort: [{ field: 'index', direction: 'asc' }]
    })

    return RouteTimeline({ waypoints })
}

async function Tickets({ trip }: { trip: Ovni.Trip }) {
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

    return (
        <TicketsPerWaypoint tickets={tickets} waypoints={waypoints} />
    )
}
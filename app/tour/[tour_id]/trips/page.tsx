import Trip from '@/components/core/trip'
import { List } from '@/components/generic'

import sdk, { Ovni } from '@/lib/sdk'


export default async function TripListPage({ params }: { params: { tour_id: string } }) {
    let trips = await sdk.Trip.list({
        formula: `tour_id='${params.tour_id}'`,
        sort: [
            { field: 'departure', direction: 'asc' }
        ]
    })

    return (
        <div className="
            flex flex-col items-start gap-8
            max-w-screen-md h-full p-8
        ">

            <List
                className="lg:grid-cols-3 auto-cols-fr"
                collection={trips}
                item_component={(trip: Ovni.Trip) => (
                    <Trip.LinkItem trip={trip} />
                )}
            />
        </div>
    )
}


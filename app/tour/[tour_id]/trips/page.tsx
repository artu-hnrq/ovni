import sdk from '@/lib/sdk'
import { redirect } from 'next/navigation'

export default async function TripListPage({ params }: { params: { tour_id: string } }) {
    let tour = await sdk.Tour.retrieve(params.tour_id)

    redirect(`/tour/${params.tour_id}/trips/${tour.trips[0]}`)
}

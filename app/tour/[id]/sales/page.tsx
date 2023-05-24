import sdk from "@/lib/sdk"
import BatchList from "./batch-list"


export default async function TourSalesPage({ params }: { params: { id: string } }) {
    console.log('params', params)

    const batches = await sdk.Batch.list({
        formula: `tour_id='${params.id}'`,
        sort: [
            { field: 'amount', direction: 'asc' },
        ]
    })

    return (
        <section className="container grid items-center gap-6 py-6 md:py-10">
            <BatchList batches={batches} />
        </section>
    )
}

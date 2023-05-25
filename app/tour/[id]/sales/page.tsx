import sdk from "@/lib/sdk"
import BatchList from "./batch-list"
import OrderTable from "./order-table"
import { Card } from "@/components/ui/card"


export default async function TourSalesPage({ params }: { params: { id: string } }) {
    console.log('params', params)

    const batches = await sdk.Batch.list({
        formula: `tour_id='${params.id}'`,
        sort: [
            { field: 'amount', direction: 'asc' },
        ]
    })

    let orders = await sdk.Order.list({
        formula: `tour_id='${params.id}'`,
        sort: [
            { field: 'id', direction: 'desc' }
        ]
    })

    return (
        <section className="container grid items-center gap-16 py-6 md:py-10">
            <BatchList batches={batches} />
            <OrderTable orders={orders} />
        </section >
    )
}

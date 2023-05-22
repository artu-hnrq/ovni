import { cn } from "@/lib/utils"

import BatchList from './batch-list';
import OrderTable from "./order-table"

import sdk from "@/lib/sdk"


export default async function Page({ params }: { params: { id: string } }) {
    let batches = await sdk.Batch.list({
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

    console.log(batches)

    return (
        <div className={cn(
            "flex flex-col items-center justify-center",
            "md:flex-row md:items-start md:justify-around",
            "gap-4 p-4"
        )}>
            <BatchList batches={batches} />
            <OrderTable orders={orders} />
        </div >
    )
}


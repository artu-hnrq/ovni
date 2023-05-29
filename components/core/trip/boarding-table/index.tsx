"use client"

import { BoardingListData } from "./types"
import { WaypointColumns, TicketColumns } from "./columns"
import DataTable from "../../data-table"
import { Ovni } from "@/lib/sdk"


export function BoardingListTable({
    boarding_list,
}: {
    boarding_list: BoardingListData[]
}) {
    return (
        <>
            <DataTable<BoardingListData>
                headerless
                options={{
                    columns: WaypointColumns,
                    data: boarding_list,
                    // @ts-ignore
                    getRowCanExpand: (row) => row.getValue('passenger_count') > 0,
                }}
                renderSubComponent={({ row }) => <TicketTable tickets={row.getValue('tickets')} />}
            />
        </>
    )
}

export function TicketTable({ tickets }: { tickets: Ovni.Ticket[] }) {
    return (
        <DataTable<Ovni.Ticket>
            className="p-2 bg-transparent rounded-none border-none border-b"
            options={{
                columns: TicketColumns,
                data: tickets,
            }}
        />
    )
}
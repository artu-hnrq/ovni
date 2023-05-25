"use client"

import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/core/data-table"

import EntityCollectionHeader from "@/components/core/entity-collection-header"
import { Badge } from "@/components/ui/badge"

import { Ovni } from "@/lib/sdk"
import { cn, format_datetime } from "@/lib/utils"
import { Waypoint } from "./route-timeline"


export const columns: ColumnDef<Ovni.Ticket>[] = [
    {
        accessorKey: "datetime",
        header: "Data",
        cell: ({ row }) => format_datetime(row.getValue())
    },
    {
        accessorKey: "passenger_name",
        header: "Passageiro",
        cell: ({ row }) => <b>{row.getValue()}</b>
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            let status = row.getValue('status') as Ovni.OrderStatus

            let status_color_map = {
                'Aprovado': 'bg-green-100 dark:bg-green-900',
                'Pendente': 'yellow-100 dark:bg-yellow-900',
                'Recusado': 'bg-red-100 dark:bg-red-900',
            }

            return (
                <Badge
                    variant='outline'
                    className={status_color_map[status]}>
                    {status}
                </Badge>
            )
        }
    },
]

export default function TicketTable({ tickets }: { tickets: Ovni.Ticket[] }) {
    return (
        <div className={cn("flex flex-col gap-2 w-full")}>
            <EntityCollectionHeader>
                Pedidos
            </EntityCollectionHeader>

            <DataTable columns={columns} data={tickets} className="bg-white dark:bg-black" />
        </div>
    )
}

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"

export function TicketsPerWaypoint({
    tickets,
    waypoints,
}: {
    tickets: Ovni.Ticket[]
    waypoints: Ovni.Waypoint[]
}) {

    console.log('waypoints', waypoints.length)

    return (
        <>
            {waypoints.map((waypoint, index) => (
                <Collapsible key={index}>
                    <CollapsibleTrigger className="w-full border rounded-lg bg-white dark:bg-gray-900">
                        <Waypoint waypoint={waypoint} className="" />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        <DataTable key={index} columns={columns} data={tickets} className="bg-white dark:bg-black" />
                    </CollapsibleContent>
                </Collapsible >
            ))}
        </>
    )
}
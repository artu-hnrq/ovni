"use client"

import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/core/data-table"

import { EntityCollectionHeader } from "@/components/tour"
import { Badge } from "@/components/ui/badge"

import { Ovni } from "@/lib/sdk"
import { cn, format_datetime } from "@/lib/utils"


export const columns: ColumnDef<Ovni.Order>[] = [
    {
        accessorKey: "datetime",
        header: "Data",
        cell: ({ row }) => format_datetime(row.getValue('datetime'))
    },
    {
        accessorKey: "buyer_name",
        header: "Comprador",
        cell: ({ row }) => <b>{row.getValue('buyer_name')}</b>
    },
    {
        accessorKey: "ticket_count",
        header: "Quantidade",
    },
    {
        accessorKey: "total",
        header: "Total",
        cell: ({ row }) => `R$ ${row.getValue('total')}`
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            let status = row.getValue('status') as Ovni.OrderStatus

            let status_color_map = {
                'Aprovado': 'green',
                'Pendente': 'yellow',
                'Recusado': 'red',
            }

            // let color = `bg-${status_color_map[status]}-100`

            return (
                <Badge
                    variant='outline'
                    className={`bg-${status_color_map[status]}-100`}>
                    {status}
                </Badge>
            )
        }
    },
]

export default function OrderTable({ orders }: { orders: Ovni.Order[] }) {
    return (
        <div className={cn(
            "flex flex-col gap-2 w-full",
        )}>
            <EntityCollectionHeader>
                Pedidos
            </EntityCollectionHeader>

            <DataTable columns={columns} data={orders} />
        </div>
    )
}
"use client"

import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/core/data-table"

import EntityCollectionHeader from "@/components/core/entity-collection-header"
import { Badge } from "@/components/ui/badge"

import { Ovni } from "@/lib/sdk"
import { cn, format_datetime } from "@/lib/utils"
import { Card } from "@/components/ui/card"


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

export default function OrderTable({ orders }: { orders: Ovni.Order[] }) {
    return (
        <div className={cn("flex flex-col gap-2 w-full")}>
            <EntityCollectionHeader>
                Pedidos
            </EntityCollectionHeader>

            <DataTable columns={columns} data={orders} className="bg-white dark:bg-black" />
        </div>
    )
}
"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Badge } from "@/components/ui/badge"

import { Ovni } from "@/lib/sdk"
import { cn } from "@/lib/utils"

import { BoardingListData } from "./types"
import { ChevronDown, ChevronRight } from "lucide-react"
import { Icons } from "@/components/icons"



export const WaypointColumns: ColumnDef<BoardingListData>[] = [
    {
        accessorKey: "title",
        header: "Embarque",
        cell: ({ row }) => {
            return (
                <div className="flex items-center gap-1 w-fit">
                    {row.getCanExpand() ? (
                        // If it's a grouped cell, add an expander and row count
                        <>
                            <button onClick={row.getToggleExpandedHandler()} className="flex items-center bg-transparent mr-4">
                                {row.getIsExpanded() ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                            </button>
                        </>
                    ) : <div className="mr-7" >{" "}</div>}
                    <PinIcon className="" />
                    <h6 className="font-medium">
                        {row.getValue('title')}
                    </h6>
                </div>
            )
        },
    },
    {
        accessorKey: "passenger_count",
        header: "Passageiros",
        cell: ({ row }) => {
            return (
                <span className="flex items-center w-min bg-slate-100 text-slate-500 text-xs font-medium mr-2 px-2 py-0.5 rounded dark:bg-slate-800 dark:text-slate-400 ml-3">
                    <Icons.Customer size={12} className="mr-0.5" />
                    {row.getValue('passenger_count')}
                </span>
            )
        },
    },
    {
        accessorKey: "type",
        header: "",
        cell: ({ row }) => {
            let type = row.getValue('type') as Ovni.WaypointType

            let type_color_map = {
                'Embarque': 'bg-lime-100 dark:bg-lime-900',
                'Parada': 'bg-sky-100 dark:bg-sky-900',
                'Destino': 'bg-red-100 dark:bg-red-900',
            }

            return (
                <Badge
                    variant='outline'
                    className={type_color_map[type]}>
                    {type}
                </Badge>
            )
        }
    },
    {
        accessorKey: "tickets",
        header: "Passagens",
        cell: ({ row }) => <></>,
    },
]

export const TicketColumns: ColumnDef<Ovni.Ticket>[] = [
    {
        accessorKey: "passenger_name",
        header: "Passageiro",
        cell: ({ row }) => {
            return (
                <>{row.getValue('passenger_name')}</>
            )
        },
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

export function PinIcon({ className = "", size = 18 }) {
    return (
        <span className={cn(
            "flex items-center justify-center p-2 bg-lime-100 rounded-full -left-3 dark:bg-lime-900",
            className,
        )}>
            <Icons.Waypoint size={size} className=" text-lime-500" />
        </span >
    )
}

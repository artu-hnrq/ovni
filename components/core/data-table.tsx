"use client"

import {
    ColumnDef,
    Row,
    flexRender,
    getCoreRowModel,
    getExpandedRowModel,
    useReactTable,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { cn } from "@/lib/utils"

export { type ColumnDef }

interface DataTableProps<TData> {
    className?: string
    options: {
        columns: ColumnDef<TData>[]
        data: TData[]
        getRowCanExpand?: (row: Row<TData>) => boolean
    }
    renderSubComponent?: (props: { row: Row<TData> }) => React.ReactElement
    headerless?: boolean,
}

export default function DataTable<TData>({
    className,
    options,
    renderSubComponent = () => <></>,
    headerless: headless = false,
}: DataTableProps<TData>
) {
    const table = useReactTable({
        ...options,
        getCoreRowModel: getCoreRowModel(),
        getExpandedRowModel: getExpandedRowModel(),
    })

    const columns_length = table.getAllColumns().length

    return (
        <div className={cn("rounded-md bg-element border-element border", className)}>
            <Table>
                {!headless ? (
                    <TableHeader className="font-bold text-xs border-b border-element">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id} className="">
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id} className="h-8">
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                ) : null}
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <>
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                                {row.getIsExpanded() && renderSubComponent != undefined && (
                                    <tr className="bg-slate-100 dark:bg-slate-900 border-b border-element shadow-inner">
                                        <TableCell
                                            className="p-0"
                                            colSpan={columns_length}
                                        >
                                            {renderSubComponent({ row })}
                                        </TableCell>
                                    </tr>
                                )}
                            </>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns_length} className="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}
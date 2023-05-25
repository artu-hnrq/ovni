import {
    Card,
    CardHeader,
    CardTitle,
    CardSubtitle,
    CardContent,
} from "@/components/ui/card"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { Icons } from "@/components/icons"

import { Ovni } from "@/lib/sdk"
import { cn, format_datetime } from "@/lib/utils"
import { Button } from "@/components/ui/button"


export default function RouteTimeline({
    className,
    waypoints
}: {
    className?: string;
    waypoints: Ovni.Waypoint[];
}) {
    return (
        <Card className={cn(
            "flex flex-col w-full",
            className,
        )}>
            <CardHeader className="
                flex flex-row items-center gap-2
                w-full pt-2 pb-4
            ">
                <h1 className="flex-1 text-lg font-semibold">Rota</h1>
                <Button variant='ghost' size='sm' className="bg-gray-100 dark:bg-gray-800">
                    <Icons.Create size={14} />
                </Button>
            </CardHeader>
            <Table className="bg-white dark:bg-gray-900 rounded-lg">
                <TableBody>
                    {waypoints.map((waypoint, index) => (
                        <Waypoint key={index} waypoint={waypoint} className="first:border-t" />
                    ))}
                </TableBody>
            </Table>
        </Card>
    )
}


export function Waypoint({
    className,
    waypoint,
}: {
    className?: string;
    waypoint: Ovni.Waypoint
}) {
    return (
        <TableRow className={className}>
            <TableCell className="flex justify-center w-fit">
                <PinIcon waypoint={waypoint} />
            </TableCell>

            <TableCell className="">
                <h3 className="flex items-center mb-1 text-md font-semibold text-gray-900 dark:text-white">
                    {waypoint.title}
                    <span className="flex items-center bg-slate-100 text-slate-500 text-xs font-medium mr-2 px-2 py-0.5 rounded dark:bg-slate-800 dark:text-slate-400 ml-3">
                        <Icons.Customer size={12} className="mr-0.5" />
                        {waypoint.passenger_count}
                    </span>
                </h3>
                <time className="block text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
                    {format_datetime(waypoint.trip_departure, "HH:mm")}
                </time>
            </TableCell>
        </TableRow>
    )
}

export function PinIcon({ waypoint }: { waypoint: Ovni.Waypoint }) {
    return (
        <span className="flex items-center justify-center p-2 bg-lime-100 rounded-full -left-3 dark:bg-lime-900">
            <Icons.Waypoint className=" text-lime-500" />
        </span>
    )
}

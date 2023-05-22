import {
    Card,
    CardHeader,
    CardTitle,
    CardSubtitle,
    CardContent,
} from "@/components/ui/card"

import { EntityCollectionHeader } from '@/components/tour'

import { MapPin, User } from "lucide-react"

import { Ovni } from "@/lib/sdk"
import { cn, format_datetime } from "@/lib/utils"


export function PinIcon({ waypoint }: { waypoint: Ovni.Waypoint }) {
    return (
        <span className="absolute flex items-center justify-center w-6 h-6 bg-green-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-green-900">
            <MapPin className="w-4 h-4 text-green-500" />
        </span>
    )
}


export function Waypoint({ waypoint }: { waypoint: Ovni.Waypoint }) {
    return (
        <li className="mb-10 ml-6">

            <PinIcon waypoint={waypoint} />



            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                {waypoint.title}
                <span className="flex items-center bg-slate-100 text-slate-800 text-xs font-medium mr-2 px-2 py-0.5 rounded dark:bg-slate-900 dark:text-slate-300 ml-3">
                    <User size={12} className="mr-0.5" />
                    {waypoint.passenger_count}
                </span>
            </h3>
            <time className="block mb-2 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
                {format_datetime(waypoint.trip_departure, "HH:mm")}
            </time>
            {/* <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p> */}
            {/* <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"></path></svg> Download ZIP</a> */}
        </li>
    )
}

export default function RouteTimeline({
    waypoints
}: {
    waypoints: Ovni.Waypoint[];
}) {
    return (
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
            {waypoints.map((waypoint) => (
                <Waypoint waypoint={waypoint} />
            ))}
        </ol>
    )
}

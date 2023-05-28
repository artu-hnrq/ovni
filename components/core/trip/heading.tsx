import { Ovni } from "@/lib/sdk"
import { cn, format_datetime } from "@/lib/utils"


export default function Heading({ trip }: { trip: Ovni.Trip }) {
    return (
        <h1 className={cn(
            "text-xl md:text-2xl lg:text-3xl",
            "text-lg font-semibold leading-none tracking-tight",
            "font-extrabold leading-tight tracking-tighter",
            "flex-1"
        )}>
            {trip.title}
            <time className="block text-sm font-normal leading-none text-gray-400 dark:text-gray-500" >
                {format_datetime(trip.departure, "HH:mm")}
            </time>
        </h1>
    )

}

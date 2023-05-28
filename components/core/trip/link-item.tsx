import { HovableFlexLink } from "@/components/generic"
import Trip from "@/components/core/trip"

import { Ovni } from "@/lib/sdk"
import { cn } from "@/lib/utils"

export interface LinkItemProps {
    className?: string
    trip: Ovni.Trip
}

export default function LinkItem({ className, trip }: LinkItemProps) {
    return (
        <HovableFlexLink
            key={trip.record_id}
            href={`tour/${trip.tour[0]}/trips/${trip.record_id}`}
            className={cn(
                "w-full h-fit p-4",
                "group flex",
                className
            )}
        >
            <Trip.Heading trip={trip} />
        </HovableFlexLink>
    )
}
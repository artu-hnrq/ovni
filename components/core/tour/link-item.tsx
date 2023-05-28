import Tour from "@/components/core/tour";
import { HovableFlexLink } from "@/components/generic";
import { CardHeader } from "@/components/ui/card";

import { Ovni } from "@/lib/sdk";
import { cn } from "@/lib/utils";


export interface LinkItemProps {
    className?: string
    tour: Ovni.Tour
}

export default function LinkItem({ className, tour }: LinkItemProps) {
    return (
        <HovableFlexLink
            key={tour.record_id}
            href={`/tour/${tour.record_id}`}
            className={cn(
                "w-full h-fit p-4",
                "group flex",
                className
            )}>

            < div className="w-60" >
                <Tour.Thumbnail tour={tour} className="rounded-xl" />
            </div >

            <CardHeader className='flex-1 mb-8'>
                <Tour.Heading tour={tour} />
            </CardHeader>
        </HovableFlexLink >
    );
}

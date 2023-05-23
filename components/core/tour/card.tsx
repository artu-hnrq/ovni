import Link from "next/link";
import Tour from "@/components/core/tour";

import { Ovni } from "@/lib/sdk";
import { CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function Card({ className, tour }: { className?: string, tour: Ovni.Tour }) {
    return (
        <Link href={`/tour/${tour.record_id}`}
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
        </Link >
    );
}

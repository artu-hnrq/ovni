import {
    CardDescription,
    CardTitle,
    CardSubtitle,
} from "@/components/ui/card"

import { Ovni } from "@/lib/sdk";
import { format_datetime } from "@/lib/utils";


export default function Heading({ tour }: { tour: Ovni.Tour }) {
    return (
        // <CardContent className='flex-1 mb-8'>
        <>
            <CardTitle className="font-bold leading-tight tracking-tighter text-2xl">
                {tour.title} <CardSubtitle className="text-xl">{tour.subtitle}</CardSubtitle>
            </CardTitle>
            <CardDescription className='mt-0 font-extrabold text-muted-foreground leading-tight tracking-tighter'>
                {format_datetime(tour.datetime[0])}
            </CardDescription>
        </>
        // </CardContent>
    )
}
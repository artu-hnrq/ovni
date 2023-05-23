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
            <CardDescription className='mt-[-2rem] font-extrabold text-muted-500 leading-tight tracking-tighter'>
                {format_datetime(tour.datetime[0])}
            </CardDescription>
        </>
        // </CardContent>
    )
}
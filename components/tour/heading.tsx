import moment from "moment";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    CardSubtitle,
} from "@/components/ui/card"

import { Ovni } from "@/lib/sdk/supabase"

export default function Heading({ tour }: { tour: Ovni.Event }) {
    return (
        // <CardContent className='flex-1 mb-8'>
        <>
            <CardTitle className="text-xl">
                {tour.title} <CardSubtitle className="text-lg">{tour.subtitle}</CardSubtitle>
            </CardTitle>
            <CardDescription className=''>
                {/* TODO */}
                {/* {moment(tour.datetime[0]).format('DD/MM/YYYY HH:mm')} */}
            </CardDescription>
        </>
        // </CardContent>
    )
}
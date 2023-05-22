import moment from "moment";
import { Image } from "@/components/core/image"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import Link from "next/link"
import Thumbnail from "./thumbnail"
import Heading from "./heading"
import Header from "./header"

import { Ovni } from "@/lib/sdk/supabase"
import { cn } from "@/lib/utils";


export const cvs_image_url = 'https://cva.style/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwallpaper-hd.6da17633.jpg&w=1920&q=75';

export default function TourCard({
    className = '',
    tour
}: {
    className?: string;
    tour: Ovni.Event;
}) {
    return (
        <Link href={`/tour/${tour.id}`}>
            <Card className={cn(
                "w-full overflow-hidden",
                className
            )}>
                <Header tour={tour} />

                {/* <Thumbnail tour={tour} />
                <CardHeader>
                    <Heading tour={tour} />
                </CardHeader> */}

                {/* 

                <CardTitle>
                    {tour.title}
                    <span className="m-1 text-sm text-gray-400">
                        {tour.subtitle}
                    </span>
                </CardTitle>
                <CardDescription>
                    {moment(tour.datetime[0]).format('DD/MM/YYYY HH:mm')}
                </CardDescription>
            </CardHeader> */}
            </Card>
        </Link>
    )
}

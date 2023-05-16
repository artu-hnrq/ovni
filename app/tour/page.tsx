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
import sdk from "@/lib/sdk"
import Tour from "@/lib/sdk/tour"
import Link from "next/link";

import { cn } from "@/lib/utils"


export default async function Page() {
    let tours = await sdk.Tour.select()

    return (
        <section className="container flex flex-col items-center gap-6 pb-8 md:py-12">
            <div className="flex flex-col items-start gap-2 w-full">
                <h1 className={cn(
                    "text-3xl md:text-4xl md:mb-12 lg:text-5xl",
                    "font-extrabold leading-tight tracking-tighter",
                )}>
                    Excursões
                </h1>
            </div>
            <div className="flex flex-wrap gap-4 w-full items-end">
                {tours.map((tour: Tour) => {
                    return <TourCard tour={tour} />
                })}
            </div>
        </section>
    )
}

const cvs_image_url = 'https://cva.style/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwallpaper-hd.6da17633.jpg&w=1920&q=75'

export function TourCard({ tour }: { tour: Tour }) {
    return (
        <Link href={`/tour/${tour.record_id}`} >
            <Card className="w-80 overflow-hidden">
                <Image
                    src={tour.thumbnail[0].url || cvs_image_url}
                    alt="Tour Image"
                    ratio={16 / 9}
                />
                <CardHeader>

                    <CardTitle >
                        {tour.title}
                        <span className="m-1 text-sm text-gray-400">
                            {tour.subtitle}
                        </span>
                    </CardTitle>
                    <CardDescription>
                        {/* @ts-ignore */}
                        {moment(tour.datetime[0]).format('DD/MM/YYYY HH:mm')}
                    </CardDescription>
                </CardHeader>
            </Card>
        </Link >
    )
}
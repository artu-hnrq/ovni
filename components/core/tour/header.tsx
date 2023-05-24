import moment from "moment"

import { Card, CardDescription, CardSubtitle, CardTitle } from "@/components/ui/card"

import Thumbnail from "./thumbnail"
import Heading from "./heading"
// import InfoPanel from './info-panel';

import { cn } from "@/lib/utils"
import sdk, { Ovni } from '@/lib/sdk';


export default function Header({ className = '', tour }: { className?: string, tour: Ovni.Tour }) {

    return (
        <div className={cn(
            "flex flex-col md:flex-row items-stretch md:items-center justify-center, gap-2 md:gap-8",
            "w-full md:w-fit h-fit p-4",
            className,
        )}>
            <div className="w-40">
                <Thumbnail tour={tour} className="rounded-xl" />
            </div>

            <div className="flex flex-col justify-between gap-2 py-4">
                <div>
                    <CardTitle className="text-3xl md:text-5xl">
                        {tour.title} <CardSubtitle className="text-2xl md:text-4xl">{tour.subtitle}</CardSubtitle>
                    </CardTitle>
                    <CardDescription className='text-md md:text-xl'>
                        {moment(tour.datetime[0]).format('DD/MM/YYYY HH:mm')}
                    </CardDescription>
                </div>
                {/* <InfoPanel tour={tour} className="" /> */}
            </div>
        </div>
    )
}



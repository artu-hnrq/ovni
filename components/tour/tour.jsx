import { Image } from "@/components/core/image"
import {
    Ticket,
    Armchair,
    Banknote,
    SquareAsterisk,
    LucidIcon
} from 'lucide-react';
import { Icon } from "@/components/ui/icon"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    CardSubtitle,
} from "@/components/ui/card"

import { cn } from "@/lib/utils"

export function Header({ className = '', tour = {} }) {

    let info_counters = [
        { icon: Ticket, value: `${tour.occupancy} passagens` },
        { icon: Armchair, value: `${tour.avaiability} vagas` },
        { icon: Banknote, value: `R$${tour.revenue}` },
        { icon: SquareAsterisk, value: `R$${tour.average_price}` },
    ].map(info_counter => ({ ...info_counter, icon: <Icon size={12} /> }))

    return (
        <div className="flex flex-col gap-2">
            <Image
                className='rounded-lg'
                src={tour.thumbnail[0].url}
                alt={tour.heading}
                ratio={16 / 9}
            />
            <div className='flex-1 mb-8'>
                <CardTitle className="text-xl">
                    {tour.title} <CardSubtitle className="text-lg">{tour.subtitle}</CardSubtitle>
                </CardTitle>
                <CardDescription className='text-sm text-secondary'>
                    {tour.datetime}
                </CardDescription>
            </div>

            <div className="p-6 pt-0">
                <div className='row-start-end grid-flow-row grid-cols-2 w-full gap-1'>
                    {info_counters.map(
                        (info_counter) => (
                            <InfoCounter {...info_counter} />
                        )
                    )}

                </div>
            </div>
        </div >
    )
}

export function InfoCounter({ className, icon, value }) {
    return (
        <div className={cn(className, 'row-start-center text-muted text-sm gap-1')}>
            {icon}
            <p>{value}</p>
        </div>
    )
}

import Link from 'next/link';
import { Header } from '@/components/tour';

import sdk, { Ovni } from "@/lib/sdk"
import { cn } from "@/lib/utils"


export default async function Page() {
    let tours = await sdk.Tour.list({
        sort: [
            { field: 'datetime', direction: 'asc' },
        ]
    })

    return (
        <section className="container flex flex-col items-stretch max-w-screen-lg gap-6 pb-8 md:py-12">
            <div className="flex flex-row items-start gap-2 w-full">
                <h1 className={cn(
                    "text-3xl md:text-4xl md:mb-12 lg:text-5xl",
                    "font-extrabold leading-tight tracking-tighter",
                )}>
                    Excursões
                </h1>
            </div>
            {
                tours.map((tour) =>
                    <Link href={`/tour/${tour.record_id}`}>
                        <Header
                            tour={tour}
                            className={cn(
                                "rounded-md border border-transparent",
                                'hover:bg-slate-100 hover:border-slate-300',
                            )}
                        />
                    </Link>
                )

            }

        </section >
    )
}


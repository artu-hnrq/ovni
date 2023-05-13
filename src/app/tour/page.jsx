import { Main, Row, Image } from '@components'
import { Tour } from '@sdk/airtable'
import Link from 'next/link'
import { ResponsiveImage } from '@components'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@components/ui/card"

export default async function TourPage({ }) {
    let tours = await Tour.list()

    return (
        <Main className='p-10'>
            <Row.CenterStart className='gap-4'>
                {tours.map((tour) => {
                    return (
                        <Link
                            href={`/tour/${tour.record_id}`}
                        >
                            <Card>
                                <ResponsiveImage
                                    src={tour.thumbnail[0].url}
                                    alt=""
                                    ratio={16 / 9}
                                    className='w-80 rounded-t-lg'
                                />
                                <div class="p-5">
                                    <a href="#" className='row-start-end mb-2 text-lg'>
                                        <h5 class="pr-2 text-primary">
                                            {tour.title}
                                        </h5>
                                        <p class='text-secondary line'>
                                            {tour.subtitle}
                                        </p>
                                    </a>
                                </div>
                            </Card>
                        </Link>
                    )
                })}
            </Row.CenterStart>
        </Main >
    )
}
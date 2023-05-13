import { ResponsiveImage, Col, Row, Icon, Card } from "@/components";

export async function Header({ className, tour }) {

    let info_counters = [
        { icon: 'confirmation_number', value: `${tour.occupancy} passagens` },
        { icon: 'event_seat', value: `${tour.avaiability} vagas` },
        { icon: 'point_of_sale', value: `R$${tour.revenue}` },
        { icon: 'payments', value: `R$${tour.average_price}` },
    ]


    return (
        <Card>
            <Col.CenterStart className={`${className} w-96 md:max-w-screen-sm lg:max-w-screen-md`}>
                <Thumbnail tour={tour} />

                <Col.StartStart className='w-full px-4 pb-4'>
                    <Heading tour={tour} />

                    <div className='grid grid-flow-row grid-cols-2 w-fullgap-1'>
                        {info_counters.map(
                            (info_counter) => (
                                <InfoCounter {...info_counter} className='' />
                            )
                        )}
                    </div>

                </Col.StartStart>
            </Col.CenterStart >
        </Card>
    )
}

export function Thumbnail({ tour }) {
    return (
        <div className='p-2 w-full'>
            <ResponsiveImage
                className='rounded-lg'
                src={tour.thumbnail[0].url}
                alt={tour.heading}
                ratio={16 / 9}
            />
        </div>
    )
}

export function Heading({ tour }) {
    return (
        <div className='mb-8'>
            <Row.StartEnd className='mb-0.5 flex-1 gap-2'>
                <h1 className='text-2xl !leading-none text-primary'>{tour.title}</h1>
                <p className='text-xl !leading-none text-secondary'>{tour.subtitle}</p>
            </Row.StartEnd>
            <p className='text-sm text-secondary'>{tour.datetime}</p>
        </div>)
}

export function InfoCounter({ className, icon, value }) {
    return (
        <Row.StartCenter className={`${className} text-sm text-secondary gap-1`}>
            <Icon>{icon}</Icon>
            <p>{value}</p>
        </ Row.StartCenter>
    )
}

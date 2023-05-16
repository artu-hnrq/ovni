import sdk from "@/lib/sdk"
// import { Tour } from "@/lib/sdk/tour"
import * as Tour from "../../../components/tour/tour"
import { Card } from "@/components/ui/card"
import { NavMenu } from "@/components/tour"

import { cn } from "@/lib/utils"


interface TourDetailLayoutProps {
    children: React.ReactNode,
    params: { id: string }
}

export default async function TourDetail({ children, params }: TourDetailLayoutProps) {
    let tour = await sdk.Tour.find(params.id)

    return (
        <section className="container flex flex-col md:flex-row items-start gap-4 pb-8 md:py-12">
            <div className={cn(
                "col-center-start w-full",
                "md:w-1/3"
            )}>
                <Tour.Header tour={tour} />
            </div>
            <div className="col-start-start w-full gap-4">
                {/* <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10"> */}
                <Card className="flex-1 flex flex-col items-center w-full h-full max-w-screen-lg overflow-hidden">
                    <NavMenu tour={tour} />
                    {children}
                </Card>
                {/* </section> */}
            </div>
        </section>
    )
}


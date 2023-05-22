import { NavMenu, Thumbnail, InfoPanel, Header } from "@/components/tour"
import { Card } from "@/components/ui/card"

import { cn } from "@/lib/utils"
import sdk from "@/lib/sdk"



interface TourDetailLayoutProps {
    children: React.ReactNode,
    params: { id: string }
}

export default async function TourDetail({ children, params }: TourDetailLayoutProps) {
    let tour = await sdk.Tour.retrieve(params.id)

    return (
        <section className="container flex flex-col items-center gap-4 py-4 md:py-12">
            <Header tour={tour} className="px-16" />

            <Card className={cn(
                "w-full max-w-screen-xl",
                "overflow-hidden"
            )}>
                <NavMenu tour={tour} />
                {children}
            </Card>
        </section>
    )
}



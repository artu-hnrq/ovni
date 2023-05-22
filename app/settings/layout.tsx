import { NavMenu, Thumbnail, InfoPanel, Header } from "@/components/tour"
import { Card } from "@/components/ui/card"

import { cn } from "@/lib/utils"
import sdk from "@/lib/sdk"


export default async function TourDetail({ children }: { children: React.ReactNode }) {

    return (
        <section className="container flex flex-col items-center gap-4 py-4 md:py-12">
            {children}
        </section>
    )
}



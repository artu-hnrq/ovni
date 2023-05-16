import sdk from "@/lib/sdk"

import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"

export default async function Page({ params }: { params: { id: string } }) {
    let tour = await sdk.Tour.find(params.id)

    return (

        <div className="flex flex-col items-center gap-4 p-4">
            <h1 className="text-xl font-extrabold leading-tight tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl">
                Sales
            </h1>
        </div>
    )
}
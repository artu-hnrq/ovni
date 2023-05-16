import sdk from "@/lib/sdk"
// import { Tour } from "@/lib/sdk/tour"
import * as _Tour from "../../../components/tour/tour"
import { cn } from "@/lib/utils"


export default async function Page({ params }: { params: { id: string } }) {
    let tour = await sdk.Tour.find(params.id)

    return (
        <div className="flex flex-col items-center gap-4 p-4">
            <h1 className="text-xl font-extrabold leading-tight tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl">
                Beautifully designed components <br className="hidden sm:inline" />
                built with Radix UI and Tailwind CSS.
            </h1>
        </div>
    )
}
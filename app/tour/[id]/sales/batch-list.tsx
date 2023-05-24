import {
    Card,
    CardHeader,
    CardTitle,
    CardSubtitle,
    CardContent,
} from "@/components/ui/card"

import CollectionHeader from '@/components/core/entity-collection-header'

import { Ovni } from "@/lib/sdk"
import { cn } from "@/lib/utils"


export default function BatchList({
    batches
}: {
    batches: Ovni.Batch[];
}) {
    return (
        <div className={cn(
            "flex flex-col gap-2",
            "w-1/2 sm:w-1/3 lg:w-1/4"
        )}>
            <CollectionHeader>
                Lotes
            </CollectionHeader>

            <div className="flex flex-row flex-wrap w-full gap-2">
                {batches.map((batch, index) => (
                    <Card
                        key={index}
                        className={cn(
                            "flex flex-row items-center justify-between",
                            "w-full p-2 px-3 overflow-hidden",
                            "hover:bg-slate-50"
                        )}>
                        <CardHeader className="p-0">
                            <CardTitle className="text-sm">{batch.title}</CardTitle>
                            <CardSubtitle className="text-xs">{batch.description}</CardSubtitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="p-2 bg-gray-50 rounded-md">
                                <p className="text-xs">{batch.sold}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

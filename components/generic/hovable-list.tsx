import { cn } from "@/lib/utils"

export interface HovableListProps<T> {
    className?: string
    collection: T[]
    item_component: (item: T) => React.ReactNode
}

export default function List<T>({ className, collection, item_component }: HovableListProps<T>) {
    return (
        <div className={cn(
            "grid grid-flow-row gap-8",
            "max-w-screen-md w-full p-8",
            className,
        )}>
            {
                collection.map((item) => (
                    item_component(item)
                ))
            }
        </ div >
    )
}
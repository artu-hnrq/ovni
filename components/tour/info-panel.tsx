'use client'

import { Badge } from "@/components/ui/badge"

import {
    Ticket,
    Armchair,
    Banknote,
    BoxSelect,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Ovni } from "@/lib/sdk";


export default function InfoPanel({
    className = '',
    tour,
    size = 20
}: {
    className?: string;
    tour: Ovni.Tour;
    size?: number;
}) {

    let items = [
        {
            icon: Ticket,
            value: `${tour.occupancy} passagens`
        },
        {
            icon: Armchair,
            value: `${tour.avaiability} vagas`
        },
        {
            icon: Banknote,
            value: `R$${tour.revenue}`
        },
        {
            icon: BoxSelect,
            value: `R$${tour.average_price}`
        }
    ].map((props, index) => ({
        ...props,
        id: index,
        icon: <props.icon size={size} className="" />
    }))

    return (
        <div className={cn("flex flex-row gap-2", "w-full", className)}>
            {items.map(props => <Info {...props} />)}
        </div>
    )
}
export interface InfoProps {
    className?: string;
    id: number;
    icon: React.ReactNode;
    value: string;
}


export function Info({ className, id, icon, value }: InfoProps) {
    return (
        <Badge
            key={id}
            variant="outline"
            className={cn(
                "flex items-center gap-1",
                "p-1 rounded-md w-fit",
                "bg-gray-100 hover:bg-white hover:border-gray-200",
                className,
            )}>
            {icon}
            {value}
        </Badge>
    )
}

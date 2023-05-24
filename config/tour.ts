import { Ovni } from "@/lib/sdk"
import { AttributeBadgeProps } from "@/components/core/tour/attribute-badge"
import { usePathname } from 'next/navigation'
import { NavMenuItemProps } from "@/types/nav"
import Tour from "@/components/core/tour"

export type EntityConsumer<T extends Ovni.Table, ReturnType> = (entity: T) => ReturnType
export type TourConsumer<ReturnType> = EntityConsumer<Ovni.Tour, ReturnType>


export interface TourConfig extends Record<string, TourConsumer<any[]>> {
    getAttributeBadgesProps: TourConsumer<AttributeBadgeProps[]>
    getNavMenuProps: TourConsumer<NavMenuItemProps[]>
}

export const TourConfig = {
    getAttributeBadgesProps: function (tour: Ovni.Tour) {
        return [
            {
                label: "Receita",
                icon: Tour.Icons.Revenue,
                value: `R$${tour.revenue}`,
            },
            {
                label: "Preço médio",
                icon: Tour.Icons.AveragePrice,
                value: `R$${tour.average_price}`,
            },
        ]
    },
    getNavMenuProps: function (tour: Ovni.Tour) {
        'use client'

        const pathname = usePathname();

        return [
            {
                label: 'Dashboard',
                icon: Tour.Icons.Dashboard,
                href: `/`,
            },
            {
                label: 'Viagens',
                icon: Tour.Icons.Trips,
                href: `/trips`,
            },
            {
                label: 'Vendas',
                icon: Tour.Icons.Sales,
                href: `/sales`,
            },
        ].map((props) => ({
            ...props,
            href: `/tour/${tour.record_id}` + props.href,
            active: pathname === props.href,
        }))
    }

} as TourConfig
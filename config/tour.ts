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
                icon: "Revenue",
                label: "Receita",
                value: `R$${tour.revenue}`,
            },
            {
                icon: "AveragePrice",
                label: "Preço médio",
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
                href: `/tour/${tour.record_id}`,
                icon: Tour.Icons.Dashboard
            },
            {
                label: 'Viagens',
                href: `/tour/${tour.record_id}/trips`,
                icon: Tour.Icons.Trips
            },
            {
                label: 'Vendas',
                href: `/tour/${tour.record_id}/sales`,
                icon: Tour.Icons.Sales
            },
        ].map((props) => ({
            ...props,
            active: pathname === props.href,
        }))
    }

} as TourConfig
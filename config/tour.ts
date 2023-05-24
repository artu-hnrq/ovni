import { Ovni } from "@/lib/sdk"
import { AttributeBadgeProps } from "@/components/core/tour/attribute-badge"

export type EntityConsumer<T extends Ovni.Table, ReturnType> = (entity: T) => ReturnType
export type TourConsumer<ReturnType> = EntityConsumer<Ovni.Tour, ReturnType>


export interface TourConfig {
    getAttributeBadges: TourConsumer<AttributeBadgeProps[]>
}

export const TourConfig = {
    getAttributeBadges: function (tour: Ovni.Tour) {
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
    }
} as TourConfig
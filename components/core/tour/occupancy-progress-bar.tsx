import { Ovni } from "@/lib/sdk";
import { cn, format_datetime } from "@/lib/utils";

import { Progress } from "@/components/ui/progress"


export interface OccupancyProgressBarProps {
    className?: string
    tour: Ovni.Tour
}

export default function OccupancyProgressBar({ className, tour }: OccupancyProgressBarProps) {
    const pecentage = tour.occupancy * 100 / tour.capacity
    return (
        <div className={className}>
            <div className={cn(
                "relative flex justify-between items-center",
                "w-full h-2 mb-5",
                "bg-gray-100 dark:bg-gray-900 rounded-full",
                "border"
            )}>
                <div className={cn(
                    "flex flex-col justify-center overflow-hidden rounded-l-full",
                    "bg-lime-500 text-lime-700 text-xs text-center font-bold",
                )}
                    role="progressbar" style={{ width: `${pecentage}%` }}
                    aria-valuenow={pecentage} aria-valuemin="0" aria-valuemax="100"
                >
                    {pecentage}%
                </div>
                <p className="
                    absolute top-4 right-2
                    text-xs text-center font-bold text-gray-600 dark:text-gray-300
                ">{tour.avaiability} vagas</p>
                <p className="
                    absolute top-4 left-2
                    text-xs text-center font-bold text-gray-600 dark:text-gray-300
                ">{tour.occupancy} passagens</p>
            </div >
        </div>
    )
}
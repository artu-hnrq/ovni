import { Ovni } from "@/lib/sdk";
import { cn } from "@/lib/utils";


export interface OccupancyProgressBarProps {
    className?: string
    fillable: Ovni.Fillable
}

export default function OccupancyProgressBar({ className, fillable }: OccupancyProgressBarProps) {
    const pecentage = fillable.occupancy * 100 / fillable.capacity
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
                    "bg-lime-400 text-lime-600 text-xs text-[0.5rem] text-center font-bold",
                )}
                    role="progressbar" style={{ width: `${pecentage}%` }}
                    aria-valuenow={pecentage} aria-valuemin="0" aria-valuemax="100"
                >
                    {pecentage}%
                </div>
                <p className="
                    absolute top-4 right-2
                    text-xs text-center font-bold text-gray-600 dark:text-gray-300
                ">{fillable.avaiability} vagas</p>
                <p className="
                    absolute top-4 left-2
                    text-xs text-center font-bold text-gray-600 dark:text-gray-300
                ">{fillable.occupancy} passagens</p>
            </div >
        </div>
    )
}
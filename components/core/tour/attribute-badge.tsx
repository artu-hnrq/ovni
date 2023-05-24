import Tour from "@/components/core/tour";


export interface AttributeBadgeProps {
    icon: keyof typeof Tour.Icons;
    label?: string;
    value: string;
}
export default function AttributeBadge({ icon, label, value }: AttributeBadgeProps) {
    const Icon = Tour.Icons[icon];

    return (
        <div className="
      flex flex-col items-center gap-0 p-2
      rounded border border-gray-300 dark:border-gray-600
      text-gray-600 dark:text-gray-300 
      bg-gray-100 dark:bg-gray-800
    ">
            <p className="text-[0.5rem] font-semibold">{label}</p>
            <Icon className="m-1 my-3" size={30} />
            <h3 className="text-xs font-semibold">
                {value}
            </h3>
        </div>
    );
}
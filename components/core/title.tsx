import { cn } from "@/lib/utils"

export default function Title({ className, children }: { className?: string, children: React.ReactNode }) {
    return (
        <h1 className={cn(
            "text-xl sm:text-2xl md:text-3xl lg:text-4xl",
            "font-extrabold leading-tight tracking-tighter",
        )}>
            {children}
        </h1>
    )
}
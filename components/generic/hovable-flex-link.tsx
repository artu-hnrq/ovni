import { cn } from "@/lib/utils"
import Link from "next/link"

export interface HovableFlexLinkProps {
    children: React.ReactNode
    className?: string
    href: string
}

export default function HovableFlexLink({ children, className, href }: HovableFlexLinkProps) {
    return (
        <Link
            href={href}
            className={cn(
                "rounded-xl border-2 border-transparent",
                "transition-all duration-150 delay-75 ease-in-out",
                "hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-600",
                className,
            )}
        >
            {children}
        </Link>
    )
};

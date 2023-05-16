import * as React from "react"
import { VariantProps, cva } from "class-variance-authority"
import NextImage, { ImageProps as NextImageProps } from 'next/image'
import { AspectRatio } from "@/components/ui/aspect-ratio"

import { cn } from "@/lib/utils"


export interface BarProps {
    className?: String,
    from: String,
    via: String,
    to: String
}

function Bar({ className, from, via, to }: BarProps) {
    return (
        <div className={cn(
            "flex items-center justify-center",
            "h-1",
            `bg-gradient-to-r from-${from}-500 via-${via}-500 to-${to}-500`,
            // TODO: implement animate-flow properly
            // See: https://victoryoalli.me/how-to-create-an-animated-gradient-using-tailwin-css
            "animate-flow",
            className,
        )} />
    )
}

export { Bar }

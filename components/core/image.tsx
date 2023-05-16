import * as React from "react"
import { VariantProps, cva } from "class-variance-authority"
import NextImage, { ImageProps as NextImageProps } from 'next/image'
import { AspectRatio } from "@/components/ui/aspect-ratio"

import { cn } from "@/lib/utils"


const ImageVariants = cva(
    "h-full w-full object-cover",
    {
        variants: {
            apparence: {
                default: "object-cover",
            }
        },
    }
)

export interface ImageProps
    extends NextImageProps, VariantProps<typeof ImageVariants> {

    ratio: number
}

function Image({ className, apparence, ratio, ...props }: ImageProps) {
    return (
        // <div className="w-full">
        <AspectRatio asChild ratio={ratio}>
            <NextImage
                className={cn(ImageVariants({ apparence }), className)}
                {...props}
                fill
            />
        </AspectRatio>
        // </div>
    )
}

export { Image, ImageVariants }

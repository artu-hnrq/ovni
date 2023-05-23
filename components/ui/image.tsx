import NextImage, { ImageProps as NextImageProps } from 'next/image'
import { AspectRatio } from "@/components/ui/aspect-ratio"

import { cn } from "@/lib/utils"

export interface ImageProps extends NextImageProps {
    ratio: number
}

export default function Image({ className, ratio, ...props }: ImageProps) {
    return (
        <AspectRatio asChild ratio={ratio}>
            <NextImage
                className={cn(
                    "h-full w-full object-cover",
                    className,
                )}
                {...props}
                fill
            />
        </AspectRatio>
    )
}
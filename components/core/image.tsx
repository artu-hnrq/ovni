import NextImage, { ImageProps as NextImageProps } from 'next/image'
import { AspectRatio } from "@/components/ui/aspect-ratio"


export interface ImageProps extends NextImageProps {
    ratio: number
}

export default function Image({ className, ratio, ...props }: ImageProps) {
    return (
        <AspectRatio asChild ratio={ratio}>
            <NextImage
                className={className}
                {...props}
                fill
            />
        </AspectRatio>
    )
}
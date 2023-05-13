'use client'

import { AspectRatio } from "./radix"
import Image from "next/image"


// export function _Image({ children, className, ratio, ...rest }) {
//     return (
//         <img
//             className={`${className} h-full w-full object-cover`}
//             {...rest}
//         />
//     )
// }

export function ResponsiveImage({ className, ratio, ...rest }) {
    return (
        <div className={`${className} overflow-hidden`}>
            <AspectRatio asChild ratio={ratio}>
                <Image
                    className='h-full w-full object-cover'
                    {...rest}
                    fill
                />
            </AspectRatio>
        </div>
    )
}

import Image from 'next/image'
import Link from 'next/link';

import { cn } from '@/lib/utils'


export default function Logo({ className = '', size = 40, href = '/', alt = 'Logo' }) {
    return (
        <Link href={href}>
            <Image
                className={cn("bg-transparent", className,)}
                src="/favicon.png"
                alt={alt}
                width={size}
                height={size}
                priority
            />
        </Link >
    )
}
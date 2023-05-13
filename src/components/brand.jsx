import Image from 'next/image'
import Link from 'next/link';
import { Libre_Baskerville } from 'next/font/google'

const font = Libre_Baskerville({
    subsets: ['latin'],
    weight: '400'
})


export function LogoText({ className, size = 40, href = '/' }) {
    return (
        <Link
            href={href}
            className={`flex items-center ${font.className}`}
        >
            <Image
                className={className}
                src="/favicon.png"
                alt='Ovni Logo'
                width={size}
                height={size}
                priority
            />
            <span className="ml-1 text-xl text-primary text-brand">
                Ovni
            </span>
        </Link >
    )
}

export function LogoOnly({ className, size = 40, href = '/' }) {
    return (
        <Link href={href}>
            <Image
                className={className}
                src="/favicon.png"
                alt='Ovni Logo'
                width={size}
                height={size}
                priority
            />
        </Link >
    )
}
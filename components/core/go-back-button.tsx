"use client"

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"


export default function GoBackButton({ href }: { href?: string }) {
    const router = useRouter()

    const Icon = ArrowLeft

    if (href) {
        return (
            <Link href={href}>
                < Button
                    variant="ghost"
                    size="sm"
                    className="absolute left-20 top-4"
                >
                    <Icon size={20} />
                </Button >
            </Link>
        )
    }
    else {
        return (
            < Button
                variant="ghost"
                size="sm"
                className="absolute left-20 top-4"
                onClick={() => router.back()}
            >
                <Icon size={20} />
            </Button >
        )
    }
}
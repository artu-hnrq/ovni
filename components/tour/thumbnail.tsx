import { Image } from "@/components/core/image"
import { Ovni } from "@/lib/sdk"


export const cvs_image_url = 'https://cva.style/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwallpaper-hd.6da17633.jpg&w=1920&q=75';


export default function Thumbnail({
    className,
    tour
}: {
    className?: string,
    tour: Ovni.Tour;
}) {
    return (
        <Image
            className={className}
            src={tour.thumbnail[0].url}
            alt={tour.heading}
            ratio={16 / 9}
        />
    )
}

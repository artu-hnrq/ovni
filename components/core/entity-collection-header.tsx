import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"


export default function EntityCollectionHeader({ children }: { children?: React.ReactNode }) {
    return (
        <div className="flex flex-row w-full items-center px-3 pb-2 mb-2">
            <h1 className="flex-1 text-lg font-medium">{children}</h1>
            <Button variant='outline' size='sm'>
                <Icons.Create size={14} />
            </Button>
        </div>
    )
}

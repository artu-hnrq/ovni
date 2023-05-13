import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";


export default function AspectRatio({ children, className, ...rest }) {
    return (
        <AspectRatioPrimitive.Root
            className={`${className} h-full w-full object-cover`}
            {...rest}
        >
            {children}
        </AspectRatioPrimitive.Root>
    );
};
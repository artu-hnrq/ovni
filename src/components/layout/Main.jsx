import Stack from "./Stack"

export default function Main({ children, className }) {
    return (
        <main className={`col-center-center max-w-screen-xl ${className}`}>
            {children}
        </main >
    )
}
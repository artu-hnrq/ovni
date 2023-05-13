export default function Card({ children, className }) {
    return (
        <div className={`${className} bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}>
            {children}
        </div>
    )
}
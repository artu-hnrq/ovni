export function Stack({ children, className = '', type = 'row', hrzt = 'stretch', vrtc = 'stretch', ...rest }) {
    return (
        <div className={`${type}-${hrzt}-${vrtc} ${className}`} {...rest}>
            {children}
        </div >
    )
}

// export function Row({ children, className = '', hrzt = 'stretch', vrtc = 'stretch', ...rest }) {
//     return (
//         <Stack className={`row-${hrzt}-${vrtc} ${className}`} {...rest}>
//             {children}
//         </Stack>
//     )
// }

// export function Col({ children, className = '', hrzt = 'stretch', vrtc = 'stretch', ...rest }) {
//     return (
//         <Stack className={`col-${hrzt}-${vrtc} ${className}`} {...rest}>
//             {children}
//         </Stack>
//     )
// }

export const Row = {}
export const Col = {}

const components = {
    'Row': Row,
    'Col': Col,
}

let alignments = ['Start', 'Center', 'End', 'Stretch']

for (const [type, component] of Object.entries(components)) {
    for (const x_alignment of alignments) {
        for (const y_alignment of alignments) {
            component[`${x_alignment}${y_alignment}`] = function ({ children, className, ...rest }) {
                return (
                    <Stack
                        className={className}
                        type={type.toLowerCase()}
                        hrzt={x_alignment.toLowerCase()}
                        vrtc={y_alignment.toLowerCase()}
                        {...rest}
                    >
                        {children}
                    </Stack>
                )
            }
        }

    }
}
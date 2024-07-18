interface PropsLink {
    text: string
    href: string
    className?: string
}
export default function Link({ text, href, className }: PropsLink) {
    return (
        <>
            <a href={href} className={className}>
                {text}
            </a>
        </>
    )
}
interface PropsLink {
    text: string
    href: string
}
export default function Link({ text, href }: PropsLink) {
    return (
        <>
            <a href={href}>
                {text}
            </a>
        </>
    )
}
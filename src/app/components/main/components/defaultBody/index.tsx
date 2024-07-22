import { Locale } from "@/i18n";

interface PropsDefaultBody {
    children: React.ReactNode;
    locale: Locale;
    style: React.CSSProperties;
    id: string;
    className?: string
}

export default function DefaultBody({children, locale, style, id, className}: PropsDefaultBody) {
    return (
        <section className={`flex flex-col min-h-[100vh] w-[100%] ${className}`}
        style={style} id={id}>
            {children}
        </section>
    )
}
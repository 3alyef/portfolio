import { Locale } from "@/i18n";

interface PropsDefaultBody {
    children: React.ReactNode;
    locale: Locale;
    style: React.CSSProperties;
    id: string
}

export default function DefaultBody({children, locale, style, id}: PropsDefaultBody) {
    return (
        <section className="flex flex-col min-h-[100vh] w-[100%]"
        style={style} id={id}>
            {children}
        </section>
    )
}
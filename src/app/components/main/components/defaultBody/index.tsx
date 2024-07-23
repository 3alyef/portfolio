import { Locale } from "@/i18n";
import { RefObject } from "react";

interface PropsDefaultBody {
    children: React.ReactNode;
    locale: Locale;
    style: React.CSSProperties;
    id: string;
    className?: string;
    ref?: RefObject<HTMLAnchorElement>;
}

export default function DefaultBody({children, locale, style, id, className, ref}: PropsDefaultBody) {
    return (
        <section className={`flex flex-col min-h-[100vh] w-[100%] ${className}`}
        style={style} id={id} ref={ref}>
            {children}
        </section>
    )
}
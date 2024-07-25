import React, { forwardRef, RefObject } from 'react';
import { Locale } from "@/i18n";

interface PropsDefaultBody {
    children: React.ReactNode;
    locale: Locale;
    style: React.CSSProperties;
    id: string;
    className?: string;
    styleDiv?: React.CSSProperties
}

const DefaultBody = forwardRef<HTMLDivElement, PropsDefaultBody>(
    ({ children, locale, style, id, className, styleDiv }, ref) => {
        return (
            <section 
                className={`flex flex-col min-h-[100vh] w-full ${className}`}
                style={style} 
                id={id} 
                ref={ref}
            >
                <div className="flex flex-col items-start justify-center" style={styleDiv}>{children}</div>
            </section>
        );
    }
);
DefaultBody.displayName = 'DefaultBody';
export default DefaultBody;

"use client"
import React, { forwardRef } from 'react';
import { Locale } from "@/i18n";
import { usePathname, useRouter } from "next/navigation";
interface PropsDefaultBody {
    children: React.ReactNode;
    locale: Locale;
    style: React.CSSProperties;
    id: string;
    className?: string;
    styleDiv?: React.CSSProperties;
    redN?: boolean
}

const DefaultBody = forwardRef<HTMLDivElement, PropsDefaultBody>(
    ({ children, locale, style, id, className, styleDiv, redN }, ref) => {
        //const router = useRouter();
        const pathName = usePathname();
        const redirectedPathName = (href: string) => {
            if (!pathName) return "/";
            const segments = pathName.split("/");
            segments[1] = `${segments[1]}#${href}`;
            return segments.join("/");
        };

        const handleMouseEnter = () => {
            if (!redN) {
                const newPath = redirectedPathName(id);
                window.history.replaceState(null, "", newPath);
            }
        };
        return (
            <section 
                className={`flex flex-col w-full ${className}`}
                style={style} 
                id={id} 
                ref={ref}
                onMouseEnter={handleMouseEnter}
            >
                <div className="flex flex-col items-start justify-center" style={styleDiv}>{children}</div>
            </section>
        );
    }
);
DefaultBody.displayName = 'DefaultBody';
export default DefaultBody;

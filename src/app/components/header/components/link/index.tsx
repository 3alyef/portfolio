"use client";
import { Locale } from "@/i18n";
import { useEffect, useRef, useState } from "react";

interface PropsLink {
    text: string
    href: string
    className?: string;
    fontOff: string;
    locale: Locale
}
export default function Link({ text, href, className, fontOff, locale }: PropsLink) {
    const linkRef = useRef<HTMLAnchorElement>(null);
    const [color, setColor] = useState(fontOff);
    useEffect(()=>{
        const handleMouseOver = () => setColor("white");
        const handleMouseOut = () => setColor(fontOff);

        const element = linkRef.current;

        if (element) {
            element.addEventListener("mouseover", handleMouseOver);
            element.addEventListener("mouseout", handleMouseOut);
        }

        return () => {
            if (element) {
                element.removeEventListener("mouseover", handleMouseOver);
                element.removeEventListener("mouseout", handleMouseOut);
            }
        };
    }, [fontOff])
    return (
        <>
            <a style={{color}} className={className} ref={linkRef} href={`/${locale}/#${href}`}>
                {text}
            </a>
        </>
    )
}
"use client";
import { Locale } from "@/i18n";
import { useEffect, useRef, useState } from "react";
import tagsHeader, { TypeHeader } from "./tagsHeader";

interface PropsLink {
    text: string
    href: string
    className?: string;
    fontOff: string;
    locale: Locale;
    icon: TypeHeader;
}
export default function Link({ text, href, className, fontOff, locale, icon }: PropsLink) {
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
            <a style={{color}} className={`${className} `} ref={linkRef} href={`#${href}`}>
                <span className="linksHeaderText">{text}</span>
                <span className="linksHeaderIcon" style={{fontSize: "25px !important"}}>{tagsHeader[icon]}</span>
            </a>
        </>
    )
}
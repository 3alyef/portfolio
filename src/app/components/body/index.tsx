"use client";
import { useRef } from "react";
import Header from "../header";
import Footer from "../footer";
import { PropsBody } from "@/interfaces/defaultPage";
import Main from "../main";

export default function Body({ _dir, default_colors, dictionary, hrefers, locale }: PropsBody) {
    const headerRef = useRef<HTMLAnchorElement>(null);
    return (
        <body className={_dir}>
            <Header locale={locale} _dir={_dir} default_colors={default_colors} headerRef={headerRef} dictionary={dictionary} hrefers={hrefers}/>
            <Main locale={locale} _dir={_dir} default_colors={default_colors} headerRef={headerRef} dictionary={dictionary}/>
            <Footer locale={locale} _dir={_dir} default_colors={default_colors} dictionary={dictionary}/>
        </body>
    )
}
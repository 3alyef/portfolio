"use client";
import { PropsMain } from "@/interfaces/defaultPage";
import { useEffect, useState } from "react";
import { About, Contact, Experience, Home, Projects } from "./components/sections";

export default function Main({_dir, default_colors, headerRef, locale, dictionary }: PropsMain) {
    const [headerHeight, setHeaderHeight] = useState<number>();

    let style_a: React.CSSProperties = {
        backgroundColor: default_colors.tsahal_n2
    }
    let style_b: React.CSSProperties = {
        backgroundColor: default_colors.tsahal_n1
    }

    useEffect(() => {
        if (headerRef.current) {
            setHeaderHeight(headerRef.current.clientHeight);
        }
    }, []);

    return (
        <main>
            <Home headerHeight={headerHeight} locale={locale} style={style_a} dictionary={dictionary} _dir={_dir} default_colors={default_colors}/>
            <About locale={locale} style={style_b} dictionary={dictionary} _dir={_dir} default_colors={default_colors}/>
            <Experience locale={locale} style={style_a} dictionary={dictionary} _dir={_dir} default_colors={default_colors}/>
            <Projects locale={locale} style={style_b} dictionary={dictionary} _dir={_dir} default_colors={default_colors}/>
            <Contact locale={locale} style={style_a} dictionary={dictionary} _dir={_dir} default_colors={default_colors}/>
        </main>
    );
}
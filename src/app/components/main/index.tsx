"use client";
import { PropsMain } from "@/interfaces/defaultPage";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { About, Contact, Experience, Home, Projects } from "./components/sections";

export default function Main({_dir, default_colors, headerRef, locale, dictionary, setProjectName }: PropsMain ) {
    const [headerHeight, setHeaderHeight] = useState<number>();

    let style_a: React.CSSProperties = {
        backgroundColor: default_colors.tsahal_n2,
        
    }
    let style_b: React.CSSProperties = {
        backgroundColor: default_colors.tsahal_n1,
        color: default_colors.tsahal_n4,
        
    }

    useEffect(() => {
        if (headerRef.current) {
            setHeaderHeight(headerRef.current.clientHeight);
        }
    }, []);

    let styleDivDefault: React.CSSProperties = {
        padding: "0 7em"
    }
    return (
        <main>
            <Home headerHeight={headerHeight} locale={locale} style={style_a} dictionary={dictionary} _dir={_dir} default_colors={default_colors} styleDiv={styleDivDefault}/>
            <About locale={locale} style={style_b} dictionary={dictionary} _dir={_dir} default_colors={default_colors} styleDiv={styleDivDefault}/>
            <Experience locale={locale} style={style_a} dictionary={dictionary} _dir={_dir} default_colors={default_colors} styleDiv={styleDivDefault}/>
            <Projects locale={locale} style={style_b} dictionary={dictionary} _dir={_dir} default_colors={default_colors} styleDiv={styleDivDefault} setProjectName={setProjectName}/>
            <Contact locale={locale} style={style_a} dictionary={dictionary} _dir={_dir} default_colors={default_colors} styleDiv={styleDivDefault}/>
        </main>
    );
}
"use client";
import { PropsMain } from "@/interfaces/defaultPage";
import { useEffect, useState } from "react";
import DefaultBody from "./components/defaultBody";


export default function Main({_dir, default_colors, headerRef, locale, dictionary }: PropsMain) {
    const [headerHeight, setHeaderHeight] = useState<number>();

    let style_a: React.CSSProperties = {
        backgroundColor: default_colors.tsahal_n4
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
            <DefaultBody locale={locale} style={{ ...style_a, paddingTop: `${headerHeight}px` /*`calc(100vh - ${headerHeight}px)`*/ }} id="home">
                <span>Home</span>
            </DefaultBody>
            <DefaultBody locale={locale} style={style_b} id="about">
                <span>Sobre</span>
            </DefaultBody>
            <DefaultBody locale={locale} style={style_a} id="experience">
                <span>Experiência</span>
            </DefaultBody>
            <DefaultBody locale={locale} style={style_b} id="projects">
                <span>Projetos</span>
            </DefaultBody>
            <DefaultBody locale={locale} style={style_a} id="contact">
                <span>Contato</span>
            </DefaultBody>
        </main>
    );
}
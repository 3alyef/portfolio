"use client";
import { PropsSection } from "@/interfaces/sectionsDefault";
import DefaultBody from "../../defaultBody";
import { FaFirstOrderAlt } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";

export default function About({ locale, style, dictionary, _dir, default_colors }: PropsSection) {
    const [left, setLeft] = useState("0%");
    const [bottom, setBottom] = useState("-15%")
    const bodyRef = useRef<HTMLAnchorElement>(null);
    useEffect(()=>{
        const element = bodyRef.current;
        function handleMouseEnter() {
            setLeft("100%")
            setTimeout(()=>{
                setBottom("-100%")
            }, 10000)
        }
        function handleMouseOut() {
            setBottom("-15%")
            
            setTimeout(()=>{
                setLeft("0%")
            }, 10000)
        }
        if(element) {
            element.addEventListener("mouseenter", handleMouseEnter)
        }

        return () => {
            if (element) {
                element.removeEventListener("mouseenter", handleMouseEnter);
                element.removeEventListener("mouseout", handleMouseOut);
            }
        };
    }, [])
    return (
        <DefaultBody locale={locale} style={{...style, padding: "7em"}} id="about" className="flex justify-center items-center" ref={bodyRef}> 
            <section className="flex flex-col items-start justify-center">
                <h1 className="text-[50px] font-[700] w-full text-center" style={{color: default_colors.tsahal_n4, position: "relative"}}>
                    {dictionary.Main.About.about_me} <FaFirstOrderAlt className="faFirstOrderAltAnimated" style={{color: default_colors.tsahal_n4, left, bottom}}/>
                </h1>
                <div className="flex flex-col justify-center items-start w-full gap-[1.5em] min-h-[21em] text-[20px] font-[500]" style={{color: default_colors.tsahal_gray}}>
                    <p>
                        {dictionary.Main.About.paragraph_1}
                    </p>
                    <p>
                        {dictionary.Main.About.paragraph_2}
                    </p>
                </div>
            </section>
        </DefaultBody>
    )
}
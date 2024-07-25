"use client";
import { PropsSection } from "@/interfaces/sectionsDefault";
import DefaultBody from "../../defaultBody";
import { FaFirstOrderAlt } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import TextAnimation from "../../textAnimation";

export default function About({ locale, style, dictionary, _dir, default_colors, styleDiv }: PropsSection) {
    const [left, setLeft] = useState(0);
    const [bottom, setBottom] = useState(-15)
    const bodyRef = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        const element = bodyRef.current;
        //console.log("ok", element, bodyRef)
        function handleMouseEnter() {
            setLeft(100);
            setTimeout(()=>{
                setBottom(-200);
            }, 10000)
        }
        function handleMouseOut() {
            setBottom(-15);
            setTimeout(()=>{
                setLeft(0);
            }, 10000)
        }
        if(element) {
            element.addEventListener("mouseenter", handleMouseEnter);
            element.addEventListener("mouseout", handleMouseOut);
        }

        return () => {
            if (element) {
                element.removeEventListener("mouseenter", handleMouseEnter);
                element.removeEventListener("mouseout", handleMouseOut);
            }
        };
    }, [bodyRef])

    useEffect(()=>{ console.log("bottom", bottom, "left", left)}, [bottom, left])
    return (
        <DefaultBody locale={locale} style={{...style, padding: "7em 0em"}} id="about" className="flex justify-center items-center min-h-[100vh]" ref={bodyRef} styleDiv={styleDiv}> 
            <h1 className="text-[50px] font-[700] w-full text-left" style={{color: default_colors.tsahal_n4, position: "relative"}}>
                {dictionary.Main.About.about_me} 
                {/*<FaFirstOrderAlt className="faFirstOrderAltAnimated" style={{color: default_colors.tsahal_n4, left: `${left}%`, bottom: `${bottom}%`}} onClick={()=>{
                    setBottom(prev => {
                        const newBottom = prev * Math.random();
                        return Math.min(Math.max(newBottom, -100), 100);
                    });
                    setLeft(prev => {
                        const newLeft = prev * Math.random();
                        return Math.min(Math.max(newLeft, 0), 100);
                    });
                    
                }}/>*/}
            </h1>
            <div className="flex flex-col justify-center items-start w-full gap-[1.5em] min-h-[21em] font-[500]">
                <div className="flex flex-col justify-center items-start w-full gap-2">
                    <p className="flex flex-wrap gap-[.225em]">
                        <TextAnimation colorOff={default_colors.tsahal_gray} colorOn="white" text={dictionary.Main.About.paragraph_1}/>
                    </p>
                    <p className="flex flex-wrap gap-[.225em]">
                        <TextAnimation colorOff={default_colors.tsahal_gray} colorOn="white" text={dictionary.Main.About.paragraph_2}/>
                    </p>
                </div>
            </div>
        </DefaultBody>
    )
}
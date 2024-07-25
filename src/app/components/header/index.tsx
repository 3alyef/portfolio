"use client";
import { PropsHeader } from "@/interfaces/defaultPage";
import Link from "./components/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import LanguageSwitch from "./components/languageSwitch/languageSwitch";

export default function Header({ locale, _dir, default_colors, headerRef, hrefers, dictionary }: PropsHeader) {
    const [lastScrollPosition, setLastScrollPosition] = useState(0);
    const [lastDirectionY, setLastDirectionY] = useState(false);
    const [headerHeight, setHeaderHeight] = useState(0);
    const [headerPosition, setHeaderPosition] = useState<any>(undefined);
    const [mouseIn, setMouseIn] = useState(false);
    const [top, setTop] = useState(false);
    const [previousMouseIn, setPreviousMouseIn] = useState<"none" | "out" | "in">("none");
    function handleSetTop(to: boolean) {
        if(to) {
            if(!top)setTop(true);
        } else {
            if(top)setTop(false);
        }
    }
    useEffect(()=>{
        function handleScroll() {
            const currentScrollTop = window.scrollY;
            
            if (currentScrollTop < lastScrollPosition) {
                if(!lastDirectionY)setLastDirectionY(true);
            } else {
                if(lastDirectionY)setLastDirectionY(false);
            }

            setLastScrollPosition(currentScrollTop);
        }
        document.addEventListener("scroll", handleScroll);
        //
        if(headerPosition !== "fixed") {
            setHeaderPosition("fixed")
        }
        //
        return ()=> document.removeEventListener("scroll", handleScroll)
        
    }, [lastScrollPosition])

    useEffect(() => {
        if (headerRef.current) {
            setHeaderHeight(headerRef.current.clientHeight);
        }
        //console.log("header Height", headerHeight)
    }, []);

    useEffect(()=>{
        //console.log("previousMouse", previousMouseIn)
        if(lastDirectionY && lastScrollPosition > headerHeight) {
            handleSetTop(true);
        } else if(lastScrollPosition <= headerHeight) {
            handleSetTop(true);
        } else if(mouseIn) {
            handleSetTop(true);
        } else {
            if(previousMouseIn === "none" || previousMouseIn === "out") {
                handleSetTop(false);
            }
        }
    }, [lastDirectionY, lastScrollPosition, headerHeight, previousMouseIn])

    useEffect(()=>{
        if(!lastDirectionY && !mouseIn && !(lastScrollPosition <= headerHeight)) {
            handleSetTop(false);
        } 
    }, [lastScrollPosition])
    return (
        <header className="header" ref={headerRef}
        style={{ position: headerPosition, top: top ? "0%" : "-100%", zIndex: "2" }}
        onMouseEnter={()=> {
            !mouseIn && setMouseIn(true);
            if(!(previousMouseIn === "none"))
                setPreviousMouseIn("out")
        }}
        onMouseLeave={()=> {
            mouseIn && setMouseIn(false)
            setPreviousMouseIn("in")
        }}>
            <span style={{position: "relative", width: "3em", aspectRatio: "1/1"}}>
                <Image alt="portfolio-alef-logo" src={"/assets/logo.png"} fill style={{position: "absolute"}}/>
            </span>
            <nav className="flex gap-[1em] justify-center items-center py-[10px]">
                {dictionary.Header.links.map((name, index)=>(
                    <Link href={`${hrefers[index].toLowerCase()}`} text={name} key={hrefers[index]} locale={locale} fontOff={default_colors.tsahal_n5} className="text-[20px]"/>
                ))}
            </nav>
            <LanguageSwitch locale={locale}/>
        </header>
    )
}
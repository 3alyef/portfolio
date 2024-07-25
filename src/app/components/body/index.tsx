"use client";
import { useEffect, useRef, useState } from "react";
import Header from "../header";
import Footer from "../footer";
import { PropsBody } from "@/interfaces/defaultPage";
import Main from "../main";
import projectsList from "../main/components/sections/projects/components/projectsList";
import ShowImg from "./components/showImg";

export default function Body({ _dir, default_colors, dictionary, hrefers, locale }: PropsBody) {
    const headerRef = useRef<HTMLAnchorElement>(null);
    
    const [images, setImages] = useState<string[]>([])
    const [projectName, setProjectName] = useState("none");
    useEffect(()=>{
        if(projectName !== "none") {
            const info = projectsList[projectName];
            if(info) {
                setImages([...info.images])
            }
        }
    }, [projectName])
    return (
        <body className={_dir}>
            <Header locale={locale} _dir={_dir} default_colors={default_colors} headerRef={headerRef} dictionary={dictionary} hrefers={hrefers}/>
            <Main locale={locale} _dir={_dir} default_colors={default_colors} headerRef={headerRef} dictionary={dictionary} setProjectName={setProjectName}/>
            <Footer locale={locale} _dir={_dir} default_colors={default_colors} dictionary={dictionary}/>
            <ShowImg default_colors={default_colors} images={images} projectName={projectName} setProjectName={setProjectName}/>
        </body>
    )
}
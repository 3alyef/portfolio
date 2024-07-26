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
    
    const [images, setImages] = useState<string[]>()
    const [projectName, setProjectName] = useState("none");
    useEffect(()=>{
        if(projectName !== "none") {
            const info = projectsList[projectName];
            if(info) {
                setImages([...info.images])
            }
        }
    }, [projectName])
    useEffect(()=>{
        const startSystem = async () => {
            try {
                let body = JSON.stringify({ data: new Date() });
                const response = await fetch(`${process.env.NEXT_PUBLIC_M1_URL}/startSystem`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: body
                });
            
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
            
                const data = await response.json();
                // console.log(data.msg);
                } catch (error) {
                    console.error('There was an error!', error);
                }
        };
        
        startSystem();
    }, [])
    return (
        <body className={_dir}>
            <Header locale={locale} _dir={_dir} default_colors={default_colors} headerRef={headerRef} dictionary={dictionary} hrefers={hrefers}/>
            <Main locale={locale} _dir={_dir} default_colors={default_colors} headerRef={headerRef} dictionary={dictionary} setProjectName={setProjectName}/>
            <Footer locale={locale} _dir={_dir} default_colors={default_colors} dictionary={dictionary}/>
            <ShowImg default_colors={default_colors} images={images} projectName={projectName} setProjectName={setProjectName}/>
        </body>
    )
}
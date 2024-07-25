"use client";
import { default_colors } from '@/interfaces/defaultPage';
import Image from 'next/image';
import { useState } from 'react';
import { TypeIdProjects } from '../projectsList';
interface PropsProjectComponents extends default_colors {
    img: string;
    alt: TypeIdProjects;
    name: string;
    className?:string;
    styleImg?:React.CSSProperties;
    classNameSpan?:string;
    clickFunction: (id: TypeIdProjects)=>void;
    type2Label?: boolean;
    styleMain?:React.CSSProperties
}
export default function ProjectComponents({img, alt, name, className, styleImg, classNameSpan, default_colors, clickFunction, type2Label, styleMain }: PropsProjectComponents) {
    const [labelVisible, setLabelVible] = useState(true); //false
    
   
    return (
        <div className={`flex flex-col justify-center items-center w-[20em] ${className} cursor-pointer gap-3`} style={styleMain}>
            <span className={`flex justify-center items-center relative ${classNameSpan} w-full`} onMouseEnter={()=> setLabelVible(true)} onMouseLeave={()=> setLabelVible(false)} onClick={()=>clickFunction(alt)}>
                <Image src={img} alt={alt} className='absolute rounded-md' fill style={{...styleImg}}/>
                {!labelVisible && !type2Label && (
                    <span className={`w-full absolute ${classNameSpan} backdrop-blur-[1px] rounded-md bg-[#ffffff00]`}></span>
                )}
               
            </span>
            <h2 style={{color: labelVisible && !type2Label ? "white" : "transparent"}} className='font-[300] text-[18px]'>
                {name}
            </h2>
        </div>
    )
}
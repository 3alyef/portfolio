"use client";
import { default_colors } from "@/interfaces/defaultPage";
import { Dispatch, SetStateAction, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
interface PropsShowImg extends default_colors {
    projectName: string;
    images: string[];
    setProjectName: Dispatch<SetStateAction<string>>
}

export default function ShowImg({projectName, default_colors, images, setProjectName}: PropsShowImg) {
    const [count, setCount] = useState(0);
    return (
        <div className={`w-full fixed rounded-md flex justify-center items-center`}
        style={projectName !== "none" ? {
            width: "100vw",
            height: "100vh",
            zIndex: "50",
            backgroundColor: default_colors.tsahal_n4_transparent,
            top: 0,
            left: 0
        } : {width: "0", height:"0"}} onClick={()=>{setProjectName("none")}}>
            <div className="flex justify-center items-center"
            onClick={(e) => e.stopPropagation()} >
                <button className="bottomProjectBody text-[50px]" onClick={()=>setCount((prev)=>{
                    let newV = prev
                    if(prev > 0){
                        newV--
                    }
                    return newV
                })}>
                    <FaChevronLeft />
                </button>
                <div className="relative aspect-[1.366/.611] h-[80vh] cursor-pointer imagesProjectBody">
                    <Image fill alt={projectName} src={images[count]}/>
                </div>
                <button className="bottomProjectBody text-[50px]" onClick={()=>setCount((prev)=>{
                    let newV = prev
                    if(prev < images.length){
                        newV++
                    }
                    return newV
                })}>
                    <FaChevronRight />
                </button>
            </div>
        </div>
    )
}
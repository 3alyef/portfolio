"use client";
import Image from "next/image";
import technologiesMap from "../../../projects/components/technologies";
import Icon from "../../../experience/components/iconsTag";
export default function TechnologyLogo() {
    return (
        <div className="flex w-[4em] aspect-[1/1]">
            <div className="w-full relative">
                <span className="w-full">
                    <h1 className="text-[55px] alTech noto-rashi-hebrew-hbr">AL</h1>
                    <div className="logoTech top-[28px] right-[-10px]">
                        <span className="flex relative aspect-[1/1] w-[1.5rem]">
                            <Image src="/assets/logo.png" alt="logo_me" fill/>
                        </span>
                    </div>
                </span>
                <span className="techAnimation justify-start items-start" >
                    <span className="flex justify-center items-center p-2rounded-[100%]">
                        <Icon className="techAltoRotate" style={{fontSize: "20px", padding: ".5rem", backgroundColor: "#a1bdc95b"}}>{technologiesMap["nodejs"]}</Icon>
                    </span>
                </span>
                <span className="techAnimation justify-end items-start" >
                    <span className="flex justify-center items-center p-2 rounded-[100%]">
                        <Icon className="techAltoRotate" style={{fontSize: "20px", padding: ".5rem", backgroundColor: "#a1bdc95b"}}>{technologiesMap["react"]}</Icon>
                    </span>
                </span>
                <span className="techAnimation justify-end items-end" >
                    <span className="flex justify-center items-center p-2  rounded-[100%]">
                        <Icon className="techAltoRotate" style={{fontSize: "20px", padding: ".5rem", backgroundColor: "#a1bdc95b"}}>{technologiesMap["typeScript"]}</Icon>
                    </span>
                </span>
                <span className="techAnimation justify-start items-end" >
                    <span className="flex justify-center items-center p-2 rounded-[100%]">
                        <Icon className="techAltoRotate" style={{fontSize: "20px", padding: ".5rem", backgroundColor: "#a1bdc95b"}}>{technologiesMap["nextjs"]}</Icon>
                    </span>
                </span>
            </div>
            
        </div>
    )
}

/**
            <span className="absolute w-full aspect-[1/1]">
                {technologiesMap["react"]}
            </span>
            <span className="absolute w-full aspect-[1/1]">
                {technologiesMap["typeScript"]}
            </span> */
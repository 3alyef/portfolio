"use client";

import { useState } from "react";

interface PropsTextAnimation {
    text: string;
    colorOff: string;
    colorOn: string;
}

export default function TextAnimation({ text, colorOff, colorOn }: PropsTextAnimation) {
    const [color, setColor] = useState(colorOff);

    function handleColor(is: boolean) {
        if (is) {
            setColor(colorOn);
        } else {
            setColor(colorOff);
        }
    }

    return (
        <>
            {
                text.split(' ').map((word, index) => (
                    <span 
                        key={index} 
                        onMouseEnter={() => handleColor(true)} 
                        onMouseLeave={() => handleColor(false)} 
                        style={{ color }}
                    >
                        {word} 
                    </span>
                ))
            }
        </>
    );
}

import { Locale } from "@/i18n";
import { Dispatch, RefObject, SetStateAction } from "react";
import { TypeDictionary } from "./dictionary";

export type default_colors = {
    default_colors: {
        tsahal_n1: string;
        tsahal_n2: string;
        tsahal_n3: string;
        tsahal_n4: string;
        tsahal_n4_transparent: string;
        tsahal_n5: string;
        tsahal_gray: string
    }
        
}
export interface PropsDefaultPage extends default_colors{
    locale: Locale;
    _dir: "ltr" | "rtl";
}

export interface PropsBody extends PropsDefaultPage, TypeDictionary {
    hrefers: string[];
}

// ==============================

export interface PropsHeader extends PropsDefaultPage, TypeDictionary {
    headerRef: RefObject<HTMLAnchorElement>;
    hrefers: string[];
}

export interface PropsMain extends PropsDefaultPage, TypeDictionary {
    headerRef: RefObject<HTMLAnchorElement>;
    setProjectName: Dispatch<SetStateAction<string>>
}

export interface PropsFooter extends PropsDefaultPage, TypeDictionary {
}


import React from "react";
import { TypeDictionary } from "./dictionary";
import { PropsDefaultPage } from "./defaultPage";

export interface PropsSection extends PropsDefaultPage, TypeDictionary {
    style: React.CSSProperties;
}


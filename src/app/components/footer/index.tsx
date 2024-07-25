import { PropsFooter } from "@/interfaces/defaultPage";
import DefaultBody from "../main/components/defaultBody";

import { FaRegCopyright } from "react-icons/fa";
export default function Footer({ locale, _dir, default_colors, dictionary }: PropsFooter) {
    return (
        <footer>
            <DefaultBody style={{backgroundColor: default_colors.tsahal_n1, padding: "1em 0em"}} styleDiv={{padding: "0em 7em"}} locale={locale} id="footer">
                <div className="flex items-center justify-center w-full">
                    <p style={{color: default_colors.tsahal_gray}} className="text-[15px] flex justify-center items-center w-full gap-[2px] font-[500]">
                        <FaRegCopyright /> 2024 / Alef A. Araujo / {dictionary.Footer.copy}
                    </p>
                </div>
            </DefaultBody>
        </footer>
    )
}
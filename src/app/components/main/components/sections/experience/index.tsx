import { PropsSection } from "@/interfaces/sectionsDefault";
import DefaultBody from "../../defaultBody";
export default function Experience({ locale, style }: PropsSection) {
    return (
        <DefaultBody locale={locale} style={style} id="experience">
            <span>
                Experience
            </span>
        </DefaultBody>
    )
}
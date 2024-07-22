import { PropsSection } from "@/interfaces/sectionsDefault";
import DefaultBody from "../../defaultBody";

export default function Contact({ locale, style }: PropsSection) {
    return (
        <DefaultBody locale={locale} style={style} id="contact">
            <span>
                contact
            </span>
        </DefaultBody>
    )
}
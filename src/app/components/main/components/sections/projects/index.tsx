import { PropsSection } from "@/interfaces/sectionsDefault";
import DefaultBody from "../../defaultBody";

export default function Projects({ locale, style }: PropsSection) {
    return (
        <DefaultBody locale={locale} style={style} id="projects">
            <span>
                projects
            </span>
        </DefaultBody>
    )
}
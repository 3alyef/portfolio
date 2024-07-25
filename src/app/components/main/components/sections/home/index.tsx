import { PropsSection } from "@/interfaces/sectionsDefault";
import DefaultBody from "../../defaultBody";
import MeTitle from "./components/meTitle";
import TechnologyLogo from "./components/technologyLogo";

export default function Home({ locale, style, headerHeight, _dir, default_colors, dictionary, styleDiv }: PropsSection & {headerHeight: number | undefined}) {
    return (
        <DefaultBody locale={locale} style={{ ...style, paddingTop: `${headerHeight}px`}} id="home" className="flex items-center justify-center min-h-[100vh]" styleDiv={{...styleDiv, width: "100%"}}>
            <span className="homeSpan flex gap-[5em] w-full items-center justify-evenly">
                <span className="MeTitle">
                    <MeTitle _dir={_dir} default_colors={default_colors} dictionary={dictionary} locale={locale}/>
                </span>
                <span className="technologyLogo"><TechnologyLogo/></span>
            </span>
        </DefaultBody>
    )
}
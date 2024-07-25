import { PropsSection } from "@/interfaces/sectionsDefault";
import DefaultBody from "../../defaultBody";
import MeTitle from "./components/meTitle";
import TecnologyLogo from "./components/tecnologyLogo";

export default function Home({ locale, style, headerHeight, _dir, default_colors, dictionary, styleDiv }: PropsSection & {headerHeight: number | undefined}) {
    return (
        <DefaultBody locale={locale} style={{ ...style, paddingTop: `${headerHeight}px`}} id="home" className="flex items-center justify-center" styleDiv={styleDiv}>
            <MeTitle _dir={_dir} default_colors={default_colors} dictionary={dictionary} locale={locale}/>
            <TecnologyLogo/>
        </DefaultBody>
    )
}
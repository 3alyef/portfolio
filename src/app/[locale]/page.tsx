import { Locale } from "@/i18n";
import checkDir from "@/services/checkDir.service";
import Main from "../components/main";
import Footer from "../components/footer";
import Header from "../components/header";

export default async function Home({
    params: { locale }
} : { params: { locale: Locale }}) {
    const _dir = checkDir(locale);
    const default_colors = {
        tsahal_n1: "#132730",
        tsahal_n2: "#3C5763",
        tsahal_n3: "#788D96",
        tsahal_n4: "#A1BDC9",
        tsahal_n5: "#97DCFC"
    }
    return (
        <>
            <Header locale={locale} _dir={_dir} default_colors={default_colors}/>
            <Main locale={locale} _dir={_dir} default_colors={default_colors}/>
            <Footer locale={locale} _dir={_dir} default_colors={default_colors}/>
        </>
    )
}
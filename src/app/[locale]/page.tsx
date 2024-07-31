import { Locale } from "@/i18n";
import Body from "../components/body";
import { getDictionary } from "@/lib/get-dictionary";
import checkDir from "@/services/checkDir.service";
import { TypeHeader } from "../components/header/components/link/tagsHeader";

export default async function Start({
    params: { locale }
} : { params: { locale: Locale } } ) {
    const dictionary = await getDictionary(locale);
    //const hrefers = (await getDictionary("en")).Header.links;
    const hrefers: TypeHeader[] = ["Home", "About", "Experience", "Projects", "Contact"]
    const _dir = checkDir(locale);
    const default_colors = {
        tsahal_n1: "#132730",
        tsahal_n2: "#3C5763",
        tsahal_n3: "#788D96",
        tsahal_n4: "#A1BDC9",
        tsahal_n4_transparent: "#a1bdc940",
        tsahal_n5: "#97DCFC",
        tsahal_gray: "#F0F0F0",
        tsahal_tecnology: "#a1bdc957"
    }
    return <Body _dir={_dir} default_colors={default_colors} dictionary={dictionary} hrefers={hrefers} locale={locale}/>
}
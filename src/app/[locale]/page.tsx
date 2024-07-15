import { Locale } from "@/i18n";
import { getDictionary } from "@/lib/get-dictionary";
import checkDir from "@/services/checkDir.service";

export default async function Home({
    params: { locale }
} : { params: { locale: Locale }}) {
    const dictionary = await getDictionary(locale);
    const _dir = checkDir(locale);
}
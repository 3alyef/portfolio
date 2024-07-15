import { Locale } from "@/i18n";

export default function checkDir(locale: Locale): "ltr" | "rtl" {
    let semiticLanguages = ["he", "ar"];
    return semiticLanguages.includes(locale) ?  "rtl" : "ltr";
}
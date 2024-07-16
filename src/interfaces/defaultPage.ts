import { Locale } from "@/i18n";

export interface PropsDefaultPage {
    locale: Locale;
    _dir: "ltr" | "rtl";
    default_colors: {
        tsahal_n1: string;
        tsahal_n2: string;
        tsahal_n3: string;
        tsahal_n4: string;
        tsahal_n5: string;
    };
}

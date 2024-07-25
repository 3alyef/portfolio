export const i18n = {
    defaultLocale: "pt", // en
    locales: [/*"en",*/ "pt", /*"es", "he", "ar", "da", "de", "fr", "ga", "it", "nl", "ru", "tr", "zh"*/]
} as const;

export type Locale = (typeof i18n)["locales"][number];
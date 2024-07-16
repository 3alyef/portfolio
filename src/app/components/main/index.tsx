import { PropsDefaultPage } from "@/interfaces/defaultPage";
import { getDictionary } from "@/lib/get-dictionary";

export default async function Main({ locale, _dir, default_colors }: PropsDefaultPage) {
    const dictionary = await getDictionary(locale);
    return (
        <main>
            main
        </main>
    )
}
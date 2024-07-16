import { PropsDefaultPage } from "@/interfaces/defaultPage";
import { getDictionary } from "@/lib/get-dictionary";

export default async function Footer({ locale, _dir }: PropsDefaultPage) {
    const dictionary = await getDictionary(locale);
    return (
        <footer>
            footer
        </footer>
    )
}
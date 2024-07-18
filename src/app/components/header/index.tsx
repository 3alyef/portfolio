import { PropsDefaultPage } from "@/interfaces/defaultPage";
import { getDictionary } from "@/lib/get-dictionary";
import Link from "./components/link";

export default async function Header({ locale, _dir, default_colors }: PropsDefaultPage) {
    const dictionary = await getDictionary(locale);
    const hrefers = (await getDictionary("en")).Header.links;
    return (
        <header className="header">
            <nav className="flex gap-2 justify-center items-center">
                {dictionary.Header.links.map((name, index)=>(
                    <Link href={`#${hrefers[index].toLowerCase()}`} text={name} key={hrefers[index]} className={`text-${default_colors.tsahal_n5}`}/>
                ))}
            </nav>
        </header>
    )
}
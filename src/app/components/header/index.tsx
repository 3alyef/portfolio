import { PropsDefaultPage } from "@/interfaces/defaultPage";
import { getDictionary } from "@/lib/get-dictionary";
import { header } from "./style";
import Link from "./components/link";

export default async function Header({ locale, _dir }: PropsDefaultPage) {
    const dictionary = await getDictionary(locale);
    const hrefers = (await getDictionary("en")).Header.links;
    return (
        <header style={header}>
            <nav>
                {dictionary.Header.links.map((name, index)=>(
                    <Link href={hrefers[index]} text={name} key={hrefers[index]}/>
                ))}
            </nav>
        </header>
    )
}
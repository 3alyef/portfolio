import { PropsHeader } from "@/interfaces/defaultPage";
import Link from "./components/link";
import Image from "next/image";

export default function Header({ locale, _dir, default_colors, headerRef, hrefers, dictionary }: PropsHeader) {
    return (
        <header className="header" ref={headerRef}>
            <span style={{position: "relative", width: "3em", aspectRatio: "1/1"}}>
                <Image alt="portfolio-alef-logo" src={"/assets/logo.png"} fill style={{position: "absolute"}}/>
            </span>
            <nav className="flex gap-[1em] justify-center items-center py-[10px]">
                {dictionary.Header.links.map((name, index)=>(
                    <Link href={`${hrefers[index].toLowerCase()}`} text={name} key={hrefers[index]} locale={locale} fontOff={default_colors.tsahal_n5} className="text-[20px]"/>
                ))}
            </nav>
        </header>
    )
}
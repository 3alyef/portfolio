import { PropsDefaultPage } from "@/interfaces/defaultPage";
import { TypeDictionary } from "@/interfaces/dictionary";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

type PropsMeTitle = PropsDefaultPage & TypeDictionary;
export default function MeTitle({_dir, default_colors, dictionary, locale}: PropsMeTitle) {
    return (
        <section className="flex flex-col items-start justify-center gap-[10px]" style={{color: default_colors.tsahal_n4}}>
            <h1 className="text-[50px] text-center font-[700]">
                {dictionary.Main.Home.name}
            </h1>
            <h2 className="text-[28px] font-[700]">
                {dictionary.Main.Home.profession}
            </h2>
            <div className="flex items-center text-[40px] gap-[37px]">
                <span>
                    <FaLinkedin style={{color: "#0A66C2"}}/>
                </span>
                <span>
                    <FaGithub />
                </span>
                <span>
                    <FaInstagram />
                </span>
            </div>
        </section>
    )
}
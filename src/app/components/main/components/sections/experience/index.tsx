import { PropsSection } from "@/interfaces/sectionsDefault";
import DefaultBody from "../../defaultBody";
import Icon from "./components/iconsTag";
import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaJava, FaNodeJs, FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandSocketIo, TbBrandTypescript } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import TextAnimation from "../../textAnimation";
export default function Experience({ locale, style, _dir, default_colors, dictionary, styleDiv }: PropsSection) {
    return (
        <DefaultBody locale={locale} style={{...style, padding: "7em 0em"}} id="experience" styleDiv={{...styleDiv, gap: "22px"}} className="min-h-[100vh]">
            <h1 className="text-[50px] font-[700] w-full text-left h1Experience" style={{color: default_colors.tsahal_n4}}>
                {dictionary.Main.Experience.experience}
            </h1>
            <div className="flex flex-col gap-3">
                <aside className="flex flex-col gap-2">
                    <h2>
                        {dictionary.Main.Experience.freelancer}
                    </h2>
                    <div className="flex flex-col justify-start gap-1" style={{color: default_colors.tsahal_gray}}>
                        <p className="flex flex-wrap gap-[.225em]">
                            {dictionary.Main.Experience.text}
                            {/*<TextAnimation colorOff={default_colors.tsahal_gray} colorOn="white" text={dictionary.Main.Experience.text}/>*/}
                        </p>
                        <p className="flex flex-wrap gap-[.225em]">
                            {dictionary.Main.Experience.paragraph_1}
                            {/*<TextAnimation colorOff={default_colors.tsahal_gray} colorOn="white" text={dictionary.Main.Experience.paragraph_1}/>*/}
                        </p>
                    </div>
                </aside>
                <div className="flex flex-col gap-1" style={{color: default_colors.tsahal_gray}}>
                    <p className="flex flex-wrap gap-[.225em]">
                        {/*dictionary.Main.Experience.paragraph_2*/}
                        <TextAnimation colorOff={default_colors.tsahal_gray} colorOn="white" text={dictionary.Main.Experience.paragraph_2}/>
                    </p>
                    <p className="flex flex-wrap gap-[.225em]">
                        {dictionary.Main.Experience.paragraph_3}
                        {/*<TextAnimation colorOff={default_colors.tsahal_gray} colorOn="white" text={dictionary.Main.Experience.paragraph_3}/>*/}
                    </p>
                </div>
            </div>
            <div className="tecnology flex flex-col items-center justify-start gap-2 w-full" style={{color: default_colors.tsahal_gray}}>
                <h3>
                    {dictionary.Main.Experience.paragraph_4}
                    {/*<TextAnimation colorOff={default_colors.tsahal_gray} colorOn="white" text={dictionary.Main.Experience.paragraph_4}/>*/}
                </h3>
                <div className="w-full flex gap-3 justify-center flex-wrap">
                    <Icon style={{color: "#FF6D00"}}>
                        <FaHtml5 />
                    </Icon>
                    <Icon style={{color: "#0277BD"}}>
                        <FaCss3Alt />
                    </Icon>
                    <Icon style={{color: "#FFD600"}}>
                        <IoLogoJavascript />
                    </Icon>
                    <Icon style={{color: "#1976D2"}}>
                        <TbBrandTypescript />
                    </Icon>
                    <Icon>
                        <FaJava />
                    </Icon>
                    <Icon style={{color: "#80DEEA"}}>
                        <FaReact />
                    </Icon>
                    <Icon>
                        <RiNextjsFill />
                    </Icon>
                    <Icon style={{color: "#219360"}}>
                       <FaNodeJs /> 
                    </Icon>
                    <Icon>
                        <SiExpress />
                    </Icon>
                    <Icon style={{color: "#00ED64"}}>
                        <BiLogoMongodb />
                    </Icon>
                    <Icon style={{color: "#F4511E"}}>
                        <FaGitAlt />
                    </Icon>
                    <Icon>
                        <FaGithub />
                    </Icon>
                    <Icon>
                        <TbBrandSocketIo />
                    </Icon>
                </div>
            </div>
        </DefaultBody>
    )
}
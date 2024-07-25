import { PropsSection } from "@/interfaces/sectionsDefault";
import DefaultBody from "../../defaultBody";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import Icon from "../experience/components/iconsTag";

export default function Contact({ locale, style, dictionary,styleDiv, default_colors }: PropsSection) {
    function handleClick(link: string) {
        window.open(link, "_blank");
    }
    return (
        <DefaultBody locale={locale} style={{...style, padding: "5em 0em"}} id="contact" styleDiv={{...styleDiv,  gap: "22px"}} >
            <h1 className="text-[50px] font-[700]" style={{color: default_colors.tsahal_n4}}>
                {dictionary.Main.Contact.contact}
            </h1>
            <p>
                {dictionary.Main.Contact.text}
            </p>
            <p style={{color: default_colors.tsahal_n5}} className="linkEmail">
                <a href="mailto:alefalves4867@gmail.com">alefalves4867@gmail.com</a>
            </p>
            <div className="flex gap-2 items-center">
                <Icon className="IconFooter" link="https://www.linkedin.com/in/alefalvesaraujo/" onClick={handleClick}>
                    <a target="_blank" href="https://www.linkedin.com/in/alefalvesaraujo/" onClick={(e)=> e.preventDefault()}>
                        <FaLinkedin style={{color: "#0A66C2"}}/>
                    </a>
                </Icon>
                <Icon className="IconFooter" link="https://github.com/3alyef" onClick={handleClick}>
                    <a target="_blank" href="https://github.com/3alyef" onClick={(e)=> e.preventDefault()}>
                        <FaGithub />
                    </a>
                </Icon>
                {/*
                    <Icon>
                        <a target="_blank" href="">
                            <FaInstagram />
                        </a>
                    </Icon>
                */}
            </div>
        </DefaultBody>
    )
}
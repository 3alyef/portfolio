import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaJava, FaNodeJs, FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandSocketIo, TbBrandTypescript } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";

interface TypeTechnologiesMap {
    [key: string]: JSX.Element;
}

const technologiesMap: TypeTechnologiesMap = {
    express: <SiExpress />,
    nextjs: <RiNextjsFill />,
    react: <FaReact style={{color: "#80DEEA"}}/>,
    css3: <FaCss3Alt  style={{color: "#0277BD"}}/>,
    git: <FaGitAlt style={{color: "#F4511E"}}/>,
    github: <FaGithub />,
    html5: <FaHtml5 style={{color: "#FF6D00"}}/>,
    java: <FaJava />,
    nodejs: <FaNodeJs style={{color: "#219360"}}/>,
    javaScript: <IoLogoJavascript style={{color: "#FFD600"}}/>,
    typeScript: <TbBrandTypescript style={{color: "#1976D2"}}/>,
    mongoDB: <BiLogoMongodb style={{color: "#00ED64"}}/>,
    socketIo: <TbBrandSocketIo />
};

export default technologiesMap;
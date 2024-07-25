import { PropsSection } from "@/interfaces/sectionsDefault";
import DefaultBody from "../../defaultBody";
import ProjectComponents from "./components/projectComponents";
import { Dispatch, SetStateAction, useState } from "react";
import projectsList, { TypeIdProjects } from "./components/projectsList";
import { GrDeploy } from "react-icons/gr";
import { RiGitRepositoryCommitsLine } from "react-icons/ri";
import { FaImages } from "react-icons/fa";

export default function Projects({ locale, style, styleDiv, dictionary, default_colors, setProjectName }: PropsSection & {setProjectName: Dispatch<SetStateAction<string>>}) {
    
    const [aboutProject, setAboutProject] = useState(false);
    const [alt, setAlt] = useState<TypeIdProjects>("none");
    const [src, setSrc] = useState("");
    const [name, setName] = useState("");
    const [classNameSpan, setClassNameSpan] = useState("");
    const [textAbout, setTextAbout] = useState("");
    const [title, setTitle] = useState("");
    const [deploy, setDeploy] = useState("");
    const [repository, setRepository] = useState("")
    function clickFunction(id: TypeIdProjects) {
        if(id === "none") {
            setAboutProject(false)
        } else {
            setAboutProject(true)
            const info = projectsList[id];
            if (info) {
                setAlt(id);
                setName(info.name);
                setSrc(info.img);
                setClassNameSpan(info.classNameSpan);
                setTextAbout(dictionary.Main.Projects.projectsAbout[id].about
                )
                setTitle(dictionary.Main.Projects.projectsAbout[id].name)
                setDeploy(info.deploy)
                setRepository(info.repository)
            }
        }
    }
    return (
        
        <DefaultBody locale={locale} style={{...style, padding: "7em 0em"}} id="projects" styleDiv={styleDiv} className="justify-center items-stretch">
            <div className="flex justify-around items-center w-full central-projects">
                {aboutProject ? (
                    <div className="aboutProject flex w-full  justify-stretch gap-[5em]">
                        <div className="flex flex-col">
                            <ProjectComponents alt={alt} img={src} name={name} className="animatedProject"
                            classNameSpan={classNameSpan} default_colors={default_colors} clickFunction={()=>{clickFunction("none")}} type2Label={true} styleMain={{width: "25em"}}/>
                            <span className="flex justify-start w-full items-center gap-[1em]">
                                <button className="btnProject cursor-pointer" onClick={()=>setProjectName(alt)}>
                                    <FaImages/>
                                </button>
                                <a href={repository} className="btnProject cursor-pointer" target="_blank">
                                    <RiGitRepositoryCommitsLine/>
                                </a>
                                <a href={deploy} className="btnProject cursor-pointer" target="_blank">
                                    <GrDeploy/>
                                </a>
                            </span>
                        </div>
                        <aside className="gap-4 flex flex-col">
                            <h1 className="text-[25px] font-[700]">
                                {name} - ({title})
                            </h1>
                            <p className="text-[18px]">
                                {textAbout}
                            </p>
                        </aside>
                    </div>
                ): (
                    <>
                    <div className="flex flex-col gap-5 justify-center items-center projects-padron">
                        <ProjectComponents alt="al_postel" img="/assets/projectsImgs/al-postel-1.png" name="Chat App" className="animatedProject"
                        classNameSpan="aspect-[1.366/.611]" default_colors={default_colors} clickFunction={clickFunction} />
                        <ProjectComponents alt="al_postel" img="/assets/projectsImgs/al-postel-1.png" name="Chat App"
                        className="animatedProject" classNameSpan="aspect-[1.366/.611]"
                        default_colors={default_colors} clickFunction={clickFunction}/>
                    </div>
                    <h1 className="h1Projects text-[50px] font-[700]">{dictionary.Main.Projects.projects}</h1>
                    <div className="flex flex-col gap-5 justify-center items-center projects-padron">
                        <ProjectComponents alt="al_postel" img="/assets/projectsImgs/al-postel-1.png" name="Chat App"
                        className="animatedProject"
                        classNameSpan="aspect-[1.366/.611]"
                        default_colors={default_colors} clickFunction={clickFunction}/>
                        <ProjectComponents alt="al_postel" img="/assets/projectsImgs/al-postel-1.png" name="Chat App"
                        className="animatedProject"
                        classNameSpan="aspect-[1.366/.611]"
                        default_colors={default_colors} clickFunction={clickFunction}/>
                    </div>
                    </>
                )}
                
            </div>
        </DefaultBody>
    )
}
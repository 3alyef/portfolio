type Project = {
    img: string;
    name: string;
    classNameSpan: string;
    deploy: string;
    repository: string;
    images: string[];
    technologies: string[]
};

type ProjectsList = {
    [key: string]: Project;
};

const projectsList: ProjectsList = {
    al_postel: {
        img: "/assets/projectsImgs/al-postel-1.png",
        name: "Chat App",
        classNameSpan: "aspect-[1.366/.611]",
        deploy: "https://al-postel.vercel.app",
        repository: "https://github.com/3alyef/al-postel",
        images: [
            "/assets/projectsImgs/al-postel-2-phone.png", 
            "/assets/projectsImgs/al-postel-3-phone.png", 
            "/assets/projectsImgs/al-postel-4-phone.png"
        ],
        technologies: ["typeScript", "nodejs", "nextjs", "css3", "html5", "mongoDB", "express", "socketIo"]
    }
}


export type TypeIdProjects = "al_postel" | "none"

export default projectsList;
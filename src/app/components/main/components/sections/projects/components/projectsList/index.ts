type Project = {
  img: string;
  name: string;
  classNameSpan: string;
  deploy: string;
  repository: string;
  images: string[];
  technologies: string[];
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
      "/assets/projectsImgs/al-postel-4-phone.png",
    ],
    technologies: [
      "typeScript",
      "nodejs",
      "nextjs",
      "css3",
      "html5",
      "mongoDB",
      "express",
      "socketIo",
    ],
  },
  al_postel_api: {
    img: "/assets/projectsImgs/alpostel-api-1.png",
    name: "Chat App",
    classNameSpan: "aspect-[1.366/.611]",
    deploy: "https://al-postel-m2.onrender.com/",
    repository: "https://github.com/3alyef/al-postEl-api-m2",
    images: [
      "/assets/projectsImgs/alpostel-api-2.png",
      "/assets/projectsImgs/alpostel-api-3.png",
    ],
    technologies: [
      "typeScript",
      "nodejs",
      "css3",
      "html5",
      "mongoDB",
      "express",
      "socketIo",
    ],
  },
  cordel_project: {
    img: "/assets/projectsImgs/cordel_project_1.png",
    name: "Cordel Project",
    classNameSpan: "aspect-[1.366/.611]",
    deploy: "https://3alyef.github.io/projeto-cordel/",
    repository: "https://github.com/3alyef/projeto-cordel",
    images: ["/assets/projectsImgs/cordel_project_1.png"],
    technologies: ["html5", "css3"],
  },
};

export type TypeIdProjects =
  | "al_postel"
  | "al_postel_api"
  | "cordel_project"
  | "none";

export default projectsList;

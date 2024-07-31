import { FaBriefcase, FaEnvelope, FaFolderOpen, FaHome, FaUser } from "react-icons/fa";
export type TypeHeader = "Home" | "About" | "Experience" | "Projects" | "Contact";
type TypeTagsHeader = {
    [key in TypeHeader]: JSX.Element;
};
const tagsHeader: TypeTagsHeader = {
    Home : <FaHome />,
    About :  <FaUser />,
    Experience: <FaBriefcase />,
    Projects: <FaFolderOpen />,
    Contact: <FaEnvelope />
}

export default tagsHeader;
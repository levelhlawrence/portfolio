import { IoNewspaperSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const jobLinks = [
  {
    name: "github",
    link: "https://github.com/levelhlawrence",
    icon: <FaGithub size={22} />,
  },
  {
    name: "linkedIn",
    link: "https://www.linkedin.com/in/level-lawrence-35173871/",
    icon: <FaLinkedin size={22} />,
  },
  {
    name: "resume",
    link: "https://drive.google.com/file/d/1KYhLBlawF7hNMaTTEopJ_Nqgum2P_gJ9/view?usp=sharing",
    icon: <IoNewspaperSharp size={22} />,
  },
];

// Website nav links
const siteNavLinks = [
  {
    name: "home",
    link: "/",
  },
  {
    name: "projects",
    link: "/projects",
  },
  {
    name: "about",
    link: "/about",
  },
  {
    name: "contact",
    link: "/contact",
  },
];

export { jobLinks, siteNavLinks };

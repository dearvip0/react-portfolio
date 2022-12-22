import { SiFigma, SiAndroid } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";

const data = [
  {
    id: 1,
    icon: <RiReactjsLine />,
    title: "Frontend Development",
    desc: "HTML, CSS, JavaScript, Bootstrap, Git, React Js, Next Js",
  },
  {
    id: 2,
    icon: <FaServer />,
    title: "Backend Development",
    desc: "Node Js, .NET Core, MongooDB, MySQL, Firebase",
  },
  {
    id: 3,
    icon: <SiFigma />,
    title: "UI/UX Design",
    desc: "Figma, Canva",
  },
  {
    id: 4,
    icon: <SiAndroid />,
    title: "Mobile",
    desc: "React Native, Flutter",
  },
];

export default data;

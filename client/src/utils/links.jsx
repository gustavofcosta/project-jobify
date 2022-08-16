import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

const links = [
  {
    id: 1,
    text: "status",
    path: "/",
    icon: <IoBarChartSharp />,
  },
  {
    id: 2,
    text: "todos trabalhos",
    path: "/all-jobs",
    icon: <MdQueryStats />,
  },
  {
    id: 3,
    text: "add Trabalho",
    path: "/add-job",
    icon: <FaWpforms />,
  },
  {
    id: 4,
    text: "perfil",
    path: "/profile",
    icon: <ImProfile />,
  },
];

export default links;

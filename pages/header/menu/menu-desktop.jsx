import { Link } from "react-scroll";

import { FaGithub } from 'react-icons/fa';

export default function MenuDesktop() {
    return (
        <>
            <Link to="sobre" className="cursor-pointer text-gray-300 hover:text-uriel-blue-light">
                Sobre
            </Link>
            <Link to="habilidades" className="cursor-pointer text-gray-300 hover:text-uriel-blue-light">
                Habilidades
            </Link>
            <Link to="contato" className="cursor-pointer text-gray-300 hover:text-uriel-blue-light">
                Contato
            </Link>
            <a href="https://github.com/UrielGui" target="_blank" className="cursor-pointer text-purple-500 hover:text-uriel-blue-light">
                <FaGithub className="inline mb-1 mr-px" /> GitHub
            </a>
        </>
    )

}
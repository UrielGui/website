import { Link } from "react-scroll";

import { FaGithub } from 'react-icons/fa';

export default function MenuResponsivo() {
    return (
        <div className="flex flex-col p-8 menu-mobile">
            <Link to="sobre" className="my-1.5 cursor-pointer text-gray-300 hover:text-uriel-blue-light">
                Sobre
            </Link>
            <Link to="habilidades" className="my-1.5 cursor-pointer text-gray-300 hover:text-uriel-blue-light">
                Habilidades
            </Link>
            <Link to="contato" className="my-1.5 cursor-pointer text-gray-300 hover:text-uriel-blue-light">
                Contato
            </Link>
            <a href="https://github.com/UrielGui" target="_blank" className="cursor-pointer text-purple-500 hover:text-uriel-blue-light">
                <FaGithub className="inline mb-1 mr-px" /> GitHub
            </a>
        </div>
    )
}
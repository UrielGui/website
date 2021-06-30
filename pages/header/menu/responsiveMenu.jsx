import { Link } from "react-scroll";
import { FaGithub } from 'react-icons/fa';

export default function ResponsiveMenu() {
    return (
        <div className="flex flex-col p-8 pt-14 leading-loose menu-mobile ">
            <Link to="about" smooth={true} className="cursor-pointer text-gray-300 hover:text-uriel-blue-light">
                Sobre
            </Link>
            <Link to="skills" smooth={true} className="cursor-pointer text-gray-300 hover:text-uriel-blue-light">
                Habilidades
            </Link>
            <Link to="portfolio" smooth={true} className="cursor-pointer text-gray-300 hover:text-uriel-blue-light">
                Portfólio
            </Link>
            <Link to="contact" smooth={true} className="cursor-pointer text-gray-300 hover:text-uriel-blue-light">
                Contato
            </Link><br />
            <a href="curriculo.pdf" target="_blank">
                <button className="bg-white py-2 px-4 sm:text-3xl text-base rounded-xl uppercase font-medium hover:bg-green-700 hover:text-white focus:outline-none">
                    Download CV
                                </button>
            </a>
        </div>
    )
}
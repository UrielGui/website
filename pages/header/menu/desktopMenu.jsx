import { Link } from "react-scroll";

export default function DesktopMenu() {
    return (
        <>
            <Link to="sobre" className="cursor-pointer text-gray-300 hover:text-uriel-blue-light">
                Sobre
            </Link>
            <Link to="habilidades" className="cursor-pointer text-gray-300 hover:text-uriel-blue-light">
                Habilidades
            </Link>
            <Link to="habilidades" className="cursor-pointer text-gray-300 hover:text-uriel-blue-light">
                Portfólio
            </Link>
            <Link to="contato" className="cursor-pointer text-gray-300 hover:text-uriel-blue-light">
                Contato
            </Link>
        </>
    )

}
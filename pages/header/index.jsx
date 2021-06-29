import Menu from './menu/menu';
import TextBox from './text-box';
import { Link } from "react-scroll";

export default function Header() {
  return (
    <section id="header">
        <div className="bg-header-background bg-no-repeat bg-cover bg-center bg-header-size animate-zoomBgAnimation">
        <div className="container">
          <Menu />
          <TextBox />
        </div>/
          <Link to="sobre">
            <div className="flex flex-col items-center pt-24 pb-8 m-auto">
              <span className="text-white mb-3 text-xs">ROLAR PARA BAIXO</span>
            <div className="border-solid border-4 border-white rounded-3xl h-14 w-10 cursor-pointer">
              <div className="border-solid border-2 border-white rounded m-auto h-2 w-0.5 relative animate-wheelAnimation"></div>
            </div>
            </div>
          </Link>
          </div>
    </section>
  )
}
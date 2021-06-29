import Menu from './menu/menu';
import TextBox from './text-box';
import { Link } from "react-scroll";

export default function Header() {
  return (
    <section id="header">
        <div className="md:bg-header bg-no-repeat bg-header-size animate-zoomBgAnimation">
        <div className="mainContainer">
          <Menu />
          <TextBox />
        </div>
          <Link to="sobre">
            <div className="flex flex-col items-end sm:items-center xl:pt-24 pb-8 m-auto mainContainer">
              <span className="text-white mb-3 text-xs hidden sm:block">ROLAR PARA BAIXO</span>
            <div className="border-solid border-4 border-white rounded-3xl h-14 w-10 cursor-pointer">
              <div className="border-solid border-2 border-white rounded m-auto h-2 w-0.5 relative animate-wheelAnimation"></div>
            </div>
            </div>
          </Link>
          </div>
    </section>
  )
}
import Menu from './menu/menu';
import TextBox from './text-box';
import { Link } from "react-scroll";

export default function Header() {
  return (
    <section id="header" className="h-full block-scroll">
      <div className="sm:min-h-screen">
        <div className="w-full h-full absolute bg-home-background bg-no-repeat bg-cover bg-center zoombg hide-z"></div>
        <div className="container">
          <Menu />
          <TextBox />
        </div>
        <div className="sm:contents flex justify-end sm:p-0 pr-10 sm:pb-0 pb-4">
          <Link to="sobre">
            <div className="flex flex-col items-center pt-32 m-auto">
              <span className="text-white mb-3 text-xs">ROLAR PARA BAIXO</span>
            <div className="border-solid border-4 border-white rounded-3xl h-14 w-10 pointer">
              <div className="border-solid border-2 border-white rounded m-auto h-2 w-0.5 relative animate-wheelAnimation"></div>
            </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
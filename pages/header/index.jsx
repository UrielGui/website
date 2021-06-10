import Menu from './menu/menu';
import TextBox from './text-box';
import { Link } from "react-scroll";

export default function Header() {
  return (
    <section id="header" className="h-full block-scroll">
      <div className="sm:min-h-screen">
        <div className="w-full h-full absolute bg-home-background bg-no-repeat bg-cover bg-center zoombg hide-z"></div>
        <Menu />
        <TextBox />
        <div className="sm:contents flex justify-end sm:p-0 pr-10 sm:pb-0 pb-4">
          <Link to="sobre"><span className="icon-scroll"></span></Link>
        </div>
      </div>
    </section>
  )
}
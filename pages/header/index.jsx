import Menu from './menu/menu';
import TextBox from './text-box';
import { Link } from "react-scroll";

export default function Header() {
  return (
    <section id="header" className="h-full">
      <div className="w-full h-full absolute bg-home-background bg-no-repeat bg-cover bg-center zoombg"></div>
      <Menu />
      <TextBox />
      <Link to="sobre"><span className="icon-scroll"></span></Link>
    </section>
  )
}
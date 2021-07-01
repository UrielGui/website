import Menu from './menu/menu';
import TextBox from './text-box';
import { Link } from "react-scroll";
import FadeIn from '../../components/animations/fadeIn'

export default function Header() {

  return (
    <section id="header">
      <FadeIn>
          <div className="md:bg-header bg-no-repeat bg-cover animate-zoomBgAnimation">
          <Menu />
          <div className="mainContainer">
            <TextBox />
          </div>
              <div className="flex flex-col items-end sm:items-center xl:pt-24 pb-8 m-auto mainContainer">
                <span className="text-white mb-3 text-xs hidden sm:block">ROLAR PARA BAIXO</span>
                <Link to="about" smooth={true} className="p-0 m-0">
              <div className="border-solid border-4 border-white rounded-3xl h-14 w-10 cursor-pointer">
                <div className="w-1 bg-white rounded m-auto h-2 relative animate-wheelAnimation"></div>
              </div>
              </Link>
              </div>
            </div>
      </FadeIn>
    </section>
  )
}
import { useState } from 'react';
import DesktopMenu from './desktopMenu';
import ResponsiveMenu from './responsiveMenu';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

export default function Menu() {
  const [active, setActive] = useState(false);

  const iconMobileMenu = () => {
    setActive(!active);
  };

  const iconMenu = () => {
    if (!active) {
      return <FaBars onClick={iconMobileMenu} />
    }
    else {
      return <FaTimes onClick={iconMobileMenu} />
    }
  }

  return (
    <>
      <div className="flex pt-7 w-full px-10">
        <div className="sm:w-16 w-14">
          <img className="cursor-pointer z-50" src="/img/logo.png" alt="Uriel - Portfolio" width={68} height={68}></img>
        </div>
        <div>
          <div className="flex flex-row-reverse">
            <div className="text-3xl mainContainer text-white cursor-pointer top-10 absolute right-0 lg:hidden" >
              {iconMenu()}
            </div>
          </div>
          <nav className="ml-10 2xl:text-2xl top-12 space-x-10 uppercase font-semibold lg:absolute lg:block hidden" >
            <DesktopMenu />
          </nav>
        </div>
      </div>
      <div className={`${active ? '' : 'hidden'
        } flex flex-col items-center bg-main-color text-xl absolute z-20 w-full lg:hidden`}>
        <ResponsiveMenu />
      </div>
    </>
  )
}

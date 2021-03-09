import { useState } from 'react';
import MenuDesktop from './menu-desktop';
import MenuResponsivo from './menu-responsivo';

import { FaBars } from 'react-icons/fa';

import Image from 'next/image'
import { Link } from "react-scroll";

export default function Menu() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>
      <div className="flex pl-10 pt-7 pr-10 w-screen">
        <div className="logo">
          <Link to="header">
            <Image className="cursor-pointer" src="/img/logo.png" alt="Uriel - Portfolio" width={68} height={68}></Image>
          </Link>
        </div>
        <div>
          <div className="flex flex-row-reverse">
            <div className="text-3xl text-white cursor-pointer menu-icon-r-align absolute right-0-menu pr-10 lg:hidden" >
              <FaBars onClick={handleClick} />
            </div>
          </div>
          <nav className="ml-10 2xl:text-2xl menu-align space-x-10 uppercase font-semibold lg:absolute md:block hidden" >
            <MenuDesktop />
          </nav>
        </div>
      </div>

      <div className={`${active ? '' : 'hidden'
        } flex flex-col items-center bg-main-color text-xl absolute z-20 w-full lg:hidden`}>
        <MenuResponsivo />
      </div>

    </>

  )
}

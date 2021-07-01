import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import ResponsiveMenu from '../../pages/header/menu/responsiveMenu';

export default function menuScroll(props) {
  const activeMenu = "text-uriel-blue-light";

  return (
      <>
          <div id="navScroll" className="bg-main-color-2 -top-28 fixed z-30 block w-full">
            <div className="mainContainer py-3 text-white">
              <div className="flex">
                <div className="flex-grow sm:text-base text-xs">
                    <Link to="header" smooth={true} >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <img className="z-50 cursor-pointer" src="/img/logo.png" alt="Uriel - Portfolio"
                      width={50} height={50}>
                      </img>
                      </motion.button>
                    </Link>
                </div>
                    <div className="hidden lg:flex pt-4 uppercase text-sm">
                      <Link activeClass={activeMenu} to="about" smooth={true} spy={true}  className="cursor-pointer text-gray-300 hover:text-uriel-blue-light">
                        Sobre
                      </Link>
                      <Link activeClass={activeMenu} to="skills" smooth={true} spy={true} className="cursor-pointer px-8 text-gray-300 hover:text-uriel-blue-light">
                        Habilidades
                      </Link>
                      <Link activeClass={activeMenu} to="portfolio" smooth={true} spy={true}  className="cursor-pointer text-gray-300 hover:text-uriel-blue-light">
                        Portfólio
                      </Link>
                      <Link activeClass={activeMenu} to="contact" smooth={true} spy={true}  className="cursor-pointer px-8 text-gray-300 hover:text-uriel-blue-light">
                        Contato
                      </Link>
                    </div>
                    <div className="text-3xl mainContainer text-white cursor-pointer absolute top-7 right-0 lg:hidden" >
                      {props.iconMenu()}
                    </div>
                </div>
            </div>
            <div className={`${!props.activeMenu ? 'hidden' : null} flex flex-col items-center bg-main-color text-xl absolute z-20 w-full lg:hidden`}>
              <ResponsiveMenu activeMenu={activeMenu} />
            </div>
            {props.scrollIndicator}
          </div>
      </>
  );
}
import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import LoadingScreen from './loading'

import { Link } from "react-scroll";
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import ResponsiveMenu from './header/menu/responsiveMenu';

import Header from './header/'
import About from './about/'
import AboutProject from './aboutProject/'
import Skills from './skills/'
import MoreSkills from './moreSkills/'
import Portfolio from './portfolio/'
import Contact from './contact/'
import Footer from './footer/'

export default function OnePage() {

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

  function onScroll () {
    // scroll
    const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
    const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('scroll-indicator').style.width = scrolled + '%';

    // Menu
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
      document.getElementById("navScroll").style.top = "0";
    } else {
      document.getElementById("navScroll").style.top = "-150px";
    }
  };

  useEffect(() => {
    window.onscroll = onScroll;
  })
    
  return (
    <>
      <Head>
        <title>Uriel - Portfólio</title>
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <meta name="description" content="Portfólio oficial do Desenvolvedor Full Stack e UI Designer Uriel Guimarães, na qual visa sempre a inovação e a personalidade própria em seus projetos." />
      </Head>
      {/* <LoadingScreen /> */}
      <>
        <div id="navScroll" className="bg-main-color-2 fixed z-30 block w-full">
          <div className="mainContainer pt-4 pb-4 text-white">
            <div className="flex flex-col md:flex-row">
              <div className="flex-grow self-center sm:text-base text-xs">
                <div className="sm:w-16 w-14">
                  <Link to="header" smooth={true} >
                    <img className="z-50" src="/img/logo.png" alt="Uriel - Portfolio"
                    width={50} height={50}>
                    </img>
                  </Link>
                </div>
              </div>
                <div className="flex justify-center md:justify-start md:pt-0 pt-4">
                  <div className="hidden lg:flex pt-4 uppercase text-sm">
                    <Link to="about" smooth={true} className="cursor-pointer text-gray-300 hover:text-uriel-blue-light">
                      Sobre
                    </Link>
                    <Link to="skills" smooth={true} className="cursor-pointer px-8 text-gray-300 hover:text-uriel-blue-light">
                      Habilidades
                    </Link>
                    <Link to="portfolio" smooth={true} className="cursor-pointer text-gray-300 hover:text-uriel-blue-light">
                      Portfólio
                    </Link>
                    <Link to="contact" smooth={true} className="cursor-pointer px-8 text-gray-300 hover:text-uriel-blue-light">
                      Contato
                    </Link>
                  </div>
                  <div className="text-3xl mainContainer text-white cursor-pointer top-7 absolute right-0 lg:hidden" >
                    {iconMenu()}
                  </div>
                </div>
                <div className={`${active ? '' : 'hidden'} flex mt-16 flex-col items-center bg-main-color text-xl absolute z-20 w-full lg:hidden`}>
                    <ResponsiveMenu />
                  </div>
              </div>
          </div>
        </div>
        <div className="fixed z-40 top-0 w-full bg-transparent">
            <div className="w-0 h-1 bg-gradient-to-r from-degrade-color1 via-degrade-color2 to-degrade-color3" id="scroll-indicator"></div>
        </div>

        <Header />
        <About />
        <AboutProject />
        <Skills />
        <MoreSkills />
        <Portfolio />
        <Contact />
        <Footer />
      </>
    </>
  )
}
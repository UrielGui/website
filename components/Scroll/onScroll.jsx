import React, { useEffect, useState } from 'react';

import SrollMenu from './scrollMenu'
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

export default function onScroll(props) {
  const [activeMenu, setActiveMenu] = useState(false);
  const iconMobileMenu = () => {
    setActiveMenu(!activeMenu);
  };
  const iconMenu = () => {
    if (!activeMenu) { return <FaBars onClick={iconMobileMenu} /> }
    else { return <FaTimes onClick={iconMobileMenu} /> }
  }

  function onScrollFunc () {
    // scroll
    const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
    const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('scroll-indicator').style.width = scrolled + '%';
    // Menu
    if(!activeMenu) {
      if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90 ) {
        document.getElementById("navScroll").style.top = "0";
      } else {
        document.getElementById("navScroll").style.top = "-7rem";
      }
    } else {
      document.getElementById("navScroll").style.top = "0";
    }
  };

  useEffect(() => {
    window.onscroll = onScrollFunc;
  })

  return (
    <>
      <SrollMenu activeMenu={activeMenu} iconMenu={iconMenu} />
      <div className="fixed z-40 top-0 w-full bg-transparent">
          <div className="w-0 h-1 bg-gradient-to-r from-degrade-color1 via-degrade-color2 to-degrade-color3" id="scroll-indicator"></div>
      </div>
    </>
  );
}
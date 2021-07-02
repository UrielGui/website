import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DesktopMenu from './desktopMenu';
import ResponsiveMenu from './responsiveMenu';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

export default function Menu() {
    const [activeMobile, setActiveMobile] = useState(false);

    const iconMobileMenu = () => {
        setActiveMobile(!activeMobile);
    };

    const iconMenu = () => {
        if (!activeMobile) {
            return <FaBars onClick={iconMobileMenu} />;
        } else {
            return <FaTimes onClick={iconMobileMenu} />;
        }
    };

    return (
        <>
            <div className='flex pt-7 w-full px-10'>
                <div className='sm:w-16 w-14'>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <img
                            className='z-50'
                            src='/img/logo.png'
                            alt='Uriel - Portfolio'
                            width={68}
                            height={68}
                        ></img>
                    </motion.button>
                </div>
                <div>
                    <div className='flex flex-row-reverse'>
                        <div className='text-3xl mainContainer text-white cursor-pointer top-10 absolute right-0 lg:hidden'>
                            {iconMenu()}
                        </div>
                    </div>
                    <nav className='ml-10  top-12 space-x-10 uppercase font-semibold lg:absolute lg:block hidden'>
                        <DesktopMenu />
                    </nav>
                </div>
            </div>
            <div
                className={`${
                    activeMobile ? '' : 'hidden'
                } flex flex-col items-center bg-main-color text-xl absolute z-20 w-full lg:hidden`}
            >
                <ResponsiveMenu />
            </div>
        </>
    );
}

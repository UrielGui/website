import React from 'react';
import { Link } from 'react-scroll';

export default function DesktopMenu() {
    return (
        <>
            <Link
                to='about'
                smooth={true}
                className='cursor-pointer text-gray-300 hover:text-uriel-blue-light'
            >
                Sobre
            </Link>
            <Link
                to='skills'
                smooth={true}
                className='cursor-pointer text-gray-300 hover:text-uriel-blue-light'
            >
                Habilidades
            </Link>
            <Link
                to='portfolio'
                smooth={true}
                className='cursor-pointer text-gray-300 hover:text-uriel-blue-light'
            >
                Portfólio
            </Link>
            <Link
                to='contact'
                smooth={true}
                className='cursor-pointer text-gray-300 hover:text-uriel-blue-light'
            >
                Contato
            </Link>
        </>
    );
}

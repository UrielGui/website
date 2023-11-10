import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaDribbble } from 'react-icons/fa';
import { FaAt } from 'react-icons/fa';

export default function Info() {
    return (
        <>
            <div className='flex flew-col sm:mt-7 flex-wrap'>
                <a
                    href='https://api.whatsapp.com/send?phone=5521971531993&text=Ol%C3%A1%20Uriel%2C%20cheguei%20at%C3%A9%20aqui%20atrav%C3%A9s%20do%20seu%20site%2C%20podemos%20conversar%3F'
                    target='_blank'
                    className='bg-green-600 text-white sm:text-2xl p-4 rounded-xl m-2 cursor-pointer hover:bg-white hover:text-black mr-4'
                >
                    <FaWhatsapp />
                </a>
                <a
                    href='https://www.linkedin.com/in/urielgui'
                    target='_blank'
                    className='bg-blue-600 text-white sm:text-2xl p-4 rounded-xl m-2 cursor-pointer hover:bg-white hover:text-black mr-4'
                >
                    <FaLinkedinIn />
                </a>
                <a
                    href='https://github.com/UrielGui'
                    target='_blank'
                    className='bg-purple-600 text-white sm:text-2xl p-4 rounded-xl cursor-pointer m-2 hover:bg-white hover:text-black mr-4'
                >
                    <FaGithub />
                </a>
                <a
                    href='https://dribbble.com/EffeThemes'
                    target='_blank'
                    className='bg-pink-600 text-white sm:text-2xl p-4 rounded-xl cursor-pointer m-2 hover:bg-white hover:text-black mr-4'
                >
                    <FaDribbble />
                </a>
                <a
                    href='malito:urielf23@hotmail.com'
                    className='bg-yellow-600 text-white sm:text-2xl p-4 rounded-xl cursor-pointer hover:bg-white m-2 hover:text-black mr-4'
                >
                    <FaAt />
                </a>
            </div>
        </>
    );
}

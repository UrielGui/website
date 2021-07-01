import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaDribbble } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { Link } from "react-scroll";

export default function Formulario() {
    return (
        <>
            <div className="flex flew-col sm:mt-7 mt-2 flex-wrap">
                <a href="https://www.linkedin.com/in/urielgui" target="_blank" className="bg-green-600 text-white sm:text-2xl p-4 rounded-xl cursor-pointer hover:bg-white hover:text-black mr-4">
                <FaWhatsapp />
                </a>
                <a href="https://www.linkedin.com/in/urielgui" target="_blank" className="bg-blue-600 text-white sm:text-2xl p-4 rounded-xl cursor-pointer hover:bg-white hover:text-black mr-4">
                <FaLinkedinIn />
                </a>
                <a href="https://github.com/UrielGui" target="_blank" className="bg-purple-600 text-white sm:text-2xl p-4 rounded-xl cursor-pointer hover:bg-white hover:text-black mr-4">
                <FaGithub />
                </a>
                <a href="https://dribbble.com/UrielGui" target="_blank" className="bg-pink-600 text-white sm:text-2xl p-4 rounded-xl cursor-pointer hover:bg-white hover:text-black mr-4">
                <FaDribbble />
                </a>
                <Link to="contact" smooth={true} className="bg-yellow-600 text-white sm:text-2xl p-4 rounded-xl cursor-pointer hover:bg-white hover:text-black mr-4">
                <AiOutlineMail />
                </Link>
            </div>
        </>
    )
}
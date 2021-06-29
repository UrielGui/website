import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaDribbble } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

export default function Footer() {
    return (
        <>
            <section className="bg-purple-800">
                <div className="container pt-4 pb-4 text-white">
                    <div className="flex">
                    <div className="flex-grow self-center">
                        © 2021 - Desenvolvido por Uriel Guimarães
                    </div>
                    <div className="">
                        <div className="flex">
                            <span className="bg-white text-black text-xl p-2.5 rounded-xl cursor-pointer hover:bg-blue-600 hover:text-white mr-4">
                                <FaLinkedinIn />
                            </span>
                            <span className="bg-white text-black text-2xl p-2.5 rounded-xl cursor-pointer hover:bg-purple-600 hover:text-white mr-4">
                                <FaGithub />
                            </span>
                            <span className="bg-white text-black text-2xl p-2.5 rounded-xl cursor-pointer hover:bg-pink-600 hover:text-white mr-4">
                                <FaDribbble />
                            </span>
                            <span className="bg-white text-black text-2xl p-2.5 rounded-xl cursor-pointer hover:bg-green-600 hover:text-white mr-4">
                                <AiOutlineMail />
                            </span>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
);
}
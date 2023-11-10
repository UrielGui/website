import React from 'react';
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
    return (
        <>
            <section className='bg-main-color-2'>
                <div className='mainContainer pt-4 md:mt-0 mt-8 pb-4 text-white'>
                    <div className='flex flex-col md:flex-row'>
                        <div className='flex-grow self-center sm:text-base text-xs'>
                            © 2023 - Desenvolvido por Uriel Guimarães
                        </div>
                        <div className='flex justify-center md:justify-start md:pt-0 pt-4'>
                            <div className='flex flex-wrap'>
                                <span className='text-sm self-center'>
                                    Visualizar projeto no:{' '}
                                </span>
                                <a
                                    href='https://github.com/UrielGui/portfolio'
                                    target='_blank'
                                    className='bg-white text-gray-900 ml-4 text-2xl p-1.5 rounded-xl cursor-pointer hover:bg-purple-600 hover:text-white mr-4'
                                >
                                    <FaGithub />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

import React from 'react';
import ZoomInScroll from '../../components/animations/zoomInScroll'
import { FiFigma } from 'react-icons/fi'
import { SiAdobexd } from 'react-icons/si'
import { SiWebpack } from 'react-icons/si'
import { SiJest } from 'react-icons/si'
import { FaGitAlt } from 'react-icons/fa'
import { FaLinux } from 'react-icons/fa'

export default function MoreSkills() {
    return (
        <>
            <section className="bg-purple-800 mt-10">
                <ZoomInScroll>
                    <div className="mainContainer pt-8 pb-8">
                        <div className="flex md:justify-center flex-wrap">
                            <span className="bg-main-color text-white text-5xl p-4 hover:bg-white hover:text-main-color mr-4 sm:mt-0 mt-4">
                                <FiFigma />
                            </span>
                            <span className="bg-main-color text-white text-5xl p-4 hover:bg-white hover:text-main-color mr-4 sm:mt-0 mt-4">
                                <SiAdobexd />
                            </span>
                            <span className="bg-main-color text-white text-5xl p-4 hover:bg-white hover:text-main-color mr-4 sm:mt-0 mt-4">
                                <SiWebpack />
                            </span>
                            <span className="bg-main-color text-white text-5xl p-4 hover:bg-white hover:text-main-color mr-4 sm:mt-0 mt-4">
                                <SiJest />
                            </span>
                            <span className="bg-main-color text-white text-5xl p-4 hover:bg-white hover:text-main-color mr-4 sm:mt-0 mt-4">
                                <FaGitAlt />
                            </span>
                            <span className="bg-main-color text-white text-5xl p-4 hover:bg-white hover:text-main-color sm:mt-0 mt-4">
                                <FaLinux />
                            </span>
                        </div>
                    </div>
                </ZoomInScroll>
            </section>
        </>
);
}
import React from 'react';
import TextPage from '../../components/textPage'
import About from './about'
import ZoomInScroll from '../../components/animations/zoomInScroll'

export default function SectionAbout() {
    return (
        <>
            <section id="about">
                <ZoomInScroll>
                    <div className="bg-about bg-no-repeat bg-cover bg-center">
                        <div className="mainContainer pt-4">
                            <TextPage title="Descubra um pouco sobre mim" />
                            <div className="flex flex-col md:flex-row md:space-x-12">
                                <div className="bg-picture-about bg-no-repeat bg-center bg-contain w-full md:w-1/3 md:mt-10 rounded-3xl h-56 md:h-32">
                                </div>
                                <About />
                            </div>
                        </div>
                    </div>
                </ZoomInScroll>
            </section>
        </>
    )
}
import React from 'react';
import Form from './form';
import ZoomInScroll from '../../components/animations/zoomInScroll'

export default function Contact() {
    return (
        <section id="contact" className="pt-8 ">
            <div className="bg-contact bg-no-repeat bg-cover bg-center py-56">
                            <div className="md:py-16 py-3 ">
                                <div className="mainContainer">
                                <ZoomInScroll>
                                    <div className="flex items-center flex-col">
                                        <h1 className="text-white text-2xl sm:text-4xl">Vamos conversar? </h1>
                                        <span className="text-green-400 pb-4"> #opentowork</span>
                                        <p className="text-white sm:text-base text-xs pt-4 2xl:text-xl pb-4">Envie-me uma mensagem, isso pode fazer a diferença em seu próximo projeto ;)</p>
                                        <Form />
                                    </div>
                                </ZoomInScroll>
                                </div>
                    </div>
            </div>
        </section>
    )
}
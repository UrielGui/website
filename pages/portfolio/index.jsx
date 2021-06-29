import React, { useState, useEffect } from 'react';
import TextPage from '../../components/text-page'
import PortfolioGallery from './portfolioGallery'

export default function Portfolio() {
    return (
        <>
            <section className="h-full">
                <div className="bg-background-about bg-no-repeat bg-cover bg-center">
                        <div className="container pt-4 pb-14">
                            <TextPage title="Meus trabalhos recentes" />
                            <div className="flex justify-center sm:mt-20 mt-10">
                        <h1 className="text-white sm:text-3xl text-2xl 2xl:text-4xl">Projetos Recentes</h1>
                    </div>
                    <div className="flex justify-center">
                        <div className="border-bottom-white"></div>
                    </div>
                    <div className="flex justify-center">
                        <div className="text-gray-200 text-opacity-60 sm:text-lg text-xs pt-5 habilidades-titulo 2xl:text-2xl">PORTFÓLIO</div>
                    </div>
                        <PortfolioGallery />
                        </div>
                </div>
            </section>
        </>
    )
}
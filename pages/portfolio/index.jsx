import React from 'react';
import TextPage from '../../components/textPage';
import PortfolioGallery from './portfolioGallery';
import RotateInScroll from '../../components/animations/rotateInScroll';

export default function Portfolio() {
    return (
        <>
            <section id='portfolio' className='h-full'>
                <div className='mainContainer pt-4 pb-14'>
                    <TextPage title='Meus trabalhos recentes' />
                    <div className='flex justify-center sm:mt-20 mt-10'>
                        <h1 className='text-white sm:text-3xl text-2xl 2xl:text-4xl'>
                            Projetos Recentes
                        </h1>
                    </div>
                    <div className='flex justify-center'>
                        <div className='border-bottom-white'></div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='text-gray-200 text-opacity-60 sm:text-lg text-xs pt-5 tracking-subtitle '>
                            PORTFÓLIO
                        </div>
                    </div>
                    <RotateInScroll>
                        <PortfolioGallery />
                    </RotateInScroll>
                </div>
            </section>
        </>
    );
}

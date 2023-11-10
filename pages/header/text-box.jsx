import React, { Component } from 'react';
import { init } from 'ityped';
import { AiFillFile } from 'react-icons/ai';

export default class TextBox extends Component {
    componentDidMount() {
        const textWriting = document.querySelector('#textWriting');
        init(textWriting, {
            showCursor: false,
            typeSpeed: 80,
            backDelay: 2500,
            strings: [
                ' desenvolvedor front end',
                ' web designer',
                ' ui designer',
                ' designer gráfico',
            ],
        });
    }
    render() {
        return (
            <div className='flex'>
                <div className='items-center'>
                    <div className='pt-4 pb-4 relative lg:top-1/12 -translate-y-1/2'>
                        <div className='pb-9 pt-4 sm:pt-12'>
                            <p className='text-base sm:text-2xl text-white'>
                                Olá{' '}
                                <img
                                    src='/img/hello.png'
                                    className='inline animate-helloAnimation'
                                    width='30px'
                                    height='30px'
                                />
                                , meu nome é
                            </p>
                        </div>
                        <div className='pb-1 text-white'>
                            <h1 className='text-4xl sm:text-6xl signature'>
                                Uriel Guimarães
                            </h1>
                        </div>
                        <div>
                            <p className='my-1.5 pb-9 sm:text-2xl text-base text-white '>
                                E eu sou
                                <span
                                    id='textWriting'
                                    className='text-uriel-blue-light animate-blink'
                                ></span>
                            </p>
                        </div>
                        <a href='curriculo.pdf' target='_blank'>
                            <button className='bg-gradient-to-r from-degrade-color1 via-degrade-color2 to-degrade-color3 py-2 px-4 sm:text-xl xl:text-2xl rounded-xl uppercase font-medium text-white hover:opacity-80'>
                                <AiFillFile className='inline mb-1.5' />{' '}
                                Download CV
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

import React, { Component } from 'react'
import { init } from 'ityped'
import { AiFillFile } from 'react-icons/ai';

export default class TextBox extends Component {
    componentDidMount() {
        const textWriting = document.querySelector('#textWriting')
        init(textWriting, { showCursor: true, typeSpeed: 80, backDelay: 2500, strings: [' desenvolvedor full stack', ' ui designer'] })
    }
    render() {
        return (
            <div className="h-full flex">
                <div className="items-center">
                    <div className="pt-4 relative lg:top-1/12 -translate-y-1/2">
                        <div className="pb-9 pt-12">
                            <p className="text-base sm:text-2xl 2xl:text-4xl text-white">
                                Olá <img 
                                src="https://i.imgur.com/IkBMN2Y.png"
                                className="inline animate-helloAnimation" 
                                width="30px" height="30px"
                                />, meu nome é
                            </p>
                        </div>
                        <div className="pb-1 text-white">
                            <h1 className="text-4xl sm:text-6xl 2xl:text-8xl signature">Uriel Guimarães</h1>
                        </div>
                        <div>
                            <p className="pb-9 sm:text-2xl text-base text-white 2xl:text-4xl">E eu sou
                        <span id="textWriting" className="bg-main-color sm:bg-transparent text-uriel-blue-light"></span>
                            </p>
                        </div>
                        <a href="curriculo.pdf" target="_blank">
                            <button className=" bg-gradient-to-r from-degrade-color1 via-degrade-color2 to-degrade-color3 py-2 px-4 sm:text-2xl rounded-xl uppercase font-medium text-white">
                                <AiFillFile className="inline mb-1.5" /> Download CV
                            </button>
                            <button className="-z-1 inset-y-3 relative opacity-50 -left-60 bg-gradient-to-r from-degrade-color1 via-degrade-color2 to-degrade-color3 py-2 px-4 sm:text-2xl rounded-xl uppercase font-medium text-white">
                                <AiFillFile className="inline mb-1.5" /> Download CV
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
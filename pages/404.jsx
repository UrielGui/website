import React from 'react';
import Head from 'next/head'
import Link from 'next/link'
import SocialMedia from '../components/socialMedia';

export default function Custom404() {
    return (
        <>
            <Head>
                <title>Uriel - Página não encontrada</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Conheça o portfólio oficial do Desenvolvedor Front End Uriel Guimarães, na qual visa sempre a inovação e a personalidade própria em seus projetos." />
            </Head>
            <div className="h-full bg-main-color">
                <div className="erro-404">4<span className="text-red-500">0</span>4</div>
                <p className="flex justify-center text-white mb-3.5">Ops... Parece que esta página não existe :(</p>
                <div className="flex justify-center">
                    <Link href="/">
                        <button className="bg-white py-2 px-4 text-3xl rounded-xl uppercase font-medium hover:bg-green-700 hover:text-white focus:outline-none">
                            Ir para a página principal
                        </button>
                    </Link>


                </div>
                <div className="flex justify-center">
                    <SocialMedia />
                </div>
            </div>
        </>
    )
}
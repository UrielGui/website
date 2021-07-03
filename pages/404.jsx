import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
    return (
        <>
            <Head>
                <title>Uriel - Página não encontrada</title>
                <link rel='icon' href='/favicon.ico' />
                <meta
                    name='description'
                    content='Conheça o portfólio oficial do Desenvolvedor Front End Uriel Guimarães, na qual visa sempre a inovação e a personalidade própria em seus projetos.'
                />
            </Head>
            <div className='flex justify-center p-4 items-center h-screen bg-main-color'>
                <div className='flex flex-col items-center'>
                    <h1 className='font-black text-xl sm:text-6xl text-white'>
                        ERRO <span className='text-red-500'>404</span>
                    </h1>
                    <p className='text-white mb-20 sm:text-xl text-sm'>
                        Ops... Parece que esta página não existe :(
                    </p>
                    <Link href='/'>
                        <button className='bg-white py-2 px-4 sm:text-3xl rounded-xl uppercase font-medium hover:bg-green-700 hover:text-white focus:outline-none'>
                            Ir para a página principal
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}

import React from 'react';
import SocialMedia from '../../components/socialMedia';

export default function About() {
    function calculateAge(birthdate) {
        const birthdateArray = birthdate.split('/');
        const birthYear = parseInt(birthdateArray[2], 10);
        const birthMonth = parseInt(birthdateArray[1], 10) - 1;
        const birthDay = parseInt(birthdateArray[0], 10);

        const today = new Date();
        const birthdateObject = new Date(birthYear, birthMonth, birthDay);

        let age = today.getFullYear() - birthdateObject.getFullYear();
        const monthDiff = today.getMonth() - birthdateObject.getMonth();

        if (
            monthDiff < 0 ||
            (monthDiff === 0 && today.getDate() < birthdateObject.getDate())
        ) {
            age--;
        }

        return age;
    }

    const myAge = calculateAge('21/02/2000');
    return (
        <div className='md:w-4/5 md:mt-20 mt-3'>
            <div className='hidden sm:block text-white sm:text-xl md:text-2xl'>
                Eis aqui uma breve apresentação minha
            </div>
            <div className='border-bottom-white hidden sm:block' />
            <div className='sm:mt-8 text-justify sm:text-base md:text-lg lg:pr-0 '>
                <span className='text-white'>
                    Olá, meu nome é{' '}
                    <span className='text-uriel-blue-light'>
                        Uriel Guimarães
                    </span>{' '}
                    e atualmente eu tenho {myAge} anos. Sou desenvolvedor Front
                    End, Web Designer, UI Designer e Designer Gráfico. Sou
                    natural do Rio de Janeiro. Meus passatempos incluem desde o
                    aprofundamento em tecnologias, até músicas, livros e filmes.
                </span>
            </div>
            <div className='mt-4 sm:mt-8 text-justify sm:text-xl md:text-lg lg:pr-0 '>
                <span className='text-white'>
                    Conheço a área do desenvolvimento web desde o final de 2013.
                    Trabalhei em alguns projetos no front-end até 2017, e em
                    2019 tomei a decisão de me aprofundar de vez nesse mercado.
                </span>
            </div>
            <div className='flex justify-center md:justify-start'>
                <SocialMedia />
            </div>
        </div>
    );
}

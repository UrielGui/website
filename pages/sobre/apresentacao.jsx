import SocialMedia from '../../components/social-media';

export default function Apresentação() {
    return (
        <div className="md:w-3/5 md:mt-20 mt-3 h-72">
            <div className="hidden sm:block text-white sm:text-xl md:text-2xl 2xl:text-4xl">Eis aqui uma breve apresentação minha</div>
            <div className="border-bottom-white hidden sm:block"></div>
            <div className="sm:mt-8 text-justify sm:text-base md:text-lg 2xl:text-3xl lg:pr-0 pr-10">
                <span className="text-white">Olá, meu nome é <span className="text-uriel-blue-light">Uriel Guimarães</span> e atualmente eu tenho 21 anos. Sou desenvolvedor front-end e UX/UI Designer, além de possuir conhecimentos a nível intermediário/avançado com design gráfico.
                    </span>
            </div>
            <div className="mt-4 sm:mt-8 text-justify sm:text-xl md:text-lg 2xl:text-3xl lg:pr-0 pr-10">
                <span className="text-white">Conheço a área do desenvolvimento web desde o final de 2013, e hoje em dia estou mais atualizado nas tendências e demandas do mercado.
                    </span>
            </div>
            <SocialMedia />
        </div>
    )
}
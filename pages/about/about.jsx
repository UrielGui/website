import SocialMedia from '../../components/social-media';

export default function About() {
    return (
        <div className="md:w-4/5 md:mt-20 mt-3">
            <div className="hidden sm:block text-white sm:text-xl md:text-2xl 2xl:text-4xl">Eis aqui uma breve apresentação minha</div>
            <div className="border-bottom-white hidden sm:block"></div>
            <div className="sm:mt-8 text-justify sm:text-base md:text-lg 2xl:text-3xl lg:pr-0 ">
                <span className="text-white">Olá, meu nome é <span className="text-uriel-blue-light">Uriel Guimarães</span> e atualmente eu tenho 21 anos. Sou desenvolvedor full stack autodidata e UI Designer. Sou natural do Rio de Janeiro. Meus passatempos incluem desde o aprofundamento em tecnologias, até músicas, livros e filmes.
                    </span>
            </div>
            <div className="mt-4 sm:mt-8 text-justify sm:text-xl md:text-lg 2xl:text-3xl lg:pr-0 ">
                <span className="text-white">Conheço a área do desenvolvimento web desde o final de 2013. Trabalhei em alguns projetos no front-end até 2017, e em 2019 tomei a decisão de me aprofundar de vez nesse mercado.
                    </span>
            </div>
            <SocialMedia />
        </div>
    )
}
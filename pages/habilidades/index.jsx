import TextPage from '../../components/text-page'
import HabilidadesMedidor from './habilidades-medidor'

export default function Habilidades() {
    return (
        <section id="habilidades" className="h-full">
            <div className="h-full bg-habilidades-background bg-no-repeat bg-cover bg-center bg-fixed">
                <div className="pl-10 pt-4 md:h-screen">
                    <TextPage titulo="Confira minhas habilidades" />
                    <div className="flex justify-center mt-20">
                        <h1 className="text-white text-3xl 2xl:text-4xl">Experiência de Trabalho</h1>
                    </div>
                    <div className="flex justify-center">
                        <div className="border-bottom-white"></div>
                    </div>
                    <div className="flex justify-center">
                        <div className="text-gray-200 text-opacity-60 pt-5 habilidades-titulo 2xl:text-2xl">HABILIDADES</div>
                    </div>
                    <HabilidadesMedidor />
                </div>
            </div>
        </section>
    )
}
import TextPage from '../../components/text-page'
import HabilidadesMedidor from './habilidades-medidor'

export default function Habilidades() {
    return (
        <section id="habilidades" className="h-full">
            <div className="min-h-screen bg-habilidades-background bg-no-repeat bg-cover bg-center bg-fixed">
                <div className="pl-10 pt-4 md:min-h-screen">
                    <TextPage titulo="Confira minhas habilidades" />
                    <div className="flex justify-center sm:mt-20 mt-10">
                        <h1 className="text-white sm:text-3xl text-lg 2xl:text-4xl">Experiência de Trabalho</h1>
                    </div>
                    <div className="flex justify-center">
                        <div className="border-bottom-white"></div>
                    </div>
                    <div className="flex justify-center">
                        <div className="text-gray-200 text-opacity-60 sm:text-2xl text-xs pt-5 habilidades-titulo 2xl:text-2xl">HABILIDADES</div>
                    </div>
                    <HabilidadesMedidor />
                </div>
            </div>
        </section>
    )
}
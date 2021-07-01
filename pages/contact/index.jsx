import Form from './form';
import ZoomInScroll from '../../components/animations/zoomInScroll'

export default function Contact() {
    return (
        <section id="contact" className="pt-8">
            <div className="bg-contact bg-no-repeat bg-cover bg-center">
                    <div className="flex">
                        <div className="md:w-1/2">
                            <div className="md:py-16 py-3">
                                <div className="mainContainer">
                                <ZoomInScroll>
                                <h1 className="text-white text-2xl 2xl:text-4xl">Formulário de contato</h1>
                                <p className="text-white sm:text-base text-xs pt-4 2xl:text-xl">Envie-me uma mensagem, isso pode fazer a diferença em seu próximo projeto ;)</p>
                                    <Form />
                                </ZoomInScroll>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 md:bg-contact-2 md:bg-no-repeat md:bg-cover md:bg-center"></div>
                    </div>
            </div>
        </section>
    )
}
import Form from './form';

export default function Contact() {
    return (
        <section>
            <div className="bg-contato-background bg-no-repeat bg-cover bg-center">
                    <div className="flex">
                        <div className="md:w-1/2">
                            <div className="md:py-16 py-3 pr-20">
                                <div className="mainContainer">
                                <h1 className="text-white text-2xl 2xl:text-4xl">Formulário de contato</h1>
                                <p className="text-white sm:text-base text-xs pt-4 2xl:text-xl">Envie-me uma mensagem, isso pode fazer a diferença em seu próximo projeto ;)</p>
                                <Form />
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 md:min-h-screen md:bg-contato-2-background md:bg-no-repeat md:bg-cover md:bg-center"></div>
                    </div>
            </div>
        </section>
    )
}
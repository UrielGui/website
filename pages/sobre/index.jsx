<<<<<<< HEAD
import LazyLoad from 'react-lazyload';
import TextPage from '../../components/text-page'
import Apresentacao from './apresentacao'

export default function Sobre() {
    return (
        <>
            <section id="sobre" className="h-full">
                <div className="min-h-screen bg-sobre-background bg-no-repeat bg-cover bg-center">
                    <LazyLoad>
                        <div className="pl-10 pt-4 md:min-h-screen">
                            <TextPage titulo="Descubra um pouco sobre mim" />
                            <div className="flex flex-col md:flex-row md:space-x-12">
                                <div className="bg-sobre-foto bg-no-repeat bg-center bg-contain w-full md:w-1/3 md:mt-10 rounded-3xl s-bg-1 s-bg-2">
                                </div>
                                <Apresentacao />
                            </div>
                        </div>
                    </LazyLoad>
                </div>
            </section>
        </>
    )
=======
import LazyLoad from 'react-lazyload';
import TextPage from '../../components/text-page'
import Apresentacao from './apresentacao'

export default function Sobre() {
    return (
        <>
            <section id="sobre" className="h-full">
                <div className="min-h-screen overflow-auto bg-sobre-background bg-no-repeat bg-cover bg-center">
                    <LazyLoad>
                        <div className="pl-10 pt-4 md:min-h-screen">
                            <TextPage titulo="Descubra um pouco sobre mim" />
                            <div className="flex flex-col md:flex-row md:space-x-12">
                                <div className="bg-sobre-foto bg-no-repeat bg-center bg-contain w-full md:w-1/3 md:mt-10 rounded-3xl s-bg-1 s-bg-2">
                                </div>
                                <Apresentacao />
                            </div>
                        </div>
                    </LazyLoad>
                </div>
            </section>
        </>
    )
>>>>>>> 4f6afa82918f9f09bae9fe526fd87c8f524e62f4
}
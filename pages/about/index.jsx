import TextPage from '../../components/text-page'
import About from './about'

export default function SectionAbout() {
    return (
        <>
            <section id="about">
                <div className="bg-background-about bg-no-repeat bg-cover bg-center">
                        <div className="mainContainer pt-4">
                            <TextPage title="Descubra um pouco sobre mim" />
                            <div className="flex flex-col md:flex-row md:space-x-12">
                                <div className="bg-picture-about bg-no-repeat bg-center bg-contain w-full md:w-1/3 md:mt-10 rounded-3xl s-bg-1 s-bg-2">
                                </div>
                                <About />
                            </div>
                        </div>
                </div>
            </section>
        </>
    )
}
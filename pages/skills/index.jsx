import TextPage from '../../components/text-page'
import SkillsProgress from './skillsProgress'

export default function SkillSection() {
    return (
        <section>
            <div className="bg-skills bg-no-repeat bg-cover bg-center bg-fixed">
                <div className="container pt-4 pb-10">
                    <TextPage title="Confira minhas habilidades" />
                    <div className="flex justify-center sm:mt-20 mt-10">
                        <h1 className="text-white sm:text-3xl text-2xl 2xl:text-4xl">Conhecimento Profissional</h1>
                    </div>
                    <div className="flex justify-center">
                        <div className="border-bottom-white"></div>
                    </div>
                    <div className="flex justify-center">
                        <div className="text-gray-200 text-opacity-60 sm:text-lg text-xs pt-5 habilidades-titulo 2xl:text-2xl">HABILIDADES</div>
                    </div>
                    <SkillsProgress />
                </div>
            </div>
        </section>
    )
}
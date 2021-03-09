export default function HabilidadesMedidor() {
    return (
        <>
            <div className="flex justify-between pt-8 pr-10">
                <div className="w-2/5 ">
                    <h2 className="text-white pb-1 text-xs lg:text-base md:text-base 2xl:text-2xl">HTML / CSS</h2>
                    <div className="progress">
                        <span className="progress-value progress-value-html" />
                    </div>
                </div>
                <div className="w-2/5 ">
                    <h2 className="text-white pb-1 text-xs lg:text-base md:text-base 2xl:text-2xl">UI/UX</h2>
                    <div className="progress">
                        <span className="progress-value progress-value-ui-ux" />
                    </div>
                </div>
            </div>

            <div className="flex justify-between pt-8 pr-10">
                <div className="w-2/5 ">
                    <h2 className="text-white pb-1 text-xs lg:text-base md:text-base 2xl:text-2xl">JAVASCRIPT / JQUERY</h2>
                    <div className="progress">
                        <span className="progress-value progress-value-js" />
                    </div>
                </div>
                <div className="w-2/5 ">
                    <h2 className="text-white pb-1 text-xs lg:text-base md:text-base 2xl:text-2xl">WORDPRESS</h2>
                    <div className="progress">
                        <span className="progress-value progress-value-wp" />
                    </div>
                </div>
            </div>

            <div className="flex justify-between pt-8 pr-10">
                <div className="w-2/5 ">
                    <h2 className="text-white pb-1 text-xs lg:text-base md:text-base 2xl:text-2xl">REACT / NEXT JS</h2>
                    <div className="progress">
                        <span className="progress-value progress-value-react" />
                    </div>
                </div>
                <div className="w-2/5 ">
                    <h2 className="text-white pb-1 text-xs lg:text-base md:text-base 2xl:text-2xl">SASS / LESS</h2>
                    <div className="progress">
                        <span className="progress-value progress-value-sass" />
                    </div>
                </div>
            </div>

            <div className="flex justify-between pt-8 pr-10">
                <div className="w-2/5 ">
                    <h2 className="text-white pb-1 text-xs lg:text-base md:text-base 2xl:text-2xl">BOOTSTRAP / TAILWIND CSS</h2>
                    <div className="progress">
                        <span className="progress-value progress-value-libcss" />
                    </div>
                </div>
                <div className="w-2/5 ">
                    <h2 className="text-white pb-1 text-xs lg:text-base md:text-base 2xl:text-2xl">DESIGN RESPONSIVO</h2>
                    <div className="progress">
                        <span className="progress-value progress-value-responsivo" />
                    </div>
                </div>
            </div>
        </>
    )
}
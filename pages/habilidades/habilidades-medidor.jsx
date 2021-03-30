import LazyLoad from 'react-lazyload';

export default function HabilidadesMedidor() {
    return (
        <LazyLoad>
            <div className="sm:flex contents justify-between pt-8 pr-10">
                <div className="sm:w-2/5 w-full pr-10 sm:pr-0">
                    <h2 className="py-3 sm:py-0 text-white pb-1 text-xs lg:text-base md:text-base 2xl:text-2xl">HTML / CSS</h2>
                    <div className="progress">
                        <span className="progress-value progress-value-html" />
                    </div>
                </div>
                <div className="sm:w-2/5 w-full pr-10 sm:pr-0">
                    <h2 className="py-3 sm:py-0 text-white pb-1 text-xs lg:text-base md:text-base 2xl:text-2xl">UI/UX</h2>
                    <div className="progress">
                        <span className="progress-value progress-value-ui-ux" />
                    </div>
                </div>
            </div>

            <div className="sm:flex contents justify-between pt-8 pr-10">
                <div className="sm:w-2/5 w-full pr-10 sm:pr-0">
                    <h2 className="py-3 sm:py-0 text-white pb-1 text-xs lg:text-base md:text-base 2xl:text-2xl">JAVASCRIPT / NODE</h2>
                    <div className="progress">
                        <span className="progress-value progress-value-js" />
                    </div>
                </div>
                <div className="sm:w-2/5 w-full pr-10 sm:pr-0">
                    <h2 className="py-3 sm:py-0 text-white pb-1 text-xs lg:text-base md:text-base 2xl:text-2xl">WORDPRESS</h2>
                    <div className="progress">
                        <span className="progress-value progress-value-wp" />
                    </div>
                </div>
            </div>

            <div className="sm:flex contents justify-between pt-8 pr-10">
                <div className="sm:w-2/5 w-full pr-10 sm:pr-0">
                    <h2 className="py-3 sm:py-0 text-white pb-1 text-xs lg:text-base md:text-base 2xl:text-2xl">REACT / NEXT JS</h2>
                    <div className="progress">
                        <span className="progress-value progress-value-react" />
                    </div>
                </div>
                <div className="sm:w-2/5 w-full pr-10 sm:pr-0">
                    <h2 className="py-3 sm:py-0 text-white pb-1 text-xs lg:text-base md:text-base 2xl:text-2xl">SASS / LESS</h2>
                    <div className="progress">
                        <span className="progress-value progress-value-sass" />
                    </div>
                </div>
            </div>

            <div className="sm:flex contents justify-between pt-8 pr-10">
                <div className="sm:w-2/5 w-full pr-10 sm:pr-0">
                    <h2 className="py-3 sm:py-0 text-white pb-1 text-xs lg:text-base md:text-base 2xl:text-2xl">BOOTSTRAP / TAILWIND CSS</h2>
                    <div className="progress">
                        <span className="progress-value progress-value-libcss" />
                    </div>
                </div>
                <div className="sm:w-2/5 w-full pr-10 sm:pr-0">
                    <h2 className="py-3 sm:py-0 text-white pb-1 text-xs lg:text-base md:text-base 2xl:text-2xl">DESIGN RESPONSIVO</h2>
                    <div className="progress">
                        <span className="progress-value progress-value-responsivo" />
                    </div>
                    <div className="sm:pb-0 pb-6"></div>
                </div>
            </div>
        </LazyLoad>
    )
}
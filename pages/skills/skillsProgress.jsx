import LazyLoad from 'react-lazyload';

export default function SkillsProgress() {
    return (
        <LazyLoad>
            <div className="sm:flex contents justify-between pt-8 pr-10">
                <div className="sm:w-2/5 w-full pr-10 sm:pr-0">
                    <h2 className="py-3 sm:py-0 text-white pb-1 text-xs lg:text-base md:text-base 2xl:text-2xl">HTML / CSS</h2>
                    <div className="progress">
                        <span className="progress-value animate-htmlProgressValue" />
                    </div>
                </div>
                <div className="sm:w-2/5 w-full pr-10 sm:pr-0">
                    <h2 className="py-3 sm:py-0 text-white pb-1 text-xs lg:text-base md:text-base 2xl:text-2xl">UI DESIGN</h2>
                    <div className="progress">
                        <span className="progress-value animate-uiProgressValue" />
                    </div>
                </div>
            </div>

            <div className="sm:flex contents justify-between pt-8 pr-10">
                <div className="sm:w-2/5 w-full pr-10 sm:pr-0">
                    <h2 className="py-3 sm:py-0 text-white pb-1 text-xs lg:text-base md:text-base 2xl:text-2xl">JAVASCRIPT ES6+</h2>
                    <div className="progress">
                        <span className="progress-value animate-jsProgressValue" />
                    </div>
                </div>
                <div className="sm:w-2/5 w-full pr-10 sm:pr-0">
                    <h2 className="py-3 sm:py-0 text-white pb-1 text-xs lg:text-base md:text-base 2xl:text-2xl">NODE JS / EXPRESS</h2>
                    <div className="progress">
                        <span className="progress-value animate-nodeProgressValue" />
                    </div>
                </div>
            </div>

            <div className="sm:flex contents justify-between pt-8 pr-10">
                <div className="sm:w-2/5 w-full pr-10 sm:pr-0">
                    <h2 className="py-3 sm:py-0 text-white pb-1 text-xs lg:text-base md:text-base 2xl:text-2xl">REACT / REACT NATIVE</h2>
                    <div className="progress">
                        <span className="progress-value animate-reactProgressValue" />
                    </div>
                </div>
                <div className="sm:w-2/5 w-full pr-10 sm:pr-0">
                    <h2 className="py-3 sm:py-0 text-white pb-1 text-xs lg:text-base md:text-base 2xl:text-2xl">NEXT JS</h2>
                    <div className="progress">
                        <span className="progress-value animate-nextProgressValue" />
                    </div>
                </div>
            </div>

            <div className="sm:flex contents justify-between pt-8 pr-10">
                <div className="sm:w-2/5 w-full pr-10 sm:pr-0">
                    <h2 className="py-3 sm:py-0 text-white pb-1 text-xs lg:text-base md:text-base 2xl:text-2xl">SASS / LESS</h2>
                    <div className="progress">
                        <span className="progress-value animate-sassProgressValue" />
                    </div>
                </div>
                <div className="sm:w-2/5 w-full pr-10 sm:pr-0">
                    <h2 className="py-3 sm:py-0 text-white pb-1 text-xs lg:text-base md:text-base 2xl:text-2xl">API REST</h2>
                    <div className="progress">
                        <span className="progress-value animate-apiProgressValue" />
                    </div>
                    <div className="sm:pb-0 pb-6"></div>
                </div>
            </div><div className="sm:flex contents justify-between pt-8 pr-10">
                <div className="sm:w-2/5 w-full pr-10 sm:pr-0">
                    <h2 className="py-3 sm:py-0 text-white pb-1 text-xs lg:text-base md:text-base 2xl:text-2xl">BOOTSTRAP / TAILWIND CSS</h2>
                    <div className="progress">
                        <span className="progress-value animate-bootstrapProgressValue" />
                    </div>
                </div>
                <div className="sm:w-2/5 w-full pr-10 sm:pr-0">
                    <h2 className="py-3 sm:py-0 text-white pb-1 text-xs lg:text-base md:text-base 2xl:text-2xl">SQL / NOSQL</h2>
                    <div className="progress">
                        <span className="progress-value animate-sqlProgressValue" />
                    </div>
                    <div className="sm:pb-0 pb-6"></div>
                </div>
            </div>
        </LazyLoad>
    )
}
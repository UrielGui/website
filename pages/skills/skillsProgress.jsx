import React from 'react';
import SkillsAnimation from '../../components/animations/skillsAnimation';

export default function SkillsProgress() {
    return (
        <>
            <div className='sm:flex contents justify-between pt-8 '>
                <div className='sm:w-2/5 w-full  sm:pr-0'>
                    <h2 className='py-3 sm:py-0 text-white pb-1 text-xs lg:text-base md:text-base '>
                        HTML / CSS
                    </h2>
                    <SkillsAnimation>
                        <div className='progress'>
                            <span className='progress-value animate-htmlProgressValue' />
                        </div>
                    </SkillsAnimation>
                </div>
                <div className='sm:w-2/5 w-full  sm:pr-0'>
                    <h2 className='py-3 sm:py-0 text-white pb-1 text-xs lg:text-base md:text-base '>
                        UI DESIGN
                    </h2>
                    <SkillsAnimation>
                        <div className='progress'>
                            <span className='progress-value animate-uiProgressValue' />
                        </div>
                    </SkillsAnimation>
                </div>
            </div>

            <div className='sm:flex contents justify-between pt-8 '>
                <div className='sm:w-2/5 w-full  sm:pr-0'>
                    <h2 className='py-3 sm:py-0 text-white pb-1 text-xs lg:text-base md:text-base '>
                        JAVASCRIPT ES6+
                    </h2>
                    <SkillsAnimation>
                        <div className='progress'>
                            <span className='progress-value animate-jsProgressValue' />
                        </div>
                    </SkillsAnimation>
                </div>
                <div className='sm:w-2/5 w-full  sm:pr-0'>
                    <h2 className='py-3 sm:py-0 text-white pb-1 text-xs lg:text-base md:text-base '>
                        WORDPRESS / ELEMENTOR
                    </h2>
                    <SkillsAnimation>
                        <div className='progress'>
                            <span className='progress-value animate-nodeProgressValue' />
                        </div>
                    </SkillsAnimation>
                </div>
            </div>

            <div className='sm:flex contents justify-between pt-8 '>
                <div className='sm:w-2/5 w-full  sm:pr-0'>
                    <h2 className='py-3 sm:py-0 text-white pb-1 text-xs lg:text-base md:text-base '>
                        REACT / REACT NATIVE / NEXT JS
                    </h2>
                    <SkillsAnimation>
                        <div className='progress'>
                            <span className='progress-value animate-reactProgressValue' />
                        </div>
                    </SkillsAnimation>
                </div>
                <div className='sm:w-2/5 w-full  sm:pr-0'>
                    <h2 className='py-3 sm:py-0 text-white pb-1 text-xs lg:text-base md:text-base '>
                        DESIGN GRÁFICO
                    </h2>
                    <SkillsAnimation>
                        <div className='progress'>
                            <span className='progress-value animate-nextProgressValue' />
                        </div>
                    </SkillsAnimation>
                </div>
            </div>

            <div className='sm:flex contents justify-between pt-8 '>
                <div className='sm:w-2/5 w-full  sm:pr-0'>
                    <h2 className='py-3 sm:py-0 text-white pb-1 text-xs lg:text-base md:text-base '>
                        SASS / LESS
                    </h2>
                    <SkillsAnimation>
                        <div className='progress'>
                            <span className='progress-value animate-sassProgressValue' />
                        </div>
                    </SkillsAnimation>
                </div>
                <div className='sm:w-2/5 w-full  sm:pr-0'>
                    <h2 className='py-3 sm:py-0 text-white pb-1 text-xs lg:text-base md:text-base '>
                        TYPESCRIPT
                    </h2>
                    <SkillsAnimation>
                        <div className='progress'>
                            <span className='progress-value animate-apiProgressValue' />
                        </div>
                    </SkillsAnimation>
                </div>
            </div>
            <div className='sm:flex contents justify-between pt-8 '>
                <div className='sm:w-2/5 w-full  sm:pr-0'>
                    <h2 className='py-3 sm:py-0 text-white pb-1 text-xs lg:text-base md:text-base '>
                        BOOTSTRAP / TAILWIND CSS
                    </h2>
                    <SkillsAnimation>
                        <div className='progress'>
                            <span className='progress-value animate-bootstrapProgressValue' />
                        </div>
                    </SkillsAnimation>
                </div>
                <div className='sm:w-2/5 w-full  sm:pr-0'>
                    <h2 className='py-3 sm:py-0 text-white pb-1 text-xs lg:text-base md:text-base '>
                        JQUERY
                    </h2>
                    <SkillsAnimation>
                        <div className='progress'>
                            <span className='progress-value animate-sqlProgressValue' />
                        </div>
                        <div className='sm:pb-0 pb-6'></div>
                    </SkillsAnimation>
                </div>
            </div>
        </>
    );
}

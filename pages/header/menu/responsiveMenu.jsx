import React from 'react'
import { Link } from "react-scroll";
import FadeIn from '../../../components/animations/menuAnimation'
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";

export default function ResponsiveMenu(props) {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    return (
        <FadeIn>
            <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ duration: 0.6 }}
        variants={{
            hidden: { opacity: 0, },
            visible: { opacity: 1, }
        }}
      >
        <div className="flex flex-col p-8 pt-14 leading-loose">
            <Link activeClass={props.activeMenu} to="about" smooth={true} spy={true} className="cursor-pointer text-gray-300 hover:text-uriel-blue-light">
                Sobre
            </Link>
            <Link activeClass={props.activeMenu} to="skills" smooth={true} spy={true}  className="cursor-pointer text-gray-300 hover:text-uriel-blue-light">
                Habilidades
            </Link>
            <Link activeClass={props.activeMenu} to="portfolio" smooth={true} spy={true}  className="cursor-pointer text-gray-300 hover:text-uriel-blue-light">
                Portfólio
            </Link>
            <Link activeClass={props.activeMenu} to="contact" smooth={true} spy={true}  className="cursor-pointer text-gray-300 hover:text-uriel-blue-light">
                Contato
            </Link><br />
            <a href="curriculo.pdf" target="_blank">
                <button className="bg-white py-2 text-black px-4 sm:text-3xl text-base rounded-xl uppercase font-medium hover:bg-green-700 hover:text-white focus:outline-none">
                    Download CV
                </button>
            </a>
        </div>
        </motion.div>
        </FadeIn>
    )
}
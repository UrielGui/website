import React, { useEffect } from 'react';
import { motion } from "framer-motion"

export default function Loading(props) {
    function getRandomArbitrary(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }

    useEffect(() => {
        setTimeout(() => props.setLoadingPage(false), getRandomArbitrary(800, 4000));
      }, [])

    return (
        <div className="fixed h-screen w-full z-50 bg-main-color">
            <div className="mainContainer h-full">
                <div className="flex h-full justify-center items-center text-white">
                <motion.div
                    animate={{
                    scale: [0.5, 1, 0.2, 0.7, 0.5],
                    rotate: [0, 0, 360, 270, 0],
                    }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <img className="z-50" src="/img/logo.png" alt="Uriel - Portfolio" width={100} height={100}></img>
                </motion.div>

                </div>
            </div>
        </div>
    )
}
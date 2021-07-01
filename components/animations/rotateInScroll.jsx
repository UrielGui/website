import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";

export default function ZoomInWhenVisible({ children }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
  
    return (
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
        {children}
      </motion.div>
    );
  }
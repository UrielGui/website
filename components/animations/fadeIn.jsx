import React from "react";
import { motion } from "framer-motion"

export default function FadeInAnimation({ children }) {
    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }
      
    return (
        <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 2 }}
        >
            {children}
        </motion.div>
    );
  }
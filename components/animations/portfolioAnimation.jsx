import React from 'react';
import { motion } from 'framer-motion';

export default function PortfolioAnimation({ children }) {
    const variants = {
        hidden: { scale: 0, opacity: 0 },
        visible: { scale: 1, opacity: 1 },
    };
    return (
        <motion.div
            initial='hidden'
            animate='visible'
            variants={variants}
            transition={{ duration: 0.7 }}
        >
            {children}
        </motion.div>
    );
}

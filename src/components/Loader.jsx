import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => (
    <motion.div
        className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-primary"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
        {/* Spinning ring */}
        <div className="relative w-20 h-20 mb-8">
            {/* Outer ring */}
            <motion.div
                className="absolute inset-0 rounded-full border-2 border-accent/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            />
            {/* Spinning arc */}
            <motion.div
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-accent"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
            {/* Inner pulse dot */}
            <motion.div
                className="absolute inset-4 rounded-full bg-accent/10 border border-accent/30"
                animate={{ scale: [1, 1.15, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
        </div>

        {/* Brand name */}
        <motion.div
            className="flex gap-1 items-baseline"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
        >
            <span className="text-3xl font-extrabold text-white tracking-tighter">Sonali</span>
            <span className="text-3xl font-extrabold text-accent tracking-tighter">Priya</span>
        </motion.div>

        {/* Tagline */}
        <motion.p
            className="text-gray-500 text-xs tracking-[0.3em] uppercase mt-2 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
        >
            Stackvil Technologies
        </motion.p>

        {/* Progress bar */}
        <div className="mt-8 w-40 h-0.5 bg-white/5 rounded-full overflow-hidden">
            <motion.div
                className="h-full bg-gradient-to-r from-accent/50 via-accent to-accent/50 rounded-full"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            />
        </div>
    </motion.div>
);

export default Loader;

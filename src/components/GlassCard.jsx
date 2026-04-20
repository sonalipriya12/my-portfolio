import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

const GlassCard = ({ children, className, onClick }) => (
    <div
        onClick={onClick}
        className={cn(
            'relative overflow-hidden backdrop-blur-xl bg-card border border-white/5 rounded-2xl shadow-xl shadow-black/20 hover:border-accent/40 transition-all duration-500',
            className
        )}
    >
        {/* Subtle top-edge highlight */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
        {children}
    </div>
);

export default GlassCard;

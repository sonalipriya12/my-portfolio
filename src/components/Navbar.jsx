import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location.pathname]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'Services', path: '/services' },
        { name: 'Clients', path: '/clients' },
        { name: 'Company', path: '/company' },
        { name: 'About', path: '/about' },
    ];

    const isActive = (path) => {
        if (path === '/') return location.pathname === '/';
        return location.pathname.startsWith(path);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={cn(
                'fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent',
                scrolled ? 'bg-primary/80 backdrop-blur-md border-white/5 py-3' : 'bg-transparent py-5'
            )}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold tracking-tighter cursor-pointer group no-underline">
                    <span className="text-white">SONALI</span>
                    <span className="text-accent group-hover:text-white transition-colors">.DEV</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-7">
                    {navLinks.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className={cn(
                                'text-sm font-medium transition-colors relative group',
                                isActive(item.path) ? 'text-accent' : 'text-gray-300 hover:text-accent'
                            )}
                        >
                            {item.name}
                            <span className={cn(
                                'absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300',
                                isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                            )} />
                        </Link>
                    ))}
                </div>

                {/* Hire Me CTA */}
                <div className="hidden md:flex">
                    <Link
                        to="/contact"
                        className="px-5 py-2 rounded-full bg-accent text-white text-sm font-semibold hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-none"
                    >
                        Hire Me
                    </Link>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <AnimatePresence mode="wait">
                        {mobileMenuOpen ? (
                            <motion.span key="x"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X size={22} />
                            </motion.span>
                        ) : (
                            <motion.span key="menu"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Menu size={22} />
                            </motion.span>
                        )}
                    </AnimatePresence>
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="md:hidden bg-secondary/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-1">
                            {navLinks.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className={cn(
                                        'text-base font-medium py-3 px-4 rounded-xl transition-all',
                                        isActive(item.path)
                                            ? 'bg-accent/15 text-accent'
                                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-4 border-t border-white/10 mt-2">
                                <Link
                                    to="/contact"
                                    className="block text-center px-5 py-3 rounded-full bg-accent text-white text-sm font-bold hover:bg-white hover:text-black transition-all duration-300"
                                >
                                    Hire Me
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;

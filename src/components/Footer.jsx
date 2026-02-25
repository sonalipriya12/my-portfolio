import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, Github, Linkedin, Twitter, ArrowUpRight, Code2, Zap } from 'lucide-react';

const Footer = () => {
    const navLinks = [
        { label: 'About', to: '/about' },
        { label: 'Projects', to: '/projects' },
        { label: 'Services', to: '/services' },
        { label: 'Clients', to: '/clients' },
        { label: 'Company', to: '/company' },
        { label: 'Contact', to: '/contact' },
    ];

    const projects = [
        { label: 'E3 & E4 Mall App', to: '/projects/e3-e4-mall-app' },
        { label: 'Hindustan Security', to: '/projects/hindustan-security-services' },
        { label: 'Jain Silver Plaza', to: '/projects/jain-silver-plaza' },
        { label: 'Tata Motors', to: '/projects/tata-motors' },
        { label: 'NSM School', to: '/projects/nsm-school' },
    ];

    const socials = [
        { Icon: Github, href: 'https://github.com', label: 'GitHub' },
        { Icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
        { Icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    ];

    return (
        <footer className="relative bg-primary border-t border-white/5 overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-10">
                {/* Top grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand column */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                                <Code2 size={18} className="text-white" />
                            </div>
                            <span className="text-white font-bold text-lg tracking-tight">Stackvil</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Building enterprise-grade digital solutions that power real-world businesses. From SaaS to e-commerce — we deliver.
                        </p>
                        {/* Socials */}
                        <div className="flex gap-3">
                            {socials.map(({ Icon, href, label }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent/40 hover:bg-accent/10 transition-all duration-300"
                                    aria-label={label}
                                >
                                    <Icon size={16} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-6">Navigation</h3>
                        <ul className="space-y-3">
                            {navLinks.map(({ label, to }) => (
                                <li key={label}>
                                    <Link
                                        to={to}
                                        className="text-gray-400 hover:text-accent text-sm transition-colors duration-200 flex items-center gap-1 group"
                                    >
                                        <span className="group-hover:translate-x-1 transition-transform duration-200">{label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Featured Projects */}
                    <div>
                        <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-6">Featured Projects</h3>
                        <ul className="space-y-3">
                            {projects.map(({ label, to }) => (
                                <li key={label}>
                                    <Link
                                        to={to}
                                        className="text-gray-400 hover:text-accent text-sm transition-colors duration-200 flex items-center gap-1 group"
                                    >
                                        <span className="group-hover:translate-x-1 transition-transform duration-200">{label}</span>
                                        <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-6">Get In Touch</h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="mailto:sonalipriya@stackvil.com" className="flex items-center gap-3 text-gray-400 hover:text-accent text-sm transition-colors group">
                                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors shrink-0">
                                        <Mail size={14} className="text-accent" />
                                    </div>
                                    sonalipriya@stackvil.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+919182350557" className="flex items-center gap-3 text-gray-400 hover:text-accent text-sm transition-colors group">
                                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors shrink-0">
                                        <Phone size={14} className="text-accent" />
                                    </div>
                                    +91 91823 50557
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/919182350557" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-green-400 text-sm transition-colors group">
                                    <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors shrink-0">
                                        <MessageCircle size={14} className="text-green-400" />
                                    </div>
                                    WhatsApp Us
                                </a>
                            </li>
                        </ul>

                        {/* CTA */}
                        <Link
                            to="/contact"
                            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-xl hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:shadow-accent/40 group"
                        >
                            <Zap size={14} />
                            Start a Project
                            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} <span className="text-gray-400 font-medium">Sonali Priya Sahoo</span>. All rights reserved.
                    </p>
                    <p className="text-gray-600 text-xs flex items-center gap-1.5">
                        Crafted with <span className="text-accent">♥</span> at <span className="text-gray-400 font-medium">Stackvil Technologies Pvt Ltd</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

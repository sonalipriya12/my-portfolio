import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Tilt } from 'react-tilt';
import { ExternalLink, Database, ShoppingCart, TabletSmartphone, Globe, Layout, ArrowRight, ShieldCheck, GraduationCap } from 'lucide-react';

const ProjectsPage = () => {
    const defaultOptions = {
        reverse: false,  // reverse the tilt direction
        max: 25,     // max tilt rotation (degrees)
        perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1.02,   // 2 = 200%, 1.5 = 150%, etc..
        speed: 1000,   // Speed of the enter/exit transition
        transition: true,   // Set a transition on enter/exit.
        axis: null,   // What axis should be disabled. Can be X or Y.
        reset: true,    // If the tilt effect has to be reset on exit.
        easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }

    const categories = ["All", "Ecommerce", "Business", "SaaS/App", "Jewellery/Gold", "Security", "Education"];
    const [selectedCategory, setSelectedCategory] = useState("All");

    const projects = [
        {
            title: "E3 & E4 Mall App",
            category: "SaaS/App",
            desc: "A comprehensive multi-vendor mall application similar to Swiggy/Zomato, enabling users to order from various stores within a mall ecosystem.",
            tech: ["React Native", "Node.js", "MongoDB", "Redux"],
            image: "from-orange-900 to-red-900",
            icon: <TabletSmartphone size={32} />
        },
        {
            title: "Jain Silver Plaza",
            category: "Jewellery/Gold",
            desc: "Live gold and silver rate fetcher application with real-time updates and an elegant catalog for silver artifacts.",
            tech: ["Next.js", "API Integration", "Tailwind"],
            image: "from-slate-800 to-gray-500",
            icon: <Database size={32} />
        },
        {
            title: "Gharsansar",
            category: "Ecommerce",
            desc: "A full-featured e-commerce platform for home essentials with secure payment gateway integration and inventory management.",
            tech: ["MERN Stack", "Stripe", "AWS"],
            image: "from-cyan-900 to-blue-900",
            icon: <ShoppingCart size={32} />
        },
        {
            title: "Tata Motors",
            category: "Business",
            desc: "Corporate portal and internal management tools for Tata Motors dealership, streamlining operations and sales tracking.",
            tech: ["React", "Java Spring Boot", "MySQL"],
            image: "from-blue-900 to-indigo-900",
            icon: <Globe size={32} />
        },
        {
            title: "Abhinav Jewellers",
            category: "Jewellery/Gold",
            desc: "Realtime metal rate display board and customer management system for a premium jewellery brand.",
            tech: ["Vue.js", "Firebase", "WebSocket"],
            image: "from-yellow-900 to-amber-900",
            icon: <Database size={32} />
        },
        {
            title: "Maa Jewellery",
            category: "Jewellery/Gold",
            desc: "Digital catalog and appointment booking system for high-end custom jewellery designs.",
            tech: ["Next.js", "Sanity CMS", "Framer Motion"],
            image: "from-rose-900 to-pink-900",
            icon: <Layout size={32} />
        },
        {
            title: "Alankar Furniture",
            category: "Ecommerce",
            desc: "Custom furniture showcase website with AR preview features and detailed product customization options.",
            tech: ["Three.js", "React", "Shopify API"],
            image: "from-amber-900 to-orange-900",
            icon: <ShoppingCart size={32} />
        },
        {
            title: "NSM School",
            category: "Business",
            desc: "Educational institution portal for student management, assignments, and parent-teacher communication.",
            tech: ["PHP", "Laravel", "MySQL"],
            image: "from-green-900 to-emerald-900",
            icon: <Globe size={32} />
        },
        {
            title: "Media Website",
            category: "Business",
            desc: "High-traffic news and media content platform optimized for speed, SEO, and ad revenue handling.",
            tech: ["Next.js", "GraphQL", "Redis"],
            image: "from-purple-900 to-violet-900",
            icon: <Layout size={32} />
        },
        {
            title: "Hindustan Security Services",
            category: "Security",
            desc: "A full-featured corporate website for a premier security agency, showcasing residential, armed, ATM/bank guarding, industrial patrol, hospital security, and technical manpower services.",
            tech: ["React.js", "Tailwind CSS", "Node.js", "SEO Optimized"],
            image: "from-slate-900 to-blue-950",
            icon: <ShieldCheck size={32} />,
            liveUrl: "https://hindusthansecurityjobs.com/services"
        },
        {
            title: "Andhra Inspire Academy",
            category: "Education",
            desc: "A modern, feature-rich educational website for a competitive exam coaching institute — covering programs, admissions, results, and a live assessment enrollment portal with fee concession workflows.",
            tech: ["React.js", "Tailwind CSS", "Node.js", "SEO Optimized"],
            image: "from-red-950 to-indigo-950",
            imgPath: "/projects/inspire-academy.png",
            icon: <GraduationCap size={32} />,
            liveUrl: "https://inspiracademyap.com"
        }
    ];

    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen pt-24 pb-20 px-6 max-w-7xl mx-auto"
        >
            <div className="text-center mb-16">
                <motion.h1
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-6"
                >
                    Featured <span className="text-accent">Projects</span>
                </motion.h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
                    A curated selection of enterprise-grade applications, e-commerce platforms, and digital solutions delivered for real-world businesses.
                </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border border-white/10 backdrop-blur-md
                        ${selectedCategory === cat
                                ? "bg-accent text-white shadow-[0_0_20px_rgba(139,92,246,0.5)] border-accent"
                                : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            key={project.title}
                        >
                            <Tilt options={defaultOptions} className="h-full">
                                <div className="group relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-accent/50 transition-colors duration-500 flex flex-col">
                                    {/* Image / Banner Area */}
                                    <div className={`h-48 w-full relative overflow-hidden group-hover:brightness-110 transition-all duration-500 ${!project.imgPath ? `bg-gradient-to-br ${project.image}` : 'bg-gray-900'}`}>
                                        {project.imgPath ? (
                                            <img
                                                src={project.imgPath}
                                                alt={project.title}
                                                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                                                onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                                            />
                                        ) : null}
                                        {/* Fallback overlay / gradient content */}
                                        <div className={`absolute inset-0 bg-black/20 ${project.imgPath ? 'group-hover:bg-black/10' : ''} transition-colors duration-500`} />
                                        {!project.imgPath && (
                                            <div className="absolute inset-0 flex items-center justify-center text-white/20 group-hover:text-white/40 transition-colors font-bold text-lg tracking-widest">
                                                {project.title.toUpperCase()}
                                            </div>
                                        )}
                                        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md p-2 rounded-lg text-accent border border-white/10">
                                            {project.icon}
                                        </div>
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={e => e.stopPropagation()}
                                                className="absolute top-4 left-4 flex items-center gap-1.5 bg-green-500/20 hover:bg-green-500/40 border border-green-400/40 text-green-300 text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-md transition-all duration-300"
                                            >
                                                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                                                Live Site
                                            </a>
                                        )}
                                    </div>

                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="mb-4">
                                            <span className="text-xs font-mono text-accent/80 uppercase tracking-wider bg-accent/10 px-2 py-1 rounded">
                                                {project.category}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                            {project.desc}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tech.map(t => (
                                                <span key={t} className="text-xs text-gray-500 border border-white/10 px-2 py-1 rounded-full bg-white/5">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-3 mt-auto">
                                            <Link
                                                to={`/projects/${project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}
                                                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-accent/10 hover:bg-accent text-accent hover:text-white border border-accent/30 hover:border-accent text-sm font-semibold transition-all duration-300"
                                            >
                                                View Details <ArrowRight size={14} />
                                            </Link>
                                            {project.liveUrl && (
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 text-sm font-semibold transition-all duration-300"
                                                >
                                                    <ExternalLink size={14} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Tilt>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
};

export default ProjectsPage;

import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Layers, Zap, Database, CheckCircle, Code } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const projectData = {
    "e3-e4-mall-app": {
        title: "E3 & E4 Mall App",
        category: "SaaS/App",
        tagline: "Digitizing the Mall Experience Multi-vendor Ecosystem",
        heroImage: "from-orange-900 to-red-900",
        problem: "Traditional mall shopping lacks digital integration. Customers struggle to find stores, view menus, or order from multiple outlets simultaneously without physically visiting each one.",
        solution: "A robust multi-vendor application similar to Swiggy/Zomato, specifically tailored for mall ecosystems. It aggregates all stores, enabling users to browse catalogs, order food/products, and navigate the mall digitally.",
        features: [
            "Multi-vendor ordering system",
            "Real-time order tracking",
            "Unified cart for multiple stores",
            "Digital mall map & navigation",
            "Exclusive loyalty rewards"
        ],
        techStack: ["React Native", "Node.js", "MongoDB", "Redux", "Socket.io"],
        impact: "Increased mall footfall engagement by 40% and streamlined food court operations, reducing queue times by 60%."
    },
    "jain-silver-plaza": {
        title: "Jain Silver Plaza",
        category: "Jewellery/Gold",
        tagline: "Real-time Silver Rate & Artifact Catalog",
        heroImage: "from-slate-800 to-gray-500",
        problem: "Fluctuating silver rates made manual price updates for thousands of artifacts impossible, leading to pricing discrepancies and customer mistrust.",
        solution: "An automated platform that fetches live bullion rates and dynamically adjusts product pricing. Includes a high-fidelity catalog for showcasing intricate silver artifacts.",
        features: [
            "Live API rate fetching",
            "Dynamic product pricing",
            "High-res image gallery",
            "Wholesale inquiry portal",
            "Admin dashboard for inventory"
        ],
        techStack: ["Next.js", "Bullion API", "Tailwind CSS", "Vercel"],
        impact: "Eliminated manual pricing errors completely and boosted wholesale inquiries by 25% within the first month."
    },
    "gharsansar": {
        title: "Gharsansar",
        category: "Ecommerce",
        tagline: "Premium Home Essentials Marketplace",
        heroImage: "from-cyan-900 to-blue-900",
        problem: "Local home essential businesses struggled to reach a wider audience due to the lack of a centralized, user-friendly digital storefront.",
        solution: "A full-featured e-commerce platform designed for scalability. Features advanced search, secure payments, and a seamless checkout flow optimized for mobile users.",
        features: [
            "Advanced product filtering",
            "Secure payment gateway",
            "User wishlist & review system",
            "Automated invoice generation",
            "Responsive mobile design"
        ],
        techStack: ["MERN Stack", "Stripe", "AWS S3", "Redux Toolkit"],
        impact: "Expanded customer base beyond local geography, resulting in a 200% increase in monthly revenue."
    },
    "tata-motors": {
        title: "Tata Motors Dealership",
        category: "Business",
        tagline: "Enterprise Dealership Management Portal",
        heroImage: "from-blue-900 to-indigo-900",
        problem: "Disjointed systems for inventory, sales leads, and service bookings led to operational inefficiencies and data silos.",
        solution: "A unified internal portal for dealership management. Integrates inventory tracking, CRM for sales leads, and a service booking scheduler into one dashboard.",
        features: [
            "Real-time inventory tracking",
            "Lead management CRM",
            "Service appointment scheduler",
            "Performance analytics dashboard",
            "Role-based access control"
        ],
        techStack: ["React", "Java Spring Boot", "MySQL", "Docker"],
        impact: " improved operational efficiency by 35% and reduced lead response time from days to hours."
    },
    "abhinav-jewellers": {
        title: "Abhinav Jewellers",
        category: "Jewellery/Gold",
        tagline: "Live Metal Rates & Customer CRM",
        heroImage: "from-yellow-900 to-amber-900",
        problem: "Customers constantly called for gold rates, and manual store displays were often outdated. Customer data was managed on paper.",
        solution: "A digital display system for the store linked to a web app showing real-time gold/diamond rates. Integrated with a CRM to manage customer purchase history.",
        features: [
            "Live gold/diamond rate ticker",
            "Customer purchase history CRM",
            "WhatsApp integration for updates",
            "Digital invoice management",
            "Marketing campaign tools"
        ],
        techStack: ["Vue.js", "Firebase", "Cloud Functions"],
        impact: "Customer retention improved by 30% due to timely rate alerts and personalized offers."
    },
    "maa-jewellery": {
        title: "Maa Jewellery",
        category: "Jewellery/Gold",
        tagline: "Bespoke Jewellery Appointment System",
        heroImage: "from-rose-900 to-pink-900",
        problem: "Managing improved custom jewellery consultations was chaotic with phone bookings, leading to scheduling conflicts.",
        solution: "An elegant appointment booking platform allowing clients to schedule consultations for bespoke designs. Showcases a gallery of past masterpieces.",
        features: [
            "Online appointment scheduling",
            "Consultation type selection",
            "Portfolio showcase",
            "Client feedback system",
            "Automated reminders"
        ],
        techStack: ["Next.js", "Sanity CMS", "Framer Motion", "Calendly API"],
        impact: "Zero scheduling conflicts and a 50% increase in high-ticket consultation bookings."
    },
    "alankar-furniture": {
        title: "Alankar Furniture",
        category: "Ecommerce",
        tagline: "AR-Enabled Furniture Shopping",
        heroImage: "from-amber-900 to-orange-900",
        problem: "Customers hesitated to buy furniture online because they couldn't visualize how it would look in their space.",
        solution: "An e-commerce site with WebAR capabilities. Users can point their camera to see a 3D model of the furniture in their room before buying.",
        features: [
            "WebAR product preview",
            "360-degree product view",
            "Wood/Fabric customization",
            "Cart & Checkout",
            "Delivery tracking"
        ],
        techStack: ["Three.js", "React-Three-Fiber", "Shopify API"],
        impact: "Reduced product return rates by 45% and increased conversion on high-value items."
    },
    "nsm-school": {
        title: "NSM School",
        category: "Business",
        tagline: "Comprehensive Education ERP",
        heroImage: "from-green-900 to-emerald-900",
        problem: "Manual attendance, report cards, and fee collection were time-consuming and prone to human error.",
        solution: "A complete ERP system for the school. Handles student admissions, attendance, digitally generated report cards, and online fee payments.",
        features: [
            "Student information system",
            "Digital attendance & homework",
            "Automated report cards",
            "Online fee payment gateway",
            "Parent-teacher chat"
        ],
        techStack: ["PHP", "Laravel", "MySQL", "Bootstrap"],
        impact: "Saved 500+ administrative hours per year and went 100% paperless for academic reports."
    },
    "media-website": {
        title: "Media Website",
        category: "Business",
        tagline: "High-Performance News Platform",
        heroImage: "from-purple-900 to-violet-900",
        problem: "Previous site crashed during high-traffic news events and had poor SEO rankings.",
        solution: "A Next.js powered static site with incremental regeneration. Optimized for Core Web Vitals to handle massive traffic spikes and rank high on Google.",
        features: [
            "Server-side rendering",
            "AMP (Accelerated Mobile Pages)",
            "Ad revenue optimization",
            "CMS for editors",
            "Social sharing integration"
        ],
        techStack: ["Next.js", "GraphQL", "Redis Caching", "Vercel"],
        impact: "Achieved 99.9% uptime during peak traffic and saw a 3x increase in organic search traffic."
    },
    "hindustan-security-services": {
        title: "Hindustan Security Services",
        category: "Security",
        tagline: "Premier Security Agency – Digital Presence & Service Portal",
        heroImage: "from-slate-900 to-blue-950",
        liveUrl: "https://hindusthansecurityjobs.com/services",
        problem: "Hindustan Security Services lacked a modern digital platform to showcase their wide range of professional security offerings — from residential guarding to ATM/bank protection and technical manpower — making it difficult to attract corporate clients online.",
        solution: "A professional, SEO-optimized corporate website with structured service listings, inquiry forms, and a career portal. The site features a clean grid-based service catalog, allowing prospective clients to instantly understand the agency's capabilities and submit inquiries.",
        features: [
            "Residential & 24/7 guarding service pages",
            "Armed security & ATM/Bank guarding sections",
            "Industrial estate & hospital security listings",
            "Technical manpower outsourcing portal",
            "Online inquiry & career application forms",
            "Fully responsive & SEO-optimized design"
        ],
        techStack: ["React.js", "Tailwind CSS", "Node.js", "SEO Optimized"],
        impact: "Established a strong online brand presence, enabling the agency to attract corporate and institutional clients digitally — reducing cold outreach effort by 60% and generating consistent inbound inquiry leads."
    },
    "andhra-inspire-academy": {
        title: "Andhra Inspire Academy",
        category: "Education",
        tagline: "Digital Platform for Competitive Exam Coaching Excellence",
        heroImage: "from-red-950 to-indigo-950",
        liveUrl: "https://inspiracademyap.com",
        problem: "Andhra Inspire Academy, a leading institute for competitive exams, relied on word-of-mouth and offline channels to attract students. They lacked a digital presence to showcase their programs, publish results, and streamline admissions — resulting in missed enrollment opportunities.",
        solution: "A fully featured education website with structured program listings, a live results board, an online admissions flow, and a real-time countdown-driven assessment enrollment portal. The site leverages SEO best practices to capture organic traffic from students searching for competitive exam coaching.",
        features: [
            "Program catalog for competitive exam courses",
            "Live results & merit board display",
            "Online admissions & inquiry system",
            "Countdown-driven assessment enrollment portal",
            "Fee concession evaluation workflow",
            "Fully responsive & SEO-optimized design"
        ],
        techStack: ["React.js", "Tailwind CSS", "Node.js", "SEO Optimized"],
        impact: "Drove a measurable increase in online admissions enquiries within the first month of launch, giving the academy a professional digital identity that competes with larger established coaching brands."
    }
};

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projectData[id];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
                <h2 className="text-4xl font-bold text-white mb-4">Project Not Found</h2>
                <p className="text-gray-400 mb-8">The project you are looking for does not exist.</p>
                <Link to="/projects" className="px-6 py-3 bg-accent text-white rounded-full">Back to Projects</Link>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen pt-24 pb-20"
        >
            {/* Hero Section */}
            <div className={`relative h-[60vh] w-full bg-gradient-to-br ${project.heroImage} flex items-end`}>
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
                    <Link to="/projects" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors">
                        <ArrowLeft size={16} /> Back to Projects
                    </Link>
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="px-3 py-1 bg-accent/20 border border-accent/30 text-accent text-sm font-semibold rounded-full uppercase tracking-wider mb-4 inline-block">
                            {project.category}
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">{project.title}</h1>
                        <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl">{project.tagline}</p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="md:col-span-2 space-y-12">
                        {/* Overview */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <GlassCard className="p-8">
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                    <Zap className="text-accent" /> Project Overview
                                </h2>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-200 mb-2">The Challenge</h3>
                                        <p className="text-gray-400 leading-relaxed">{project.problem}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-200 mb-2">The Solution</h3>
                                        <p className="text-gray-400 leading-relaxed">{project.solution}</p>
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>

                        {/* Features */}
                        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {project.features.map((feature, idx) => (
                                    <GlassCard key={idx} className="p-4 flex items-start gap-3 border-white/5 hover:border-accent/20">
                                        <CheckCircle className="text-accent shrink-0 mt-1" size={18} />
                                        <span className="text-gray-300">{feature}</span>
                                    </GlassCard>
                                ))}
                            </div>
                        </motion.section>

                        {/* Impact */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <GlassCard className="p-8 bg-gradient-to-r from-accent/10 to-transparent border-accent/20">
                                <h2 className="text-2xl font-bold text-white mb-4">Business Impact</h2>
                                <p className="text-lg text-gray-300 italic">"{project.impact}"</p>
                            </GlassCard>
                        </motion.div>
                    </div>

                    {/* Sidebar Info */}
                    <div className="md:col-span-1 space-y-6">
                        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                            <GlassCard className="p-6">
                                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                    <Code size={20} className="text-accent" /> Tech Stack
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map(tech => (
                                        <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </GlassCard>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                            <GlassCard className="p-6">
                                <h3 className="text-lg font-bold text-white mb-4">Project Links</h3>
                                <div className="space-y-3">
                                    {project.liveUrl ? (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between w-full px-4 py-3 bg-accent/10 hover:bg-accent/20 border border-accent/30 rounded-xl text-accent transition-colors"
                                        >
                                            <span className="flex items-center gap-2">
                                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                                <ExternalLink size={16} /> Live Site
                                            </span>
                                            <ArrowRight size={16} />
                                        </a>
                                    ) : (
                                        <a href="#" className="flex items-center justify-between w-full px-4 py-3 bg-white/5 hover:bg-white/10 rounded-xl text-gray-300 transition-colors">
                                            <span className="flex items-center gap-2"><ExternalLink size={16} /> Live Demo</span>
                                            <ArrowRight size={16} />
                                        </a>
                                    )}
                                    <a href="#" className="flex items-center justify-between w-full px-4 py-3 bg-white/5 hover:bg-white/10 rounded-xl text-gray-300 transition-colors">
                                        <span className="flex items-center gap-2"><Github size={16} /> Source Code</span>
                                        <ArrowRight size={16} />
                                    </a>
                                </div>
                            </GlassCard>
                        </motion.div>
                    </div>
                </div>

                {/* Mockup Placeholder */}
                <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-20">
                    <h2 className="text-2xl font-bold text-white mb-8">Project Gallery</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="aspect-video bg-white/5 rounded-2xl border border-white/5 flex items-center justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-10" />
                                <span className="text-white/20 font-mono text-lg z-20">SCREENSHOT {item}</span>
                                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                            </div>
                        ))}
                    </div>
                </motion.section>
            </div>
        </motion.div>
    );
};

export default ProjectDetails;

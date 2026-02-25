import React from 'react';
import { motion } from 'framer-motion';
import { Building2, ShoppingBag, Car, GraduationCap, Gem, ShoppingCart, Newspaper, Smartphone, Layout, Truck, ShieldCheck } from 'lucide-react';

const BrandLogo = ({ Icon, name }) => (
    <div className="flex flex-col items-center gap-4 group min-w-[200px] hover:scale-110 transition-transform duration-300 cursor-pointer">
        <div className="w-24 h-24 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:border-accent group-hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all duration-500">
            <Icon className="text-gray-500 group-hover:text-accent group-hover:brightness-125 transition-colors duration-500" size={40} />
        </div>
        <span className="text-sm font-medium text-gray-400 group-hover:text-white uppercase tracking-widest transition-colors duration-300 text-center">{name}</span>
    </div>
);

const InfiniteScrollRow = ({ items, reverse = false }) => {
    // Duplicate items enough times to fill width + provide smooth loop
    const list = [...items, ...items, ...items, ...items];

    return (
        <div className="relative flex overflow-hidden py-10 group">
            {/* Fade Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-primary z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-primary z-20 pointer-events-none" />

            <motion.div
                className="flex gap-16 px-10"
                animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 40
                }}
            >
                {list.map((item, idx) => (
                    <BrandLogo key={idx} Icon={item.Icon} name={item.name} />
                ))}
            </motion.div>
        </div>
    )
}

const ClientsPage = () => {
    const enterpriseClients = [
        { name: "Tata Motors", Icon: Car },
        { name: "Gharsansar", Icon: ShoppingBag },
        { name: "NSM School", Icon: GraduationCap },
        { name: "Alankar Furniture", Icon: Layout },
        { name: "E3 Mall", Icon: Smartphone },
        { name: "Hindustan Security", Icon: ShieldCheck },
    ];

    const retailClients = [
        { name: "Maa Jewellery", Icon: Gem },
        { name: "Jain Silver", Icon: Gem },
        { name: "Abhinav Gold", Icon: Gem },
        { name: "City Kart", Icon: ShoppingCart },
        { name: "Daily News", Icon: Newspaper },
        { name: "Fast Logistics", Icon: Truck },
        { name: "Inspire Academy", Icon: GraduationCap },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen pt-24 pb-20 overflow-hidden"
        >
            <div className="text-center mb-16 px-6">
                <motion.h1
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-6"
                >
                    Trusted by <span className="text-accent">Industry Leaders</span>
                </motion.h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
                    Partnering with innovative brands to deliver scalable digital solutions that drive real business growth.
                </p>
            </div>

            <div className="space-y-12">
                {/* Row 1 - Enterprise */}
                <InfiniteScrollRow items={enterpriseClients} />

                {/* Row 2 - Retail (Reverse) */}
                <InfiniteScrollRow items={retailClients} reverse={true} />

                {/* Grid for Mobile / Static View */}
                <div className="max-w-6xl mx-auto px-6 mt-20">
                    <h2 className="text-2xl font-bold text-white text-center mb-12">All Partners</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
                        {[...enterpriseClients, ...retailClients].map((client, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                            >
                                <BrandLogo {...client} />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Testimonial Placeholder */}
                <div className="max-w-4xl mx-auto px-6 mt-32 text-center">
                    <div className="p-1 px-20 border border-white/5 bg-white/5 rounded-3xl relative">
                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary px-4 text-6xl text-accent font-serif">“</span>
                        <p className="text-xl md:text-2xl text-gray-300 italic login-relaxed py-10">
                            "The team at Stackvil transformed our digital presence completely. The custom ERP solution they built has streamlined our operations and saved us countless hours every week."
                        </p>

                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ClientsPage;

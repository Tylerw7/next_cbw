import React from 'react'
import {motion} from "motion/react"
import {Check, ArrowRight} from "lucide-react"
import { Button } from '@/components/ui/button'
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });


const ServicesSection = () => {
    const services = [
        {
            title: "Kitchen Cabinets",
            description: "Transform your kitchen with custom cabinetry designed for your lifestyle and aesthetic preferences.",
            icon: "🏠",
            features: ["Custom Design", "Premium Materials", "Professional Installation"]
        },
        {
            title: "Bathroom Vanities",
            description: "Elegant bathroom vanities that combine beauty with functionality for your perfect sanctuary.",
            icon: "🚿",
            features: ["Water-Resistant", "Storage Solutions", "Modern Finishes"]
        },
        {
            title: "Custom Closets",
            description: "Maximize your storage with custom-built closet systems tailored to your space.",
            icon: "👔",
            features: ["Space Optimization", "Custom Shelving", "Drawer Systems"]
        },
        {
            title: "Entertainment Centers",
            description: "Built-in entertainment units that seamlessly integrate with your home's design.",
            icon: "📺",
            features: ["Cable Management", "Custom Sizing", "LED Lighting Options"]
        },
        {
            title: "Home Office",
            description: "Productive workspace solutions with custom desks, shelving, and storage.",
            icon: "💼",
            features: ["Ergonomic Design", "Built-in Storage", "Wire Management"]
        },
        {
            title: "Custom Shelving",
            description: "Versatile shelving solutions for any room, from libraries to mudrooms.",
            icon: "📚",
            features: ["Adjustable Options", "Any Room", "Custom Finishes"]
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="text-[#5a8495] font-semibold mb-2">OUR SERVICES</div>
                    <h2 className={raleway.className + " text-4xl font-bold mb-4"}>
                        Comprehensive Cabinetry Solutions
                    </h2>
                    <div className="w-20 h-1 bg-[#ffd21e] mx-auto mb-6"></div>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        From concept to completion, we deliver exceptional craftsmanship for every room in your home.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all group hover:-translate-y-2"
                        >
                            <div className="text-5xl mb-4">{service.icon}</div>
                            <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                            <p className="text-gray-600 mb-6">{service.description}</p>
                            <ul className="space-y-2 mb-6">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                                        <Check size={16} className="text-[#5a8495]" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Button variant="ghost" className="text-[#5a8495] group-hover:gap-3 gap-2 transition-all p-0 font-semibold">
                                Learn More <ArrowRight size={18} />
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;
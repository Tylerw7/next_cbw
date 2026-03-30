"use client"

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Raleway } from "next/font/google";
//import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";



// Raleway Font variable
const raleway = Raleway({ subsets: ["latin"], weight: ["400", "700"] });






const SarasotaHero = () => {
    const [isMedium, setIsMedium] = useState<boolean | null>(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMedium(window.innerWidth >= 880);
        };

        // Run once on mount
        handleResize();

        // Update when screen size changes
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    },[])


    
    



    return ( 
        <>
            {isMedium ? (
                <div className="relative overflow-hidden w-full h-[90vh] bg-cover bg-center flex flex-col justify-center items-start mt-[50px]" style={{ backgroundImage: 'url("/images/Sarasota-hero.jpg")' }}>
                    <div className="absolute inset-0 bg-gradient-to-r from-whitw/60 via-white/40 to-transparent"></div>
                    
                    <div className="relative z-10 max-w-7xl mx-auto px-12 w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="max-w-2xl"
                        >
                            
                            <h1 className={raleway.className + " text-6xl font-bold leading-tight mb-6"}>
                                Custom Kitchen & Bathroom Cabinets in Sarasota, FL
                            </h1>
                            <div className="w-24 h-1.5 bg-[#ffd21e] mb-6"></div>
                            <p className={raleway.className + " text-xl text-muted-foreground mb-8 leading-relaxed"}>
                                We specialize in premium cabinetry for every space in your home, from kitchens and bathrooms to custom built-in closets, entertainment centers, shelving, and more.
                            </p>
                            <div className="flex gap-4">
                                <Link href="/contact-us">
                                <Button className="bg-[#5a8495] hover:bg-[#4a7485] text-white px-8 py-6 text-lg rounded-sm font-semibold transition-all hover:cursor-pointer">
                                    Get Free Quote
                                </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            ) : (
                <div className="relative overflow-hidden w-full min-h-[70vh] bg-cover bg-center flex flex-col justify-center items-center py-16" style={{ backgroundImage: 'url("/images/Sarasota-hero.jpg")' }}>
                    <div className="absolute inset-0 bg-white/50"></div>
                    <div className="relative z-10 px-6 w-full max-w-2xl text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            
                            <h1 className={raleway.className + " text-4xl font-bold leading-tight mb-4"}>
                                Custom Kitchen & Bathroom Cabinets in Sarasota, FL
                            </h1>
                            <p className={raleway.className + " text-lg mb-8"}>
                                We specialize in premium cabinetry for every space in your home.
                            </p>
                            <Link href="/contact-us">
                            <Button className="bg-[#5a8495] hover:bg-[#4a7485] text-white px-8 py-4 text-lg rounded-sm font-semibold">
                                Get Free Quote
                            </Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            )}
        </>
     );
}
 
export default SarasotaHero;
"use client"

import Link from "next/link";
import { Button } from "../ui/button";
import { motion } from "motion/react";


const Hero = () => {
    



    return ( 
    <div className="relative overflow-hidden p-[10px] w-full min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-center" style={{ backgroundImage: 'url("https://cabinetrybywettach.s3.us-east-1.amazonaws.com/20200605_142432.jpg")' }}>
        {/* Overlay to dim the background */}
        <div className="absolute inset-0 bg-black/40"></div>
      
        {/* Content */}
        <motion.div
            initial={{ opacity: 0, y: 50}}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 0.8, ease: "easeOut"}}
           >
        <div className="relative z-10 flex flex-col justify-center items-center h-full p-2">
          <h2 className="text-white font-bold text-[3rem] sm:text-[6rem] pb-[10px] w-[80%] sm:w-full">
            Cabinetry By Wettach
          </h2>
          <p className="text-white text-[1.5rem] mb-[50px] w-[80%] sm:w-[30rem]">
            Discover custom cabinets crafted to fit your style and needs, combining beauty and functionality.
          </p>
          <Button className="w-[250px] h-[50px] text-[1.5rem] bg-[#ffd21e] hover:bg-[#ffe477] hover:cursor-pointer text-black">
            <Link href="/contact-us">Get a Quote</Link>
          </Button>
        </div>
        </motion.div>
    </div>
     );
}
 
export default Hero;
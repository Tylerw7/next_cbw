"use client"

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import {motion} from "motion/react"



//interface for function
interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}






export function AppleCardsCarouselDemo() {
  



  const ServiceCard = ({image , title, description, link}: ServiceCardProps) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
      >
      <div className='relative w-[400px] h-[500px] flex flex-col ml-[50px] mb-[50px]'>

          <div className='relative w-[400px] h-[280px] overflow-hidden group'>
              <Image
                src={image}
                alt="Cabinet"
                fill
                className="object-cover transition-transform duration-800 ease-in-out group-hover:scale-110"
              />
          </div>

          <div className='absolute left-1/2 top-[280px] -translate-x-1/2 -translate-y-1/2 bg-[#fef9f5] w-[340px] h-[70px] text-center font-bold text-[1.5rem] flex items-center justify-center shadow-2xl'>
            <h3>{title}</h3>
          </div>

          <div className='w-[400px] h-[220px] bg-[#f6f6f6] text-center flex justify-center items-center'>
            <p className="w-[85%] text-[1.1rem]">{description}</p>
          </div>

          <Link href={link}>
            <button className='absolute left-[170px] top-[460px] rounded-full bg-yellow-400 w-[70px] h-[70px] flex justify-center items-center hover:cursor-pointer hover:bg-white hover:border-3 hover:border-black'><ArrowRight size={30} /></button>
          </Link>

      </div>
        

      </motion.div>
    )
  }
 

  return (
    <div className="p-4 flex flex-col items-center">
      <h2 className="text-[4rem] sm:text-[6rem] font-semibold text-center">Our Services</h2>
      <div className="w-[400px] sm:w-[600px] h-[7px] bg-[#5a8495] mb-[50px] ml-[10px] "></div>
        <div className="flex flex-wrap gap-4 justify-evenly p-4">
          <ServiceCard 
            image="https://cabinetrybywettach.s3.us-east-1.amazonaws.com/20200605_142432.jpg"
            title="Custom Kitchens"
            description="Design your dream kitchen with Cabinetry by Wettach, custom cabinets crafted to reflect your style and elevate your space."
            link="/kitchen"
          />

          <ServiceCard 
            image="https://cloudphotosone.s3.us-east-1.amazonaws.com/closet.jpg"
            title="Closet Systems"
            description="Design your dream closet with Cabinetry by Wettach, custom built to fit your space, style, and lifestyle."
            link="/closets"
          />

          <ServiceCard 
            image="/images/outdoor.jpg"
            title="Outdoor Cabinets"
            description="Design your perfect outdoor kitchen with Cabinetry by Wettach crafted for style, durability, and entertaining."
            link="/out-door-cabinets"
          />

          <ServiceCard 
            image="https://cabinetrybywettach.s3.us-east-1.amazonaws.com/20230906_105706.jpg"
            title="Built-In Systems"
            description="Design your dream entertainment system with Cabinetry by Wettach where style meets precision."
            link="/entertainment-systems"
          />

          <ServiceCard 
            image="https://cloudphotosone.s3.us-east-1.amazonaws.com/finishes3.jpg"
            title="Yorktowne Dealer"
            description="Wide selection of styles from Yorktowne."
            link="/kitchen"
          />

          <ServiceCard 
            image="https://cabinetrybywettach.s3.us-east-1.amazonaws.com/20180919_105533.jpg"
            title="Work For Us"
            description="Join our team of custom cabinet builders."
            link="/work-with-us"
          />
  
        </div>  
    </div>
  );
}



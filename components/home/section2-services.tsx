"use client"

import Image from "next/image";
import { Dot } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import {motion} from "motion/react"



//interface for function
interface ServiceCardProps {
  image: string;
  title: string;
  item1: string;
  item2: string;
  item3: string;
  link: string;
}






export function AppleCardsCarouselDemo() {
  



  const ServiceCard = ({image , title, item1, item2, item3, link}: ServiceCardProps) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
      >
      <div className="w-[400px] sm:w-[450px] h-[725px] rounded-3xl shadow-2xl border-1 border-gray-200 mb-[50px]">
        <div className="relative w-[400px] sm:w-[450px] h-[300px] rounded-t-3xl border-r-1 border-l-1 overflow-hidden">
          <Image
            src={image}
            alt="Cabinet"
            fill
            className="object-cover"
          />
        </div>

        <h3 className=" text-[2.5rem] font-bold p-4 text-[#5a8495]">{title}</h3>

          <div className="flex items-center ml-[15px]">
            <Dot size={70}/>
            <p className="text-[1.2rem]">{item1}</p>
          </div>

          <div className="flex items-center ml-[15px]">
            <Dot size={70}/>
            <p className="text-[1.2rem]">{item2}</p>
          </div>

          <div className="flex items-center ml-[15px]">
            <Dot size={70}/>
            <p className="text-[1.2rem]">{item3}</p>
          </div>

          <Link href={link} >
          <Button className="
            ml-[25px] 
            mt-[25px] 
            mb-[25px]
            w-[200px] 
            h-[55px] 
            text-[1.6rem] 
            rounded-3xl 
            font-bold 
          bg-[#5a8495]
          hover:bg-white 
          hover:text-[#5a8495]
          hover:border-[#5a8495]
            hover:border-2
            hover:cursor-pointer
            ">Learn More</Button>
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
            item1="Premium wood and finishes"
            item2="Designed for your lifestyle"
            item3="Built to last for decades"
            link="/kitchen"
          />

          <ServiceCard 
            image="https://cloudphotosone.s3.us-east-1.amazonaws.com/closet.jpg"
            title="Closet Systems"
            item1="Maximize storage space"
            item2="Custom shelving & layouts"
            item3="Organized and functional design"
            link="/closets"
          />

          <ServiceCard 
            image="/images/outdoor.jpg"
            title="Outdoor Cabinets"
            item1="Weather-resistant materials"
            item2="Stylish outdoor storage"
            item3="Perfect for kitchens & patios"
            link="/out-door-cabinets"
          />

          <ServiceCard 
            image="https://cabinetrybywettach.s3.us-east-1.amazonaws.com/20230906_105706.jpg"
            title="Built-In Systems"
            item1="Seamless integration with rooms"
            item2="Space-saving solutions"
            item3="Custom-fit to your home"
            link="/entertainment-systems"
          />

          <ServiceCard 
            image="https://cloudphotosone.s3.us-east-1.amazonaws.com/finishes3.jpg"
            title="Yorktowne Dealer"
            item1="Wide selection of styles"
            item2="Trusted Yorktowne quality"
            item3="Expert guidance on finishes"
            link="/kitchen"
          />

          <ServiceCard 
            image="https://cabinetrybywettach.s3.us-east-1.amazonaws.com/20180919_105533.jpg"
            title="Careers"
            item1="Join a skilled team"
            item2="Hands-on craftsmanship"
            item3="Opportunities for growth"
            link="/work-with-us"
          />
  
        </div>  
    </div>
  );
}



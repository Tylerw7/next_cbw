"use client"

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Raleway } from "next/font/google";
import Image from "next/image";


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
    { isMedium ? (
    <div className="relative overflow-hidden p-[10px] w-full h-[85vh] bg-cover bg-center flex flex-col justify-center items-start text-center" style={{ backgroundImage: 'url("/images/Sarasota-hero.jpg")' }}>
      
        {/* Content */}
        <div className="w-[45vw] flex flex-col ">
            <h1 className={raleway.className + " text-[3.5rem] pl-[50px] font-bold text-start"}>Solving Your Cabinet And Furniture Needs In Sarasota, FL</h1>
        </div>
        <div className="w-[175px] h-[7px] bg-[#5a8495] ml-[50px] mt-[25px]"></div>
        <p className={raleway.className + " ml-[50px] mt-[25px] text-[1.5rem] text-start w-[45vw]"}>We specialize in premium cabinetry for every space in your home, from kitchens and bathrooms to custom built-in closets, entertainment centers, shelving, and more.</p>
        <Button className="
            ml-[50px] 
            mt-[50px] 
            w-[225px] 
            h-[60px] 
            text-[1.6rem] 
            rounded-3xl 
            font-bold 
          bg-[#5a8495]
          hover:bg-white 
          hover:text-[#5a8495]
          hover:border-[#5a8495]
            hover:border-2
            hover:cursor-pointer
            ">Get A Quote</Button>
    </div>
     ) : (
        <>
            <div className=" flex flex-col justify-center items">
                <h1 className={raleway.className + " text-[3.5rem] m-auto font-bold text-start w-[85vw]"}>Solving Your Cabinet And Furniture Needs In Sarasota, FL</h1>
                <p className={raleway.className + " m-auto mt-[20px] text-[1.5rem] text-start w-[85vw]"}>We specialize in premium cabinetry for every space in your home, from kitchens and bathrooms to custom built-in closets, entertainment centers, shelving, and more.</p>
                <Button className="
                    ml-[50px] 
                    mt-[50px] 
                    mb-[50px]
                    w-[225px] 
                    h-[60px] 
                    text-[1.6rem] 
                    rounded-3xl 
                    font-bold 
                bg-[#5a8495]
                hover:bg-white 
                hover:text-[#5a8495]
                hover:border-[#5a8495]
                    hover:border-2
                    hover:cursor-pointer
                    ">Get A Quote</Button>
                    </div>

                    <div className="m-auto flex justify-center items-center mb-[100px] mt-[50px]">
                        <div className="w-[75vw] h-[50vh] relative ">
                            <Image 
                                src="/images/Sarasota-image.jpg"
                                alt="Sarasota, FL"
                                fill
                                className="object-cover rounded-3xl"
                                />
                        </div>
                    </div>
                </>
     )
    }
    </>
     );
}
 
export default SarasotaHero;
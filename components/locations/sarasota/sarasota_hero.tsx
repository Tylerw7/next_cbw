import { Button } from "@/components/ui/button";
import { Raleway } from "next/font/google";


const raleway = Raleway({ subsets: ["latin"], weight: ["400", "700"] });


const SarasotaHero = () => {
    



    return ( 
        <>
    <div className="relative overflow-hidden p-[10px] w-full h-[85vh] bg-cover bg-center flex flex-col justify-center items-start text-center" style={{ backgroundImage: 'url("/images/Sarasota-hero.jpg")' }}>
        {/* Overlay to dim the background */}
        {/*<div className="absolute inset-0 bg-black/40"></div>*/}
      
        {/* Content */}
        <div className="w-[50vw] flex flex-col ">
            <h1 className={raleway.className + " text-[3.5rem] pl-[50px] font-bold text-start"}>Solving Your Cabinet And Furniture Needs In Sarasota, FL</h1>
        </div>
        <div className="w-[175px] h-[7px] bg-[#5a8495] ml-[50px] mt-[25px]"></div>
        <p className="ml-[50px] mt-[25px] text-[1.5rem] text-start w-[50vw]">We specialize in premium cabinetry for every space in your home, from kitchens and bathrooms to custom built-in closets, entertainment centers, shelving, and more.</p>
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
    </>
     );
}
 
export default SarasotaHero;
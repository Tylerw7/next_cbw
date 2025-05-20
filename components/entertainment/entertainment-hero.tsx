import Link from "next/link";
import { Button } from "../ui/button";

const EntertainmentHero = () => {


    return ( 
        <div className="p-[10px] w-full h-[110vh] md:h-[60vh] bg-cover bg-center flex flex-col justify-center items-center text-center relative" style={{ backgroundImage: 'url("https://cabinetrybywettach.s3.us-east-1.amazonaws.com/20141212_174031.jpg")' }} >
        {/* Overlay to dim the background */}
        <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center items-center h-full">
            <h1 className="text-white font-bold text-[4rem] pb-[10px]">Custom Build in Entertainment Systems</h1>
            
            <Button  className="w-[40%] text-[1.5rem] bg-[#ffd21e] hover:bg-[#ffe477] hover:cursor-pointer text-black" >
            <Link href='/contact-us'>Get a Quote</Link>
            </Button>
          </div>
    </div>
     );
}
 
export default EntertainmentHero;
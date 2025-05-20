import Link from "next/link";
import { Button } from "../ui/button";

const AboutHero = () => {
    return ( 
        <div className="p-[10px] w-full h-[110vh] md:h-[60vh] bg-cover bg-center flex flex-col justify-center items-center text-center relative" style={{ backgroundImage: 'url("https://cabinetrybywettach.s3.us-east-1.amazonaws.com/20230930_124122.jpg")' }} >
        {/* Overlay to dim the background */}
        <div className="absolute inset-0 bg-yellow-400/80"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center items-center h-full">
            <h1 className="text-white font-bold text-[6rem] pb-[10px]">About Us</h1>
            
            <Button  className="w-[80%] text-[1.5rem] bg-black hover:bg-white hover:text-black hover:cursor-pointer text-white" >
            <Link href='/contact-us'>Get a Quote</Link>
            </Button>
          </div>
    </div>
     );
}
 
export default AboutHero;
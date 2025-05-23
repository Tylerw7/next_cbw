import Link from "next/link";
import { Button } from "../ui/button";

const ClosetDesign = () => {
    return ( 
        <div className="w-[100vw]  flex flex-col md:flex-row p-10">
            <div className="flex flex-col justify-center items-center w-full md:w-[50%] p-[100px]">
                <h2 className="text-[3rem] text-center italic font-semibold text-muted-foreground">Design your dream <span className="text-[#ffd21e]">Closet</span> today</h2>
            </div>
            
            <div className="flex flex-col justify-center items-center w-full md:w-[50%]  p-10">
                <p className="text-[1.2rem]">At Cabinetry By Wettach, we believe your closet should be as unique as you are. That&apos;s why we specialize in creating custom closets that reflect your personal style while maximizing storage and functionality. Whether you&apos;re planning a complete closet remodel or want to enhance your existing space, our expert team is here to guide you from concept to completion.</p>
                <div className="flex items-start w-full mt-[25px]">
                <Link href='/contact-us'>    
                <Button className="w-[200px] text-[1.1rem] text-[#161616] border-2 border-[#161616] bg-white hover:text-white hover:bg-[#161616] hover:cursor-pointer">
                    Find out more
                    </Button>
                </Link>    
                </div>
            </div>
        </div>
     );
}
 
export default ClosetDesign;
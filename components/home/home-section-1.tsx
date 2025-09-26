import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const HomeSection1 = () => {
    return ( 
        <div className="flex flex-col md:flex-row p-10 mt-[50px] mb-[25px]">
            {/*Box1*/}
            <div className=" h-[300px] w-full flex justify-center items-center">
                <div className="bg-gray-700 h-[170px] w-[250px] z-[2] flex justify-center items-center">
                    <div className="bg-white h-[150px] w-[230px] z-[3] flex flex-col justify-center items-center">
                       
                        <div className="flex items-center">
                            <Plus size={70} className="text-[#ffd21e]"/>    
                            <h3 className="text-[6rem] mb-0 text-[#ffd21e]">15</h3>
                        </div>
                        <p className="text-[1.3rem] -mt-6 font-semibold text-muted-foreground">Years of Experience</p>
                        
                    </div>
                </div>
            </div>
            {/*Box2*/}
            <div className=" h-[300px] w-full flex flex-col justify-center items-center">
                <div className="p-4">
                <h3 className="text-[#ffd21e] font-bold">About Us</h3>
                <p className="font-bold text-[1.7rem] text-muted-foreground">Premium handcrafted cabinets and closets tailored to fit any space.</p>
                </div>
            </div>
            {/*Box3*/}
            <div className=" h-[300px] w-full flex justify-center items-center p-4">
                <div>
                    <p className="mb-4 text-muted-foreground text-[20px]">Every piece is tailored to fit your unique needs, combining expert craftsmanship with premium materials for a perfect balance of beauty and durability. Whether you&apos;re looking for a sleek modern design or timeless traditional cabinetry, we work closely with you to create storage solutions that maximize space and reflect your personal style.</p>
                    <Button className="font-bold w-[150px] h-[50px] text-[1rem]"><Link href='contact-us'>Find Out More</Link></Button>
                </div>
            </div>
            
        </div>
     );
}
 
export default HomeSection1;
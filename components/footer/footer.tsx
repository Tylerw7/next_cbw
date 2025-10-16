'use client'


import Link from "next/link";
import Image from "next/image";
import { BriefcaseBusiness, MapPin, User, ArrowRight } from "lucide-react";


const currentYear = new Date().getFullYear()

const Footer = () => {
    return ( 
        <footer className="w-[100vw] flex flex-col bg-[#1f333a]">
            <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-8 p-4 text-center">
            <div className="m-auto flex gap-4 justify-center items-center">
                <Image src="/images/cbw_logo_blue.png" width={100} height={100} alt="logo" />
                <h2 className="font-bold text-[1.5rem] text-[#e8e8e8]">Cabinetry By Wettach</h2>
            </div>
            <div className=" text-[#e8e8e8] mx-auto">
                <p className="font-bold mb-[20px] text-[2rem] mt-[50px]">About</p>
                <p className="hover:text-[#5a8495] hover:cursor-pointer text-[1.2rem] font-semibold"><Link href='about'>Services</Link></p>
                <p className="hover:text-[#5a8495] hover:cursor-pointer text-[1.2rem] font-semibold"><Link href='about'>Locations</Link></p>
                <p className="hover:text-[#5a8495] hover:cursor-pointer text-[1.2rem] font-semibold"><Link href='about'>About</Link></p>
            </div>
            <div className="mx-auto text-[#e8e8e8] ">
                <p className=" text-[#e8e8e8] font-bold mb-[20px] text-[2rem] mt-[50px]">Quick Links</p>
                <p className="hover:text-[#5a8495] hover:cursor-pointer text-[1.2rem] font-semibold"><Link href='kitchen'>Kitchens</Link></p>
                <p className="hover:text-[#5a8495] hover:cursor-pointer text-[1.2rem] font-semibold"><Link href='closets'>Closet</Link></p>
                <p className="hover:text-[#5a8495] hover:cursor-pointer text-[1.2rem] font-semibold"><Link href='out-door-cabinets'>Out Door Cabinets</Link></p>
                <p className="hover:text-[#5a8495] hover:cursor-pointer text-[1.2rem] font-semibold"><Link href='entertainment-systems'>Entertainment systems</Link></p>
                <p className="hover:text-[#5a8495] hover:cursor-pointer text-[1.2rem] font-semibold"><Link href='work-with-us'>Hiring</Link></p>
                <p className="hover:text-[#5a8495] hover:cursor-pointer text-[1.2rem] font-semibold"><Link href='contact-us'>Contact</Link></p>
            </div>

            <div className="mx-auto">
                <p className=" text-[#e8e8e8] dark:text-gray-300 font-bold mb-[20px] mt-[50px] text-[2rem]">Contact</p>
                
                
                


                <div className="flex items-center gap-3 mb-[25px]">
                <div className="
                    w-[40px] 
                    h-[40px] 
                    rounded-full
                  bg-white flex justify-center items-center">
                    <User size={28} color="#5a8495"/>
                    </div>
                    <div className="text-start">
                        <h2 className="font-bold text-[1.2rem] text-[#a8a8a8]">Name</h2>
                        <p className="text-[#e8e8e8] font-bold text-[1.2rem]">Cabinetry By Wettach</p>
                    </div>
                </div>


                <div className="flex items-center gap-3 mb-[25px]">
                <div className="
                    w-[40px] 
                    h-[40px] 
                    rounded-full
                  bg-white flex justify-center items-center">
                    <MapPin size={28} color="#5a8495"/>
                    </div>
                    <div className="text-start">
                        <h2 className="font-bold text-[1.2rem] text-[#a8a8a8]">Address</h2>
                        <p className="text-[#e8e8e8] font-bold text-[1.2rem]">1746 10th Way Unit B</p>
                        <p className="text-[#e8e8e8] font-bold text-[1.2rem]">Sarasota, FL 34236</p>
                    </div>
                </div>

                

                <div className="flex items-center gap-3 mb-[25px]">
                 <div className="
                    w-[40px] 
                    h-[40px] 
                    rounded-full
                  bg-white flex justify-center items-center">
                    <BriefcaseBusiness size={28} color="#5a8495"/>
                    </div>
                    <div className="text-start">
                        <h2 className="font-bold text-[1.2rem] text-[#a8a8a8]">Phone</h2>
                        <p className="text-[#e8e8e8] font-bold text-[1.2rem]">941-232-2817</p>
                    </div>
                 </div>
                </div>
        </div>
        <div className="flex items-center justify-center  pt-[40px] pb-[40px] bg-[#1f333a]">
            <p className="text-sm text-white">{`© ${currentYear} Cabintry By Wettach`}</p>
        </div>
        </footer>
     );
}
 
export default Footer;
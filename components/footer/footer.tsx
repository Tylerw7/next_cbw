'use client'


import Link from "next/link";
import Image from "next/image";
const currentYear = new Date().getFullYear()

const Footer = () => {
    return ( 
        <footer className="w-[100vw] flex flex-col bg-gray-100 dark:bg-gray-800 ">
            <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-8 p-4 text-center">
            <div className="m-auto flex gap-4 justify-center items-center">
                <Image src="/images/cbw_logo_blue.png" width={100} height={100} alt="logo" />
                <h2 className="font-bold text-[1.5rem]">Cabinetry By Wettach</h2>
            </div>
            <div className=" text-gray-600 dark:text-gray-300 mx-auto">
                <p className="font-bold mb-[20px] text-[1.5rem]">About</p>
                <p className="hover:text-black hover:cursor-pointer "><Link href='about'>Services</Link></p>
                <p className="hover:text-black hover:cursor-pointer "><Link href='about'>Locations</Link></p>
                <p className="hover:text-black hover:cursor-pointer "><Link href='about'>About</Link></p>
            </div>
            <div className="mx-auto text-gray-600 ">
                <p className=" text-gray-600 dark:text-gray-300 font-bold mb-[20px] text-[1.5rem]">Services</p>
                <p className="hover:text-black hover:cursor-pointer "><Link href='kitchen'>Kitchens</Link></p>
                <p className="hover:text-black hover:cursor-pointer "><Link href='closets'>Closet</Link></p>
                <p className="hover:text-black hover:cursor-pointer "><Link href='out-door-cabinets'>Out Door Cabinets</Link></p>
                <p className="hover:text-black hover:cursor-pointer "><Link href='entertainment-systems'>Entertainment systems</Link></p>
                <p className="hover:text-black hover:cursor-pointer "><Link href='work-with-us'>Hiring</Link></p>
                <p className="hover:text-black hover:cursor-pointer "><Link href='contact-us'>Contact</Link></p>
            </div>
            <div className="mx-auto">
                <p className=" text-gray-600 dark:text-gray-300 font-bold mb-[20px] text-[1.5rem]">Contact</p>
                <h2 className="font-bold">Name:</h2>
                <p>Cabinetry by Wettach</p>
                <h2 className="font-bold">Address:</h2>
                <p>1746 10th Way Unit B</p>
                <p>Sarasota, FL 34236</p>
                <h2 className="font-bold">Phone:</h2>
                <p>941-232-2817</p>
            </div>
        </div>
        <div className="flex items-center justify-center  pt-[40px] pb-[40px] bg-yellow-300">
            <p className="text-sm text-gray-600 dark:text-gray-300">{`© ${currentYear} Cabintry By Wettach`}</p>
        </div>
        </footer>
     );
}
 
export default Footer;
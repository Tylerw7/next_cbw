'use client'

import Image from "next/image";
const currentYear = new Date().getFullYear()

const Footer = () => {
    return ( 
        <footer className="w-[100vw] flex flex-col bg-gray-100 dark:bg-gray-800 ">
            <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-8 p-4 ">
            <div className="m-auto flex gap-4 justify-center items-center">
                <Image src="/images/logo.jpg" width={50} height={50} alt="logo" />
                <h2 className="font-semibold">Cabinetry By Wettach</h2>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300 m-auto">
                <p>About</p>
            </div>
            <div className="m-auto">
                <p className="text-sm text-gray-600 dark:text-gray-300">Services</p>
            </div>
            <div className="m-auto">
                <p className="text-sm text-gray-600 dark:text-gray-300">Contact</p>
            </div>
        </div>
        <div className="flex items-center justify-center mt-[25px] mb-[25px] p-4">
            <p className="text-sm text-gray-600 dark:text-gray-300">{`© ${currentYear} Cabintry By Wettach`}</p>
        </div>
        </footer>
     );
}
 
export default Footer;
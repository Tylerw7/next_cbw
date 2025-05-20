'use client'

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import MenuBar from "./menu";
import { Button } from "../ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  



const NavBar = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreen = () => setIsMobile(window.innerWidth <= 768);
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);


    return (
        <header className="w-full border-b border-b-gray-200 py-4">
            <div className="flex justify-between md:justify-around pr-6 items-center">
                <div>
                    <Link href="/">
                   {/*} <Image 
                        src="/images/logo.jpg"
                        height={45}
                        width={45}
                        alt="logo"
                        className="object-cover"
                    />
                    */}
                    <h2 className="font-bold text-[1.5rem]">Cabintry By Wettach</h2>
                    </Link>
                </div>
                {isMobile ? (
                    <Sheet>
                        <SheetTrigger><Menu className="cursor-pointer"/></SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Main menu</SheetTitle>
                                <SheetDescription className="flex flex-col gap-2">
                                    <Link href="/" className="text-black hover:text-grey-500 text-[1.1rem]">Home</Link>
                                    <Link href="/kitchen" className="text-black hover:text-grey-500 text-[1.1rem]">Kitchens</Link>
                                    <Link href="/closets" className="text-black hover:text-grey-500 text-[1.1rem]">Closets</Link>
                                    <Link href="/out-door-cabinets" className="text-black hover:text-grey-500 text-[1.1rem]">Out Door Cabinets</Link>
                                    <Link href="/entertainment-systems" className="text-black hover:text-grey-500 text-[1.1rem]">Entertainment Systems</Link>
                                    <Link href="/about" className="text-black hover:text-grey-500 text-[1.1rem]">About</Link>
                                    <Link href="/contact-us" className="text-black hover:text-grey-500 text-[1.1rem]">Contact</Link>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                ) : (
                    <>
                    <MenuBar />
                    <div>
                        <Link href='contact-us'>
                        <Button>Contact</Button>
                        </Link>
                    </div>
                    </>
                )}
                
            </div>
        </header>
    );
}
 
export default NavBar;
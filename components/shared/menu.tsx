"use client"
 
import * as React from "react"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
  } from "@/components/ui/navigation-menu"
import Link from "next/link"
import Image from "next/image"
  


const MenuBar = () => {
    return ( 
        <NavigationMenu className="text-[1.1rem] font-semibold">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href='/'>
                        Home
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-[1.1rem]">Kitchens</NavigationMenuTrigger>
                    <NavigationMenuContent>
                    <ul className="w-[400px] gap-3 grid grid-cols-[.75fr_1fr]">
                        <li className="row-span-3 bg-gray-200 rounded-md m-auto">
                            <NavigationMenuLink asChild>
                            <Link href='/kitchen'>
                                <Image 
                                    src="/images/kitchen.jpg"
                                     height={40}
                                     width={100}
                                     alt="kitchen"
                                     className="rounded-md w-full h-[150px]"
                                     />

                           
                            <div>
                                <h2 className="font-bold text-center text-[1rem]">Custom Kitchens</h2>
                                <p className="text-center text-muted-foreground">See our custom cabinet line.</p>
                            </div>
                            </Link>
                            </NavigationMenuLink>
                        </li>
                        <li>
                            <NavigationMenuLink asChild>
                                <Link href='/closets'>
                                <h2 className="font font-semibold">Closet Systems</h2>
                                <p className="text-muted-foreground">This is where the content will go.</p>
                                </Link>
                            </NavigationMenuLink>
                        </li>
                        <li>
                            <NavigationMenuLink asChild>
                                <Link href='/'>
                                <h2 className="font font-semibold">Heading</h2>
                                <p className="text-muted-foreground">This is where the content will go.</p>
                                </Link>
                            </NavigationMenuLink>
                        </li>
                        <li>
                            <NavigationMenuLink asChild>
                                <Link href='/'>
                                <h2 className="font font-semibold">Heading</h2>
                                <p className="text-muted-foreground">This is where the content will go.</p>
                                </Link>
                            </NavigationMenuLink>
                        </li>
                        
                        
                    </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>


                <NavigationMenuItem className="pr-3">
                    <Link href='/about'>
                        Gallery
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="pr-3">
                    <Link href='/about'>
                        About
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href='/contact-us'>
                        Contact
                    </Link>
                </NavigationMenuItem>

            </NavigationMenuList>

        </NavigationMenu>
     );
}


 
export default MenuBar;
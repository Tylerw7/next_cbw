import { CircleCheck } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";



const ClosetDescription = () => {


    return ( 
        <div className="w-[95vw] flex flex-col md:flex-row justify-center items-center bg-[#e4e4e4] m-auto rounded-sm">
                    <div className="h-full w-full md:w-[50%] flex flex-col p-5">
                        <div className="bg-[#ffd21e] rounded-md p-1 font-bold w-fit text-[0.8rem]">Closet Systems</div>
                        <h2 className="font-bold text-[2.5rem]">Built Around Your Lifestyle</h2>
                        <p className="mb-[25px]">Your closet is more than just storage—it&apos;s where organization meets peace of mind. Our custom closet systems blend sleek design, smart layout, and practical function to fit your daily routine. Whether you&apos;re optimizing a walk-in space or revamping a reach-in closet, we&apos;ll design a system tailored to your style and storage needs.</p>
                        <p className="font-bold text-[1.2rem]">Popular Closet Features We Offer:</p>
                        <ul className=" p-2 mb-[25px]">
                            <li className="flex gap-3 p-2 "><CircleCheck className="text-green-400"/>Walk-in and reach-in closet systems</li>
                            <li className="flex gap-3 p-2"><CircleCheck className="text-green-400"/>Adjustable shelving and hanging options</li>
                            <li className="flex gap-3 p-2"><CircleCheck className="text-green-400"/>Built-in drawers and cabinetry</li>
                            <li className="flex gap-3 p-2"><CircleCheck className="text-green-400"/>Shoe racks and accessory organizers</li>
                            <li className="flex gap-3 p-2"><CircleCheck className="text-green-400"/>Integrated lighting</li>
                        </ul>
                        <Link href='contact-us'>
                        <Button className="w-[200px] hover:cursor-pointer mb-[25px]">Find out more</Button>
                        </Link>
                    </div>
                    <div className="h-full w-full md:w-[50%] p-8">
                    <div className="relative w-full h-[80vh]">
                        <Image
                            src="https://cabinetrybywettach.s3.us-east-1.amazonaws.com/closet1.3.jpg"
                            alt="Custom cabinet in Sarasota FL"
                            fill
                            className="object-cover"
                            priority
                        />
                        </div>
                    </div>
                </div>
     );
}
 
export default ClosetDescription;
import { CircleCheck } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";


const OutDoorDescription = () => {


    return (  
        <div className="w-[95vw] flex flex-col md:flex-row justify-center items-center bg-[#e4e4e4] m-auto rounded-sm mt-[50px]">
                    <div className="h-full w-full md:w-[50%] flex flex-col p-5">
                        <div className="bg-[#ffd21e] rounded-md p-1 font-bold w-fit text-[0.8rem]">Out Door Cabinets & Kitchens</div>
                        <h2 className="font-bold text-[2.5rem]">Built for the Way You Live Outdoors</h2>
                        <p className="mb-[25px]">Your outdoor space should be just as functional and inviting as your indoor kitchen. Our custom outdoor cabinets and kitchens are designed to enhance how you cook, entertain, and relax outside. From durable materials to weather-resistant finishes, every element is built to match your lifestyle and stand up to the elements. Whether you're creating a full outdoor kitchen or adding smart storage to your patio, we&apos;ll design a system that fits your space and the way you live.</p>
                        <p className="font-bold text-[1.2rem]">Popular Outdoor Features We Offer:</p>
                        <ul className=" p-2 mb-[25px]">
                            <li className="flex gap-3 p-2 "><CircleCheck className="text-green-400"/>Fully customized outdoor kitchen layouts</li>
                            <li className="flex gap-3 p-2"><CircleCheck className="text-green-400"/>Weather-resistant cabinets and countertops</li>
                            <li className="flex gap-3 p-2"><CircleCheck className="text-green-400"/>Built-in grills, sinks, and appliances</li>
                            <li className="flex gap-3 p-2"><CircleCheck className="text-green-400"/>Hidden storage for tools and supplies</li>
                            <li className="flex gap-3 p-2"><CircleCheck className="text-green-400"/>Outdoor-rated lighting</li>
                        </ul>
                        <Link href='contact-us'>
                        <Button className="w-[200px] hover:cursor-pointer mb-[25px]">Find out more</Button>
                        </Link>
                    </div>
                    <div className="h-full w-full md:w-[50%] p-8">
                    <div className="relative w-full h-[80vh]">
                        <Image
                            src="https://cabinetrybywettach.s3.us-east-1.amazonaws.com/20230930_125229.jpg"
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
 
export default OutDoorDescription;
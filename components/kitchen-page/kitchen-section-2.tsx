import { CircleCheck } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

const KitchenSectionTwo = () => {
    return ( 
        <div className="w-[95vw] flex flex-col md:flex-row justify-center items-center bg-[#e4e4e4] m-auto rounded-sm">
            <div className="h-full w-full md:w-[50%] flex flex-col p-5">
                <div className="bg-[#ffd21e] rounded-md p-1 font-bold w-fit text-[0.8rem]">Custom Kitchens</div>
                <h2 className="font-bold text-[2.5rem]">Built Around Your Lifestyle</h2>
                <p className="mb-[25px]">Your kitchen is more than just a place to cook—it&apos;s the heart of your home. Our custom kitchen cabinets combine beauty, functionality, and smart design. Whether you&apos;re remodeling or starting new, we&apos;ll create a kitchen that reflects your taste and serves your needs.</p>
                <p className="font-bold text-[1.2rem]">Popular Cabinet Styles We Offer:</p>
                <ul className=" p-2 mb-[25px]">
                    <li className="flex gap-3 p-2 "><CircleCheck className="text-green-400"/>Modern slab cabinets</li>
                    <li className="flex gap-3 p-2"><CircleCheck className="text-green-400"/>Shaker-style cabinets</li>
                    <li className="flex gap-3 p-2"><CircleCheck className="text-green-400"/>Raised panel cabinets</li>
                    <li className="flex gap-3 p-2"><CircleCheck className="text-green-400"/>European frameless cabinets</li>
                    <li className="flex gap-3 p-2"><CircleCheck className="text-green-400"/>Built-in pantries and islands</li>
                </ul>
                <Button className="w-[200px] hover:cursor-pointer mb-[25px]"><Link href='contact-us'>Find out more</Link></Button>
            </div>
            <div className="h-full w-full md:w-[50%] p-8">
            <div className="relative w-full h-[80vh]">
                <Image
                    src="https://cabinetrybywettach.s3.us-east-1.amazonaws.com/20230930_124148.jpg"
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
 
export default KitchenSectionTwo;
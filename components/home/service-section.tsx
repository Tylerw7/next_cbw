import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";
import { Separator } from "../ui/separator";


const HomeServiceAreas = () => {
    return ( 
        <div className="w-[100vw] h-[100vh] lg:h-[80vh] flex justify-center items-center mb-[100px] ">
            <div className="flex flex-col lg:flex-row w-[90%] lg:w-[80%] h-full lg:h-[80%] bg-gray-200 rounded-3xl p-4 justify-center items-center gap-4">
                <div className="relative w-full lg:w-[50%] h-full rounded-l-3xl">
                    <Image src="https://cabinetrybywettach.s3.us-east-1.amazonaws.com/20140620_152752.jpg" fill={true} alt="Sarasota county" className="object-cover rounded-3xl " />
                </div>
                <div className="flex flex-col bg-gray-300 w-full lg:w-[50%] h-full rounded-3xl items-center">
                    <div className="w-full h-full p-4 flex flex-col gap-4">
                    <Badge className="bg-[#ffd21e] text-black">Service Areas</Badge>
                    <h2 className="text-[1.5rem] font-semibold">Located in Sarasota, FL</h2>
                    <Separator className="w-[100px] h-[1px] bg-gray-400" />
                    <p>Cabinetry by Wettach, based in Sarasota, FL, crafts custom cabinetry for homes and businesses in Anna Maria Island, Lido Key, Siesta Key, Longboat Key, Bradenton, Manatee County, and Lakewood Ranch.
                         We create stylish, functional cabinets tailored to your space with expert craftsmanship and attention to detail.</p>
                    <Link href="/locations"> 
                    <Button className="w-[50%] bg-[#ffd21e] hover:bg-[#ffe477] hover:cursor-pointer text-black" >Find more Locations</Button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default HomeServiceAreas;
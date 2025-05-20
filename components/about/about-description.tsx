
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";


const AboutDescription = () => {


    return ( 
        <div className="w-[95vw] flex flex-col md:flex-row justify-center items-center bg-[#e4e4e4] m-auto rounded-sm mt-[50px]">
                    <div className="h-full w-full md:w-[50%] flex flex-col p-5">
                        <div className="bg-[#ffd21e] rounded-md p-1 font-bold w-fit text-[0.8rem]">About</div>
                        <h2 className="font-bold text-[3rem]">Craftsmanship. Precision. Integrity.</h2>
                        <p className=" text-[1rem] p-2">At Cabinetry by Wettach, we believe that your home should reflect your lifestyle—beautifully and functionally. Based in Sarasota, Florida, we specialize in designing and building high-quality custom cabinetry for kitchens, bathrooms, closets, home offices, and more.</p>
                        <p className=" text-[1rem] p-2">As a local, family-owned business, we take pride in offering personalized service and expert craftsmanship. Whether you&apos;re renovating your dream kitchen or upgrading a single room, we work closely with you from concept to completion to bring your vision to life.</p>
                        <p className=" text-[1rem] p-2">Our attention to detail, commitment to quality, and passion for woodworking set us apart. Each project is handcrafted with precision using premium materials, ensuring both durability and timeless beauty. We serve homeowners, builders, and designers throughout Sarasota and the surrounding areas. No matter the size or complexity of the project, we approach each job with the same level of care and dedication.</p>

                        
                        <Button className="w-[200px] hover:cursor-pointer mb-[25px] mt-[50px]"><Link href='contact-us'>Find out more</Link></Button>
                        
                    </div>
                    <div className="h-full w-full md:w-[50%] p-8">
                    <div className="relative w-full h-[80vh]">
                        <Image
                            src="https://cabinetrybywettach.s3.us-east-1.amazonaws.com/20200818_132747.jpg"
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
 
export default AboutDescription;
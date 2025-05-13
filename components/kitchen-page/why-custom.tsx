import Link from "next/link";
import { Button } from "../ui/button";


const WhyCustom = () => {

    



    return ( 
        <div className="w-[95vw] flex flex-col md:flex-row justify-center items-center  m-auto rounded-sm">
            <div className="h-full w-full md:w-[50%] p-8 ">
                {/*Component goes here */}
                <ul className="space-y-4">
                <li className="flex items-start gap-3">
                    <span className="text-yellow-500 font-bold text-[30px]">✓</span>
                    <div>
                    <h4 className="font-semibold text-[1.5rem]">Tailored to Your Space</h4>
                    <p className="text-[1rem] text-muted-foreground">Maximize every inch of your kitchen with cabinetry designed to fit your exact layout and lifestyle.</p>
                    </div>
                </li>
                <li className="flex items-start gap-3">
                    <span className="text-yellow-500 font-bold text-[30px]">✓</span>
                    <div>
                    <h4 className="font-semibold text-[1.5rem]">Premium Materials & Craftsmanship</h4>
                    <p className="text-[1rem] text-muted-foreground">We use only high-quality woods, finishes, and hardware—built to last for generations.</p>
                    </div>
                </li>
                <li className="flex items-start gap-3">
                    <span className="text-yellow-500 font-bold text-[30px]">✓</span>
                    <div>
                    <h4 className="font-semibold text-[1.5rem]">Endless Style Options</h4>
                    <p className="text-[1rem] text-muted-foreground">From sleek modern to timeless traditional, we offer a wide range of door styles, colors, and finishes.</p>
                    </div>
                </li>
                <li className="flex items-start gap-3">
                    <span className="text-yellow-500 font-bold text-[30px]">✓</span>
                    <div>
                    <h4 className="font-semibold text-[1.5rem]">Personalized Functionality</h4>
                    <p className="text-[1rem] text-muted-foreground">Incorporate smart storage solutions, pull-outs, and custom organizers that make everyday tasks easier.</p>
                    </div>
                </li>
                </ul>
                
            </div>
            
            <div className="h-full w-full md:w-[50%] flex flex-col p-5">
                <div className="bg-[#ffd21e] rounded-md p-1 font-bold w-fit text-[0.8rem]">Custom Kitchens</div>
                <h2 className="font-bold text-[2.5rem]">Why choose custom?</h2>
                <p className="mb-[25px]">Custom cabinets offer a level of personalization, quality, and functionality that off-the-shelf options simply can't match. At Cabinetry by Wettach, we design cabinetry around your unique space, lifestyle, and vision—ensuring every drawer, shelf, and finish serves a purpose and reflects your taste. Our skilled craftsmen use high-grade materials and meticulous techniques to build cabinetry that not only fits perfectly but stands the test of time. Whether you're looking for smarter storage, refined style, or a kitchen that feels truly yours, custom cabinetry is the difference you can see and feel.</p>
                
                <Link href='/contact-us'>
                <Button className="w-[200px] hover:cursor-pointer mb-[25px] mt-[150px]">Find out more</Button>
                </Link>
            </div>
            
        </div>
     );
}
 
export default WhyCustom;
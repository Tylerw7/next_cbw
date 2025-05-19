import Link from "next/link";
import { Button } from "../ui/button";



const WhyCustomeClosets = () => {



    return ( 
        <div className="w-[95vw] flex flex-col md:flex-row justify-center items-center  m-auto rounded-sm">
            <div className="h-full w-full md:w-[50%] p-8 ">
                {/*Component goes here */}
                <ul className="space-y-4">
                <li className="flex items-start gap-3">
                    <span className="text-yellow-500 font-bold text-[30px]">✓</span>
                    <div>
                    <h4 className="font-semibold text-[1.5rem]">Tailored to Your Space</h4>
                    <p className="text-[1rem] text-muted-foreground">Make the most of every square inch with a closet layout designed specifically for your room and storage needs.</p>
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
                    <p className="text-[1rem] text-muted-foreground">From contemporary and minimalist to warm and classic, choose from a variety of styles, colors, and finishes.</p>
                    </div>
                </li>
                <li className="flex items-start gap-3">
                    <span className="text-yellow-500 font-bold text-[30px]">✓</span>
                    <div>
                    <h4 className="font-semibold text-[1.5rem]">Personalized Functionality</h4>
                    <p className="text-[1rem] text-muted-foreground">Add built-in drawers, adjustable shelving, shoe racks, jewelry trays, and more—designed to match your lifestyle.</p>
                    </div>
                </li>
                </ul>
                
            </div>
            
            <div className="h-full w-full md:w-[50%] flex flex-col p-5">
                <div className="bg-[#ffd21e] rounded-md p-1 font-bold w-fit text-[0.8rem]">Custom Closets</div>
                <h2 className="font-bold text-[2.5rem]">Why choose custom?</h2>
                <p className="mb-[25px]">Custom closets provide a level of personalization, quality, and organization that standard closet systems simply can&apos;t deliver. At Cabinetry by Wettach, we design closets around your specific space, routine, and vision—ensuring every shelf, drawer, and hanging rod has a purpose and reflects your lifestyle. Our expert craftsmen use premium materials and precise techniques to build closets that not only maximize space but also elevate your daily experience. Whether you need better storage, refined aesthetics, or a closet that truly works for you, custom is the difference you&apos;ll notice every day.</p>
                
                
                <Button className="w-[200px] hover:cursor-pointer mb-[25px] mt-[150px]"><Link href='/contact-us'>Find out more</Link></Button>
                
            </div>
            
        </div>
     );
}
 
export default WhyCustomeClosets;
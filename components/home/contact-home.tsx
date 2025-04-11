import Link from "next/link";
import { Button } from "../ui/button";


const ContactHomePage = () => {
    return ( 
        <div className="w-[100vw] h-[60vh] object-cover" style={{ backgroundImage: "url('/images/outdoor.jpg')" }}>
            <div className="w-full h-full bg-black/70 flex flex-col justify-center items-center">
                <h3 className="text-white text-[2rem] font-semibold p-4">We would love to work with you <span className="text-[#ffd21e]">Contact us</span> and set up an appointment.</h3>
                <p className="text-[#d1d1d1]">Contact us by phone of fill out the contact form.</p>
                <Link href="/contact-us">
                <Button className="w-[150px] bg-[#ffd21e] hover:bg-[#ffe477] hover:cursor-pointer text-black mt-[25px]">Contact Us</Button>
                </Link>
            </div>
        </div>
     );
}
 
export default ContactHomePage;
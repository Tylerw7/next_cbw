
//#a8cbda
import { MapPin, Contact, CalendarCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const CallToAction = () => {
  return (
    <div className="w-full flex flex-wrap justify-evenly">

        <div className="w-[300px] h-[300px] flex flex-col justify-center items-center gap-2">
            <MapPin size={80} color="#5a8495"/>
            <h3 className="font-bold text-[1.5rem]">Location</h3>
            <p className="text-center font-semibold">1746 10th Way Unit B Sarasota, FL 34236</p>
        </div>

        <div className="w-[300px] h-[300px] flex flex-col justify-center items-center gap-2">
            <Contact size={80} color="#5a8495"/>
            <h3 className="font-bold text-[1.5rem]">Contact</h3>
            <p className="text-center font-semibold">941-232-2817</p>
        </div>

        <div className="w-[300px] h-[300px] flex flex-col justify-center items-center gap-2">
            <CalendarCheck size={80} color="#5a8495"/>
            <h3 className="font-bold text-[1.5rem]">Schedule Consultation</h3>
            <Link href={"/contact-us"}>
            <Button className="text-[1.3rem] font-semibold bg-[#ffd21e] text-black hover:cursor-pointer hover:bg-amber-200 hover:border-2 hover:border-amber-300">Find Out More</Button>
            </Link>
        </div>

    </div>
  )
}

export default CallToAction
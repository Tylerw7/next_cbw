
//#a8cbda
import { MapPin, Contact, CalendarCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

const CallToAction = () => {
  return (
    <div className="w-full flex flex-wrap justify-evenly">

        <div className="w-[300px] h-[300px] flex flex-col justify-center items-center gap-2">
            <MapPin size={80} color="#5a8495"/>
            <h3 className="font-bold text-[1.5rem]">Location</h3>
            <p className="text-center">1746 10th Way Unit B Sarasota, FL 34236</p>
        </div>

        <div className="w-[300px] h-[300px] flex flex-col justify-center items-center gap-2">
            <Contact size={80} color="#5a8495"/>
            <h3 className="font-bold text-[1.5rem]">Contact</h3>
            <p className="text-center">941-232-2817</p>
        </div>

        <div className="w-[300px] h-[300px] flex flex-col justify-center items-center gap-2">
            <CalendarCheck size={80} color="#5a8495"/>
            <h3 className="font-bold text-[1.5rem]">Schedule Consultation</h3>
            <Button className="">Find Out More</Button>
        </div>

    </div>
  )
}

export default CallToAction
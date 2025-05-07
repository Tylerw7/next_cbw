import { Button } from "../ui/button";


const Section1 = () => {
    return ( 
        <div className="w-[100vw]  flex flex-col md:flex-row p-10">
            <div className="flex flex-col justify-center items-center w-full md:w-[50%] p-[100px]">
                <h2 className="text-[3rem] text-center italic font-semibold text-muted-foreground">Design your dream kitchen today</h2>
            </div>
            
            <div className="flex flex-col justify-center items-center w-full md:w-[50%]  p-10">
                <p className="text-[1.2rem]">At Cabinetry By Wettach, we believe your kitchen should be as unique as you are. That&apos;s why we specialize in creating custom kitchen cabinets that reflect your personal style while maximizing storage and functionality. Whether you&apos;re planning a complete kitchen remodel or want to enhance your existing space, our expert team is here to guide you from concept to completion.</p>
                <div className="flex items-start w-full mt-[25px]">
                <Button className="w-[200px] text-[1.1rem] text-[#161616] border-2 border-[#161616] bg-white hover:text-white hover:bg-[#161616] hover:cursor-pointer">
                    Find out more
                    </Button>
                </div>
            </div>
        </div>
     );
}
 
export default Section1;
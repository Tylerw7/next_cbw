import Image from "next/image";
import { Button } from "../ui/button";

const KitchenSectionTwo = () => {
    return ( 
        <div className="w-[95vw] flex flex-col md:flex-row justify-center items-center bg-[#dfdfdf] m-auto rounded-sm">
            <div className="h-full w-full md:w-[50%] flex flex-col p-4">
                <h2></h2>
                <p></p>
                <Button className="w-[200px]">Find out more</Button>
            </div>
            <div className="h-full w-full md:w-[50%] p-8">
                <img 
                    src="https://cabinetrybywettach.s3.us-east-1.amazonaws.com/20230930_124148.jpg" 
                    alt="Custom cabinet in sarasota FL" 
                    className="w-full h-[80vh] object-cover"
                    />
            </div>
        </div>
     );
}
 
export default KitchenSectionTwo;
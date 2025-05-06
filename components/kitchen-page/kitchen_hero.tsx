import { Button } from "../ui/button";

const KitchenHero = () => {
    return ( 
        <div className="p-[10px] w-full h-[110vh] md:h-[60vh] bg-cover bg-center flex flex-col justify-center items-center text-center relative" style={{ backgroundImage: 'url("https://cabinetrybywettach.s3.us-east-1.amazonaws.com/20250404_120115.jpg")' }} >
        {/* Overlay to dim the background */}
        <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center items-center h-full">
            <h1 className="text-white font-bold text-[6rem] pb-[10px]">Custom Kitchen Cabinets</h1>
            
            <Button  className="w-[40%] text-[1.5rem] bg-[#ffd21e] hover:bg-[#ffe477] hover:cursor-pointer text-black" >
            <a className='scroll-smooth' href='#contact'>Get a Quote</a>
            </Button>
          </div>
    </div>
     );
}
 
export default KitchenHero;
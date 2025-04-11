import { Button } from "../ui/button";


const Hero = () => {
    



    return ( 
    <div className="p-[10px] w-full h-[100vh] bg-cover bg-center flex flex-col justify-center items-center text-center relative" style={{ backgroundImage: "url('/images/kitchen.jpg')" }} >
        {/* Overlay to dim the background */}
        <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center items-center h-full">
            <h2 className="text-white font-bold text-[6rem] pb-[10px]">Cabinetry By Wettach</h2>
            <p className="text-white text-[1.5rem] w-[30rem] mb-[50px]">
              Discover custom cabinets crafted to fit your style and needs, combining beauty and functionality.
            </p>
            <Button  className="w-[40%] text-[1.5rem] bg-[#ffd21e] hover:bg-[#ffe477] hover:cursor-pointer text-black" >
            <a className='scroll-smooth' href='#contact'>Get a Quote</a>
            </Button>
          </div>
    </div>
     );
}
 
export default Hero;
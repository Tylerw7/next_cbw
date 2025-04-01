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
            <Button variant='outline' className="w-[40%] text-[1.5rem]" >
            <a className='scroll-smooth' href='#contact'>Learn More</a>
            </Button>
          </div>
    </div>
     );
}
 
export default Hero;
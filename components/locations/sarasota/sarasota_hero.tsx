
import { Raleway } from "next/font/google";


const raleway = Raleway({ subsets: ["latin"], weight: ["400", "700"] });


const SarasotaHero = () => {
    



    return ( 
    <div className="relative overflow-hidden p-[10px] w-full h-[85vh] bg-cover bg-center flex flex-col justify-center items-start text-center" style={{ backgroundImage: 'url("/images/Sarasota-hero.jpg")' }}>
        {/* Overlay to dim the background */}
        {/*<div className="absolute inset-0 bg-black/40"></div>*/}
      
        {/* Content */}
        <div className="w-[50vw] flex flex-col ">
            <h1 className={raleway.className + " text-[3.5rem] pl-[50px] font-bold"}>Solving your cabinet and furniture needs in Sarasota, FL</h1>
        </div>
    </div>
     );
}
 
export default SarasotaHero;
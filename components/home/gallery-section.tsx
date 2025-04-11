
import { Button } from "../ui/button";
import { Card} from "../ui/card"


type CardProps ={
    header: string,
    description: string
}
  

const GallerySection = () => {


    const GalleryCard = ({header, description}: CardProps) => {
        return (
            <div className="flex p-4">
                <Card className="w-[250px] h-[150px] bg-cover bg-center" style={{ backgroundImage: "url('/images/outdoor.jpg')" }}></Card>
                <div className="pl-4 w-[50%]">
                    <h3 className="font-semibold">{header}</h3>
                    <p className="text-muted-foreground ">{description}</p>
                </div>
                </div>
        )
    }
    

            
    



    return ( 
        <div className="w-[100vw] flex flex-col md:flex-row justify-center items-center p-6">
            <div className="w-[100vw] md:w-[50%] p-4 flex flex-col gap-2">
                <h2 className="font-bold text-[2.2rem]">Check out our work</h2>
                <Card 
                    className="w-[80%] h-[350px] bg-cover bg-center" 
                    style={{ backgroundImage: "url('/images/kitchen2.jpg')" }}
                    >

                </Card>
                <div>
                <h3 className="font-semibold text-[1.5rem]">Gallery</h3>
                <div className="bg-black h-[2px] w-[80px]"></div>
                </div>
                <p className="text-muted-foreground mb-[25px] w-[80%]">Our gallery showcases a curated selection of our custom cabinetry projects—ranging from elegant kitchens and refined bathrooms to functional closets and built-in storage solutions.</p>
                <Button className="w-[250px] tracking-wider bg-[#ffd21e] hover:bg-[#ffe477] hover:cursor-pointer text-black">Gallery</Button>
            </div>
            <div className="w-[100vw] md:w-[50%] flex flex-col ">
                <GalleryCard 
                    header="Kitchen"
                    description="This gallery features a collection of our custom kitchen cabinetry, highlighting a variety of styles from modern and sleek to warm and traditional."
                    />
                <GalleryCard 
                    header="Closets"
                    description="Discover the art of organization with our custom closet systems. This gallery showcases a variety of beautifully crafted spaces—from walk-ins to reach-ins—designed to optimize storage while elevating style."
                    />   
                <GalleryCard 
                    header="Entertainment Systems"
                    description="This gallery highlights our custom solutions—whether it&apos;s a sleek modern wall unit or a warm, traditional centerpiece."
                    />       
            </div>
        </div>
     );
}
 
export default GallerySection;
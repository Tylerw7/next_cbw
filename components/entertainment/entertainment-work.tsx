import Image from "next/image";
import { Button } from "../ui/button";
import { Card} from "../ui/card"
import Link from "next/link";



type CardProps ={
    header: string,
    description: string
    src: string
    alt: string
}

const EntertainmentWork = () => {


    const GalleryCard = ({header, description,src, alt}: CardProps) => {
            return (
                <div className="flex p-4">
                    <div className="w-[300px] h-[200px] relative">
                    <Image 
                        src={src}
                        alt={alt}
                        fill
                        className=" object-cover rounded"
                        />
                    </div>    
                    <div className="pl-4 w-[50%]">
                        <h3 className="font-semibold text-[1.2rem]">{header}</h3>
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
                    style={{ backgroundImage: "url('https://cabinetrybywettach.s3.us-east-1.amazonaws.com/20230906_105643.jpg')" }}
                    >

                </Card>
                <div>
                <h3 className="font-semibold text-[1.5rem]">About our work</h3>
                <div className="bg-black h-[2px] w-[170px]"></div>
                </div>
                <p className="text-muted-foreground mb-[25px] w-[80%]">Our work features a curated collection of custom cabinetry, including built-in furniture designed to seamlessly blend style, function, and storage into your space.</p>
                <Button className="w-[250px] tracking-wider bg-[#ffd21e] hover:bg-[#ffe477] hover:cursor-pointer text-black"><Link href='/contact-us'>Find out more</Link></Button>
            </div>
            <div className="w-[100vw] md:w-[50%] flex flex-col ">
                <GalleryCard 
                    header="Office"
                    description="We design and build custom office furniture that combines function, comfort, and style to enhance your workspace."
                    src='https://cabinetrybywettach.s3.us-east-1.amazonaws.com/20160804_161220.jpg'
                    alt='A custom Office in sarasota Florida - Cabinetry by Wettach'
                    />
                <GalleryCard 
                    header="Wine Racks"
                    description="Discover the art of organization with our wine rack systems. With a variety of beautifully crafted spaces to optimize storage while elevating style."
                    src='https://cabinetrybywettach.s3.us-east-1.amazonaws.com/20161109_134233.jpg'
                    alt='A custom closet in sarasota Florida - Cabinetry by Wettach'
                    />   
                <GalleryCard 
                    header="Entertainment Systems"
                    description="Highlighting our custom solutions—whether it&apos;s a sleek modern wall unit or a warm, traditional centerpiece."
                    src='https://cabinetrybywettach.s3.us-east-1.amazonaws.com/20250404_095123.jpg'
                    alt='A custom entertainment system in sarasota Florida - Cabinetry by Wettach'
                    />       
            </div>
        </div>
     );
}
 
export default EntertainmentWork;
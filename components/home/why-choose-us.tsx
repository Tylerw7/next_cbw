import { 
    Card,CardContent,
    CardDescription,
    CardHeader,
    CardTitle, } from "../ui/card";

const WhyChooseUs = () => {

    const CardComponent = ({title, description, content}: {title: string, description: string, content: string}) => {
        return (
            <Card className="min-w-[400px] max-w-[450px] text-center bg-[#333333] border-none">
                <CardHeader>
                    <CardTitle className="text-[#ffd21e] text-[1.6rem]">{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-[#F5F5F5] p-6">{content}</p>
                </CardContent>
            </Card>
        )
    }

//#4b5472
    return ( 
        <div className="w-[100vw] bg-[#F5F5F5] flex flex-col justify-center items-center mt-[25px]">
            <h2 className="font-bold text-[3rem] p-4 mt-[50px]">Why Choose Us?</h2>
            <div className="w-[400px] bg-[#333333] h-[2px] mb-[20px]"></div>
            <p className="text-muted-foreground w-[40%] text-center mb-[50px]">Choose us for custom-crafted cabinets that combine exceptional craftsmanship, premium materials, and personalized service, all backed by our locally-owned commitment to quality.</p>
            <div className="flex flex-wrap w-full h-full gap-4 p-4 justify-center items-center mb-[100px]">
                <CardComponent 
                    title="Handcrafted, Custom Designs"
                    description="Every piece is tailored to your space."
                    content="Our cabinetry is meticulously handcrafted to reflect your personal taste and seamlessly integrate with your home's aesthetic. Every piece is designed specifically for your space, offering unparalleled attention to detail and uniqueness."
                        />
                <CardComponent 
                    title="Premium Materials"
                    description="High-quality hardwoods, finishes, and hardware."
                    content="We believe in using only the finest materials, ensuring that every cabinet we create is durable, visually striking, and built to stand the test of time. From solid hardwoods to premium finishes, our materials elevate the quality and longevity of each piece."
                        />
                <CardComponent 
                    title="Locally Owned & Operated"
                    description="Personalized service you can trust."
                    content="As a family-owned business, we take pride in serving our local community with unmatched craftsmanship and personal service. We are deeply invested in our customers’ satisfaction, providing custom solutions that align with your vision and needs."
                        />
                
            </div>
        </div>
     );
}
 
export default WhyChooseUs;
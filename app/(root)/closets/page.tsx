import ClosetContact from "@/components/closets/closet-contact";
import ClosetDescription from "@/components/closets/closet-description";
import ClosetHero from "@/components/closets/closet-hero";
import ClosetServingArea from "@/components/closets/closets-service-area";
import ClosetDesign from "@/components/closets/design-your-closet";
import WhyCustomeClosets from "@/components/closets/why-custom-closets";


const CustomClosets = () => {
    return ( 
        <>
            <ClosetHero />
            <ClosetDesign />
            <ClosetDescription />
            <WhyCustomeClosets />
            <ClosetServingArea />
            <ClosetContact />
        </>
     );
}
 
export default CustomClosets;
import ParallaxGallery from "@/components/kitchen-page/kitchen-parallax-gallery";
import KitchenSectionTwo from "@/components/kitchen-page/kitchen-section-2";
import KitchenHero from "@/components/kitchen-page/kitchen_hero";
import Section1 from "@/components/kitchen-page/section-1";
import ServingSWF from "@/components/kitchen-page/serving";

const CustomKitchens = () => {
    return ( 
        <>
        <KitchenHero />
        <Section1 />
        <KitchenSectionTwo />
        <ParallaxGallery />
        <ServingSWF />
        </>
     );
}
 
export default CustomKitchens;
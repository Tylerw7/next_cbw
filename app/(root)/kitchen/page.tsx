import KitchenContact from "@/components/kitchen-page/kitchen-contact";
import ParallaxGallery from "@/components/kitchen-page/kitchen-parallax-gallery";
import KitchenSectionTwo from "@/components/kitchen-page/kitchen-section-2";
import KitchenHero from "@/components/kitchen-page/kitchen_hero";
import Section1 from "@/components/kitchen-page/section-1";
import ServingSWF from "@/components/kitchen-page/serving";
import WhyCustom from "@/components/kitchen-page/why-custom";

const CustomKitchens = () => {
    return ( 
        <>
        <KitchenHero />
        <Section1 />
        <KitchenSectionTwo />
        <ParallaxGallery />
        <WhyCustom />
        <ServingSWF />
        <KitchenContact />
        </>
     );
}
 
export default CustomKitchens;
import AboutContact from "@/components/about/about-contact";
import AboutDescription from "@/components/about/about-description";
import AboutHero from "@/components/about/about-hero";
import AboutServiceArea from "@/components/about/about-service-area";
import AboutWhyUs from "@/components/about/about-why";

const AboutPage = () => {
    return ( 
        <>
        <AboutHero />
        <AboutDescription />
        <AboutWhyUs />
        <AboutServiceArea />
        <AboutContact />
        </>
     );
}
 
export default AboutPage;
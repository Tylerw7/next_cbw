import EntertainmentContact from "@/components/entertainment/entertainment-contact";
import EntertainmentHero from "@/components/entertainment/entertainment-hero";
import EntertainmentSection from "@/components/entertainment/entertainment-section";
import EntertainmentServiceArea from "@/components/entertainment/entertainment-service-area";
import EntertainmentWork from "@/components/entertainment/entertainment-work";

const EntertainmentSystem = () => {
    return (  
        <>
        <EntertainmentHero />
        <EntertainmentSection />
        <EntertainmentWork />
        <EntertainmentServiceArea />
        <EntertainmentContact />
        </>
    );
}
 
export default EntertainmentSystem;
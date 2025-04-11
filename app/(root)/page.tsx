import Hero from "@/components/hero/hero";
import ContactHomePage from "@/components/home/contact-home";
import GallerySection from "@/components/home/gallery-section";
import HomeSection1 from "@/components/home/home-section-1";
import { AppleCardsCarouselDemo } from "@/components/home/section2-services";
import HomeServiceAreas from "@/components/home/service-section";
import WhyChooseUs from "@/components/home/why-choose-us";

//blue color #4b5472

export default function Home() {
  return (
    <>
    <Hero />
    <HomeSection1 />
    <HomeServiceAreas />
    <AppleCardsCarouselDemo />
    <WhyChooseUs />
    <GallerySection />
    <ContactHomePage />
    </>
  );
}

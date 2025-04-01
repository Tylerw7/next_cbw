import Hero from "@/components/hero/hero";
import HomeSection1 from "@/components/home/home-section-1";
import { AppleCardsCarouselDemo } from "@/components/home/section2-services";
import HomeServiceAreas from "@/components/home/service-section";

//blue color #4b5472

export default function Home() {
  return (
    <>
    <Hero />
    <HomeSection1 />
    <HomeServiceAreas />
    <AppleCardsCarouselDemo />
    <p>hello</p>
    </>
  );
}

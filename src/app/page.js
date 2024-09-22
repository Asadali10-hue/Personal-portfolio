
import Trusted from "./_components/home/Trusted";
import Hiro2 from "./_components/Hiro2";
import CallToActionSection from "./_components/home/CallToActionSection";
import CalendarComponent from "./_components/home/CalendarComponent";
import Views from "./_components/home/Views";
import WhyInstagram from "./_components/home/WhyInstagram";
import Perks from "./_components/Perks";
import { PromVideo } from "./_components/home/PromVideos";
import { TimelineComponent } from "./_components/home/TimelineComponent";
import PortolioLink from "./_components/home/PortolioLink";
import ShowcaseVideos from "./_components/home/ShowcaseVideos";
import { LongVideosParallax } from "./_components/home/LongVideosParallax";
import Hiro1 from "./_components/Hiro1";


export default function Home() {
  return (
    <div className="relative">
      {/* <Hiro1/> */}
      <Hiro2 />
        <Trusted />
      <Views />
       <div className="overflow-hidden">
        <PromVideo />
      </div>
        <LongVideosParallax />

      <ShowcaseVideos /> 

      <PortolioLink />
      <TimelineComponent />
      <WhyInstagram />
      <Perks />
      <CalendarComponent />
      <CallToActionSection />
    </div>
  );
}

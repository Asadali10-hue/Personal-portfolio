import Trusted from "./_components/home/Trusted";
import Hiro2 from "./_components/Hiro2";
import CallToActionSection from "./_components/home/CallToActionSection";
import CalendarComponent from "./_components/home/CalendarComponent";
import Views from "./_components/home/Views";
import WhyInstagram from "./_components/home/WhyInstagram";
import Perks from "./_components/Perks";
import { PromVideo } from "./_components/home/PromVideos";
import dynamic from "next/dynamic";
import { TimelineComponent } from "./_components/home/TimelineComponent";

const CtaDynamic = dynamic(()=> import('./_components/home/CalendarComponent'), {
  ssr: false,
  loading: ()=> <p className="text-white">Loading...</p>
})

export default function Home() {
  return (
  <div className="relative ">
   {/* <Hiro1/> */}
   <Hiro2/>
   <Trusted/>
   <Views/>
   <div className="overflow-hidden">

   <PromVideo/>
   </div>
   <TimelineComponent/>
   <WhyInstagram/>
   <Perks/>
   <CalendarComponent/>
   {/* <CalComponent/> */}
   <CallToActionSection/>
  </div>
  );
}

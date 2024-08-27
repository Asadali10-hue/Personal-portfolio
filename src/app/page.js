import Hiro1 from "./_components/Hiro1";
import Trusted from "./_components/home/Trusted";
import Hiro2 from "./_components/Hiro2";
import CallToActionSection from "./_components/home/CallToActionSection";
import CalendarComponent from "./_components/home/CalendarComponent";
import Views from "./_components/home/Views";
import WhyInstagram from "./_components/home/WhyInstagram";
import CalComponent from "./_components/CalComponent";

export default function Home() {
  return (
  <div className="relative">
   {/* <Hiro1/> */}
   <Hiro2/>
   <Trusted/>
   <Views/>
   <WhyInstagram/>
   <CalendarComponent/>
   {/* <CalComponent/> */}
   <CallToActionSection/>
  </div>
  );
}

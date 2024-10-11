'use client'
import Marquee from "react-fast-marquee";
import Calendly from "./Calendly";
import CalComponent from "../CalComponent";
import { BlurIn } from "@/hooks/blurAnimation";

const CalendarComponent = () => {
  return (
    <BlurIn>

    <section className="min-h-screen !pointer-events-auto" id='book'>
      <div className="container mx-auto px-2">
        <div className="mt-10 md:mt-20">
          <Marquee className="" speed={100}>
            <div className="text-white font-bold textcontact flex items-center">
              <span>We create </span>
              <span className='ml-4 text-main'> Perfection</span>
              <span className="size-2 md:size-8 mt-2 md:mt-4 inline-flex p-3 mx-6 bg-main rounded-full  "></span>
              <span>Let us understand your </span>
              <span className='ml-4 text-main'>growth goals</span>
              <span className="size-2 md:size-8 mt-2 md:mt-4 inline-flex p-3 mx-6 bg-main rounded-full "></span>
            </div>
          </Marquee>
          <CalComponent/>
          {/* <Calendly/> */}
        </div>
      </div>
    </section>
    </BlurIn>

  );
};

export default CalendarComponent;

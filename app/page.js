import Image from "next/image";
import Hero from "./Component/Hero";
import Service from "./Component/Service";

import WhyMeSection from "./Component/Whyme";
import Work from "./Component/Work";
import Testimonial from "./Component/testimonial";
import Contact from "./Component/Contact";
import Faq from "./Component/Faq";
import Fotter from "./Component/Fotter";

export default function Home() {
  return (
       <div className="w-full lg:px-[6%] px-[4%]  h-full bg-[#07090E] text-white">
      
        <Hero/>
        <Service/>
       <WhyMeSection/>
          <Work/>
        <Testimonial/>
         <Faq/>
       <Contact/>
      <Fotter/>
       </div>
  );
}

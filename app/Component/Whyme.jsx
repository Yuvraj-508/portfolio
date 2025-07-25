'use client'
import React, { useRef, useEffect,useState } from 'react';


const features = [
  {
    icon: "🚀",
    title: "Grow: Elevate Your Career",
    desc: "Climb higher with freelance guidance tailored to your goals.",
    detail: "Whether you're building your first project or scaling your brand, I provide the tools, tech, and strategy to help you succeed confidently.",
  },
  {
    icon: "💡",
    title: "Hands-On Learning & Execution",
    desc: "Work side-by-side with me to see real progress.",
    detail: "From wireframes to deployment, every step is transparent, explained, and driven by results.",
  },
  {
    icon: "🛠️",
    title: "Clean, Scalable Code",
    desc: "Behind every pixel is performance-focused logic.",
    detail: "I write modular, maintainable code using modern frameworks that scale with your business.",
  },
  {
    icon: "⚡",
    title: "Fast Turnaround Times",
    desc: "Get high-quality work without delays.",
    detail: "With streamlined workflows and clear scope, you’ll never be left guessing about delivery.",
  },
  {
    icon: "🎯",
    title: "Results-Focused Development",
    desc: "I don’t just build websites—I build outcomes.",
    detail: "Whether your goal is conversions, speed, or branding, I align every decision to your business impact.",
  },
];




export default function WhyMeSection() {
    const [isHovered, setIsHovered] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
  if (isHovered) return;

  const interval = setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  }, 2000);

  return () => clearInterval(interval);
}, [isHovered]);

  const cardRefs = useRef([]);

useEffect(() => {
  cardRefs.current.forEach((card) => {
    if (!card) return;

    card.onmousemove = function (e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--x', `${x}px`);
      card.style.setProperty('--y', `${y}px`);
    };
  });
}, []);


  return (
    <section className=" mt-40 text-white">
      
      <div className="max-w-full hidden card md:flex flex-col lg:flex-row items-center justify-between gap-12 border border-white/10 backdrop-blur-md rounded-3xl py-20 px-10  shadow-lg"
        ref={el => cardRefs.current[0] = el}
         >
        {/* Auto-Scrolling Features */}
       <div
  className="flex-1 overflow-hidden h-125"
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>
  <div
    className="transition-transform duration-700 ease-in-out"
    style={{ transform: `translateY(-${currentIndex * 10}rem)` }}
  >
    {features.map((feature, idx) => (
      <div key={idx} className="flex flex-col items-start gap-5">
        <div className="text-2xl text-[#5D57D0] mb-2 border-white/30 border rounded-full py-3 px-4">
          {feature.icon}
        </div>
        <h3 className="text-xl font-semibold text-[#ffffffe1]">
          {feature.title}
        </h3>
        <p className="text-sm text-[#9e9e9e]">{feature.detail}</p>
        <div className="bg-white/10 h-[1px] w-full mt-4 mb-6" />
      </div>
    ))}
  </div>
</div>


        {/* Right Content */}
        <div className="flex-1 text-center lg:text-left">
        <h1 className="px-4 py-2 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm text-[#726cdbda] text-[14px] font-medium shadow-sm mb-4 w-fit">Why Choose me?</h1>
          <h2 className="text-4xl font-bold leading-tight mb-4">
            Your Go-To Freelancer for Web Solutions
          </h2>
          <p className="text-[#cdcdcdd8] mb-6">
            I bring passion, precision, and personal attention to every line of code. Let’s build something that works beautifully—and delivers results.
          </p>
          <button className="bg-[#5D57D0] hover:bg-[#4c48b4] py-3 px-6 rounded-lg text-white transition">
            Let’s Work Together
          </button>
        </div>
      </div>

      {/* small screen  */}
       <div className="max-w-full md:hidden card flex flex-col lg:flex-row items-center  gap-10 border border-white/10 backdrop-blur-md rounded-3xl py-20 sm:px-10 px-6 shadow-lg"
        ref={el => cardRefs.current[1] = el}
         >
         {/* Right Content */}
        <div className="text-center">
        <h1 className="px-4 py-2 rounded-xl  border border-white/20 bg-white/10 backdrop-blur-sm text-[#726cdbda] text-[14px] font-medium shadow-sm mb-4 mx-auto w-fit">Why Choose me?</h1>
          <h2 className="sm:text-4xl text-3xl font-bold leading-tight mb-4">
            Your Go-To Freelancer for Web Solutions
          </h2>
          <p className="text-[#cdcdcdd8] mb-6">
            I bring passion, precision, and personal attention to every line of code. Let’s build something that works beautifully—and delivers results.
          </p>
          <button className="bg-[#5D57D0] hover:bg-[#4c48b4] py-3 px-6 rounded-lg text-white transition">
            Let’s Work Together
          </button>
        </div>
     

       <div
  className=" overflow-hidden h-125"
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>
  <div
    className="transition-transform duration-700 ease-in-out"
    // style={{ transform: `translateY(-${currentIndex * 10}rem)` }}
  >
    {features.map((feature, idx) => (
      <div key={idx} className="flex flex-col items-start gap-5">
        <div className="text-2xl text-[#5D57D0] mb-2 border-white/30 border rounded-full py-3 px-4">
          {feature.icon}
        </div>
        <h3 className="text-xl font-semibold text-[#ffffffe1]">
          {feature.title}
        </h3>
        <p className="text-sm text-[#9e9e9e]">{feature.detail}</p>
        <div className="bg-white/10 h-[1px] w-full mt-4 mb-6" />
      </div>
    ))}
  </div>
</div>

  </div>
       
        
    </section>
  );
}

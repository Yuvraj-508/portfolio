import React from 'react'
const steps=[{
    id: 1,
    title: 'Planning & Design',
    desc: 'We begin by getting to know your brand and objectives, then craft a design that brings your vision to life.',
    icon: '📉',
},{
    id: 2,
    title: 'Development & Testing',         
    desc: 'Our team builds and tests your product to ensure optimal performance, seamless functionality, and bug-free delivery.',
    icon: '💻',
},{
    id: 3,
    title: 'Launch & Support',
    desc: 'Your website goes live with ongoing support to ensure it runs smoothly and stays updated.',
    icon: '🚀'  ,
},{
    id: 4,
    title: 'Feedback & Iteration',
    desc: 'We gather user feedback and make necessary adjustments to enhance your website’s performance.',
    icon: '🔄',
}
]
function Work() {
  return (
   <div className="w-full flex flex-col items-center justify-center mt-40">
        <h1 className="px-4 py-2 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm text-[#726cdbda] text-[14px] font-medium shadow-sm mb-4 w-fit">How it works?</h1>
    <p className='md:text-5xl text-3xl md:tracking-wide font-normal mb-10'>
   Process Is Everything
    </p>
    <div className="relative flex flex-wrap items-center justify-center gap-6 mt-10">
        {steps.map((step, index) => 
   (<div 
    key={index}
   className="max-w-[520px] h-[248px] workbox p-8 rounded-[36px] relative overflow-hidden border border-white/15 shadow-xl">

  {/* Content */}
  <div className="relative z-10">
    {/* Icon */}
    <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-xl mb-5">
     {step.icon}
    </div>

    {/* Title */}
    <h3 className="text-2xl md:text-3xl font-semibod mb-3">
        {step.title}
    </h3>

    {/* Description */}
    <p className="text-[#d2d2d2d4] text-[14px] leading-relaxed">
        {step.desc}
    </p>
  </div>
</div>))}

</div>
   </div>
  )
}

export default Work
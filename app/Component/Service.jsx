import React from 'react';
import './Service.css';
import Link from 'next/link';
const content = [{
    id: 1,
    title: 'End-to-End Development',
   // Placeholder for icon
    }, {
    id: 2,
    title: 'Responsive Design',
    // Placeholder for icon
    }, {
    id: 3,
    title: 'Custom Website Design',
    // Placeholder for icon
},
{
    id: 4,
    title: 'Landing Page',
    // Placeholder for icon
},
{
    id: 5,
    title: ' E-commerce Website',
    // Placeholder for icon
},
{
    id: 6,
    title: 'SEO Optimization',
    // Placeholder for icon
},
]
function Service() {
  return (

        <div className="w-full mt-40 flex md:flex-row flex-col items-center gap-5">
        <div className="left md:max-w-[50%] flex flex-col md:items-start items-center gap-5 ">
                            <h1 className="px-4 py-2 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm text-[#726cdbda] text-[16px] font-medium shadow-sm mb-4 w-fit">Services</h1>

            <h1 className='sm:text-[35px] text-[24px]   text-center md:text-start leading-12 font-[700]'>All Your Website Needs—Handled Personally, Built Professionally.</h1>
            <p className='text-[16px] sm:max-w-[65%] text-center sm:text-start   text-[#C8C8C9]'>From design to launch—websites that look sharp, work fast, and convert better.</p>
            <Link href="/" className='bg-[#5D57D0] text-white text-[16px] px-3.5 py-3  rounded-2xl w-fit '>Book Now</Link>
        </div>
        <div className="right md:max-w-[50%] flex items-end justify-end mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3  md:gap-8">
        {content.map((service, index) => (
  <div
    key={index}  // ✅ Always include a unique `key` when mapping in React
    className="box md:min-w-[285px]  md:max-w-[150px] text-center px-4 py-4  bg-[#0F0F0F]  rounded-xl shadow-lg"
  >
    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
  </div>
))}

    </div>
        </div>
        </div>

  )
}

export default Service

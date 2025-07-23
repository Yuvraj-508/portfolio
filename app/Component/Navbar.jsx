"use client"
import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // rename this
import Link from 'next/link'; // keep this for routing
import { ArrowUpRight, Menu, X} from 'lucide-react';

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
<div className="w-full fixed top-0 mt-5 z-50">
  <nav className="w-[95%] md:w-[85%] mx-auto flex items-center justify-between py-3 px-4 text-white backdrop-blur-md bg-black/20 border border-white/10 rounded-xl shadow-lg">
    <Link href='/' className='text-2xl'>
   <img src="/logo2.png" alt="" className='md:w-10 w-8'/>
    </Link>
    <ul className='hidden md:flex '>
      <li className='mx-5 text-sm inline-block'>
        <ScrollLink to="hero" smooth={true} offset={0} duration={500}>Home</ScrollLink>
      </li>
      <li className='mx-5 text-sm inline-block'>
        <ScrollLink to="program" smooth={true} offset={-80} duration={500}>Work</ScrollLink>
      </li>
      <li className='mx-5 text-sm inline-block'>
        <ScrollLink to="about" smooth={true} offset={-80} duration={500}>Services</ScrollLink>
      </li>
      <li className='mx-5 text-sm inline-block'>
        <ScrollLink to="testimonials" smooth={true} offset={-80} duration={500}>Testimonials</ScrollLink>
      </li>
    </ul>
    <ScrollLink className='bg-[#5D57D0] hidden md:flex py-2 px-3 rounded-xl text-lg items-center gap-2' to="contact" smooth={true} offset={-80}>Contact Us <ArrowUpRight /></ScrollLink>
     <button onClick={() => setToggle(!toggle)} className="text-2xl cursor-pointer md:hidden transition duration-300 ease-in-out transform">
  <span className="transition-all duration-300 ease-in-out">
    {toggle ? (
      <X size={35} className="rotate-180 scale-100 opacity-100 transition-all duration-300" />
    ) : (
      <Menu size={35} className="rotate-0 scale-100 opacity-100 transition-all duration-300" />
    )}
  </span>
</button>

       {/* // moblie  */}
      <div className={`  backdrop-blur-md bg-black fixed h-fit py-6 px-6 sm:translate-y-15 translate-y-13 inset-2 rounded-xl transition  duration-50 ease-in-out ${toggle?"":"hidden"} `}>
          <div className="flex flex-col  gap-6">
         <ScrollLink to="hero" smooth={true} offset={-200} duration={500} className='cursor-pointer' onClick={()=>setToggle(prev=>!prev)} >Home</ScrollLink>
          <ScrollLink to="about" smooth={true} offset={-100} duration={500} className=' cursor-pointer 'onClick={()=>setToggle(prev=>!prev)} >Work</ScrollLink>
          <ScrollLink to="testmonail" smooth={true} offset={-20} duration={500} className=' cursor-pointer 'onClick={()=>setToggle(prev=>!prev)} >Service</ScrollLink>
    <ScrollLink className='bg-[#5D57D0] contact flex justify-center py-2 px-2 rounded-xl text-[16px] items-center gap-2' to="contact" smooth={true} offset={-80}>Contact Us <ArrowUpRight /></ScrollLink>
          </div>
         </div>
  </nav>

 

</div>
  )
}

export default Navbar

"use client"
import React from 'react'
import StarBackground from './StarBackground'

function Hero() {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center relative '>
      {/* <StarBackground className="absolute"/> */}
        <h1 className="px-4 py-2 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm text-[#726cdbda] text-[14px] font-medium shadow-sm mb-4">Hey! My nam<span className="text-[#726cdb]">e is Yuvraj!</span></h1>
      <h1 className='lg:text-[60px] md:text-[52px] sm:text-[48px] text-[36px] text-center md:max-w-[75%] lg:leading-18 sm:leading-15 leading-10 font-[500]'>
        I Build Smart Web<span className='text-[#C8C8C9]'>Pages that </span> Convert Scroll<span className='text-[#C8C8C9]'>s into Sales.</span>
        </h1>
      <p className='md:text-[18px] text-[14px] text-center md:max-w-[45%] max-w-[80%]  mt-5 text-[#C8C8C9]'>Hey, I'm Yuvraj — I create websites that look great and work even better. Let’s build something your users will love..</p>
      <div className="flex items-center mt-6 gap-4">
        <button className='bg-[#5D57D0] text-white text-[16px] px-4 py-3 rounded-xl '>Get in Touch</button>
        <button className='bg-[#121621] text-[16px] px-4 py-3 rounded-xl border border-white/5'>See My Work</button>
      </div>
      <div className="tbox -mt-5">
        <div className="light"></div>
        <div className="tube"></div>
      </div>
    </div>
  )
}

export default Hero

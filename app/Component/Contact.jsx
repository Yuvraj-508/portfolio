import React from 'react'

function Contact() {
  return (
    <section className=" text-white mt-35 ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-15 items-start">
        
        {/* Left Content */}
        <div>
        <h1 className="px-4 py-2 rounded-xl border  border-white/20 bg-white/10 backdrop-blur-sm text-[#726cdbda] text-[14px] font-medium shadow-sm mb-8 w-fit">Contact Me</h1>
          <h1 className="text-3xl md:text-[46px]   mb-6">
         
           Let's Transform your <br />business
           <span className="text-[#e1e1e1]"> with a stunning,</span> <br />
              <span className="text-[#e0e0e0]"> high-performing website.</span>
          </h1>
          <p className="text-[#d0d0d0c1] mb-6">
            For every prosperous enterprise, a proficient website is necessary, and I'm the expert for it.
            Contact me now, let's kick-start!
          </p>
          <p className="text-[#c5c5c5c0] mb-4">Also you can find me here:</p>
          <div className="flex space-x-4">
            <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Right Form */}
        <form className="bg-[#0E121A] p-6 rounded-xl shadow-xl space-y-4">
          <h2 className="text-xl font-semibold mb-2">Enter your details</h2>
          <p className="text-sm text-[#c7c7c7e2] mb-4">Let me know your details and I will get in touch with you within 24h.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Full Name" className="input bg-[#0A0F14] border border-white/10 p-3 rounded-xl placeholder:text-gray-600" />
            <input type="email" placeholder="Email" className="input bg-[#0A0F14] border border-white/10 p-3 rounded-xl placeholder:text-gray-600" />
            <input type="text" placeholder="Your Website Niche" className="input bg-[#0A0F14] border border-white/10 p-3 rounded-xl placeholder:text-gray-600" />
            <input type="text" placeholder="What is your budget?" className="input bg-[#0A0F14] border border-white/10 p-3 rounded-xl placeholder:text-gray-600" />
          </div>

          <textarea
            placeholder="Tell me more about your needs..."
            className="input h-28 w-full bg-[#0A0F14] border border-white/10 p-3 rounded-xl placeholder:text-gray-600"
          ></textarea>

          <button className="w-full cursor-pointer bg-[#5750D0] hover:bg-[#5750d0dc] transition text-white py-3 rounded-lg font-semibold">
            Submit
          </button>

          <p className="text-sm text-gray-500 mt-2 ">
            Or you can email me at: <a href="mailto:yuvi@gmail.com" className="underline">yuvi94@gmail.com</a>
          </p>
        </form>
      </div>
    </section>
  )
}

export default Contact
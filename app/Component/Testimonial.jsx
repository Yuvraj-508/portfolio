'use client'
import React, { useState, useEffect } from "react";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  // Mock testimonials loaded after component mounts
  useEffect(() => {
    const mockData = [
      {
        name: "Sarah M.",
        role: "Founder, Bloom Studio",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 5,
        text: "Yuvraj took our vision and turned it into a clean, modern website that works perfectly.",
      },
      {
        name: "Arjun K.",
        role: "Product Manager, TechCore",
        image: "https://randomuser.me/api/portraits/men/33.jpg",
        rating: 5,
        text: "The frontend interface Yuvraj developed was fast, user-friendly, and beautifully designed.",
      },
      {
        name: "Lena D.",
        role: "Marketing Lead, Novo Brands",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        rating: 4,
        text: "We needed a quick redesign for our landing page, and Yuvraj exceeded our expectations.",
      },
      {
        name: "Jason T.",
        role: "Startup Co-founder",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
        rating: 5,
        text: "Yuvraj communicates clearly and codes even better. A seamless user experience all around.",
      },
    ];
    setTestimonials(mockData);
  }, []);

  return (
  <div className="mt-40 w-full flex flex-col justify-center items-center text-white ">
        <h1 className="px-4 py-2 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm text-[#726cdbda] text-[14px] font-medium shadow-sm mb-4 w-fit">Testimonails</h1>
        <p className="md:text-4xl text-3xl font-normal text-center md:text-start mt-5">What My Clients Say About Me</p>
  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto mt-20">
    {testimonials.map((item, index) => (
      <div
        key={index}
        className=" p-8 rounded-xl bg-[#10121B] shadow-md flex border border-white/10 items-start space-x-4"
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <p className="text-gray-300 italic">"{item.text}"</p>
          <div className="mt-2 flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${
                  i < item.rating ? "text-[#625CD0]" : "text-gray-600"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
              </svg>
            ))}
          </div>
          <p className="mt-2 font-semibold text-white">{item.name}</p>
          <p className="text-sm text-gray-400">{item.role}</p>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default Testimonial;

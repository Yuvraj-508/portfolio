'use client'
import { ChevronDownIcon } from 'lucide-react';
import React,{useState} from 'react'

const faqs = [
  {
    question: "What makes your service different from agencies or freelancers?",
    answer:
      "I provide a personal, high-quality experience tailored to your needs — with the responsiveness of a freelancer and the quality of an agency.",
  },
  {
    question: "What platforms do you develop websites on?",
    answer:
      "I specialize in modern technologies like React, Next.js, and Tailwind CSS, ensuring fast, scalable, and responsive websites.",
  },
  {
    question: "How do we collaborate during the project?",
    answer:
      "We’ll use tools like WhatsApp, Notion, or Trello for updates. Regular calls and milestones help us stay in sync throughout the project.",
  },
  {
    question: "How fast will my website be ready?",
    answer:
      "It depends on the project size, but most standard websites are completed within 7–14 days, including feedback and revisions.",
  },
  {
    question: "What if I need my website done urgently?",
    answer:
      "Express delivery is available! Just let me know your timeline and I’ll prioritize accordingly with transparent communication.",
  },
];

function Faq() {
     const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
       <section className=" mt-25 flex justify-center items-center flex-col ">
                <h1 className="px-4 py-2 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm text-[#726cdbda] text-[14px] font-medium shadow-sm mb-4 w-fit">FAQ</h1>

      <h2 className="text-3xl mt-5 md:text-4xl font-semibold text-center mb-10">
        Qustions? We have<span className="text-white/80"> answers.</span>
      </h2>

      <div className="space-y-4 faq max-w-3xl w-full">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`bg-[#0F0F0F] w-full border border-white/15 rounded-xl transition-all duration-300 overflow-hidden ${
              openIndex === index ? "ring-2 ring-[#5750D0]" : ""
            }`}
          >
            <button
              className="flex justify-between items-center w-full p-6 text-left"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg ">{faq.question}</span>
              <ChevronDownIcon
                className={`w-6 h-6 transition-transform cursor-pointer duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-5 pb-5 text-gray-400">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>

  )
}

export default Faq
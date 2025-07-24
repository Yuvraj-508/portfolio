import { Instagram, Linkedin } from 'lucide-react'
import React from 'react'

function Fotter() {
  return (
    <div className="w-full mt-30 border-t border-white/10 sm:p-8 p-6 flex justify-between items-center  text-white">
        <div className="flex flex-col gap-3">
           <img src="/logo2.png" alt="" className='w-10' />
           <p className='sm:max-w-[70%] text-[12px] md:text-[18px] text-[#afafaf]'>Your trusted partner in website solutions, building high-converting websites for growing businesses.</p>
        </div>
        <div className="flex sm:gap-10 gap-6">
            <button className='bg-[#35343A] p-2 rounded-xl '><Linkedin
            size={20}
            /></button>
            <button className='bg-[#35343A] p-2 rounded-xl'><Instagram
            size={20}
            /></button>
            </div>
    </div>
  )
}

export default Fotter
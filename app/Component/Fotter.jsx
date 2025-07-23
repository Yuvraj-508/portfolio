import { Instagram, Linkedin } from 'lucide-react'
import React from 'react'

function Fotter() {
  return (
    <div className="w-full mt-30 border-t border-white/10 p-8 flex justify-between items-center  text-white">
        <div className="flex flex-col gap-3">
           <img src="/logo2.png" alt="" className='w-10' />
           <p className='max-w-[70%] text-[#afafaf]'>Your trusted partner in website solutions, building high-converting websites for growing businesses.</p>
        </div>
        <div className="flex gap-10">
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
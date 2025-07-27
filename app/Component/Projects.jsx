'use client'
import React from 'react'
import { motion } from "framer-motion";

const projects = [
  { id: 1, img: '/fit.png' },
  { id: 2, img: '/shiv.png' },
  { id: 3, img: '/int.png' },
  { id: 4, img: '/fit.png' },
  { id: 5, img: '/shiv.png' },
  { id: 6, img: '/int.png' }
];
function Projects() {
  return (
    <div className="project mt-40 relative w-full overflow-hidden">
           <motion.div
             className="flex gap-5 w-max"
             animate={{ x: ["0%", "-50%"] }}
             transition={{
               duration: 60,
               ease: "linear",
               repeat: Infinity,
             }}
           >
             {projects.map((project) => (
               <div
                 key={project.id}
                 className='bg-[#26262679] backdrop-blur-md p-4 rounded-t-3xl'
               >
                 <img
                   src={project.img}
                   alt="Project"
                   className=" object-center  w-[450px] h-[380px] rounded-t-2xl"
                 />
               </div>
             ))}
           </motion.div>
         </div>
  )
}

export default Projects
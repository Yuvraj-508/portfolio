"use client"
import React, { useEffect, useState, useCallback } from 'react'

function StarBackground() {
  const [stars, setStars] = useState([]);
   const [meteors,setMeteors]=useState([])
  // ✅ useCallback to prevent unnecessary re-renders
  const generateStars = useCallback(() => {
    const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 15000);
    const newStars = [];
    
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size:4,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity:0.3, // Opacity between 0.05 and 0.25

      });
    }
    setStars(newStars);
  }, []);


  useEffect(() => {
    generateStars();
    // generateMeteros();
    
    // ✅ Regenerate stars on window resize
    const handleResize = () => {
      generateStars();
     
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [generateStars]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
   <div
   key={star.id}
   className="absolute rounded-full bg-white animate-floats"
   style={{
     width: `${star.size}px`,
     height: `${star.size}px`,
     left: `${star.x}%`,
     top: `${star.y}%`,
     opacity: star.opacity,
     animationDelay: `${Math.random() * 5}s`, // Make each star animate at different times
   }}
 />
 
      ))}


    </div>
  )
}

export default StarBackground
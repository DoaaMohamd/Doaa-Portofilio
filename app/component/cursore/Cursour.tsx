import React, { useEffect, useState } from 'react';
import "./cursor.css"
import { motion } from 'framer-motion';

const Cursour = () => {
    const [pos , setpos]=useState({x:0 , y:0});
    useEffect(()=>{
        const mouseMove=(e: { clientX: any; clientY: any; })=>{setpos({x:e.clientX , y:e.clientY})};
        window.addEventListener("mousemove",mouseMove);
        
        return()=>window.removeEventListener("mousemove",mouseMove);
    },[]);
  return (
    <motion.div className='cursor' animate={{x:pos.x , y:pos.y}}>
      
    </motion.div>
  )
}

export default Cursour

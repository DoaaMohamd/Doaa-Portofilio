import { motion } from "framer-motion";
import React from "react";
type bt={handelclick:() => void; };
const Toggle= ({handelclick}:bt)=>{
  
    return(
       <button className="tg-button" onClick={handelclick}>
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
       <motion.path stroke="currentColor" stroke-linecap="round" stroke-width="1" d="M5 7h14M5 12h14M5 17h14"/>
     </svg></button>
     
    );
}
export default Toggle;
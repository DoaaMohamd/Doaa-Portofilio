 import { motion } from 'framer-motion';
import React from 'react';
 
 const variant={
    open:{
        transation:{
            staggerchildren:0.1,
             
        }
    },
    close:{
        transation:{
            staggerchildren:0.05,
            staggerirection:-1,
        }
    },
 }
 const itemvariant={
    open:{
         
           y:0,
           opacity:1
         
    },
    close:{
        y:50,
        opacity:0,
    },
 }
const Links=()=>{
    const items=["Homepage" , "Services","Portofilo","Contact" , "About"];
    return(
 
        <motion.div className="links"   >
            {items.map(item => (<motion.a href={`#${item}`} key={item} variants={itemvariant} whileHover={{scale:1.1}} whileTap={{scale:0.95}}>{item}</motion.a>))}
            
        </motion.div>
        
    );
}
export default Links;

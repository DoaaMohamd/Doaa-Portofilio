import "./paralx.css";
import React, { useRef } from "react";
import {motion , useScroll , useTransform} from "framer-motion";
type param={type:string};
const Paralax  =({type}:param)=>{
    const r=useRef(null);
    const { scrollYProgress }=useScroll({ target:r , offset:["start start" , "end start"]});
    const yb= useTransform(scrollYProgress ,[0,1] , ["0%" , "500%"]);
    const ytxt= useTransform(scrollYProgress ,[0,1] , ["0%" , "100%"]);

    return(
        <div className="parallax" 
        ref={r}
        style={{background:type==="services" ? 
        "linear-gradient(180deg,#111132,#0c0c1d)": "linear-gradient(180deg,#111132,#505064)"}}>
            <motion.h1 style={{x:ytxt}}>{type==="services" ? "What we do?" : "What we did?"}</motion.h1>
            <motion.div  className="mountaians"></motion.div>
            <motion.div style={{ x:yb ,background:`url(${type==="services" ? "/planets.png" :"/sun.png"})`} } className="planets"></motion.div>
            <motion.div className="stars"style={{ x:yb}} ></motion.div>

        </div>
    );
}
export default Paralax;
import React from "react";
import './hero.css';
import { motion } from "framer-motion";
const txtvar={
    initial:{
        x:-500,
        opacity:0,
    },
    animat:{
      x:50,
        opacity:1,
        transation:{
            duration:5,
            staggerchildren:0.5,
        },
        
    },
    scrollbutton:{
        opacity: 0.5,
        y:10,
        transation:{
            duration:2 , 
            repeat:Infinity,
        },
    },
}

const slidervar ={
    initial:{
        x:0,
        
    },
    animat:{
      x:"-220%",
        transation:{
            repeat:Infinity,
            repeatType:"mirror",
            duration:20,
            
        },
        
    },
}
const Hero=()=>{
    return(
        <div className="hero">
            <div className="wrapperhero">
            <motion.div className="txtcontainer" variants={txtvar} initial="initial" animate="animat">
                <motion.h2 variants={txtvar}>Doaa Elsayed</motion.h2>
                <motion.h1 variants={txtvar}>Front End Developer and UI Designer</motion.h1>
               
                
                <motion.div className="buttons" variants={txtvar}>

                    <motion.button variants={txtvar}>See the Latest Works</motion.button>
                    <motion.button variants={txtvar}>Contact Me</motion.button>
                    </motion.div>
                    <motion.img variants={txtvar} animate="scrollbutton" src="/scroll.png" alt="scroll"/>
                    </motion.div>
                   

                
            </div>
            <motion.div className="slidingtxt" variants={slidervar} initial="initial" animate="animat">Front End Developer</motion.div>
            <div className="img-container">
                <img src="/doaa.jpg" alt="doaa"/>
            </div>
        </div>
        );
}
export default Hero;
import React from "react";
import "./serv.css";
import { motion } from "framer-motion";
const v = {
    // intial:{
    //     x:-500 ,
    //     y:-100 ,
    //     opacity:0 ,
    // },
    // animate:{
    //     x:0 ,
    //     y:0 ,
    //     opacity:1 ,
    //     transation:{
    //         duration:1,
    //         staggerchildren:0.1,
    //     }
    //}

};
function Serv()
{
    return(
        <motion.div className="serv" variants={v} initial="intial"  >
            <motion.div className="main-title">
                <p> I focuse on helping your brand grow
                    <br/>and move forward
                  
                </p>
                <hr/>
            </motion.div>
            <motion.div variants={v} className="titel-cont">
                <div className="title">
                    <img src="/people.webp" alt="people"/>
                    <h1><b>Uniqe</b> ideas</h1>
                </div>
                <div className="title">
                     
                    <h1><b>For Your</b> bussines</h1>
                    <button>What we do?</button>
                </div>
            </motion.div>
            <motion.div variants={v} className="list-cont">
                <motion.div variants={v} whileHover={{backgroundColor:"lightgray" , color:"black"}}  className="box">
                    <h2>Branding</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nihil reiciendis ipsa optio. Aut deleniti ut sit ab, fugit dicta, dignissimos sed numquam eaque distinctio 
                        voluptate, accusantium nisi non eum?</p>
                        <button>Go</button>
                </motion.div>
                <motion.div variants={v} whileHover={{backgroundColor:"lightgray" , color:"black"}} className="box">
                    <h2>Branding</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nihil reiciendis ipsa optio. Aut deleniti ut sit ab, fugit dicta, dignissimos sed numquam eaque distinctio 
                        voluptate, accusantium nisi non eum?</p>
                        <button>Go</button>
                </motion.div>
                <motion.div variants={v} whileHover={{backgroundColor:"lightgray" , color:"black"}}  className="box">
                    <h2>Branding</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nihil reiciendis ipsa optio. Aut deleniti ut sit ab, fugit dicta, dignissimos sed numquam eaque distinctio 
                        voluptate, accusantium nisi non eum?</p>
                        <button>Go</button>
                </motion.div>
                <motion.div variants={v} whileHover={{backgroundColor:"lightgray" , color:"black"}}  className="box">
                    <h2>Branding</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nihil reiciendis ipsa optio. Aut deleniti ut sit ab, fugit dicta, dignissimos sed numquam eaque distinctio 
                        voluptate, accusantium nisi non eum?</p>
                        <button>Go</button>
                </motion.div>
            </motion.div>
        </motion.div>
    );

}
export default Serv;
import React, { useRef } from 'react';
import "./portofilio.css";
import {MotionValue, motion , useScroll ,useSpring, useTransform} from "framer-motion";
const items=[
     
    {
        id:1 ,
        title:"Landing page",
        imgurl:"./portfolio-2.jpg" ,
  description:"Landing website build with Html5 , Css3  "
  ,
  url:"https://doaamohamd.github.io/First-project/",
    },
    {
        id:2 ,
        title:"Kasber Website",
        imgurl:"./download - Copy.jpg",
  description:"Kasber Website website build with Html5  and Css3"
  ,
  url:"https://doaamohamd.github.io/Second-project/" ,
    },
    {
        id:3,
        title:"Elzero Website",
        imgurl:"./landing-image.png",
  description:"Elzero Website build with Html5  and Css3"
  ,
  url:" https://doaamohamd.github.io/Third-project/" ,
    },

];
 type p={item:  {
    id: number;
    title: string;
    imgurl:string;
    description:string;
    url:string;
  };}
function Single({item}:p)
{
    const ref =useRef (null);
    const { scrollYProgress } = useScroll( {target: ref,
         });
         const y=useTransform(scrollYProgress , [0,1],[-300,300])
    return(
        <section className="sec-cont" > 
        <div className="container">
            <div className="w">
                <motion.div className="img-c" ref={ref}>
        <img src={item.imgurl} alt="people"/>
        </motion.div>
        <motion.div  className="text-c">
            <h2 >{item.title}</h2>
            <p>{item.description}</p>
            <button><a href={item.url}>See Demo</a></button>
        </motion.div>
        </div>
        </div>
        
        </section>
    );
}

const Portofilio = () => {
    const ref =useRef (null);
    
    const { scrollYProgress } = useScroll( {target: ref,
        offset: ["start start", "end end"]});
    const x=useSpring(scrollYProgress);
     
  return (
    
    <div className="portofilo" ref={ref}>
        <div className="prog">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX:x}} className="prog-bar"></motion.div>
    </div >
        {items.map(item=><Single item={item} key={item.id}/> )}
    </div>
  )
}

export default Portofilio

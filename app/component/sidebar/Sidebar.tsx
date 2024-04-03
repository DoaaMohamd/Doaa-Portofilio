import "./sidebar.css";
import Links from "./links/Links"
import Toggel from "./toogelButton/Toggel";
import { useState } from "react";
import { motion } from "framer-motion";
const Sidebar=()=>{
    const [open , setOpen] = useState(false);
    const variants = {
        open:{clipPath:"circle(1200px at 50px 50px)",
        transation:{
            delay:0.5,
            duration:0.5,
            type:"spring",
            stiffness:20
        }
    },
        close:{
            clipPath: "circle(30px at 50px 50px)",
            transition:{
                delay:0.5 ,
                type:"spring",
                stiffness:400,
                damping:40,

            },
    },};
    function handelClic()
    {
         
        setOpen(!open);
         

    }
    return(
        <motion.div className="sidebar" animate={open ? "open" : "close"}>
            <motion.div className="bg" variants ={variants}>
                <Links />
            </motion.div>
            <Toggel handelclick={handelClic}/>
        </motion.div>
    );
}
export default Sidebar;
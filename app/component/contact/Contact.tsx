import React, { useRef, useState } from 'react';
import "./contact.css";
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
const v={
    initial:{
        y:500,
        opacity:0,
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
            staggerchildren:0.1,
        }
    }
}

const Contact = () => {
  const form = useRef ('HTMLFormElement');
 
const [error , seterror]=useState(false);
const[suc , setsuc]=useState(false);
  const sendEmail = (e: { preventDefault: () => void; }) => {
   e.preventDefault();

    emailjs
      .sendForm('service_4yaa9kq', 'template_vsgiv51', form.current, {
        publicKey:'cv980JVUNeHkVNliu',
      })
      .then(
        () => {
          setsuc(true);
        },
        (error) => {
          seterror(true);
        },
      );
  };
  return (
    <motion.div variants={v} initial="initial" whileInView="animate" className='contact'>
      <motion.div className="text-cont"  variants={v}>
        <motion.h1>Lets work <br/>to gethere</motion.h1>
        <motion.div className="item"  variants={v} >
            <h2>Mail</h2>
            <span>mrxpop7@gmail.com</span>
        </motion.div>
        <motion.div className="item"  variants={v} >
            <h2>Address</h2>
            <span>Egypt-Cairo</span>
        </motion.div>
        <motion.div className="item"  variants={v} >
            <h2>Phon</h2>
            <span>01125503282</span>
        </motion.div>
      </motion.div>
      <motion.div  variants={v} className="form-cont">
        <motion.div initial={{opacity:1}} whileInView={{opacity:0}} transition={{duration:1,delay:3}}className="phone-svg">
        <svg width="450px" height="450px" viewBox="-0.24 -0.24 24.48 24.48"
         fill="none" xmlns="http://www.w3.org/2000/svg" stroke="orange">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" 
            stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
                 <path d="M14 2C14 2 16.2 2.2 19 5C21.8 7.8 22 10 22 10" 
                 stroke="orange" stroke-width="0.24000000000000005"
                  stroke-linecap="round"></path>
                   <path d="M14.207 5.53564C14.207 5.53564 15.197 5.81849 16.6819 7.30341C18.1668 8.78834 18.4497 9.77829 18.4497 9.77829" stroke="orange" stroke-width="0.24000000000000005" stroke-linecap="round"></path> <path d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z" stroke="orange" stroke-width="0.24000000000000005" stroke-linecap="round"></path> </g></svg>
</motion.div>
        <motion.form onSubmit={sendEmail}  initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1,delay:4}} >
            <input type="text" required placeholder='Name' name="name"/>
            <input type="email" required placeholder='Email' name="email" />
            <textarea placeholder="Enter your Message"    rows={8} name="message" /> 
            
            <input type="submit" value="Submit" />
            {error&&"Error"}
            {suc&&"Succes"}

        </motion.form>
      </motion.div>
    </motion.div>
  )
}

export default Contact

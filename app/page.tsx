'use client';
import React, { Suspense  } from "react";
import Image from "next/image";
import styles from "./page.module.css";
 
//import Hero from "./component/hero/Hero";
//import Serv from "./component/services/Serv";
//import Portofilio from "./component/portofilio/Portofilio";
//import Contact from "./component/contact/Contact";
// import Cursour from "./component/cursore/Cursour";
//import Paralax from "./component/paralax/Paralax";
const Navbar=React.lazy(()=> import  ("./component/navbar/navbar") ); 
const Hero=React.lazy(()=> import  ("./component/hero/Hero") ); 
const Serv=React.lazy(()=> import  ("./component/services/Serv") ); 
const Portofilio=React.lazy(()=> import  ("./component/portofilio/Portofilio") ); 
const Contact=React.lazy(()=> import  ("./component/contact/Contact") ); 
const Paralax=React.lazy(()=> import  ("./component/paralax/Paralax") ); 
const Cursour=React.lazy(()=> import  ("./component/cursore/Cursour") ); 







 function Home() {
 
  return (
     
    
    <div>
      <></>
      <React.Suspense fallback="Loading...">
    <Cursour/>

    <section className={styles.sec}id ="Homepage"><Navbar/>
    <Hero/>
    </section>
    <section className={styles.sec} id ="Services" ><Paralax type="services"/></section>
    <section className={styles.sec}><Serv/></section>
    <section className={styles.sec}><Paralax type="portofilo"/></section>
    <section  className={styles.secp} id ="Portofilo"><Portofilio/></section>
    <section className={styles.sec} id ="Contact"><Contact/></section>



    </React.Suspense>
    </div>
     
  );}
  export default Home ;
     
    
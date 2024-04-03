'use client';
import Image from "next/image";
import styles from "./Page.module.css";
import Navbar from "./component/navbar/navbar";
import Hero from "./component/hero/Hero";
import Serv from "./component/services/Serv";
import Portofilio from "./component/portofilio/Portofilio";
import Contact from "./component/contact/Contact";
import Cursour from "./component/cursore/Cursour";
import Paralax from "./component/paralax/Paralax";

 function Home() {
 
  return (
     
    
    <div>
    <Cursour/>

    <section className={styles.sec}id ="Homepage"><Navbar/>
    <Hero/>
    </section>
    <section className={styles.sec} id ="Services" ><Paralax type="services"/></section>
    <section className={styles.sec}><Serv/></section>
    <section className={styles.sec}><Paralax type="portofilo"/></section>
    <section  className={styles.secp} id ="Portofilo"><Portofilio/></section>
    <section className={styles.sec} id ="Contact"><Contact/></section>




    </div>
     
  );}
  export default Home ;
     
    
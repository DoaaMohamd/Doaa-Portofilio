
import Sidebar from "../sidebar/Sidebar";
import  "./navbar.css";
import {motion} from "framer-motion";
const Navbar = ()=>{
    return(
        <div className="navbar">
            {/*side bar */}
            <Sidebar/>
            <div className="wrapper">
                <motion.span initial={{opacity:0 , scale:0.5}} animate={{opacity:1 , scale:1}} transition={{duration:0.5}}>Doaa Elsayed</motion.span>
                <div className="social">
                    <a href="#"> <img className="img-links" src="facebook.png"/></a>
                    <a href="#"> <img className="img-links" src="instagram.png"/></a>
                    <a href="#"> <img className="img-links" src="youtube.png"/></a>
                    <a href="#"> <img className="img-links" src="dribbble.png"/></a>



                </div>

            </div>
            
        </div>
    )
}
export default Navbar;
import "../assets/styles/Skills.css"
import reactIcon from "../assets/images/reactIcon.png"
import nodeIcon from "../assets/images/nodeIcon.png"
import jsIcon from "../assets/images/jsIcon.png"
import mongoIcon from "../assets/images/mongoIcon.png"
import expressIcon from "../assets/images/expressIcon.png"
import sqlIcon from "../assets/images/sqlIcon.png"
import jqueryIcon from "../assets/images/jqueryIcon.png"
import htmlIcon from "../assets/images/htmlIcon.png"
import cssIcon from "../assets/images/cssIcon.png"
import pythonIcon from "../assets/images/pythonIcon.png"
import {motion} from 'framer-motion'
import {useState,useRef } from "react";

function  Skills(props){
    return (
       
          <div ref={props.skillTargetRef} className="container-fluid d-flex flex-column justify-content-evenly align-items-center skills">
             <div className='row col-xl-6 text-center'  >
                <motion.h1 
                
                   className="fs-1 mt-5 py-5"
                   initial={{rotateY:-180}}
                   whileInView={{rotateY:0,transition:{duration:0.7}}}
                >SKILLS</motion.h1>      
             </div>
            {/* <motion.div 
            className='row col-xl-6 col-lg-5 d-flex justify-content-center align-items-center'
            initial={{x:-300}}
          
            whileInView={{x:0,transition:{type:'spring'}}}
            >        
                <div className="col-auto fs-2 mb-2 d-flex align-items-center" style={{ padding:'0 20px'}}>
                    <img className='mx-2'src={reactIcon} style={{ width: '25px', height: '25px' }} alt="React"></img>
                    <span className="ml-2">React</span>
                </div>
                <div className=" col-auto fs-2 mb-2 align-items-center" style={{ padding: '0 20px' }}>
                   <img className='mx-2' src={jsIcon} style={{width:'25px', height:'25px'}}></img>
                   JavaScript
                </div>
                <div className=" col-auto  fs-2 mb-2 align-items-center" style={{ padding: '0 20px' }}>
                   <img className='mx-2' src={nodeIcon} style={{width:'25px', height:'25px'}}></img>
                   NodeJS
                </div>
                <div className=" col-auto fs-2 mb-2 align-items-center" style={{ padding: '0 20px' }}>
                   <img className='mx-2' src={mongoIcon} style={{width:'25px', height:'25px'}}></img>
                   MongoDB
                </div>
                <div className=" col-auto fs-2 mb-2 align-items-center" style={{ padding: '0 20px' }}>
                   <img className='mx-2' src={sqlIcon} style={{width:'25px', height:'25px'}}></img>
                   MySql
                </div>               
                <div className=" col-auto fs-2 mb-2 align-items-center" style={{ padding: '0 20px' }}>
                   <img className='mx-2' src={expressIcon} style={{width:'25px', height:'25px'}}></img>
                   Express
                </div>
                <div className=" col-auto fs-2 mb-2 align-items-center" style={{ padding: '0 20px' }}>
                   <img className='mx-2' src={jqueryIcon} style={{width:'25px', height:'25px'}}></img>
                   JQuery
                </div>
                <div className=" col-auto fs-2 mb-2 align-items-center" style={{ padding: '0 20px' }}>
                   <img className='mx-2' src={pythonIcon} style={{width:'25px', height:'25px'}}></img>
                   Python
                </div>
                <div className=" col-auto fs-2 mb-2 align-items-center" style={{ padding: '0 20px' }}>
                   <img className='mx-2' src={htmlIcon} style={{width:'25px', height:'25px'}}></img>
                   HTML
                </div>
                <div className=" col-auto fs-2 mb-2 align-items-center" style={{ padding: '0 20px' }}>
                   <img className='mx-2' src={cssIcon} style={{width:'25px', height:'25px'}}></img>
                   CSS
                </div>            
                 </motion.div> */}
               <motion.div 
            className='row col-xl-6 col-lg-10 col-sm-12 col-xs-12  d-flex justify-content-evenly align-items-center'
            initial={{x:-300}}
          
            whileInView={{x:0,transition:{type:'spring'}}}
            >        
                <div className="col-xl-2 col-lg-3 py-2 col-sm-4 col-xs-2 border mx-2 d-flex justify-content-around bg-light mb-2 d-flex align-items-center" style={{ padding:'0 20px'}}>
                    <img className='mx-2'src={reactIcon}  alt="React"></img>
                    <span className="ml-2">React</span>
                </div>
                <div className=" col-xl-2 col-lg-3 py-2 col-sm-4 col-xs-2 border mx-2 d-flex justify-content-around bg-light mb-2 align-items-center" style={{ padding: '0 20px' }}>
                   <img className='mx-2' src={jsIcon} ></img>
                   JavaScript
                </div>
                <div className=" col-xl-2 col-lg-3 py-2 col-sm-4 col-xs-2 border mx-2 d-flex justify-content-around bg-light mb-2 align-items-center" style={{ padding: '0 20px' }}>
                   <img className='mx-2' src={nodeIcon} ></img>
                   NodeJS
                </div>
                <div className=" col-xl-2 col-lg-3 py-2 col-sm-4 col-xs-2 border mx-2 d-flex justify-content-around bg-light mb-2 align-items-center" style={{ padding: '0 20px' }}>
                   <img className='mx-2' src={mongoIcon} ></img>
                   MongoDB
                </div>
                <div className=" col-xl-2 col-lg-3 py-2 col-sm-4 col-xs-2 border mx-2 d-flex justify-content-around bg-light mb-2 align-items-center" style={{ padding: '0 20px' }}>
                   <img className='mx-2' src={sqlIcon} ></img>
                   MySql
                </div>               
                <div className=" col-xl-2 col-lg-3 py-2 col-sm-4 col-xs-2 border mx-2 d-flex justify-content-around bg-light mb-2 align-items-center" style={{ padding: '0 20px' }}>
                   <img className='mx-2' src={expressIcon} ></img>
                   Express
                </div>
                <div className=" col-xl-2 col-lg-3 py-2 col-sm-4 col-xs-2 border mx-2 d-flex justify-content-around bg-light mb-2 align-items-center" style={{ padding: '0 20px' }}>
                   <img className='mx-2' src={jqueryIcon} ></img>
                   JQuery
                </div>
                <div className=" col-xl-2 col-lg-3 py-2 col-sm-4 col-xs-2 border mx-2 d-flex justify-content-around bg-light mb-2 align-items-center" style={{ padding: '0 20px' }}>
                   <img className='mx-2' src={pythonIcon} ></img>
                   Python
                </div>
                <div className=" col-xl-2 col-lg-3 py-2 col-sm-4 col-xs-2 border mx-2  d-flex justify-content-around bg-light mb-2 align-items-center" style={{ padding: '0 20px' }}>
                   <img className='mx-2' src={htmlIcon} ></img>
                   HTML
                </div>
                <div className=" col-xl-2 col-lg-3 py-2 col-sm-4 col-xs-2 border mx-2 d-flex justify-content-around bg-light mb-2 align-items-center" style={{ padding: '0 20px' }}>
                   <img className='mx-2' src={cssIcon} ></img>
                   CSS
                </div>            
                 </motion.div>
          </div>
       
      );
}

export default  Skills;
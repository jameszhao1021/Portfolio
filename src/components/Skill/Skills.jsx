import "../Skill/Skills.css"
import reactIcon from "../../assets/images/reactIcon.png"
import nodeIcon from "../../assets/images/nodeIcon.png"
import jsIcon from "../../assets/images/jsIcon.png"
import mongoIcon from "../../assets/images/mongoIcon.png"
import expressIcon from "../../assets/images/expressIcon.png"
import sqlIcon from "../../assets/images/postgresqlIcon.png"
import jqueryIcon from "../../assets/images/jqueryIcon.png"
import htmlIcon from "../../assets/images/htmlIcon.png"
import pythonIcon from "../../assets/images/pythonIcon.png"
import djangoIcon from "../../assets/images/djangoIcon.png"

import { motion } from 'framer-motion'

function Skills({aboutTargetRef, contactTargetRef}) {

   function handleContactScrollDown() {
      (contactTargetRef).current.scrollIntoView({ behavior: 'smooth' })
    }
    
   return (

      <div ref={aboutTargetRef} className="container-fluid d-flex flex-column justify-content-evenly align-items-center skills gap-4">
         <div className='row col-xl-12 text-center'  >
            <motion.h1

               className="fs-2 mt-5 py-5"
               initial={{ rotateY: -180 }}
               whileInView={{ rotateY: 0, transition: { duration: 0.7 } }}
            >ABOUT ME</motion.h1>
         </div>
         <p className="row col-xl-9 col-lg-12 px-4 fs-4">
            Hi, I am James Zhao, a full-stack developer proficient in multiple programming languages and techniques. I have engaged with various industry-based projects and am keen to explore in the fields of front end and back end development. I expect to share innovative ideas with technology enthusiasts and learn cutting-edge techniques to address complex challenges.
            <br />
            <br />
            Techniques I have engaged with:
         </p>

         <motion.div
            className='row col-xl-10 col-lg-12 col-sm-12 col-xs-12  d-flex justify-content-center align-items-center'
            initial={{ x: -300 }}

            whileInView={{ x: 0, transition: { type: 'spring' } }}
         >
            <div className="col-xl-2 col-lg-3 py-2 col-sm-4 col-xs-2 border mx-2 d-flex justify-content-around bg-light mb-2 d-flex align-items-center" style={{ padding: '0 20px' }}>
               <img className='mx-2' src={reactIcon} alt="React"></img>
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
               PostgreSQL
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
               <img className='mx-2' src={djangoIcon} ></img>
               Django
            </div>
         </motion.div>
         <div className="row col-xl-9 col-lg-12 px-4 fs-4 d-flex">
            <span className="p-0">Please feel free to follow my <a href="https://www.linkedin.com/in/james-zhao-62a87b143/" target='_blank' style={{color:'#000', fontStyle:'italic'}}>Linkedin</a> or contact me directly. 
             <div className="btn  btn-secondary ms-2" onClick={handleContactScrollDown}>Contact</div>
            </span>
         </div>
      </div>

   );
}

export default Skills;
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

      <div ref={aboutTargetRef} className=" d-flex flex-column justify-content-evenly align-items-center skills gap-4">
         <div className='row col-xl-12 text-center'  >
            <motion.h1

               className="fs-2 mt-5 py-5"
               initial={{ rotateY: -180 }}
               whileInView={{ rotateY: 0, transition: { duration: 0.7 } }}
            >ABOUT ME</motion.h1>
         </div>
         <p className="row col-12 px-4 fs-4">
            Hi, I am James Zhao, a full-stack developer proficient in multiple programming languages and techniques. I have engaged with various industry-based projects and am keen to explore in the fields of front end and back end development. I expect to share innovative ideas with technology enthusiasts and learn cutting-edge techniques to address complex challenges.
            <br />
            <br />
            My interest in software engineering and full stack development was sparked during my time serving as an overseas educational consultant, where I had intensive interactions with students with IT backgrounds. Despite my busy schedule, I took the initiative to self-learn multiple programming techniques, including React, Python, and JavaScript, and proactively completed several projects. This experience further solidified my determination to pursue a career in technology. 
            <br />
            <br />
            Seeking to gain a comprehensive understanding of the latest techniques applied in real-world workplaces, I enrolled in the Software Engineering Immersive Course provided by the General Assembly, where I systematically learned various front-end and back-end programming languages and meticulously completed multiple projects.
            <br />
            <br />
            Techniques I have engaged with:
         </p>

         <motion.div
            className='row col-lg-12 col-sm-12 col-xs-12  d-flex justify-content-evenly align-items-center'
            initial={{ x: -300 }}

            whileInView={{ x: 0, transition: { type: 'spring' } }}
         >
            <div className="col-xl-2 col-lg-3 py-2 col-sm-4 col-xs-2 border mx-2 d-flex justify-content-around bg-light mb-2 d-flex align-items-center" style={{ padding: '0 20px' }}>
               <img className='mx-2' src={reactIcon} alt="React"></img>
               <span className="ml-2">React</span>
            </div>
            <div className=" col-xl-2 col-lg-3 py-2 col-sm-4 col-xs-2 border mx-2 d-flex justify-content-around bg-light mb-2 align-items-center" style={{ padding: '0 20px' }}>
               <img className='mx-2' src={jsIcon} alt='JavaScript'></img>
               JavaScript
            </div>
            <div className=" col-xl-2 col-lg-3 py-2 col-sm-4 col-xs-2 border mx-2 d-flex justify-content-around bg-light mb-2 align-items-center" style={{ padding: '0 20px' }}>
               <img className='mx-2' src={nodeIcon} alt='NodeJS'></img>
               NodeJS
            </div>
            <div className=" col-xl-2 col-lg-3 py-2 col-sm-4 col-xs-2 border mx-2 d-flex justify-content-around bg-light mb-2 align-items-center" style={{ padding: '0 20px' }}>
               <img className='mx-2' src={mongoIcon} alt='MongoDB'></img>
               MongoDB
            </div>
            <div className=" col-xl-2 col-lg-3 py-2 col-sm-4 col-xs-2 border mx-2 d-flex justify-content-around bg-light mb-2 align-items-center" style={{ padding: '0 20px' }}>
               <img className='mx-2' src={sqlIcon} alt='PostgreSQL'></img>
               PostgreSQL
            </div>
            <div className=" col-xl-2 col-lg-3 py-2 col-sm-4 col-xs-2 border mx-2 d-flex justify-content-around bg-light mb-2 align-items-center" style={{ padding: '0 20px' }}>
               <img className='mx-2' src={expressIcon} alt='Express'></img>
               Express
            </div>
            <div className=" col-xl-2 col-lg-3 py-2 col-sm-4 col-xs-2 border mx-2 d-flex justify-content-around bg-light mb-2 align-items-center" style={{ padding: '0 20px' }}>
               <img className='mx-2' src={jqueryIcon} alt='JQuery'></img>
               JQuery
            </div>
            <div className=" col-xl-2 col-lg-3 py-2 col-sm-4 col-xs-2 border mx-2 d-flex justify-content-around bg-light mb-2 align-items-center" style={{ padding: '0 20px' }}>
               <img className='mx-2' src={pythonIcon} alt='Python'></img>
               Python
            </div>
            <div className=" col-xl-2 col-lg-3 py-2 col-sm-4 col-xs-2 border mx-2  d-flex justify-content-around bg-light mb-2 align-items-center" style={{ padding: '0 20px' }}>
               <img className='mx-2' src={htmlIcon} alt='HTML'></img>
               HTML
            </div>
            <div className=" col-xl-2 col-lg-3 py-2 col-sm-4 col-xs-2 border mx-2 d-flex justify-content-around bg-light mb-2 align-items-center" style={{ padding: '0 20px' }}>
               <img className='mx-2' src={djangoIcon} alt='Django'></img>
               Django
            </div>
         </motion.div>
         <div className="row col-12 px-4 fs-4 d-flex">
            <span className="p-0">Please feel free to follow my <a href="https://www.linkedin.com/in/james-zhao-62a87b143/" target='_blank' style={{color:'#000', fontStyle:'italic'}}>Linkedin</a> or contact me directly. 
             <div className="btn  btn-secondary ms-2" onClick={handleContactScrollDown}>Contact</div>
            </span>
         </div>
      </div>

   );
}

export default Skills;
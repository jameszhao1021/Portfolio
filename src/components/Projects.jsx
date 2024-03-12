import {useRef} from 'react';
import {motion} from 'framer-motion';

export default function Projects(props) {


  return (
    <div className="container-fluid d-flex flex-column justify-content-evenly align-items-center skills">
    <div  ref={props.projectTargetRef} className='row col-xl-6 text-center'  >
       <motion.h1 
       
          className="fs-1 mt-5 py-5"
          initial={{rotateY:-180}}
          whileInView={{rotateY:0,transition:{duration:0.7}}}
          style={{minHeight:'100vh'}}
       >PROJECTS</motion.h1>      
    </div>

     
 </div>

  );
}

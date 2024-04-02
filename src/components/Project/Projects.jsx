import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import travelDemo from '../../assets/images/travelDemo.gif'
import rouletteDemo from '../../assets/images/rouletteDemo.gif'
import plantDemo from  '../../assets/images/plantDemo.gif'
import '../Project/Projects.css'

export default function Projects({ projectTargetRef }) {

   return (
      <div className="container-fluid d-flex flex-column justify-content-evenly align-items-center skills">
         <div ref={projectTargetRef} className='row col-xl-12 text-center justify-content-evenly'  >
            <motion.h1
               className="fs-2 mt-5 py-5"
               initial={{ rotateY: -180 }}
               whileInView={{ rotateY: 0, transition: { duration: 0.7 } }}

            >PROJECTS</motion.h1>
            <div className=' col-xl-10'>
               <div className='projectContainer row  d-flex justify-content-evenly ' >
                  <div
                     className='col-lg-5 card'
                     style={{ backgroundImage: `url(${travelDemo})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '300px' }}
                  >
                  </div>
                  <div className='col-lg-5 card align-items-center justify-content-center gap-2 p-4 bg-transparent border-0'>
                     <h3>Travel Blog</h3>
                     <p className='fs-4'>Travel Blog is a MERN stack project, allowing users to create travel blogs and pictures, as well as view others blogs and leave comments. Explore the websites and get your travel inspirations!</p>
                     <div className='d-flex gap-4'>
                        <button className='projectButton liveShow'>Live Show</button>
                        <a href="/travelblog">
                           <button className='projectButton'>Details</button>
                        </a>

                     </div>
                  </div>
               </div>
               <div className='projectContainer row  d-flex justify-content-evenly  mt-4 ' >
                  <div className='col-lg-5 card align-items-center justify-content-center gap-2 p-4 bg-transparent border-0'>
                     <h3>Plant Diary</h3>
                     <p className='fs-4'>Plant Diary is an Express-based project with crud features fulfiled by AJAX and JQuery. It is designed for plant enthusiasts and nature lovers, start to record the growth of your plants with Plant Diary!</p>
                     <div className='d-flex gap-4'>
                        <button className='projectButton liveShow'>Live Show</button>
                        <a href="/plantdiary">
                           <button className='projectButton'>Details</button>

                        </a>

                     </div>
                  </div>
                  <div
                     className='col-lg-5 card'
                     style={{ backgroundImage: `url(${plantDemo})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '300px' }}
                  >
                  </div>
               </div>
               <div className='projectContainer row  d-flex justify-content-evenly  mt-4' >
                  <div
                     className='col-lg-5 card'
                     style={{ backgroundImage: `url(${rouletteDemo})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '300px' }}
                  >
                  </div>
                  <div className='col-lg-5 card align-items-center justify-content-center gap-2 p-4 bg-transparent border-0'>
                     <h3>Roulette</h3>
                     <p className='fs-4'>Roulette is a game developed with React and ChartJS, simulating the real-world rules and interfaces. Don't hesitate to play this exciting game and try to survive over ten minutes.</p>
                     <div className='d-flex gap-4'>
                        <Link to='https://jameszhao1021.github.io/Roulette-Game/' target='_blank'>
                           <button className='projectButton liveShow'>Live Show</button>
                        </Link>
                        <a href="/roulette">
                           <button className='projectButton'>Details</button>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

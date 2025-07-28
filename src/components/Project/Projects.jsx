import { easeInOut, motion } from 'framer-motion';
import travelDemo from '../../assets/images/travelDemo.gif'
import rouletteDemo from '../../assets/images/rouletteDemo.gif'
import plantDemo from '../../assets/images/plantDemo.gif'
import netmallDemon from '../../assets/images/netmallDemo.gif'
import luxestaysDemo from '../../assets/images/luxestaysDemo.gif'
import '../Project/Projects.css'

export default function Projects({ projectTargetRef }) {

   return (
      <div className=" d-flex flex-column justify-content-evenly align-items-center skills">
         <div ref={projectTargetRef} className='row col-xl-12 text-center justify-content-evenly gap-4 '  >
            <motion.h1
               className="fs-2 mt-5 py-5"
               initial={{ rotateY: -180 }}
               whileInView={{ rotateY: 0, transition: { duration: 0.7 } }}
            >PROJECTS</motion.h1>
            <div className=' col-12'>
            <motion.div className='projectContainer row  d-flex justify-content-around mt-2'
                  initial={{ translateY: -100, opacity: 0.1 }}
                  whileInView={{ translateY: 0, opacity: 1, transition: { duration: 0.4, ease: easeInOut } }}
               >
                  <div
                     className='col-lg-5 card'
                     style={{ backgroundImage: `url(${luxestaysDemo})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '300px' }}
                  >
                  </div>
                  <div
                     className='col-lg-5 card align-items-center justify-content-center gap-2 p-4 bg-transparent border-0'

                  >
                     <h3>Luxestays</h3>
                     <p className='fs-4'>Luxestays is a villa booking web app built with .NET Clean Architecture. Users can sign up as guests or admins to book villas or manage listings, and admins can access a data dashboard for insights and control.</p>
                     <div className='d-flex gap-4'>
                        <a href='https://luxestays-fabdb5ce07b9.herokuapp.com//' target='_blank'>
                           <button className='projectButton liveShow'>Live Show</button>
                        </a>
                        <a href="/luxestays">
                           <button className='projectButton'>Details</button>
                        </a>

                     </div>
                  </div>
               </motion.div>
            <motion.div className='projectContainer row  d-flex justify-content-around mt-2'
                  initial={{ translateY: -100, opacity: 0.1 }}
                  whileInView={{ translateY: 0, opacity: 1, transition: { duration: 0.4, ease: easeInOut } }}
               >

                  <div
                     className='col-lg-5 card align-items-center justify-content-center gap-2 p-4 bg-transparent border-0'

                  >
                     <h3>NetMall</h3>
                     <p className='fs-4'>NetMall is a multi-vendor e-commerce platform created with the Django REST Framework. You can act as a buyer to buy a wide variety of products or as a seller to list, edit and delete your products.</p>
                     <div className='d-flex gap-4'>
                        <a href='https://net-mall-41b5566731fe.herokuapp.com/' target='_blank'>
                           <button className='projectButton liveShow'>Live Show</button>
                        </a>
                        <a href="/netmall">
                           <button className='projectButton'>Details</button>
                        </a>

                     </div>
                  </div>
                  <div
                     className='col-lg-5 card'
                     style={{ backgroundImage: `url(${netmallDemon})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '300px' }}
                  >
                  </div>
               </motion.div>
               <motion.div className='projectContainer row  d-flex justify-content-around mt-2'
                  initial={{ translateY: -100, opacity: 0.1 }}
                  whileInView={{ translateY: 0, opacity: 1, transition: { duration: 0.4, ease: easeInOut } }}
               >
                  <div
                     className='col-lg-5 card'
                     style={{ backgroundImage: `url(${travelDemo})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '300px' }}
                  >
                  </div>
                  <div
                     className='col-lg-5 card align-items-center justify-content-center gap-2 p-4 bg-transparent border-0'

                  >
                     <h3>Travel WikkiMedia</h3>
                     <p className='fs-4'>Travel WikkiMedia is a MERN stack project, allowing users to create travel blogs and pictures, as well as view others blogs and leave comments. Explore the websites and get your travel inspirations!</p>
                     <div className='d-flex gap-4'>
                        <a href='https://travelwikkimedia-3f4d63081406.herokuapp.com/' target='_blank'>
                           <button className='projectButton liveShow'>Live Show</button>
                        </a>
                        <a href="/travelblog">
                           <button className='projectButton'>Details</button>
                        </a>

                     </div>
                  </div>
                 
               </motion.div>
               <motion.div className='projectContainer row  d-flex justify-content-around  mt-5'
                  initial={{ translateY: -100, opacity: 0.1 }}
                  whileInView={{ translateY: 0, opacity: 1, transition: { duration: 0.4, ease: easeInOut } }}
               >

                  
                  <div className='col-lg-5 card align-items-center justify-content-center gap-2 p-4 bg-transparent border-0'>
                     <h3>Plant Diary</h3>
                     <p className='fs-4'>Plant Diary is an Express-based project with crud features fulfiled by AJAX and JQuery. It is designed for plant enthusiasts and nature lovers, start to record the growth of your plants with Plant Diary!</p>
                     <div className='d-flex gap-4'>
                        <a href='https://plant-diary-520d76e24169.herokuapp.com/' target='_blank'>
                           <button className='projectButton liveShow'>Live Show</button>
                        </a>
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
               </motion.div>
               <motion.div className='projectContainer row  d-flex justify-content-around  mt-5'
                  initial={{ translateY: -100, opacity: 0.1 }}
                  whileInView={{ translateY: 0, opacity: 1, transition: { duration: 0.4, ease: easeInOut } }}
               >
                  <div
                     className='col-lg-5 card'
                     style={{ backgroundImage: `url(${rouletteDemo})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '300px' }}
                  >
                  </div>
                  <div className='col-lg-5 card align-items-center justify-content-center gap-2 p-4 bg-transparent border-0'>
                     <h3>Roulette</h3>
                     <p className='fs-4'>Roulette is a game developed with React and ChartJS, simulating the real-world rules and interfaces. Don't hesitate to play this exciting game and try to survive over ten minutes.</p>
                     <div className='d-flex gap-4'>
                        <a href='https://jameszhao1021.github.io/Roulette-Game/' target='_blank'>
                           <button className='projectButton liveShow'>Live Show</button>
                        </a>
                        <a href="/roulette">
                           <button className='projectButton'>Details</button>
                        </a>
                     </div>
                  </div>
                 
               </motion.div>
            </div>
         </div>
      </div>
   );
}

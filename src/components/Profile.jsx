import "../assets/styles/Profile.css";
import profileImg from "../assets/images/profileImg.png"
import Greeting from "./Greeting";
import {motion, useInView} from 'framer-motion'
import {useState, useRef, useEffect } from "react";

function Profile(props) {
  
  const [isOn, setIsOn] = useState(false);
  const switchRef = useRef(null); // Create a local ref
  const isSwitchInView = useInView(switchRef)
  const [isGreeting, setIsGreeting] = useState(true);
  const greetingRef = useRef(null); // Create a local ref
  const isGreetingInView = useInView(greetingRef);

  const handleScrollDown = () => {
      (props.skillTargetRef).current.scrollIntoView({ behavior: 'smooth' });
    }
  
 
  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  useEffect(() => {
    // Update isOn state based on the visibility
    setIsOn(!isSwitchInView);
  }, [isSwitchInView]);

  useEffect(() => {
    // Update isOn state based on the visibility
    setIsGreeting(isGreetingInView);
  }, [isGreetingInView]);

  return (
    <div className="jumbotron bg-image d-flex flex-column align-items-center justify-content-center" style={{backgroundImage: `url(${profileImg})`, backgroundSize: "cover" }}>
      <div className="container-fluid d-flex justify-content-center">
        <div className='row col-lg-6 text-start' ref={greetingRef}>             
          <Greeting  isGreeting={isGreeting}/>     
          {/* <h1 className="fs-1">A passionate full-stack developer</h1> 
          <h2 className="fs-4">Committed to app development, web design, and more</h2>    */}
        </div>
      </div>
      <motion.div 
        className="switch" 
        data-isOn={isOn} 
        ref={switchRef}
        onClick={() => { toggleSwitch(); handleScrollDown(); }}
       
       transition={{duration:1.5, repeat:Infinity,ease:'linear'}}
       
        whileInView={{scale:[0.9, 1, 0.9]}}
        whileHover={{scale:1, transition:{duration:0.2}}}
      >
        <motion.div className="handle" layout transition={{ type: "spring", stiffness: 700, damping: 30 }} style={{ top: isOn ? 'auto' : 0, bottom: isOn ? 0 : 'auto' }} />
      </motion.div>
    </div>
  );
}
export default Profile;
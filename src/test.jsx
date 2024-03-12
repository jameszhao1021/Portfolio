import './test.css'
import {motion} from 'framer-motion'
import React, { useState, useEffect } from "react";

function Test(){
  const [open, setOpen] = useState (false)
 
    return(
         <div className="course">
            <motion.div 
                className="box" 
             
                initial = {{opacity:0, x:-1000}}
            
             
             
                whileInView={{opacity:1, x:0,transition:{type:'spring'}}}
               
                     >        
            </motion.div>
            
         </div>
    )
}

export default Test
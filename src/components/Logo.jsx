import React, { useState, useEffect } from "react";
import "../assets/styles/Logo.css";
import logoJ from "../assets/images/LogoJ.png"

function Logo(){

  // const [letter, setLetter] = useState(false);
  const [currentClass, setCurrentClass] = useState(false);
  const [prevScrollPosition, setPrevScrollPosition] = useState(window.scrollY || document.documentElement);

  
  function handleScroll() {
    const currentScrollPosition = window.scrollY || document.documentElement.scrollTop;
      if (currentScrollPosition > prevScrollPosition ) {
        setCurrentClass("scrollDown");
      } 
    }
  
  
    function triggerTopEvent() {
      const currentScrollPosition = window.scrollY || document.documentElement.scrollTop;
      if (currentScrollPosition < prevScrollPosition && currentScrollPosition === 0) {
        setCurrentClass("scrollTop");
      }
      setPrevScrollPosition(currentScrollPosition);
    }
    
//useEffect
   useEffect(() => {
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener('scroll', triggerTopEvent);
    // window.addEventListener("scroll", middle);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener('scroll', triggerTopEvent);
      // window.removeEventListener("scroll", middle);
    
    };
  }, [prevScrollPosition]);
  
  return (
 
   
    <a className="navbar-brand d-flex align-items-center" href="#">
      <img src={logoJ} id="logoJ" className={
        currentClass ==="scrollDown"? "logoMoveRight":currentClass ==="scrollTop"? "logoMoveLeft":""
      }></img>
      <span id='logoName' className={
        currentClass ==="scrollDown"? "nameMoveLeft":currentClass ==="scrollTop"? "nameMoveRight":""
      }>James Zhao</span>
    </a>
 
  );
}

export default Logo;
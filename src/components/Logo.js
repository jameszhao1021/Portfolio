import React, { useState, useEffect } from "react";
import "../assets/styles/Logo.css";
import logoJ from "../assets/images/LogoJ.png"

function Logo(){

  // const [letter, setLetter] = useState(false);
  const [currentClass, setCurrentClass] = useState(false);
  const [prevScrollPosition, setPrevScrollPosition] = useState(window.scrollY || document.documentElement);
 
  // function handleLetter(){
    //   if (window.scrollY > 0) {
    //     setLetter(true);
    //   } else {
    //     setLetter(false);
    //   }
    // }
  
  function handleScroll() {
    const currentScrollPosition = window.scrollY || document.documentElement.scrollTop;
      if (currentScrollPosition > prevScrollPosition ) {
        setCurrentClass("scrollDown");
      } 
    }
  
    // function middle(){
    //   setTimeout(()=>{handleLetter();
    //     }, 700);
        
    // }
  
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
    // <div className="logo">
    //   <a className={
    //     currentClass ==="scrollDown"? "scrollDown" : currentClass ==="scrollTop"? "scrollTop":""
    //   } 
    //   href="#">{letter?<img src={logoJ} className="logoJ"></img>:"JamesZhao"}</a>
    // </div>
    <div className="logo">
    <a href="#">
      <img src={logoJ} id="logoJ" className={
        currentClass ==="scrollDown"? "logoMoveRight":currentClass ==="scrollTop"? "logoMoveLeft":""
      }></img>
      <span id='logoName' className={
        currentClass ==="scrollDown"? "nameMoveLeft":currentClass ==="scrollTop"? "nameMoveRight":""
      }>James Zhao</span>
    </a>
  </div>
  );
}

export default Logo;



// import React, { useState, useEffect } from "react";
// import "../assets/styles/Logo.css";
// import useHandleLetter from "../assets/function/handleLetter";
// import useHandleScroll from "../assets/function/handleScroll";
// import useTriggerTopEvent from "../assets/function/triggerTopEvent";
// import middle from "../assets/function/middle";

// function Logo(){
// const letter = useHandleLetter();
// const currentClass = useHandleScroll();
// const prevScrollPosition = useTriggerTopEvent();


// useTriggerTopEvent();
// //useEffect
//    useEffect(() => {
    
    

//     window.addEventListener("scroll", useHandleScroll);
//     window.addEventListener('scroll', useTriggerTopEvent);
//     window.addEventListener("scroll", middle );

//     return () => {
//       window.removeEventListener("scroll", useHandleScroll);
//       window.removeEventListener('scroll', useTriggerTopEvent);
//       window.removeEventListener("scroll", useHandleLetter);
//     };
//   }, [prevScrollPosition]);

   

//   return (
//     <div className="logo">
//       <a className={currentClass ? "animated-text" : ""} href="#">{letter?"J":"JamesZhao"}</a>
//     </div>
//   );
// }

// export default Logo;



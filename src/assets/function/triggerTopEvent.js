import React, { useState, useEffect } from "react";


function triggerTopEvent() {
  const [prevScrollPosition, setPrevScrollPosition] = useState(window.scrollY || document.documentElement);
  const currentScrollPosition = window.scrollY || document.documentElement.scrollTop;
  

  if (currentScrollPosition < prevScrollPosition && currentScrollPosition === 0) {
    
    console.log("Scrolling up to the top");
  }
  setPrevScrollPosition(currentScrollPosition);
}

export default triggerTopEvent;
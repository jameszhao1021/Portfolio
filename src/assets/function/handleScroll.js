import React, { useState, useEffect } from "react";

   
   function handleScroll() {
    const [currentClass, setCurrentClass] = useState(false);
    if (window.scrollY > 0) {
      setCurrentClass(true);
    } else {
      setCurrentClass(false);
    }
    return currentClass;
  }

  export default handleScroll;





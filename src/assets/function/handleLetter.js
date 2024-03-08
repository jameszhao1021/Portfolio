import React, { useState, useEffect } from "react";


function handleLetter(){
const [letter, setLetter] = useState(false);
  if (window.scrollY > 0) {
    setLetter(true);
  } else {
    setLetter(false);
  }
  return letter
}

export default handleLetter;





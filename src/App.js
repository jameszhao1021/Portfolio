import logo from './logo.svg';
import './App.css'
import Header from "./components/Header";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Test from './test'
import React, { useRef } from 'react';

function App() {
  const skillTargetRef = useRef(null);
  const projectTargetRef = useRef(null);




  return (
    <>
      <Header skillTargetRef={skillTargetRef} projectTargetRef={projectTargetRef} />
      <Profile skillTargetRef={skillTargetRef}  />
      <Skills skillTargetRef={skillTargetRef} />
      <Projects projectTargetRef={projectTargetRef}/>
    </>
  );
}


export default App;

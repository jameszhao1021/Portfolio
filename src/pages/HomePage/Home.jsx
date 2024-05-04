import './Home.css'
import React from 'react';
import { useState, useRef, useEffect } from 'react';
import Profile from "../../components/Profile/Profile";
import Skills from "../../components/Skill/Skills";
import Projects from "../../components/Project/Projects";
import Contacts from '../../components/Contact/Contact';
import './Home.css'

function Home({ aboutTargetRef, projectTargetRef, contactTargetRef, isGreeting, greetingRef }) {
  return (
    <div className='container-fluid'>
      <Profile aboutTargetRef={aboutTargetRef} isGreeting={isGreeting} greetingRef={greetingRef} />
      <div className='row justify-content-center'>
        <div className='d-flex flex-column align-items-center' style={{marginTop:"-100px"}}>
          <div className='container'>
            <Skills aboutTargetRef={aboutTargetRef} contactTargetRef={contactTargetRef} />
            <Projects projectTargetRef={projectTargetRef} isGreeting={isGreeting} greetingRef={greetingRef} />
            <Contacts contactTargetRef={contactTargetRef} />
          </div>
        </div>
      </div>
    </div>
);
}


export default Home;

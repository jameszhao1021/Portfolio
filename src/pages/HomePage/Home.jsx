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
        <div className='col-xl-12 col-lg-12 col-md-10 col-sm-10 col-sx-11 d-flex flex-column align-items-center'>
          <div className='outerContainer'>
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

import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "../Header/Header.css"
import resume from '../../assets/files/Resume.pdf'

const Header = ({aboutTargetRef, projectTargetRef, contactTargetRef}) => {
  const handleSkillScrollDown = () => {

    (aboutTargetRef).current.scrollIntoView({ behavior: 'smooth' });
  }

  function handleProjectScrollDown() {
    (projectTargetRef).current.scrollIntoView({ behavior: 'smooth' })
  }

  function handleContactScrollDown() {
    (contactTargetRef).current.scrollIntoView({ behavior: 'smooth' })
  }
  
  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top px-3">
      <div className="container-fluid overflow-hidden">
        <Logo />
        <button className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around me-3" type="button" data-bs-toggle="collapse" data-bs-target="#myNavbar" aria-controls="myNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>
        <div className=" collapse navbar-collapse fs-5" id="myNavbar">
          <div className="ms-auto"> {/* Apply ms-auto class to align content to the right */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <a className="nav-link float-end" href="/">Home</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link float-end" onClick={handleSkillScrollDown} style={{ cursor: 'pointer' }}>About</a>

              </li>
              <li className="nav-item ">
                <a className="nav-link float-end" onClick={handleProjectScrollDown} style={{ cursor: 'pointer' }}>Projects</a>
              </li>

              <li className="nav-item ">
                <a className="nav-link float-end" onClick={handleContactScrollDown} style={{ cursor: 'pointer' }}>Contact</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link float-end" href={resume} target="_blank"><span className="fa fa-sign-in-alt"></span> Resume</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header;
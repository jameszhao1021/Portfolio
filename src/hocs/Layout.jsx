import React from "react";
import Header from "../components/Header/Header";
import ProjectHeader from "../components/ProjectHeader/ProjectHeader";
import Footer from "../components/Footer/Footer";
import { useRef } from "react";
import { useLocation } from 'react-router-dom';

function Layout(props){
    const location = useLocation();
    const isHomeRoute = location.pathname === '/';
    const aboutTargetRef = useRef(null);
    const projectTargetRef = useRef(null);
    const contactTargetRef = useRef(null);
  
    return(
        <div className="Layout">
              {isHomeRoute? <Header aboutTargetRef={aboutTargetRef} projectTargetRef={projectTargetRef} contactTargetRef={contactTargetRef}/>:<ProjectHeader />}
              <div className="content">{props.children}</div>
              <Footer />
        </div>
    )
}

export default Layout;
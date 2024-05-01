import './App.css'
import Home from '../HomePage/Home';
import NetMall from '../NetMallPage/NetMall';
import TravelBlog from '../TravelBlogPage/TravelBlog';
import Roulette from '../RoulettePage/Roulette';
import PlantDiary from '../PlantDiaryPage/PlantDiary'
import { Routes, Route, useLocation, Router, Navigate } from 'react-router-dom';
import React from 'react';
import { useState, useRef, useEffect } from 'react';
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';
import ProjectHeader from '../../components/ProjectHeader/ProjectHeader';
import { motion, useInView } from 'framer-motion'
import Layout from '../../hocs/Layout'

function App() {
  const aboutTargetRef = useRef(null);
  const projectTargetRef = useRef(null);
  const contactTargetRef = useRef(null);
  const location = useLocation();
  const isHomeRoute = location.pathname === '/';
  const [isGreeting, setIsGreeting] = useState(true);
  const greetingRef = useRef(null);
  const isGreetingInView = useInView(greetingRef);


  useEffect(() => {
    // Update isOn state based on the visibility
    setIsGreeting(isGreetingInView);
  }, [isGreetingInView]);

  // if (!isHomeRoute) {
  //   return <Navigate to="/home" />;
  // }

  return (
    // <div className='appContainer'>
    //   {isHomeRoute ? (
    //     <Header aboutTargetRef={aboutTargetRef} projectTargetRef={projectTargetRef} contactTargetRef={contactTargetRef} />
    //   ) : (
    //     <ProjectHeader />
    //   )}
    //   <Routes>
    //     <Route path='/' element={<Home aboutTargetRef={aboutTargetRef} projectTargetRef={projectTargetRef} contactTargetRef={contactTargetRef} isGreeting={isGreeting} greetingRef={greetingRef}/>} />
    //     <Route path='/travelblog' element={<TravelBlog isGreeting={isGreeting} greetingRef={greetingRef}/>} />
    //     <Route path='/roulette' element={<Roulette isGreeting={isGreeting} greetingRef={greetingRef}/>} />
    //     <Route path='/plantdiary' element={<PlantDiary isGreeting={isGreeting} greetingRef={greetingRef}/>} />
    //   </Routes>
    //   <Footer />
    // </div>

    // <div className='appContainer'>
   
        <Layout >
          <Routes>
            <Route path='/' element={<Home aboutTargetRef={aboutTargetRef} projectTargetRef={projectTargetRef} contactTargetRef={contactTargetRef} isGreeting={isGreeting} greetingRef={greetingRef} />} />
            <Route path='/netmall' element={<NetMall isGreeting={isGreeting} greetingRef={greetingRef} />} />
            <Route path='/travelblog' element={<TravelBlog isGreeting={isGreeting} greetingRef={greetingRef} />} />
            <Route path='/roulette' element={<Roulette isGreeting={isGreeting} greetingRef={greetingRef} />} />
            <Route path='/plantdiary' element={<PlantDiary isGreeting={isGreeting} greetingRef={greetingRef} />} />
          </Routes>
        </Layout>
   
    // </div>
  );
}

export default App;
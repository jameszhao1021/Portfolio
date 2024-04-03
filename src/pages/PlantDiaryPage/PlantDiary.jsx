import React from 'react'
import { Link } from 'react-router-dom'
import plantDiary from '../../assets/images/plantDiary.png'

import SplitText from '../../components/SplitText'
import expressIcon from "../../assets/images/expressIcon.png"
import nodeJSIcon from "../../assets/images/nodeIcon.png"
import mongoIcon from "../../assets/images/mongoIcon.png"
import cssIcon from "../../assets/images/cssIcon.png"
import jqueryIcon from "../../assets/images/jqueryIcon.png"


function PlantDiary({ isGreeting, greetingRef }) {

  return (
    <div className="container d-flex flex-column col-lg-6" >
      <div className='row gap-4' >
        <div ref={greetingRef}>
          <h1>
            <SplitText copy="Plant Diary" role="heading" isGreeting={isGreeting} />
            <br />
            <SplitText copy="Designed For Plaint Lovers" role="heading" isGreeting={isGreeting} />
          </h1>
        </div>
        <img className='rouletteImg' src={plantDiary} alt="TravelBlog" style={{ height: '100%' }}></img>

        <h2>Introduction</h2>
        <p className='fs-5'>Plant Diary is a multifunctional app built on Node.js, allowing users to record their purchased plants and write cultivation logs. Utilizing AJAX for CRUD operations, users can easily add, delete, or edit various information, even for first-time users.
          <br />
          <br />
          Additionally, Plant Diary enables users to log in using their Google or Facebook accounts, eliminating the need for additional registration. Users can also customize wallpapers according to their preferences, as I have prepared many exquisite wallpapers for you. There is surely one that will suit your taste.
          <br />
          <br />
          Whether you are a newcomer to green plants or a seasoned enthusiast, use Plant Diary to document your lovely plants!
        </p>
        <h2>Tools Involved</h2>
        <div className='row col-xl-10 col-lg-12 col-sm-12 col-xs-12  d-flex justify-content-start align-items-center'>
          <div className="fs-5 col-xl-2 col-lg-3 py-2 col-sm-4 col-xs-2 border mx-2 d-flex justify-content-around bg-light mb-2 d-flex align-items-center" style={{ padding: '0 20px' }}>
            <img className='mx-2' src={expressIcon} alt="React"></img>
            <span className="ml-2">Express</span>
          </div>
          <div className="fs-5 col-xl-2 col-lg-3 py-2 col-sm-4 col-xs-2 border mx-2 d-flex justify-content-around bg-light mb-2 d-flex align-items-center" style={{ padding: '0 20px' }}>
            <img className='mx-2' src={nodeJSIcon} alt="React"></img>
            <span className="ml-2">nodeJS</span>
          </div>
          <div className="fs-5 col-xl-2 col-lg-3 py-2 col-sm-4 col-xs-2 border mx-2 d-flex justify-content-around bg-light mb-2 d-flex align-items-center" style={{ padding: '0 20px' }}>
            <img className='mx-2' src={jqueryIcon} alt="React"></img>
            <span className="ml-2">Jquery</span>
          </div>
          <div className="fs-5 col-xl-2 col-lg-3 py-2 col-sm-4 col-xs-2 border mx-2 d-flex justify-content-around bg-light mb-2 d-flex align-items-center" style={{ padding: '0 20px' }}>
            <img className='mx-2' src={mongoIcon} alt="React"></img>
            <span className="ml-2">MongoDB</span>
          </div>
          <div className=" fs-5 col-xl-2 col-lg-3 py-2 col-sm-4 col-xs-2 border mx-2 d-flex justify-content-around bg-light mb-2 align-items-center" style={{ padding: '0 20px' }}>
            <img className='mx-2' src={cssIcon} ></img>
            CSS
          </div>
        </div>
        <h2>Quick Links</h2>
        <div className='d-flex gap-3'>
          <Link to='https://github.com/jameszhao1021/Plant-Diary' target='_blank'>
            <button className='btn btn-secondary'>GitHub</button>
          </Link>
          <Link to='https://plant-diary-520d76e24169.herokuapp.com' target='_blank'>
            <button className='btn btn-secondary'>Live Show</button>
          </Link>
          <a href="/">
            <button className='btn btn-secondary'>Go Back</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default PlantDiary
import React from 'react'
import travelwikkimedia from '../../assets/images/travelblog.png'
import '../TravelBlogPage/TravelBlog.css'
import SplitText from '../../components/SplitText'
import reactIcon from "../../assets/images/reactIcon.png"
import nodeIcon from "../../assets/images/nodeIcon.png"
import mongoIcon from "../../assets/images/mongoIcon.png"
import expressIcon from "../../assets/images/expressIcon.png"

function TravelBlog({ isGreeting, greetingRef }) {

    return (
        <div className="container d-flex flex-column col-lg-6" >
            <div className='row gap-4' >
                <div ref={greetingRef}>
                    <h1>
                        <SplitText copy="Travel WikkiMedia" role="heading" isGreeting={isGreeting} />
                        <br />
                        <SplitText copy="Your travel inspirations" role="heading" isGreeting={isGreeting} />
                    </h1>
                </div>
                <img src={travelwikkimedia} alt="TravelBlog" style={{ minHeight: '600px' }}></img>
                <h2>Introduction</h2>
                <p className='fs-5'>This is a social platform designed for travel enthusiasts. Here, you can share your travel experiences and photos with others, as well as find travel inspiration from other users' blogs. Additionally, you can rate and review other users' blogs. This project implements a range of CRUD functionalities, connecting the client-side with the server-side. <br /><br /> Furthermore, two APIs are utilized in this project: RESTCOUNTRY provides users with a comprehensive list of countries, while MAPBOX enables map marking functionality. I recommend registering as a user so that you can create or edit your own blogs and photos. However, even without registration, you can still browse through others' articles. Let's start to share our travels with Travel Wikkimedia!
                </p>
                <h2>Tools Involved</h2>
                <div className='row col-xl-10 col-lg-12 col-sm-12 col-xs-12  d-flex justify-content-start align-items-center '>
                    <div className="fs-5 col-xl-2 col-lg-3 py-2 col-sm-4 col-xs-2 border mx-2 d-flex justify-content-around bg-light mb-2 d-flex align-items-center" style={{ padding: '0 20px' }}>
                        <img className='mx-2' src={reactIcon} alt="React"></img>
                        <span className="ml-2">React</span>
                    </div>
                    <div className=" fs-5 col-xl-2 col-lg-3 py-2 col-sm-4 col-xs-2 border mx-2 d-flex justify-content-around bg-light mb-2 align-items-center" style={{ padding: '0 20px' }}>
                        <img className='mx-2' src={mongoIcon} ></img>
                        MongoDB
                    </div>
                    <div className=" fs-5 col-xl-2 col-lg-3 py-2 col-sm-4 col-xs-2 border mx-2 d-flex justify-content-around bg-light mb-2 align-items-center" style={{ padding: '0 20px' }}>
                        <img className='mx-2' src={nodeIcon} ></img>
                        NodeJS
                    </div>
                    <div className=" fs-5 col-xl-2 col-lg-3 py-2 col-sm-4 col-xs-2 border mx-2 d-flex justify-content-around bg-light mb-2 align-items-center" style={{ padding: '0 20px' }}>
                        <img className='mx-2' src={expressIcon} ></img>
                        Express
                    </div>
                </div>
                <h2>Quick Links</h2>
                <div className='d-flex gap-3'>
                    <a href='https://github.com/jameszhao1021/travel-blog' target='_blank'>
                    <button className='btn btn-secondary'>GitHub</button>
                    </a>
                    <a href='https://travel-wikkimedia-e201bd728fb6.herokuapp.com/' target='_blank'>
                    <button className='btn btn-secondary'>Live Show</button>
                    </a>
                    <a href="/">  
                        <button className='btn btn-secondary'>Go Back</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default TravelBlog
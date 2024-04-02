import React from 'react'
import { Link } from 'react-router-dom'
import travelwikkimedia from '../../assets/images/travelblog.png'
import '../RoulettePage/Roulette.css'
import SplitText from '../../components/SplitText'
import reactIcon from "../../assets/images/reactIcon.png"
import mongoIcon from "../../assets/images/mongoIcon.png"
import cssIcon from "../../assets/images/cssIcon.png"
import roulette from '../../assets/images/roulette.png'

function Roulette({ isGreeting, greetingRef }) {

    return (
        <div className="container d-flex flex-column col-lg-6" >
            <div className='row gap-4' >
                <div ref={greetingRef}>
                    <h1>
                        <SplitText copy="How lucky you are?" role="heading" isGreeting={isGreeting} />
                        <br />
                        <SplitText copy="Try Roulette now" role="heading" isGreeting={isGreeting} />
                    </h1>
                </div>
               <img src={roulette} alt="TravelBlog" style={{height:'100%'}}></img> 
               
                <h2>Introduction</h2>
                <p className='fs-5'>This app, built on React, employs a plethora of virtual DOM operations and simulates the American-style roulette game prevalent in the real world. The game offers an exquisite interface, realistic roulette wheel, genuine betting experiences, and comprehensive statistics features. Additionally, players can switch between chips or place combination bets, enhancing the immersive experience.
                    <br />
                    <br />
                    Furthermore, this app has been optimised for users utilising mobile devices, ensuring exceptional gaming experiences whether on tablets or smartphones. Fancy testing your luck today? Give the roulette wheel a spin and see how much you can win!
                </p>
                <h2>Tools Involved</h2>
                <div className='row col-xl-10 col-lg-12 col-sm-12 col-xs-12  d-flex justify-content-start align-items-center'>
                    <div className="fs-5 col-xl-2 col-lg-3 py-2 col-sm-4 col-xs-2 border mx-2 d-flex justify-content-around bg-light mb-2 d-flex align-items-center" style={{ padding: '0 20px' }}>
                        <img className='mx-2' src={reactIcon} alt="React"></img>
                        <span className="ml-2">React</span>
                    </div>
                    <div className=" fs-5 col-xl-2 col-lg-3 py-2 col-sm-4 col-xs-2 border mx-2 d-flex justify-content-around bg-light mb-2 align-items-center" style={{ padding: '0 20px' }}>
                        <img className='mx-2' src={cssIcon} ></img>
                        CSS
                    </div>
                </div>
                <h2>Quick Links</h2>
                <div className='d-flex gap-3'>
                    <Link to='https://github.com/jameszhao1021/Roulette-Game' target='_blank'>
                        <button className='btn btn-secondary'>GitHub</button>
                    </Link>
                    <Link to='https://jameszhao1021.github.io/Roulette-Game/' target='_blank'>
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

export default Roulette
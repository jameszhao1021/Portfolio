import React from 'react'
import travelwikkimedia from '../../assets/images/travelblog.png'
import '../TravelBlogPage/TravelBlog.css'
import SplitText from '../../components/SplitText'
import reactIcon from '../../assets/images/reactIcon.png'
import pythonIcon from '../../assets/images/pythonIcon.png'
import postgreSQLIcon from '../../assets/images/postgresqlIcon.png'
import djangoIcon from '../../assets/images/djangoIcon.png'
import netmall from '../../assets/images/netmall.png'

function NetMall({ isGreeting, greetingRef }) {

    return (
        <div className="container d-flex flex-column col-lg-6" >
            <div className='row gap-4' >
                <div ref={greetingRef}>
                    <h1>
                        <SplitText copy="NetMall" role="heading" isGreeting={isGreeting} />
                        <br />
                        <SplitText copy="Fantastic shopping experience" role="heading" isGreeting={isGreeting} />
                    </h1>
                </div>
                <img src={netmall} alt="NetMall" style={{ minHeight: '600px' }}></img>
                <h2>Introduction</h2>
                <p className='fs-5'>Great online shopping app designed for shopaholics! Whether you're a buyer looking for the latest trends or a seller ready to showcase your products to the world, NetMall has you covered. Our intuitive interface makes browsing and purchasing products a breeze, and allow you to showcase your products in the best possible light, attracting customers and driving sales.,<br /><br /> 
NetMall leverages cutting-edge technology, with Django Rest Framework and PostgreSQL powering our robust and scalable backend, ensuring seamless shopping experiences even during peak traffic. Coupled with Python's reliability, our platform delivers efficiency. On the frontend, React enables a sleek, responsive interface, ensuring an optimal shopping experience across devices, whether on your computer or mobile.
                </p>
                <h2>Tools Involved</h2>
                <div className='row col-xl-10 col-lg-12 col-sm-12 col-xs-12  d-flex justify-content-start align-items-center '>
                    <div className="fs-5 col-xl-2 col-lg-3 py-2 col-sm-4 col-xs-2 border mx-2 d-flex justify-content-around bg-light mb-2 d-flex align-items-center" style={{ padding: '0 20px' }}>
                        <img className='mx-2' src={reactIcon} alt="React"></img>
                        <span className="ml-2">React</span>
                    </div>
                    <div className=" fs-5 col-xl-3 col-lg-3 py-2 col-sm-4 col-xs-2 border mx-2 d-flex justify-content-around bg-light mb-2 align-items-center" style={{ padding: '0 20px' }}>
                        <img className='mx-2' src={postgreSQLIcon} ></img>
                        <span className="ml-2 d-flex "> PostgreSQL</span>
                    </div>
                    <div className=" fs-5 col-xl-2 col-lg-3 py-2 col-sm-4 col-xs-2 border mx-2 d-flex justify-content-around bg-light mb-2 align-items-center" style={{ padding: '0 20px' }}>
                        <img className='mx-2' src={pythonIcon} ></img>
                        <span className="ml-2">Python</span>
                    </div>
                    <div className=" fs-5 col-xl-2 col-lg-3 py-2 col-sm-4 col-xs-2 border mx-2 d-flex justify-content-around bg-light mb-2 align-items-center" style={{ padding: '0 20px' }}>
                        <img className='mx-2' src={djangoIcon} ></img>
                        <span className="ml-2">Django</span>
                    </div>
                </div>
                <h2>Quick Links</h2>
                <div className='d-flex gap-3'>
                    <a href='https://github.com/jameszhao1021/NetMall' target='_blank'>
                    <button className='btn btn-secondary'>GitHub</button>
                    </a>
                    <a href='https://net-mall-41b5566731fe.herokuapp.com/' target='_blank'>
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

export default NetMall
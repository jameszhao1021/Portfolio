import React from 'react'
import '../TravelBlogPage/TravelBlog.css'
import SplitText from '../../components/SplitText'
import csharpIcon from '../../assets/images/csharpIcon.png'
import netcoreIcon from '../../assets/images/netcoreIcon.png'
import postgreSQLIcon from '../../assets/images/postgresqlIcon.png'
import djangoIcon from '../../assets/images/djangoIcon.png'
import luxestays from '../../assets/images/luxestays.png'

function Luxestays({ isGreeting, greetingRef }) {

    return (
        <div className="container d-flex flex-column col-lg-6" >
            <div className='row gap-4' >
                <div ref={greetingRef}>
                    <h1>
                        <SplitText copy="Luxestays" role="heading" isGreeting={isGreeting} />
                        <br />
                        <SplitText copy="Enjoy your fantastic holiday" role="heading" isGreeting={isGreeting} />
                    </h1>
                </div>
                <img className='rouletteImg' src={luxestays} alt="Luxestays" style={{ height: '100%' }}></img>
                <h2>Introduction</h2>
                <p className='fs-5'>Luxestays is the ultimate villa booking app for holiday lovers and property managers alike! Whether you’re looking to escape to a luxury villa or manage your listings with ease, Luxestays has you covered. Guests can register, explore stunning villas, and book their perfect getaway, while admins can take control of listings, manage bookings, and monitor performance through a sleek data dashboard.<br /><br />
                    Powered by .NET Clean Architecture, Luxestays delivers a clean, scalable, and maintainable backend structure. The platform ensures smooth user experiences, robust role-based access, and efficient booking management—all designed to keep your holiday dreams running stress-free..
                </p>
                <h2>Tools Involved</h2>
                <div className='row col-xl-10 col-lg-12 col-sm-12 col-xs-12  d-flex justify-content-start align-items-center '>
                     <div className=" fs-5 col-xl-2 col-lg-3 py-2 col-sm-4 col-xs-2 border mx-2 d-flex justify-content-around bg-light mb-2 align-items-center" style={{ padding: '0 20px' }}>
                        <img className='mx-2' src={netcoreIcon} ></img>
                        <span className="ml-2">.NET</span>
                    </div>
                    <div className="fs-5 col-xl-2 col-lg-3 py-2 col-sm-4 col-xs-2 border mx-2 d-flex justify-content-around bg-light mb-2 d-flex align-items-center" style={{ padding: '0 20px' }}>
                        <img className='mx-2' src={csharpIcon} alt="Csharp"></img>
                        <span className="ml-2">C#</span>
                    </div>
                    <div className=" fs-5 col-xl-3 col-lg-3 py-2 col-sm-4 col-xs-2 border mx-2 d-flex justify-content-around bg-light mb-2 align-items-center" style={{ padding: '0 20px' }}>
                        <img className='mx-2' src={postgreSQLIcon} ></img>
                        <span className="ml-2 d-flex "> PostgreSQL</span>
                    </div>

                </div>
                <h2>Quick Links</h2>
                <div className='d-flex gap-3'>
                    <a href='https://github.com/jameszhao1021/NetMall' target='_blank'>
                        <button className='btn btn-secondary'>GitHub</button>
                    </a>
                    <a href='https://luxestays-fabdb5ce07b9.herokuapp.com/' target='_blank'>
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

export default Luxestays
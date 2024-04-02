import React from "react"
import { Link } from "react-router-dom";
import LinkedinIcon from '../../assets/images/linkedinIcon.png'
import GithubIcon from '../../assets/images/githubIcon.png'
import InstagramIcon from '../../assets/images/instagramIcon.png';
import '../Footer/Footer.css'

function Footer(){

    return (
        <footer className="bg-dark text-light pb-4 pt-5 mt-5 d-flex flex-column align-items-center footer ">
           
                <p className="mb-3">Keep Exploring off-the-beaten tracks and going the extra mile</p>
                <div className="d-flex gap-3 pb-3">
                <Link to='https://www.linkedin.com/in/james-zhao-62a87b143/' target="_blank">
                  <img src={LinkedinIcon} alt="LinkedinIcon" style={{width:'30px', height:'30px'}}/>
                  </Link>
                  <Link to='https://github.com/jameszhao1021' target="_blank">
                  <img src={GithubIcon} alt="GithubIcon" style={{width:'30px', height:'30px'}} />
                  </Link>
                  <Link to='https://www.instagram.com/jiradina/' target="_blank">
                  <img src={InstagramIcon} alt="InstagramIcon" style={{width:'30px', height:'30px'}}/>
                  </Link>
                </div> 
                <p className="mb-0">© 2024 Cool App. All rights reserved.</p>
                <p className="mb-0">Designed by James Zhao</p>
            
        </footer>
    );
}

export default Footer;
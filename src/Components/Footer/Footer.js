import React from 'react'
import "./Footer.css"
import FooterLogo from "../Img/pologo.png"
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className="generalFooter">
      <div className="generalFooterWidth">
        <Link to="/">
          <div className="footerLogoDiv"> <img src={FooterLogo} alt="" style={{ width: "50px" }} /> </div>
        </Link>
        <div className="footerSocials">
          <FacebookIcon style={{ width: "40px", height: "40px" }} />
          <YouTubeIcon style={{ width: "40px", height: "40px" }} />
          <InstagramIcon style={{ width: "40px", height: "40px" }} />
          <LinkedInIcon style={{ width: "40px", height: "40px" }} />
          <TwitterIcon style={{ width: "40px", height: "40px" }} />
        </div>
        <div className="footerNavs">
          <Link to="/about" style={{ color: "white", textDecoration: "none" }}><p>About</p></Link>
          <Link to="/event" style={{ color: "white", textDecoration: "none" }} ><p>Events</p></Link>
          <Link to="/award" style={{ color: "white", textDecoration: "none" }} ><p>Awards</p></Link>
          <Link to="/contact" style={{ color: "white", textDecoration: "none" }} ><p>Contact</p></Link>
          <Link to="/note" style={{ color: "white", textDecoration: "none" }} ><p>Send a Note</p></Link>
        </div>
      </div>
    </div>
  )
}

export default Footer

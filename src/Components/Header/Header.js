import React from 'react'
import "./Header.css"
import HeaderLogo from "../Img/pologo.png"
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="generalHeader">
      <div className="logoAndNavDivWidthHolder">
        <div className="logoAndNavDiv">
          <Link to="/">
            <div className="logoDiv"> <img src={HeaderLogo} alt="" style={{ width: "50px" }} /> </div>
          </Link>
          <div className="navDiv">
            <Link to="/about" style={{ color: "white", textDecoration: "none" }}><p>About</p></Link>
            <Link to="/event" style={{ color: "white", textDecoration: "none" }} ><p>Events</p></Link>
            <Link to="/award" style={{ color: "white", textDecoration: "none" }} ><p>Awards</p></Link>
            <Link to="/contact" style={{ color: "white", textDecoration: "none" }} ><p>Contact</p></Link>
            <Link to="/note" style={{ color: "white", textDecoration: "none" }} ><p>Send a Note</p></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

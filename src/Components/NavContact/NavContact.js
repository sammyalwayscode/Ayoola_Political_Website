import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import "./NavContact.css"
import AjMap from "../Img/mappp.png"

function NavContact() {
  return (
    <div>
      <Header />
      <div className="generalContact">
        <div className="generalContactWithHold">
          <div className="contactText">
            <p style={{ fontSize: "50px" }}>Our Location</p>
            <p>Ajeromi-Ifelodun general councle by ajeromi police station by Mba bus stop</p>
            <p style={{ fontSize: "30px" }}>Hours</p>
            <a>Monday-Saturday: 8am-5pm</a>
          </div>
          <img src={AjMap} alt="" className="mapCont" />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default NavContact

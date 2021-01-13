import React from 'react'
import "./HomeNoOne.css"
import ayoooop from "../Img/sfsf.png"
import { Link } from 'react-router-dom'

function HomeNoOne() {
  return (
    <div className="generalHomeNoOneDiv">
      <div className="meetCardDiv">
        <div className="meetCardWithHolder">
          <div className="meetPixTextDiv">
            <div className="meetImageDiv"> <img src={ayoooop} alt=""
              style={{ height: "478px", width: "343px", objectFit: "cover" }}
            />
            </div>
            <div className="meetTextDiv">
              <h2> Choice Of The People </h2>
              <hr style={{ width: "180px", border: "1px solid darkred", marginTop: "-10px" }} />
              <p>Born on July 2nd, 1963 by his parents Alhaji Ayoola Onibeju Agbe from Ibeju-Lekki Local Government Area and Alhaja Sariatu Adunni Ayoola, nee OLUWA, from the Oluwa Royal Family of Isale Eko in Lagos Island Local Government Area, both of Lagos State. He had his primary education at Baptist Primary School, Marine Beach, Apapa Ajegunle, 1973 before being transferred to Zummuratul Islamiyah Primary School, Araromi-Olodi Apapa where he finished and got his First School Leaving Certificate in 1979.
He proceeded to Amuwo Grammar School, Amuwo Odofin between 1980-1985, where he obtained the West Africa Senior School Certificate (WASC) in 1985.</p>
              <Link to="/about"><button>Read More</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default HomeNoOne

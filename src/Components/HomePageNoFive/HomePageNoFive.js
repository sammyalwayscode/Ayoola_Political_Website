import React from 'react'
import { Link } from 'react-router-dom'
import AwardCards from './AwardCards'
import "./HomePageNoFive.css"

function HomePageNoFive() {
  return (
    <div className="HomeAwardMain">
      <p style={{ fontSize: "50px", fontWeight: "bold" }}>Awards</p>
      <div className="AwardWidtholder">
        <AwardCards
          AwardYear="Saturday July 20th, 2019"
          AwardTitle="Sucess in Leadersihip Conference Award"
          AwardContents="He Won the Award for the Sucess In leadership Conference"
        />

        <AwardCards
          AwardYear="2018"
          AwardTitle="Founder of the FAA Mathematics Competion"
          AwardContents="Yes... He was the Founder of the Fatia Adekunle Ayoola Mathematics Competion"
        />

        <AwardCards
          AwardYear="Dec 4, 2019"
          AwardTitle="Grandpatron of Sport And Developnment"
          AwardContents="At the Peakline Paterns toranment te chairman was awarded the Grandpatron of Sport And Developnment"
        />
      </div>
      <Link to="/award"><button>See More</button></Link>
    </div>
  )
}

export default HomePageNoFive

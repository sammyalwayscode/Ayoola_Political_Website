import React from 'react'
import "./HomePageNoFour.css"
import EventsCards from './EventsCards'
import contain from '../Img/qwdd.jpg'
import Lontor from '../Img/i (1).png'
import christm from '../Img/sfsf.png'

function HomePageNoFour() {
  return (
    <div className="masterEventsDiv">
      <div className="eventCardTextController">
        <div className="eventsTextDiv">
          <p className="eventSmall">EVENTS</p>
          <p className="eventBig">See Recent Works</p>
        </div>
        <div className="eventsCardDiv">
          <EventsCards
            eventPicture={contain}
            eventTitle="Marking of 2nd 5 A-Side synthetic pitch in Ajeromi-Ifelodun completed"
            eventContent="The marking of the second 5 A-side synthetic pitch in Ajeromi Ifelodun LGA has been completed by the Hon. Fatai Adekunle Ayoola led administration."
          />

          <EventsCards
            eventPicture={Lontor}
            eventTitle="Ajeromi Ifelodun partners Lontor to empower youths, elderly"
            eventContent="Ajeromi Ifelodun local government area of Lagos state has partnered with Lontor- makers of high-quality, energy-efficient, convenient lighting and emergency household electrical products  to empower youths and the elderly to help reduce unemployment"
          />

          <EventsCards
            eventPicture={christm}
            eventTitle="Hon. Fatai Ayoola lights up Ajegunle to celebrate Christmas"
            eventContent="In the spirit of the season and keeping with his campaign promise of running a unifying administration, Chairman of Ajeromi Ifelodun Local Govt Area Hon. Fatai Adekunle Ayoola has added beauty to key areas in the local government by putting up Christmas trees"
          />
        </div>
      </div>
    </div>
  )
}

export default HomePageNoFour

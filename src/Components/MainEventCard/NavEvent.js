import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import MainEventCard from './MainEventCard'
import "./NavEvent.css"
import contain from '../Img/qwdd.jpg'
import Lontor from '../Img/i (1).png'
import christm from '../Img/sfsf.png'

function NavEvent() {
  return (
    <div>
      <Header />
      <div
        style={{
          width: "100vw",
          height: "100%",
          // backgroundColor: "yellowgreen",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignContent: "center",
        }} >
        <div
          style={{
            width: "1100px",
            // backgroundColor: "red",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignContent: "center",
            justifyContent: "space-between",
            textAlign: "center"
          }}
        >
          <div style={{ marginBottom: "40px" }}><MainEventCard
            MainEventTitle="Ajeromi Ifelodun partners Lontor to empower youths, elderly"
            MainEventDate="December 31, 2017"
            MainEventImage={Lontor}
            MainEventBrief="Ajeromi Ifelodun local government area of Lagos state has partnered with Lontor- makers of high-quality, energy-efficient, convenient lighting and emergency household electrical products  to empower youths"
            MainEventContentOne="Ajeromi Ifelodun local government area of Lagos state has partnered with Lontor- makers of high-quality, energy-efficient, convenient lighting and emergency household electrical products  to empower youths and the elderly to help reduce unemployment and dependence."
            MainEventContentTwo="The event which held at the Council secretariat last Friday saw a total of 50 entrepreneurs receive different Lontor products worth N30,000  each while 100 elderly men and women got stipends of N10,000 each as the Ayoola administration seeks to reintroduce monthly financial aid at the grassroot level."
            MainEventContentThree="Top on the list of the beneficiaries was a former Special Adviser on Health, Mrs. Badmus Bolajoko who went home with N1million naira Lontor Power house package alongside four others.The chairman, Hon Fatai Ayoola who personally gave out the packages to the beneficiaries stressed that the essence of the empowerment was to take many people off the streets, and get them busy and productive"
            MainEventContentFour=" according to Jubril, the empowerment will cover the twenty Local Government Areas in Lagos state with the next stop being Bariga in Shomolu local government. The empowerment programme which is the first of its kind in the local government will be organized annually."
          /></div>


          <div style={{ marginBottom: "40px" }}><MainEventCard
            MainEventTitle="Marking of 2nd 5 A-Side synthetic pitch in Ajeromi-Ifelodun completed"
            MainEventDate="September 29, 2018"
            MainEventImage={contain}
            MainEventBrief="The marking of the second 5 A-side synthetic pitch in Ajeromi Ifelodun LGA has been completed by the Hon. Fatai Adekunle Ayoola led administration."
            MainEventContentOne="The high technologically enhanced pitch is a way Hon. Ayoola is using to revive the lost glory of sports in Ajegunle as a whole. Speaking, Hon. Ayoola said, “Sports in Ajegunle will soon take its rightful place in the world because I am bent on constructing more sporting facilities and creating a veritable means for talent di"
            MainEventContentTwo="The marking was also done with synthetic white grass for durability. Contractors have also promised maintenance of the facility over a long period of time. The new pitch is located at New Road Primary school, along New Road, Achakpo in Ajegunle."
            MainEventContentThree=""
            MainEventContentFour=""
          /></div>


          <div style={{ marginBottom: "40px" }}><MainEventCard
            MainEventTitle="Hon. Fatai Ayoola lights up Ajegunle to celebrate Christmas"
            MainEventDate="On December 27, 2017"
            MainEventImage={christm}
            MainEventBrief="In the spirit of the season and keeping with his campaign promise of running a unifying administration, Chairman of Ajeromi Ifelodun Local Govt Area Hon. Fatai Adekunle Ayoola has added beauty to..."
            MainEventContentOne="In the spirit of the season and keeping with his campaign promise of running a unifying administration, Chairman of Ajeromi Ifelodun Local Govt Area Hon. Fatai Adekunle Ayoola has added beauty to key areas in the local government by putting up Christmas trees and lights to commemorate the celebration of Christmas. Hon. Ayoola The project tagged “Light Up Ajegunle” covered areas like the round-about that connects Oregie to Boundary and Suru-Alaba which was demolished and a better park-like structure put up to accommodate the tree and other decorations."
            MainEventContentTwo="Also, a sculptured hand carrying a cowry which symbolises the meaning of Ajegunle –wealth, was erected to as the Chairman puts it ‘restore Ajegunle’ Speaking further, he disclosed that his government is forming a synergy with the Lagos state government by replicating what Governor Akinwunmi Ambode is doing all over the state."
            MainEventContentThree="Ayoola who not too long ago marked one-hundred days in office has not rested on his oars since his inauguration, making sure that projects are rightly awarded and are not abandoned by contractors."
            MainEventContentFour=""
          /></div>


          <div style={{ marginBottom: "40px" }}><MainEventCard
            MainEventTitle=""
            MainEventDate=""
            MainEventImage=""
            MainEventBrief=""
            MainEventContentOne=""
            MainEventContentTwo=""
            MainEventContentThree=""
            MainEventContentFour=""
          /></div>
          {/* <div style={{ marginBottom: "40px" }}><MainEventCard /></div>
          <div style={{ marginBottom: "40px" }}><MainEventCard /></div>
          <div style={{ marginBottom: "40px" }}><MainEventCard /></div> */}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default NavEvent

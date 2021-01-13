import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import AwardCards from '../HomePageNoFive/AwardCards'
import AwardPix from "../Img/zxcv.jpg"

function NavAward() {
  return (
    <div>
      <Header />
      <img src={AwardPix} alt="" style={{ height: "250px", width: "100vw", objectFit: "cover" }} />
      <p style={{
        fontSize: "100px",
        marginTop: "-150px",
        // fontWeight: "bold",
        color: "white",
        marginLeft: "30px"
      }}>Awards</p>
      <div style={{
        height: "100%",
        width: "100vw",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <div style={{
          width: "1100px",
          // backgroundColor: "ButtonHighlight",
          display: 'flex',
          flexWrap: "wrap",
          justifyContent: 'center',
          alignItems: "center",
          justifyContent: "space-between"
        }}>
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
          <AwardCards
            AwardYear=""
            AwardTitle=""
            AwardContents=""
          />

          <AwardCards
            AwardYear=""
            AwardTitle=""
            AwardContents=""
          />

          <AwardCards
            AwardYear=""
            AwardTitle=""
            AwardContents=""
          />

          <AwardCards
            AwardYear=""
            AwardTitle=""
            AwardContents=""
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default NavAward

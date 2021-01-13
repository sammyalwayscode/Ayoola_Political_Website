import React from 'react'
import "./HomePageNoThree"
import IssueCard from './IssueCard'
import WorkIcon from '@material-ui/icons/Work';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import PeopleIcon from '@material-ui/icons/People';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

function HomePageNoThree() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >

      <div>
        <p
          style={{ fontSize: "60px", fontWeight: "bold" }}
        >On The Issue</p>
        <p
          style={{
            fontSize: "larger",
            marginTop: "-15px",
            marginBottom: "70px"

          }}
        >It's time we stand up for our ideals, it's time we take on the status quo</p>
      </div>

      < div
        style={{
          width: "1112px",
          // backgroundColor: "pink",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >


        <IssueCard
          backgroundColor="#1b5697"
          materialIconissue={<WorkIcon
            style={{
              color: "#fcb614",
              height: "40px",
              width: "40px",
            }} />}
          IssueTitle="Jobs"
          IssueContent="As the COO of a fortune 500 company, Ayoola knows what it takes to create jobs, and will work to bring quality jobs to Michigan."
        />


        <IssueCard
          backgroundColor="#043061"
          materialIconissue={<CastForEducationIcon
            style={{
              color: "#fcb614",
              height: "40px",
              width: "40px",
            }} />}
          IssueTitle="Education"
          IssueContent="Education is the great equalizer, and Ayoola will invest in K-12 education to give our children the chance they deserve.."
        />


        <IssueCard
          backgroundColor="#1b5697"
          materialIconissue={<PeopleIcon
            style={{
              color: "#fcb614",
              height: "40px",
              width: "40px",
            }} />}
          IssueTitle="Skilled Traders"
          IssueContent="Ayoola believes in investing in the trades, to bring people into middle class jobs.."
        />
        <IssueCard
          backgroundColor="#043061"
          materialIconissue={<LocalHospitalIcon
            style={{
              color: "#fcb614",
              height: "40px",
              width: "40px",
            }} />}
          IssueTitle="Healtcare"
          IssueContent="Ayoola will work to bring affordable quality healthcare for our families by strengthening the Affordable Care Act."
        />
      </div >
    </div >
  )
}

export default HomePageNoThree

import React from 'react'
// import AwardCards from "../HomePageNoFive/AwardCards"
import HomePageNoFive from "../HomePageNoFive/HomePageNoFive"
import HomePageNoFour from "../HomePageNoFour/HomePageNoFour"
import HomeNoOne from "../HomeNoOne/HomeNoOne"
import HomeNoTwo from "../HomeNoTwo/HomeNoTwo"
import HomePageNoThree from "../HomePageNoThree/HomePageNoThree"
// import IssueCard from "../HomePageNoThree/IssueCard"
import LandingPage from "../LandingPage/LandingPage"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

function HomePage() {
  return (
    <div>
      <Header />
      <LandingPage />
      <HomeNoOne />
      <HomeNoTwo />
      <HomePageNoThree />
      <HomePageNoFour />
      <HomePageNoFive />
      <Footer />
    </div>
  )
}

export default HomePage

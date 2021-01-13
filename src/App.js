import React from "react"
import Footer from "./Components/Footer/Footer"
import HomePage from "./Components/HomePage/HomePage"
import MainEventCard from "./Components/MainEventCard/MainEventCard"
import NavEvent from "./Components/MainEventCard/NavEvent";
import NavAward from "./Components/NavAward/NavAward";
import NavContact from "./Components/NavContact/NavContact";
import SendNote from "./Components/SendNote/SendNote";
import AwardCards from "./Components/HomePageNoFive/AwardCards"
import HomePageNoFive from "./Components/HomePageNoFive/HomePageNoFive"
import HomePageNoFour from "./Components/HomePageNoFour/HomePageNoFour"
import HomeNoOne from "./Components/HomeNoOne/HomeNoOne"
import HomeNoTwo from "./Components/HomeNoTwo/HomeNoTwo"
import HomePageNoThree from "./Components/HomePageNoThree/HomePageNoThree"
import IssueCard from "./Components/HomePageNoThree/IssueCard"
import LandingPage from "./Components/LandingPage/LandingPage"
import Header from "./Components/Header/Header"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavAbout from "./Components/NavAbout/NavAbout";

function App() {
  return (
    <div>





      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" exact component={NavAbout} />
          <Route path="/event" exact component={NavEvent} />
          <Route path="/award" exact component={NavAward} />
          <Route path="/contact" exact component={NavContact} />
          <Route path="/note" exact component={SendNote} />
        </Switch>
      </BrowserRouter>









      {/* <HomePage /> */}
      {/* <Header /> */}
      {/* <LandingPage /> */}
      {/* <HomeNoOne /> */}
      {/* <HomeNoTwo /> */}
      {/* <HomePageNoThree /> */}
      {/* <HomePageNoFour /> */}
      {/* <HomePageNoFive /> */}
      {/* <Footer /> */}
      {/* <AwardCards /> */}
      {/* <IssueCard /> */}
      {/* <NavEvent /> */}
      {/* <NavAward /> */}
      {/* <NavContact /> */}
      {/* <SendNote /> */}
      {/* <MainEventCard /> */}
    </div>
  );
}

export default App;

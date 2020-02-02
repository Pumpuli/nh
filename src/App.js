import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import "./App.css"; 
import Timer from "./Timer/Timer";
import Quiz from "./Quiz/Quiz";
import Home from "./Misc/Home";
import Contact from "./Misc/Contact";
import Randomizer from "./Randomizer/Randomizer";
import RcMenu from "./RcMenu";
import Bingo from "./Bingo/Bingo";
import VideoPage from "./Misc/VideoPage";
import PodcastPage from "./Misc/PodcastPage";
import CookiesPage from "./Misc/CookiesPage";
import MusicPage from "./Misc/MusicPage";
import Subs from "./Subs/Subs";
import QuotesPage from "./Quotes/QuotesPage";

class App extends Component {
  state = { menuIsExpanded: false };

  toggleSidebarMenu() {
    this.setState(prevState => ({ menuIsExpanded: !prevState.menuIsExpanded }));
  }

  getTargetDate(){
    const currDate = new Date()

    const ep1 = Date.UTC(2020, 3, 1, 20, 0, 0)
    const ep2 = Date.UTC(2020, 3, 8, 20, 0, 0)
    const ep3 = Date.UTC(2020, 3, 15, 19, 0, 0)
    const ep4 = Date.UTC(2020, 3, 22, 19, 0, 0)
    const ep5 = Date.UTC(2020, 3, 29, 19, 0, 0)
    const ep6 = Date.UTC(2020, 4, 6, 19, 0, 0)
    //const ep7 = Date.UTC(2020, 4, 13, 19, 0, 0)
    //const ep8 = Date.UTC(2020, 4, 20, 19, 0, 0)
    //const ep9 = Date.UTC(2020, 4, 27, 19, 0, 0)
    const cs20 = Date.UTC(2020, 11, 25, 19, 0, 0)

    const dateList = [ep1, ep2, ep3, ep4, ep5, ep6, cs20]
    
    for (const ep of dateList) {
      if (currDate < ep) {
        return ep;
      }
    }
  
  }
  //npx run subs
  render() {
    return (
      <>


        <RcMenu
          toggleMenu={this.toggleSidebarMenu.bind(this)}
          menuIsExpanded={this.state.menuIsExpanded}
        />
        <button
          className="sidebar-hamburger-button"
          type="button"
          onClick={this.toggleSidebarMenu.bind(this)}
        >
          ☰
        </button>

        <div className="page-container">
          <Switch>
            <Route path="/timer"><Timer targetDate={this.getTargetDate()} title="Time until the Call the Midwife 2020 Christmas Special airs (hopefully):" /></Route>
            <Route path="/us-timer"><Timer targetDate={Date.UTC(2020, 2, 30, 3, 0, 0)} title="Time until Call the Midwife season 9 airs (in the US):"/></Route>
            <Route path="/quiz"><Quiz /></Route>
            <Route path="/" exact><Home /></Route>
            <Route path="/contact"><Contact /></Route>
            <Route path="/episode-randomizer"><Randomizer /></Route>
            <Route path="/bingo"><Bingo /></Route>
            <Route path="/videos"><VideoPage /></Route>
            <Route path="/podcasts"><PodcastPage /></Route>
            <Route path="/cookies"><CookiesPage /></Route>
            <Route path="/music"><MusicPage /></Route>
            <Route path="/subs"><Subs /></Route>
            <Route path="/quotes"><QuotesPage /></Route>
          </Switch>
        </div>

        <div className="page-footer">
          <div className="page-footer-content">
            <NavLink
              to="/cookies"
              className="nav-link-in-text"
              activeClassName="selected"
            >
              Cookie Information
            </NavLink>
          </div>
        </div>
      </>
    );
  }
}

export default App;

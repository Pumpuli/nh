import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
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
    const ep3 = Date.UTC(2020, 3, 25, 20, 0, 0)
    const ep4 = Date.UTC(2020, 3, 33, 20, 0, 0)
    const ep5 = Date.UTC(2020, 3, 29, 20, 0, 0)
    const ep6 = Date.UTC(2020, 4, 6, 20, 0, 0)
    const ep7 = Date.UTC(2020, 4, 13, 20, 0, 0)
    const ep8 = Date.UTC(2020, 4, 20, 20, 0, 0)
    const ep9 = Date.UTC(2020, 4, 27, 20, 0, 0)
    const cs20 = Date.UTC(2020, 11, 25, 19, 0, 0)

    const dateList = [ep1, ep2, ep3, ep4, ep5, ep6, ep7, ep8, ep9, cs20]
    
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
          <Route path="/timer" render={() => <Timer targetDate={this.getTargetDate()} title="Time until the next Call the Midwife watch party:" />} />
          <Route path="/us-timer" render={() => <Timer targetDate={Date.UTC(2020, 2, 30, 3, 0, 0)} title="Time until Call the Midwife season 9 airs (in the US):"/>} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/" component={Home} exact />
          <Route path="/contact" component={Contact} />
          <Route path="/episode-randomizer" component={Randomizer} />
          <Route path="/bingo" component={Bingo} />
          <Route path="/videos" component={VideoPage} />
          <Route path="/podcasts" component={PodcastPage} />
          <Route path="/cookies" component={CookiesPage} />
          <Route path="/music" component={MusicPage} />
          <Route path="/subs" component={Subs} />
          <Route path="/quotes" component={QuotesPage} />
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

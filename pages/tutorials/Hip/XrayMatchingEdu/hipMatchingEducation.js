import React, { Component } from "react";
import Welcome from "./welcome/welcome";
import { Route, Router, Redirect } from "react-router-dom";
import MyContext from "../../../helper/themeContext";
import MatchingVideo from "./matchingVideo/matchingVideo";
import MatchingVideo2 from "./matchingVideo2/matchingVideo2";

import LGS from "./LGS/LGS";
import MatchingTutorial from "./matchingTutorial/matchingTutorial";
import Report from "./report/report";
import Completed from "./completed/completed";
// import WELCOEMNEW '../../../../src/evaluation/recommendedCarePathway/Welcome.jsx';
class MatchingEducation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router history={this.context.history}>
        <Route
          exact
          path="/tutorials/hip-matching-education/"
          render={() => <Redirect to="./hip-matching-education/welcome" />}
        />
        <Route
          exact
          path="/tutorials/hip-matching-education/welcome"
          component={Welcome}
        />
        <Route
          exact
          path="/tutorials/hip-matching-education/video"
          component={MatchingVideo}
        />
        <Route
          exact
          path="/tutorials/hip-matching-education/lets-get-started"
          component={LGS}
        />
        <Route
          exact
          path="/tutorials/hip-matching-education/matching-tutorial"
          component={MatchingTutorial}
        />
        <Route
          exact
          path="/tutorials/hip-matching-education/video2"
          component={MatchingVideo2}
        />
        <Route
          exact
          path="/tutorials/hip-matching-education/report"
          component={Report}
        />
        <Route
          exact
          path="/tutorials/hip-matching-education/completed"
          component={Completed}
        />
      </Router>
    );
  }
}

MatchingEducation.contextType = MyContext;
export default MatchingEducation;

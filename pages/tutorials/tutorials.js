import React, { Component } from "react";
import MyContext from "../helper/themeContext";
import { Route, Router } from "react-router-dom";

// import JSNMC from "./KneeArthirits/JSNMC/JSNMC";

import SBSWelcome from "./SBS/SBSWelcome/SBSWelcome";
import SBSVideo from "./SBS/SBSVideo/WhatisSbs/SBSVideo";
import NavigationVideo from "./SBS/SBSVideo/NavigationVideo/NavigationVideo";

// import SBSVideo2 from "./SBS/SBSVideo2/SBSVideo2";
import KneeArthiritis from "./Knee/KneeArthirits/KneeArthiritis";
import MatchingEducation from "./Knee/XrayMatchingEdu/matchingEducation";
import XrayTraining from "./xrayTraining/xrayTraining";
import Knee from "./Knee/Knee";
import Hip from "./Hip/Hip";
import PatientEvaluation from "./PatientEvaluation/PatientEvaluation";
import RecomPathway from "./PatientEvaluation/recomCarePath/recomendedcarepathway";
import AutoXrayEval from "./AutoXrayEval/AutoXrayEval";
import UnderstandingPros from "./PatientEvaluation/UnderstandingPRO/UnderstandingPro";
import XrayEval from "./PatientEvaluation/XrayEval/XrayEval";

import PatientSurvey from "./PatientSurveys/PatientSurvey";
import SampleKneeEval from "./SampleKneeEval/SampleKneeEval";
import SPRARCP from "./SamplePatientRARCP/SPRARCP";

import HipArthirits from "./Hip/HipArthirits/HipArthirits";
import HipMatchingEducation from "./Hip/XrayMatchingEdu/hipMatchingEducation";
import HipPatientSurvey from "./PatientSurveys/HipPatientSurvey";
import SampleHipEval from "./SampleKneeEval/SampleHipEval";
import HSPRARCP from "./SamplePatientRARCP/HSPRARCP";
import HipXrayTraining from "./hipXrayTraining/HipXrayTraining";
class Tutorials extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router history={this.context.history}>
        {/* WHAT IS SBS ROUTES STARTS HERE */}
        <Route exact path="/tutorials/sbs/welcome" component={SBSWelcome} />
        <Route exact path="/tutorials/sbs/video" component={SBSVideo} />
        <Route
          exact
          path="/tutorials/sbs/navigation-video"
          component={NavigationVideo}
        />
        {/* WHAT IS SBS ROUTES ENDS HERE */}
        {/* KNEE ROUTES STARTS HERE */}
        <Route exact path="/tutorials/knee/options" component={Knee} />
        <Route
          path="/tutorials/knee/patient-survey"
          component={PatientSurvey}
        />
        <Route
          path="/tutorials/knee/sample-knee-evaluation"
          component={SampleKneeEval}
        />
        <Route
          path="/tutorials/knee/sample-patient-report-and-recommended-care-pathway"
          component={SPRARCP}
        />
        {/* Contains INNER ROUTES FOR KNEE  */}
        <Route
          path="/tutorials/knee-Arthiritis"
          component={KneeArthiritis}
        />{" "}
        {/* Router */}
        <Route
          path="/tutorials/matching-education"
          component={MatchingEducation}
        />
        <Route path="/tutorials/matching-training" component={XrayTraining} />
        {/* KNEE ROUTES ENDS HERE */}
        {/* HIP ROUTES STARTS HERE */}
        <Route exact path="/tutorials/hip/options" component={Hip} />
        {/* Contains INNER ROUTES FOR Hip  */}
        <Route path="/tutorials/hip-Arthiritis" component={HipArthirits} />
        <Route
          path="/tutorials/hip-matching-education"
          component={HipMatchingEducation}
        />
        <Route
          path="/tutorials/hip/patient-survey"
          component={HipPatientSurvey}
        />
        <Route
          path="/tutorials/hip/sample-hip-evaluation"
          component={SampleHipEval}
        />
        <Route
          path="/tutorials/hip/sample-patient-report-and-recommended-care-pathway"
          component={HSPRARCP}
        />
        <Route
          path="/tutorials/hip-matching-training"
          component={HipXrayTraining}
        />
        {/* HIP ROUTES ENDS HERE */}
        {/* Patient Evaluation Education ROUTES STARTS HERE */}
        <Route
          exact
          path="/tutorials/patient-evaluation-education/options"
          component={PatientEvaluation}
        />
        {/* Contains INNER ROUTES FOR Pa  */}
        <Route
          path="/tutorials/patient-evaluation-education/xray-evaluation"
          component={XrayEval}
        />
        <Route
          path="/tutorials/patient-evaluation-education/understanding-pros"
          component={UnderstandingPros}
        />
        {/* Contains ROUTES FOR recommended Care Pathway */}
        <Route
          path="/tutorials/patient-evaluation-education/recommended-carepathway"
          component={RecomPathway}
        />
        {/* Contains ROUTES FOR automatic xray evaluation */}
        <Route
          path="/tutorials/automatic-xray-evaluation"
          component={AutoXrayEval}
        />
        {/* Patient Evaluation Education ROUTES ENDS HERE */}
        {/* <Route exact path="/tutorials/resume-tutorial" component={ResumeTutorial} />
        <Route exact path="/tutorials/resume-tutorial/recover" component={ResumeTutorialSelect} /> */}
        {/* <Route exact path="/tutorials/sbs/video2" component={SBSVideo2} /> */}
      </Router>
    );
  }
}

Tutorials.contextType = MyContext;
export default Tutorials;

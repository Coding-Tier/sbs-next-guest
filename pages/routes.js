import React, { Component } from "react";
import { Route, Router } from "react-router-dom";

//helpers
import history from "./helper/history";
import MyContext from "./helper/themeContext";

//components
import Tutorials from "./tutorials/tutorials";


import Guest from "./guest";
// import RecomCarePath from "./tutorials/PatientEvaluation/recomCarePath/recomendedcarepathway";
// import UploadReport from './evaluation/patientReport/upload/uploadReports';

const baseUrlH = "https://sbs-server-adonis.herokuapp.com"; //old Env
const baseUrlA = "https://sbs-backend-dw.herokuapp.com"
const baseUrlL = "http://127.0.0.1:3333";
const baseUrl = baseUrlA;

//-------- Session Variables --------------------
  //1- type
  //2- user_id
  //4- user_email
  //3- user_type
  //4- isTutorialCompleted
  //5- organization
  //6- loggedIn
  //7- oldEvaluations
  //8- isOldEvaluation
  let sessionVariables = {
    user_mode:'guest',
    token:null,
    type:null,
    user_id:null,
    user_email:null,
    user_type_id:null,
    user_type_name:null,
    isTutorialCompleted:null,
    organization:null,
    loggedIn:null,
    isOldEvaluations:null,
    tutorials:null,
  }
  //-----------------------------------------------
class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, oldEvaluations: [] };
  }

  UNSAFE_componentWillMount() {
    // LoadDummyEvaluation(this, '/Evaluation/chart-report-image');
    this.loadPrevSession();
    _setMatchingEductaionStuff(this);
  }

  loadPrevSession = () => {
    this.setState({
        ...sessionVariables,
        loading: false,
    });
  }

  checkGuesUserMode = () =>
  {
    if(this.state.user_mode==="guest")
    {
        return true
    }
    else false;
  }

  render() {
    return this.state.loading === false ? (
      <Router history={history}>
        <MyContext.Provider
          value={{
            history: history,
            checkGuesUserMode:this.checkGuesUserMode
          }}>
          <Route path="/tutorials" component={Tutorials} />
          <Route path="/home" component={Guest} />{" "}
        </MyContext.Provider>
      </Router>
    ) : (
      <div>Loading</div>
    );
  }
}
export default Routes;
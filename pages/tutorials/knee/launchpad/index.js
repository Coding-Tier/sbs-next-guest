import React, { Component } from "react";
import { Grid, Button } from "@material-ui/core";
import KneeImage from "../../../assets/knee_evaluation_home.png";
import MyContext from "../../../helper/themeContext";

import Image from 'next/image'

const WhatYouKneeKnow_Tutorial_Id = 5;
const XrayAi_Tutorial_Id = 6;
const PatientSurvey_Tutorial_Id = 7;
const SampleKnee_Tutorial_Id = 8;
const RCP_Tutorial_Id = 9;
const TestMatching_Tutorial_Id = 10;

class Knee extends Component {
  constructor(props) {
    super(props);
    this.state = {}; 
  }

  _checkIncomplete(id)
  {
    id =  parseInt(id)

    let tutorials = this.context.state.tutorials;
    console.log(this.context.state)
    if(tutorials && tutorials.length > 0)
    {
        if( (tutorials.indexOf(id) > -1))
        {
            return false
        }
        else return true;
    }
    else return true;        
  }

  render() {
    return (
      <div id="Knee_Main_Div">
        <div id="Knee_Content1_Wrapper">
          <div id="Knee_Heading1_Div">
            Hip &<span style={{ color: "#b4ec51" }}> Knee </span> Step by Step
            <br />
            <span style={{ fontWeight: "bold", fontSize: "75px" }}> Knee Education </span>{" "}
            <div id="Home_Neon_Line"></div>
          </div>

          <Grid container>
            <Grid item xs={12} md={4} lg={4} xl={4}>
              <div className="home-grid-left">

                <div className="Home_Button_Div">
                  <Button
                    id="Home_Button"
                    variant="contained"
                    onClick={() => {
                      this.context.Navigate("/tutorials/knee/knee-arthiritis/welcome");
                    }}>
                    {" "}
                    What You Knee'd to Know{" "}
                  </Button>
                  {/* {
                    this._checkIncomplete(WhatYouKneeKnow_Tutorial_Id) ?
                    <div className="Home_Incomplete_Div" >
                        Incomplete
                    </div>
                    :
                    <div className="Home_Complete_Div" >
                        Complete
                    </div>
                  } */}
                </div>

                <div className="Home_Button_Div">
                  <Button
                    id="Home_Button"
                    variant="contained"
                    onClick={() => {
                      this.context.Navigate("/tutorials/knee/matching-education/welcome");
                    }}>
                    {" "}
                    X-ray Matching &  <br/> Artificial Intelligence
                  </Button>
                  {/* {
                    this._checkIncomplete(XrayAi_Tutorial_Id) ?
                    <div className="Home_Incomplete_Div" >
                        Incomplete
                    </div>
                    :
                    <div className="Home_Complete_Div" >
                        Complete
                    </div>
                  } */}
                </div>

                <div className="Home_Button_Div">
                  <Button
                    id="Home_Button"
                    variant="contained"
                    onClick={() => {
                      this.context.Navigate("/tutorials/knee/patient-survey");
                    }}>
                    {" "} Patient Surveys {" "}
                  </Button>
                  {/* {
                    this._checkIncomplete(PatientSurvey_Tutorial_Id) ?
                    <div className="Home_Incomplete_Div" >
                        Incomplete
                    </div>
                    :
                    <div className="Home_Complete_Div" >
                        Complete
                    </div>
                  } */}
                </div>

                <div className="Home_Button_Div">
                  <Button
                    id="Home_Button"
                    variant="contained"
                    onClick={() => {
                      this.context.Navigate("/tutorials/knee/sample-knee-evaluation");
                    }}>
                    {" "} Sample Knee Evaluation {" "}
                  </Button>
                  {/* {
                    this._checkIncomplete(SampleKnee_Tutorial_Id) ?
                    <div className="Home_Incomplete_Div" >
                        Incomplete
                    </div>
                    :
                    <div className="Home_Complete_Div" >
                        Complete
                    </div>
                  } */}
                </div>

                <div className="Home_Button_Div">
                  <Button
                    id="Home_Button"
                    variant="contained"
                    onClick={() => {
                      this.context.Navigate("/tutorials/knee/sample-patient-report-and-recommended-care-pathway");
                    }}>
                    Recommended Care Pathway
                  </Button>
                  {/* {
                    this._checkIncomplete(RCP_Tutorial_Id) ?
                    <div className="Home_Incomplete_Div" >
                        Incomplete
                    </div>
                    :
                    <div className="Home_Complete_Div" >
                        Complete
                    </div>
                  } */}
                </div>

                <div className="Home_Button_Div">
                  <Button
                    id="Home_Button"
                    variant="contained"
                    onClick={() => {
                      this.context.Navigate("/tutorials/knee/matching-training/welcome");
                    }}>
                    {" "}
                    Test your X-ray <br/> Matching Skills
                  </Button>
                  {/* {
                    this._checkIncomplete(TestMatching_Tutorial_Id) ?
                    <div className="Home_Incomplete_Div" >
                        Incomplete
                    </div>
                    :
                    <div className="Home_Complete_Div" >
                        Complete
                    </div>
                  } */}
                </div>
              </div>
            </Grid>

            <Grid item xs={0} md={2} lg={2} xl={2}></Grid>

            <Grid item xs={12} md={4} lg={4} xl={4} className="image-grid">
              <div id="Home_Image_div_wrapper">
                <div id="Home_Image_div_knee_evaluation">
                  <img  src={KneeImage} alt="SBS" id="Knee_Evaluation_KneeBone" />
                </div>
                <div className="Home_Button_Div">
                  <Button
                    id="Home_Button"
                    variant="contained"
                    style={{ width: "250px" }}
                    onClick={() => {
                      this.context.Navigate("/home");
                    }}>
                    {" "}
                    BACK TO HOME{" "}
                  </Button>
                </div>
              </div>

              {/* <div className="Home_Button_Div_Wrapper">
                               
                            </div> */}
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
Knee.contextType = MyContext;
export default Knee;

import React, { Component } from "react";
import { Grid, Button } from "@material-ui/core";

import Bone2Image from "../assets/bone1_Bitmap.png";
import MyContext from "../helper/themeContext";

import { SemipolarLoading } from "react-loadingg";

import Image from 'next/image'


// import GetDataJson from '../Fetch/getDataJson';
// import {LoadNewEval} from '../StoreFunctions/evaluationStoreFunctions'

const evaluationRoutes = [
  { id: "0", stage: "0", route: "./evaluation/demographics" },
  {
    id: "1",
    stage: "1",
    route: "./evaluation/new-evaluation",
    name: "Patient Demographics Submitted",
  },
  {
    id: "2",
    stage: "2",
    route: "./evaluation/pro",
    name: "Joints Priority Selected",
  },
  {
    id: "3",
    stage: "3",
    route: "./evaluation/upload-xrays",
    name: "Question Form Submitted",
  },
  {
    id: "4",
    stage: "4",
    route: "./evaluation/x-ray-matching",
    name: "All Xrays Uploaded",
  },
];

const WhatYouKneeKnow_Tutorial_Id = 5;
const XrayAi_Tutorial_Id = 6;
const PatientSurvey_Tutorial_Id = 7;
const SampleKnee_Tutorial_Id = 8;
const RCP_Tutorial_Id = 9;
const TestMatching_Tutorial_Id = 10;

const GetHipAboutArth_Tutorial_Id = 11;
const XrayAi_Hip_Tutorial_Id = 12;
const PatientSurvey_Hip_Tutorial_Id = 13;
const SampleHip_Tutorial_Id = 14;
const RCP_Hip_Tutorial_Id = 15;
const TestMatching_Hip_Tutorial_Id = 16;

class Guest extends Component {
  constructor(props) {
    super(props);
    this.state = { resumeWarningModal: false, loading: false };
  }

  

  render() {


    return (
      <div id="Home_Main_Div">
        {this.state.loading === true ? (
          <SemipolarLoading size={"large"} color={"#b4ec51"} />
        ) : (
          <div id="Home_Content1_Wrapper">
            <div id="Home_Heading1_Div">
              Welcome to <br />
              <span style={{ color: "#b4ec51", fontWeight: "bold" }}>
                Hip
              </span>{" "}
              &
              <span style={{ color: "#b4ec51", fontWeight: "bold" }}>
                {" "}
                Knee{" "}
              </span>{" "}
              Step by Step
              {/* <div id="Home_Neon_Line"></div> */}
            </div>
            <div className="Home_Button_Div"></div>

            <Grid container>
              <Grid item xs={12} md={5} lg={4} xl={4}>
                <div className="home-grid-left">
                  <div className="home-grid-inside-heading">
                    Step by Step Education
                  </div>

                  <div className="Home_Button_Div">
                    <Button
                      id="Home_Button"
                      variant="contained"
                      onClick={() => {
                        this.context.Navigate("./tutorials/sbs/welcome");
                      }}
                    >
                      Get Started
                    </Button>
                    
                  </div>

                  <div className="Home_Button_Div">
                    <Button
                      id="Home_Button"
                      variant="contained"
                      onClick={() => {
                        this.context.Navigate("./tutorials/knee/options");
                      }}
                    >
                      {" "}
                      Knee Education{" "}
                    </Button>
                    
                  </div>

                  <div className="Home_Button_Div">
                    <Button
                      id="Home_Button"
                      variant="contained"
                      onClick={() => {
                        this.context.Navigate("./tutorials/hip/options");
                      }}
                    >
                      {" "}
                      Hip Education{" "}
                    </Button>
                    
                  </div>

                  <div className="Home_Button_Div">
                    <Button
                      id="Home_Button"
                      variant="contained"
                      onClick={() => {
                        this.context.Navigate(
                          "/tutorials/automatic-xray-evaluation"
                        );
                      }}
                    >
                      {" "}
                      Automatic X-ray Evaluation{" "}
                    </Button>
                   
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} md={4} lg={4} xl={4}>
                <div id="Home_Image_div_wrapper">
                  {/* <div className="Home_Button_Div"id='Get_started_Div'>
                                        <Button id="Home_Button" variant="contained"
                                            onClick={() => { this.context.Navigate("./tutorials/sbs/welcome"); }}>
                                            Get Started
                                        </Button>
                                    </div> */}
                  <div id="Home_Image_div">
                    <img  src={Bone2Image} alt="SBS" id="Home_Image_Bone" />
                  </div>
                </div>
              </Grid>

 
            </Grid>
          </div>
        )}

      </div>
      
    );
  }
}
Guest.contextType = MyContext;
export default Guest;

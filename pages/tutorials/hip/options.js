import React, { Component } from "react";
import { Grid, Button } from "@material-ui/core";
import HipImage from "../../assets/hip_evaluation_home.png";
// import "../Knee/Knee.css";
import MyContext from "../../helper/themeContext";

import Image from 'next/image'


const GetHip_Tutorial_Id = 11;
const XrayAi_Tutorial_Id = 12;
const PatientSurvey_Tutorial_Id = 13;
const SampleHip_Tutorial_Id = 14;
const RCP_Tutorial_Id = 15;
const TestMatching_Tutorial_Id = 16;

class Hip extends Component {
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
            Hip & <span style={{ color: "#b4ec51" }}> Knee </span> Step by Step
            <br />
            <span style={{ fontWeight: "bold", fontSize: "75px" }}>
              {" "} Hip Education {" "}
            </span>
            <div id="Home_Neon_Line"></div>
          </div>

          <Grid container>
            <Grid item xs={12} md={4} lg={4} xl={4}>
              <div className="home-grid-left">
                {/* <div className="home-grid-inside-heading">
                  The Hip Education and evaluation functionality is coming to
                  the Step by Step system soon
                </div> */}
                <div className="Home_Button_Div">
                  <Button
                    id="Home_Button"
                    variant="contained"
                    onClick={() => {
                      this.context.Navigate("/tutorials/hip/hip-arthiritis");
                    }}
                  >
                    {" "}
                    Get Hip About Arthirits{" "}
                  </Button>
                  {/* {this._checkIncomplete(GetHip_Tutorial_Id) ? (
                    <div className="Home_Incomplete_Div">Incomplete</div>
                  ) : (
                    <div className="Home_Complete_Div">Complete</div>
                  )} */}
                </div>

                <div className="Home_Button_Div">
                  <Button
                    id="Home_Button"
                    variant="contained"
                    onClick={() => {
                      this.context.Navigate(
                        "/tutorials/hip/hip-matching-education/welcome"
                      );
                    }}
                  >
                    {" "}
                    X-ray Matching & <br /> Artificial Intelligence
                  </Button>
                  {/* {this._checkIncomplete(XrayAi_Tutorial_Id) ? (
                    <div className="Home_Incomplete_Div">Incomplete</div>
                  ) : (
                    <div className="Home_Complete_Div">Complete</div>
                  )} */}
                </div>

                <div className="Home_Button_Div">
                  <Button
                    id="Home_Button"
                    variant="contained"
                    onClick={() => {
                      this.context.Navigate(
                        "/tutorials/hip/patient-survey"
                      );
                    }}
                  >
                    {" "}
                    Patient Surveys{" "}
                  </Button>
                  {/* {this._checkIncomplete(PatientSurvey_Tutorial_Id) ? (
                    <div className="Home_Incomplete_Div">Incomplete</div>
                  ) : (
                    <div className="Home_Complete_Div">Complete</div>
                  )} */}
                </div>

                <div className="Home_Button_Div">
                  <Button
                    id="Home_Button"
                    variant="contained"
                    onClick={() => {
                      this.context.Navigate(
                        "/tutorials/hip/sample-hip-evaluation"
                      );
                    }}
                  >
                    {" "}
                    Sample Hip Evaluation{" "}
                  </Button>
                  {/* {this._checkIncomplete(SampleHip_Tutorial_Id) ? (
                    <div className="Home_Incomplete_Div">Incomplete</div>
                  ) : (
                    <div className="Home_Complete_Div">Complete</div>
                  )} */}
                </div>

                <div className="Home_Button_Div">
                  <Button
                    id="Home_Button"
                    variant="contained"
                    onClick={() => {
                      this.context.Navigate(
                        "/tutorials/hip/sample-patient-report-and-recommended-care-pathway"
                      );
                    }}
                  >
                    Recommended Care Pathway
                  </Button>
                  {/* {this._checkIncomplete(RCP_Tutorial_Id) ? (
                    <div className="Home_Incomplete_Div">Incomplete</div>
                  ) : (
                    <div className="Home_Complete_Div">Complete</div>
                  )} */}
                </div>
                <div className="Home_Button_Div">
                  <Button
                    id="Home_Button"
                    variant="contained"
                    onClick={() => {
                      this.context.Navigate(
                        "/tutorials/hip/matching-training/welcome"
                      );
                    }}
                  >
                    {" "}
                    Test your X-ray <br /> Matching Skills
                  </Button>
                  {/* {this._checkIncomplete(TestMatching_Tutorial_Id) ? (
                    <div className="Home_Incomplete_Div">Incomplete</div>
                  ) : (
                    <div className="Home_Complete_Div">Complete</div>
                  )} */}
                </div>
                {/* <div className="Home_Button_Div">
                  <Button id="Home_Button" variant="contained" style={{ opacity: "0.5" }} disabled={true}>
                    {" "}
                    Hip Arthritis{" "}
                  </Button>
                </div>

                <div className="Home_Button_Div">
                  <Button id="Home_Button" variant="contained" style={{ opacity: "0.5" }} disabled={true}>
                    {" "}
                    X-ray Matching{" "}
                  </Button>
                </div>

                <div className="Home_Button_Div">
                  <Button id="Home_Button" variant="contained" style={{ opacity: "0.5" }} disabled={true}>
                    {" "}
                    X-ray Matching Training{" "}
                  </Button>
                </div> */}
              </div>
            </Grid>

            {/* <Grid item xs={0} md={2} lg={2} xl={2}></Grid> */}

            <Grid item xs={12} md={7} lg={7} xl={7} className="image-grid">
              <div id="Home_Image_div_wrapper">
                <div id="Home_Image_div_Hip_Evaluation">
                  <img  src={HipImage} alt="SBS" id="Hip_IEvaluation_HipBone" />
                </div>
                <div className="Home_Button_Div">
                  <Button
                    id="Home_Button"
                    variant="contained"
                    style={{ width: "250px" }}
                    onClick={() => {
                      this.context.Navigate("/home");
                    }}
                  >
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
Hip.contextType = MyContext;
export default Hip;

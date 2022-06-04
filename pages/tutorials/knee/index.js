import React, { Component } from "react";
import { Grid, Button } from "@material-ui/core";
import KneeImage from "../../assets/knee_evaluation_home.png";
// import "./Knee.css";
import MyContext from "../../helper/themeContext";
// import { GetKneeEducation_Tutorial_Id, GetRequiredKneeEdu, _checkIncomplete } from "../../StoreFunctions/tutorialStoreFunction";

// const WhatYouKneeKnow_Tutorial_Id = 5;

class Knee extends Component {
  constructor(props) {
    super(props);
    this.state = {}; 
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
                      this.context.Navigate("/tutorials/knee/short-knee");
                    }}>
                    {" "}
                    Required Education{" "}
                  </Button>
                  {/* {
                    _checkIncomplete(GetRequiredKneeEdu(),this.context) ?
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
                      this.context.Navigate("/tutorials/knee/launchpad");
                    }}>
                    {" "}
                    Additional Information and Interactive Testing
                  </Button>
                  {/* {
                    _checkIncomplete(GetKneeEducation_Tutorial_Id(),this.context) ?
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
                  <img src={KneeImage} alt="SBS" id="Knee_Evaluation_KneeBone" />
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

import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../../helper/themeContext";

// import Img1 from "../../../assets/hip/get_hip_about/PA zones.png";
// import Img2 from "../../../assets/hip/get_hip_about/lateral zones.png";

const Img1 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2FAboutHip%2FETMALC%2FPA%20zones.png?alt=media"
const Img2 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2FAboutHip%2FETMALC%2Flateral%20zones.png?alt=media";

class ETMALC extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="ETMALC_Main_Div">
        <div id="ETMALC_Content_Wrapper">
          <div id="ETMALC_Center_Wrapper">
            <div id="ETMALC_Text_wrapper">
              <div id="ETMALC_Heading1_Div">
                Evaluating Zones of the Hip <br />
                in Both AP Pelvis and Lateral Views
              </div>
              <div id="ETMALC_Text_Div">
                Both standing bilateral (meaning both knees) PA
                (Posterior-Anterior) flexion and standing bilateral PA
                non-flexion views are required. Flexion X-rays are taken with
                the knees slightly bent and non-flexion X-rays are taken with
                the knees fully extended.
              </div>
            </div>
            <div id="ETMALC_Image_Wrapper">
              <div id="ETMALC_Images_Headings">
                <div id="ETMALC_Image_Heading">AP Pelvis View</div>
                <div id="ETMALC_Image_Heading">Lateral View</div>
              </div>
              <div id="ETMALC_Image_container">
                <div id="ETMALC_Inner_Image_Container">
                  <img src={Img1} alt="ETMALC1" />
                </div>
                <div id="ETMALC_Inner_Image_Container">
                  <img src={Img2} alt="ETMALC2" />
                </div>
              </div>
            </div>
            <div id="ETMALC_Next_Button_Div">
              <Button
                id="ETMALC_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.Navigate(
                    "./learn-about-the-medial-and-lateral-compartments-of-the-hip"
                  );
                }}
              >
                {" "}
                Back{" "}
              </Button>
              <Button
                id="ETMALC_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.setCookie(
                    "tutorial-" + this.context.state.user_id,
                    13
                  );
                  this.context.Navigate("./lateral-view");
                }}
              >
                {" "}
                Continue{" "}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ETMALC.contextType = MyContext;
export default ETMALC;

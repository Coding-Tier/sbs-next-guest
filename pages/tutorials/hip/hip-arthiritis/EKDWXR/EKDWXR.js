import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../../helper/themeContext";

// import Img1 from "../../../../assets/HipEducationAssets/Wide Joint Space.png";
// import Img2 from "../../../../assets/HipEducationAssets/No Joint Spce.png";

const Img1 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2FAboutHip%2FEHDWXR%2FWide%20Joint%20Space.png?alt=media";
const Img2 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2FAboutHip%2FEHDWXR%2FNo%20Joint%20Spce.png?alt=media";

class EKDWXR extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="VDWXR_Main_Div">
        <div id="VDWXR_Content_Wrapper">
          <div id="VDWXR_Center_Wrapper">
            <div id="VDWXR_Text_wrapper">
              <div id="VDWXR_Heading1_Div">
                Evaluating Hip Degeneration with X-rays
              </div>

              <div id="VDWXR_Text_Div">
                Hips without degeneration have thick and even spaces between the
                bone surfaces. Hips with advanced degeneration have no space at
                all. As you progress through this education module, you will
                learn to classify the degree of narrowing, therefore the degree
                of degeneration, using comparison X-rays for each zone.
              </div>
            </div>
            <div id="VDWXR_Image_Wrapper">
              <div id="VDWXR_Images_Headings">
                <div id="VDWXR_Image_Heading">Wide Joint Space</div>
                <div id="VDWXR_Image_Heading">
                  Little to No Joint Space Remaining
                </div>
              </div>
              <div id="VDWXR_Image_container">
                <div id="VDWXR_Inner_Image_Container">
                  <img src={Img1} alt="VDWXR1" />
                </div>
                <div id="VDWXR_Inner_Image_Container">
                  <img src={Img2} alt="VDWXR2" />
                </div>
              </div>
            </div>
            <div id="VDWXR_Next_Button_Div">
              <Button
                id="VDWXR_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.Navigate("./what-x-rays-would-you-request");
                }}
              >
                {" "}
                Back{" "}
              </Button>
              <Button
                id="VDWXR_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.setCookie(
                    "tutorial-" + this.context.state.user_id,
                    9
                  );
                  this.context.Navigate(
                    "./how-to-identify-joint-space-narrowing-and-degeneration"
                  );
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
EKDWXR.contextType = MyContext;
export default EKDWXR;

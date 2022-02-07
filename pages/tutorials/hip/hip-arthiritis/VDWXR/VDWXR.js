import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../../helper/themeContext";

// import Img1 from "../../../../assets/HipEducationAssets/HealthyHipGroup.png";
// import Img2 from "../../../../assets/HipEducationAssets/DegeneratedHipGroup.png";

const Img1 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2FAboutHip%2FVDWXR%2FHealthyHipGroup.png?alt=media";
const Img2 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2FAboutHip%2FVDWXR%2FDegeneratedHipGroup.png?alt=media";

class VDWXR extends Component {
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
                What Does Degeneration Look Like?
              </div>

              <div id="VDWXR_Text_Div">
                In healthy hips, the joint space is thick and filled with
                cartilage. The width of the space is important as wear and
                degeneration is directly related to the thickness of the joint
                space.
              </div>
            </div>
            <div id="VDWXR_Image_Wrapper">
              <div id="VDWXR_Images_Headings">
                <div id="VDWXR_Image_Heading">Healthy Hip Joint</div>
                <div id="VDWXR_Image_Heading">Osteoarthritis</div>
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
                  this.context.Navigate("./lateral-view");
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
                  this.context.Navigate("./obtaining-the-correct-x-rays");
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
VDWXR.contextType = MyContext;
export default VDWXR;

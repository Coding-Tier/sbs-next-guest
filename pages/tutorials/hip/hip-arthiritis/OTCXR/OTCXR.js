import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../../helper/themeContext";

// import Img1 from "../../../../assets/HipEducationAssets/HealthyHipAnatomy.png";
// import Img2 from "../../../../assets/HipEducationAssets/LateralViewXray.png";

const Img1 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2FAboutHip%2FOTCXR%2FHealthy%20Hip%20Anatomy.png?alt=media";
const Img2 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2FAboutHip%2FOTCXR%2FLateralViewXray.png?alt=media";

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
              <div id="VDWXR_Heading1_Div">Obtaining the Correct X-rays</div>

              <div id="VDWXR_Text_Div">
                Specific X-rays views are required to evaluate the level of
                degeneration in each zone. These X-ray views include a whole
                pelvis from front to back and a "lateral" or side view of the
                hip rotated. The X-ray series below is for a patient complaining
                of right hip pain.
              </div>
            </div>
            <div id="VDWXR_Image_Wrapper">
              <div id="VDWXR_Images_Headings">
                <div id="VDWXR_Image_Heading">AP Pelvis View X-ray</div>
                <div id="VDWXR_Image_Heading">Lateral View</div>
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
                  this.context.Navigate(
                    "./viewing-degeneration-with-x-rays-copy"
                  );
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
                    "./summary-of-x-ray-views-necessary-based-on-patients-symptoms"
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
VDWXR.contextType = MyContext;
export default VDWXR;

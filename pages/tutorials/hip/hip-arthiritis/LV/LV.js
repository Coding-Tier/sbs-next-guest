import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../../helper/themeContext";

// import Img1 from "../../../../assets/HipEducationAssets/AATZ.PNG";

const Img1 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2FAboutHip%2FLV%2FAATZ.PNG?alt=media"

class LV extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="LV_Main_Div">
        <div id="LV_Content_Wrapper">
          <div id="LV_Center_Wrapper">
            <div id="LV_Text_wrapper">
              <div id="LV_Heading1_Div">
                Arthirits and the Clinically Important Zones 1 and 2
              </div>
              <div id="LV_Text_Div">
                Zone 1 and Zone 2 are the primary areas where arthiritis
                develops. Therefore the SBS system will focus on Zone 1 and Zone
                2 when evaluating the level of degeneration in a hip X-ray
              </div>
            </div>
            <div id="LV_Image_Wrapper">
              {/* <div id="LV_Images_Headings">
                <div id="LV_Image_Heading">Right Lateral View</div>
              </div> */}
              <div id="LV_Image_container">
                <div id="LV_Inner_Image_Container">
                  <img src={Img1} alt="LV1" />
                </div>
              </div>
            </div>
            <div id="LV_Next_Button_Div">
              <Button
                id="LV_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.Navigate(
                    "./evaluating-the-medial-and-lateral-compartments-v2"
                  );
                }}
              >
                {" "}
                Back{" "}
              </Button>
              <Button
                id="LV_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.setCookie(
                    "tutorial-" + this.context.state.user_id,
                    15
                  );
                  this.context.Navigate(
                    "./viewing-degeneration-with-x-rays-copy"
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
LV.contextType = MyContext;
export default LV;

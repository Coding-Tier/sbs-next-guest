import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../../helper/themeContext";

// import Img1 from "../../../../assets/HipEducationAssets/Anatomy_Bad.png";
// import Img2 from "../../../assets/KDAA1_2.png";

const Img1 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2FAboutHip%2FKDAA%2FAnatomy_Bad.png?alt=media";
const Img2 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2FAboutHip%2FKDAA%2FKDAA1_2.png?alt=media";

class KDAA extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="KDAA_Main_Div">
        <div id="KDAA_Content_Wrapper">
          <div id="KDAA2_Center_Wrapper">
            <div id="KDAA_Text_wrapper">
              <div id="KDAA_Heading1_Div">Hip Degeneration and Arthritis</div>
              <div id="KDAA_Text_Div">
                Arthritis is degeneration of cartilage within the joint causing
                the joint space to narrow over time. This degeneration of
                cartilage can lead to joint inflammation, stiffness, decreased
                range of motion and pain. No one is too young or too old to
                experience joint degeneration.
              </div>
            </div>
            <div id="KDAA_Image_Wrapper">
              <div id="KDAA_Image_Heading">Degenerated Hip</div>
              <div id="KDAA_Image_container">
                <div id="KDAA_Inner_Image_Container">
                  <img src={Img1} alt="KDAA1" />
                </div>
                <div id="KDAA_Inner_Image_Container">
                  <img src={Img2} alt="KDAA2" />
                </div>
              </div>
            </div>
            <div id="KDAA_Next_Button_Div">
              <Button
                id="KDAA_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.Navigate(
                    "./hip-degeneration-and-arthritis-2"
                  );
                }}
              >
                {" "}
                Back{" "}
              </Button>
              <Button
                id="KDAA_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.setCookie(
                    "tutorial-" + this.context.state.user_id,
                    7
                  );
                  this.context.Navigate("./compartments-of-the-hip");
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
KDAA.contextType = MyContext;
export default KDAA;

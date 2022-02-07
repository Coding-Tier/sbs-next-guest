import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../../helper/themeContext";

// import Img1 from "../../../../assets/HipEducationAssets/Anatomy_Good.png";
// import Img2 from "../../../assets/KDAA2_2.png";

const Img1 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2FAboutHip%2FHDAA2%2FAnatomy_Good.png?alt=media";
const Img2 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2FAboutHip%2FHDAA2%2FKDAA2_2.png?alt=media";

class KDAA2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="KDAA2_Main_Div">
        <div id="KDAA2_Content_Wrapper">
          <div id="KDAA2_Center_Wrapper">
            <div id="KDAA2_Text_wrapper">
              <div id="KDAA2_Heading1_Div">Hip Degeneration and Arthritis</div>
              <div id="KDAA2_Text_Div">
                Healthy hips have cartilage that act as shock absorbers and
                permit the hip's ball and socket to move smoothly and without
                pain. Like tread on a tire, cartilage in the hip can wear,
                eventually causing bone to rub on bone.
              </div>
            </div>
            <div id="KDAA2_Image_Wrapper">
              <div id="KDAA2_Image_Heading">Healthy Hip</div>
              <div id="KDAA2_Image_container">
                <div id="KDAA2_Inner_Image_Container">
                  <img src={Img1} alt="KDAA21" />
                </div>
                <div id="KDAA2_Inner_Image_Container">
                  <img src={Img2} alt="KDAA22" />
                </div>
              </div>
            </div>
            <div id="KDAA2_Next_Button_Div">
              <Button
                id="KDAA2_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.Navigate("./overview");
                }}
              >
                {" "}
                Back{" "}
              </Button>
              <Button
                id="KDAA2_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.setCookie(
                    "tutorial-" + this.context.state.user_id,
                    6
                  );
                  this.context.Navigate("./hip-degeneration-and-arthritis");
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
KDAA2.contextType = MyContext;
export default KDAA2;

import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import CheckIcon from "@material-ui/icons/Check";

import MyContext from "../../../../helper/themeContext";
// import Img1 from "../../../../assets/HipEducationAssets/AP Pelvis.png";
// import Img2 from "../../../../assets/HipEducationAssets/Right Lateral.png";
// import Img3 from "../../../../assets/HipEducationAssets/Left Lateral.png";
// import tick from "../../../assets/SOXRVNBOPS7.png";
// import cross from "../../../assets/WXRWYR7.png";

// import Bulb from "../../../assets/bulbimage.png";


import "./WXRWYR.css";


const Img1 ="https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2FAboutHip%2FWXRWYR%2FAP%20Pelvis.png?alt=media";
const Img2 ="https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2FAboutHip%2FWXRWYR%2FRight%20Lateral.png?alt=media";
const Img3 ="https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2FAboutHip%2FWXRWYR%2FLeft%20Lateral.png?alt=media";

const tick = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2FAboutHip%2Ftick_white.png?alt=media";
const cross = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2FAboutHip%2Fcross_white.png?alt=media";
const Bulb = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2FAboutHip%2Fbulbimage.png?alt=media"



class WXRWYR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      IMG1: "white",
      IMG2: "white",
      IMG3: "white",
      IMG4: "white",
      IMG5: "white",
      IMG6: "white",
      disableBtn: true,
    };
  }

  clickHandler = (x, c) => {
    this.setState({
      [x]: c,
    });
  };
  render() {
    return (
      <div id="WXRWYR_Main_Div">
        <div id="WXRWYR_Content_Wrapper">
          <div id="WXRWYR_Center_Wrapper">
            <div id="WXRWYR_Text_wrapper">
              <div id="WXRWYR_Heading1_Div">What X-rays Would You Request?</div>
              <div className="gradient_div">
                <img
                  src={Bulb}
                  alt="Bulb"
                  style={{ width: "40px", height: "40px", margin: "5px" }}
                />
                <span className="test_span">Test Your Knowledge</span>
              </div>
              <div id="WXRWYR_Text_Div">
                A 70-year-old patient states that she has left hip pain. Which
                X-ray views are needed to evaluate this patient for joint
                degeneration?{" "}
                <strong style={{ color: "white" }}>
                  Click on all boxes that apply.
                </strong>
              </div>
            </div>
            <div id="WXRWYR_Image_Wrapper">
              <div id="WXRWYR_Images_col">
                <div id="WXRWYR_Images_row">
                  <div id="WXRWYR_Inner_Image_Container">
                    <div id="WXRWYR_Image_heading">AP Pelvis</div>
                    <div
                      id="WXRWYR_Helper_Div"
                      onClick={() => this.clickHandler("IMG1", "green")}
                    >
                      {/* <div
                        id="WXRWYR_Image_box"
                        style={{ backgroundColor: this.state.IMG1 }}
                      >
                        <img src={tick} alt="tick" id="WXRWYR_tick" />
                      </div> */}
                      <div id="WXRWYR_Image">
                        <img src={Img1} alt="WXRWYR1" />
                      </div>
                    </div>
                    <div
                      className="WXRWYR_Image_box"
                      style={{
                        backgroundColor: this.state.IMG1,
                        cursor: "pointer",
                      }}
                      onClick={() => this.clickHandler("IMG1", "green")}
                    >
                      <img src={tick} alt="tick" id="WXRWYR_tick" />
                    </div>
                  </div>
                </div>
                {/* <div id="WXRWYR_Images_row">
                  <div id="WXRWYR_Inner_Image_Container">
                    <div id="WXRWYR_Image_heading">Right Lateral</div>
                    <div
                      id="WXRWYR_Helper_Div"
                      onClick={() => this.clickHandler("IMG4", "green")}
                    >
                      <div
                        id="WXRWYR_Image_box"
                        style={{ backgroundColor: this.state.IMG4 }}
                      >
                        <img src={tick} alt="tick" id="WXRWYR_tick" />
                      </div>
                      <div id="WXRWYR_Image">
                        <img src={Img4} alt="WXRWYR1" />
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
              <div id="WXRWYR_Images_col">
                <div id="WXRWYR_Images_row">
                  <div id="WXRWYR_Inner_Image_Container">
                    <div id="WXRWYR_Image_heading">Right Lateral</div>
                    <div
                      id="WXRWYR_Helper_Div"
                      onClick={() => this.clickHandler("IMG2", "red")}
                    >
                      <div id="WXRWYR_Image">
                        <img src={Img2} alt="WXRWYR1" />
                      </div>
                    </div>
                    <div
                      className="WXRWYR_Image_box"
                      style={{
                        backgroundColor: this.state.IMG2,
                        cursor: "pointer",
                      }}
                      onClick={() => this.clickHandler("IMG2", "red")}
                    >
                      <img src={cross} alt="tick" id="WXRWYR_tick" />
                    </div>
                  </div>
                </div>
                {/* <div id="WXRWYR_Images_row">
                  <div id="WXRWYR_Inner_Image_Container">
                    <div id="WXRWYR_Image_heading">Left Kneecap View</div>
                    <div
                      id="WXRWYR_Helper_Div"
                      onClick={() => this.clickHandler("IMG5", "green")}
                    >
                      <div
                        id="WXRWYR_Image_box"
                        style={{ backgroundColor: this.state.IMG5 }}
                      >
                        <img src={tick} alt="tick" id="WXRWYR_tick" />
                      </div>
                      <div id="WXRWYR_Image">
                        <img src={Img5} alt="WXRWYR1" />
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
              <div id="WXRWYR_Images_col">
                <div id="WXRWYR_Images_row">
                  <div id="WXRWYR_Inner_Image_Container">
                    <div id="WXRWYR_Image_heading">Left Lateral</div>
                    <div
                      id="WXRWYR_Helper_Div"
                      onClick={() => this.clickHandler("IMG3", "green")}
                    >
                      <div id="WXRWYR_Image">
                        <img src={Img3} alt="WXRWYR1" />
                      </div>
                    </div>
                    <div
                      className="WXRWYR_Image_box"
                      style={{
                        backgroundColor: this.state.IMG3,
                        cursor: "pointer",
                      }}
                      onClick={() => this.clickHandler("IMG3", "green")}
                    >
                      <img src={tick} alt="tick" id="WXRWYR_tick" />
                    </div>
                  </div>
                </div>
                {/* <div id="WXRWYR_Images_row">
                  <div id="WXRWYR_Inner_Image_Container">
                    <div id="WXRWYR_Image_heading">Left Lateral View</div>
                    <div
                      id="WXRWYR_Helper_Div"
                      onClick={() => this.clickHandler("IMG6", "green")}
                    >
                      <div
                        id="WXRWYR_Image_box"
                        style={{ backgroundColor: this.state.IMG6 }}
                      >
                        <img src={tick} alt="tick" id="WXRWYR_tick" />
                      </div>
                      <div id="WXRWYR_Image">
                        <img id="WXRWYR_Exception" src={Img6} alt="WXRWYR1" />
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

            <div id="WXRWYR_Next_Button_Div">
              <Button
                id="WXRWYR_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.history.push(
                    "./summary-of-x-ray-views-necessary-based-on-patients-symptoms"
                  );
                }}
              >
                {" "}
                Back{" "}
              </Button>

              {this.state.IMG1 === "green" && this.state.IMG3 === "green" && (
                // &&
                // this.state.IMG5 === "green" &&
                // this.state.IMG6 === "green" &&
                <div className="tutorial-Complete-Box">
                  <div className="tutorial-Complete-Box-tick">
                    <CheckIcon fontSize={"large"} />
                  </div>
                  Complete !
                </div>
              )}

              <Button
                id="WXRWYR_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.setCookie(
                    "tutorial-" + this.context.state.user_id,
                    18
                  );
                  this.context.history.push(
                    "./evaluating-hip-degeneration-with-x-rays"
                  );
                }}
                disabled={
                  this.state.IMG1 === "green" && this.state.IMG3 === "green"
                    ? //   &&
                      // this.state.IMG5 === "green" &&
                      // this.state.IMG6 === "green"
                      false
                    : true
                }
                style={
                  this.state.IMG1 === "green" && this.state.IMG3 === "green"
                    ? //   &&
                      // this.state.IMG5 === "green" &&
                      // this.state.IMG6 === "green"
                      { opacity: 1 }
                    : { opacity: 0.5 }
                }
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
WXRWYR.contextType = MyContext;
export default WXRWYR;

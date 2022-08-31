import React, { Component } from 'react';

import Button from "@material-ui/core/Button";
import CheckIcon from "@material-ui/icons/Check";

import MyContext from "../../../../helper/themeContext";


const NextPage = "/tutorials/hip/short-hip/EHAWX";
const BackPage = "/tutorials/hip/short-hip/LATTZOTH";


// const Img1 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2FShortHipEdu%2FLATTZOTHX%2F1.png?alt=media";
// const Img2 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2FShortHipEdu%2FLATTZOTHX%2F2.png?alt=media";
// const Img3 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2FShortHipEdu%2FLATTZOTHX%2F3.png?alt=media";
// const Img4 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2FShortHipEdu%2FLATTZOTHX%2F4.png?alt=media";
// const Bulb = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2FAboutHip%2Fbulbimage.png?alt=media"
import Img1 from "../../../../assets/shortHipEdu/LATTZOTHX/1.png";
import Img2 from "../../../../assets/shortHipEdu/LATTZOTHX/2.png";
import Img3 from "../../../../assets/shortHipEdu/LATTZOTHX/3.png";
import Img4 from "../../../../assets/shortHipEdu/LATTZOTHX/4.png";
import Bulb from "../../../../assets/shortHipEdu/bulbimage.png";

class LATTZOTHX extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kneeState: 0,
    };
  }

  handleClick = (num) => {
    let c = this.state.kneeState;
    if (this.state.kneeState === num - 1) {
      c = c + 1;
      this.setState({ kneeState: c });
    }
  };

  render() {
    let imageSource;
    this.state.kneeState === 0
      ? (imageSource = Img1)
      : this.state.kneeState === 1
      ? (imageSource = Img2)
      : this.state.kneeState === 2
      ? (imageSource = Img3)
      : (imageSource = Img4);
    return (
      <div id="LATMALCOTKITX_Main_Div">
        <div id="LATMALCOTKITX_Content_Wrapper">
          <div id="LATMALCOTKITX_Center_Wrapper">
            <div id="LATMALCOTKITX_Text_wrapper">
              <div id="LATMALCOTKITX_Heading1_Div">
                Learn about the Three Zones of the Hip
              </div>
              <div className="gradient_div">
                <img
                  src={Bulb}
                  alt="Bulb"
                  style={{ width: "40px", height: "40px", margin: "5px" }}
                />
                <span className="test_span">Test Your Knowledge</span>
              </div>
              <div id="LATMALCOTKITX_Text_Div">
                Click on the compartment name that matches the highlighted
                compartment.
              </div>
            </div>
            <div id="LATMALCOTKITX_Buttons_wrapper">
              <div id="LATMALCOTKITX_Pair_Buttons_wrapper">
                <Button
                  id="LATMALCOTKITX_Button"
                  variant="contained"
                  onClick={() => this.handleClick(2)}
                  style={
                    this.state.kneeState === 2 || this.state.kneeState > 2
                      ? { display: "none" }
                      : null
                  }
                >
                  Zone 1
                </Button>
                <Button
                  id="LATMALCOTKITX_Button"
                  variant="contained"
                  onClick={() => this.handleClick(3)}
                  style={
                    this.state.kneeState === 3 || this.state.kneeState > 3
                      ? { display: "none" }
                      : null
                  }
                >
                  Zone 2
                </Button>
                <Button
                  id="LATMALCOTKITX_Button"
                  variant="contained"
                  onClick={() => this.handleClick(1)}
                  style={
                    this.state.kneeState === 1 || this.state.kneeState > 1
                      ? { display: "none" }
                      : null
                  }
                >
                  Zone 3
                </Button>
                {/* <Button
                  id="LATMALCOTKITX_Button"
                  variant="contained"
                  onClick={() => this.handleClick(4)}
                  style={
                    this.state.kneeState === 4 || this.state.kneeState > 4
                      ? { display: "none" }
                      : null
                  }
                >
                  Zone 4
                </Button> */}
              </div>
              {/* <div id="LATMALCOTKITX_Pair_Buttons_wrapper">
                <Button
                  id="LATMALCOTKITX_Button"
                  variant="contained"
                  onClick={() => this.handleClick(3)}
                  style={
                    this.state.kneeState === 3 || this.state.kneeState > 3
                      ? { display: "none" }
                      : null
                  }
                >
                  Zone 3
                </Button>
                <Button
                  id="LATMALCOTKITX_Button"
                  variant="contained"
                  onClick={() => this.handleClick(4)}
                  style={
                    this.state.kneeState === 4 || this.state.kneeState > 4
                      ? { display: "none" }
                      : null
                  }
                >
                  Left Lateral
                </Button>
              </div> */}
            </div>
            <div id="LATMALCOTKITX_Image_Wrapper">
              <div id="LATMALCOTKITX_Image_Container">
                <div id="KDAA_Image_Heading">Right Hip</div>
                <img src={imageSource} alt="LATMALCOTKITX" />
              </div>
            </div>
            <div id="LATMALCOTKITX_Next_Button_Div">
              <Button
                id="LATMALCOTKITX_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.Navigate(BackPage);
                }}
              >
                {" "}
                Back{" "}
              </Button>

              {this.state.kneeState === 3 && (
                <div className="tutorial-Complete-Box">
                  <div className="tutorial-Complete-Box-tick">
                    <CheckIcon fontSize={"large"} />
                  </div>
                  Complete !
                </div>
              )}
              <Button
                id="LATMALCOTKITX_Next_Button"
                variant="contained"
                disabled={this.state.kneeState === 3 ? false : true}
                onClick={() => {
                  this.context.setCookie(
                    "tutorial-" + this.context.state.user_id,
                    10
                  );
                  this.context.Navigate(
                    NextPage
                  );
                }}
                style={
                  this.state.kneeState === 3 ? { opacity: 1 } : { opacity: 0.5 }
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
LATTZOTHX.contextType = MyContext;
export default LATTZOTHX;
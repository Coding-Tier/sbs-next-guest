import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import CheckIcon from "@material-ui/icons/Check";
import MyContext from "../../../../helper/themeContext";

// import "./JSNLC.css";

// import Img1 from "../../../../assets/HipEducationAssets/1_AP_Normal_Z2.png";
// import Img4 from "../../../../assets/HipEducationAssets/2_AP_Moderate_Z2.png";
// import Img3 from "../../../../assets/HipEducationAssets/3_AP_NES_Z2.png";
// import Img2 from "../../../../assets/HipEducationAssets/4_AP_ES_Z2.png";
// import Img5 from "../../../assets/LOJSND2.png";



const Img1 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2FShortHipEdu%2FJSNAPPZ2%2F1.png?alt=media";
const Img2 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2FShortHipEdu%2FJSNAPPZ2%2F2.png?alt=media";
const Img3 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2FShortHipEdu%2FJSNAPPZ2%2F3.png?alt=media";
const Img4 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2FShortHipEdu%2FJSNAPPZ2%2F4.png?alt=media";
const Img5 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2FShortHipEdu%2FJSNAPPZ2%2F5.png?alt=media";
const Bulb = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2FAboutHip%2Fbulbimage.png?alt=media"

const NextPage = "/tutorials/hip/short-hip/CXE";
const BackPage = "/tutorials/hip/short-hip/JSNAPPZ1";


class JSNAPPZ2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickState: 0,
      orangeState: 1,
    };
  }

  clickHandle = (val) => {
    let orangestate = this.state.orangeState;
    let clickstate = this.state.clickState;
    if (val - 1 === this.state.clickState) {
      this.setState({
        orangeState: orangestate + 1,
        clickState: clickstate + 1,
      });
    }
  };

  render() {
    return (
      <div id="JSNLC_Main_Div">
        <div id="JSNLC_Content_Wrapper">
          <div id="JSNLC_Center_Wrapper">
            <div id="JSNLC_Text_wrapper">
              <div id="JSNLC_Heading1_Div">
                Joint Space Narrowing - AP Pelvis - Zone 2
              </div>
              <div className="gradient_div">
                <img
                  src={Bulb}
                  alt="Bulb"
                  style={{ width: "40px", height: "40px", margin: "5px" }}
                />
                <span className="test_span">Test Your Knowledge</span>
              </div>
              <div id="JSNLC_Text_Div">
                Starting with the zone with the least degeneration, put the
                X-rays in order of severity of degeneration seen in Zone 2.
              </div>
            </div>
            <div id="JSNLC_Image_Wrapper">
              <div id="JSNLC_Grid_Container">
                <div id="JSNLC_Row_Container">
                  <div
                    id="JSNLC_box_Container"
                    onClick={() => this.clickHandle(1)}
                    style={{
                      opacity: this.state.orangeState > 1 ? 0.5 : 1,
                      height: "10.47vw",
                      verticalAlign: "top",
                    }}
                  >
                    <img
                      src={Img1}
                      alt="JSNLC1"
                      style={
                        this.state.orangeState === 1 ||
                        this.state.orangeState < 1
                          ? { display: "block" }
                          : { display: "none" }
                      }
                    />
                  </div>
                  <div
                    id="JSNLC_box_Container"
                    onClick={() => this.clickHandle(4)}
                    style={
                      this.state.orangeState > 4
                        ? { opacity: 0.5 }
                        : { opacity: 1 }
                    }
                  >
                    <img
                      src={Img2}
                      alt="JSNLC1"
                      style={
                        this.state.orangeState === 4 ||
                        this.state.orangeState < 4
                          ? { display: "block" }
                          : { display: "none" }
                      }
                    />
                  </div>
                  <div
                    id="JSNLC_box_Container"
                    onClick={() => this.clickHandle(3)}
                    style={
                      this.state.orangeState > 3
                        ? { opacity: 0.5 }
                        : { opacity: 1 }
                    }
                  >
                    <img
                      src={Img3}
                      alt="JSNLC1"
                      style={
                        this.state.orangeState === 3 ||
                        this.state.orangeState < 3
                          ? { display: "block" }
                          : { display: "none" }
                      }
                    />
                  </div>
                  <div
                    id="JSNLC_box_Container"
                    onClick={() => this.clickHandle(2)}
                    style={
                      this.state.orangeState > 2
                        ? { opacity: 0.5 }
                        : { opacity: 1 }
                    }
                  >
                    <img
                      src={Img4}
                      alt="JSNLC1"
                      style={
                        this.state.orangeState === 2 ||
                        this.state.orangeState < 2
                          ? { display: "block" }
                          : { display: "none" }
                      }
                    />
                  </div>
                </div>
                <div id="JSNLC_Row_Container">
                  <div id="JSNLC_box_Container">
                    {this.state.orangeState === 1 ? (
                      <div style={{ display: "flex" }}>
                        Click on the X-ray with Normal/Slight degeneration
                      </div>
                    ) : this.state.orangeState > 1 ? (
                      <img src={Img1} alt="JSNMC1" />
                    ) : (
                      <div
                        className={`JSNMC_Secondary_Image_Block ${
                          this.state.orangeState < 1 && "JSNMC_DispalyNone"
                        }`}
                      ></div>
                    )}
                  </div>
                  <div id="JSNLC_box_Container">
                    {this.state.orangeState === 2 ? (
                      <div style={{ display: "flex" }}>
                        Click on the X-ray with Moderate degeneration
                      </div>
                    ) : this.state.orangeState > 2 ? (
                      <img src={Img4} alt="JSNLC1" />
                    ) : (
                      <div
                        className={`JSNMC_Secondary_Image_Block ${
                          this.state.orangeState < 2 && "JSNMC_DispalyNone"
                        }`}
                      ></div>
                    )}
                  </div>
                  <div id="JSNLC_box_Container">
                    {this.state.orangeState === 3 ? (
                      <div style={{ display: "flex" }}>
                        Click on the X-ray with Near End Stage degeneration
                      </div>
                    ) : this.state.orangeState > 3 ? (
                      <img src={Img3} alt="JSNlC1" />
                    ) : (
                      <div
                        className={`JSNMC_Secondary_Image_Block ${
                          this.state.orangeState < 3 && "JSNMC_DispalyNone"
                        }`}
                      ></div>
                    )}
                  </div>
                  <div id="JSNLC_box_Container">
                    {this.state.orangeState === 4 ? (
                      <div style={{ display: "flex" }}>
                        Click on the X-ray with End Stage degeneration
                      </div>
                    ) : this.state.orangeState > 4 ? (
                      <img src={Img2} alt="JSNLC1" />
                    ) : (
                      <div
                        className={`JSNMC_Secondary_Image_Block ${
                          this.state.orangeState < 4 && "JSNMC_DispalyNone"
                        }`}
                      ></div>
                    )}
                  </div>
                </div>
              </div>
              <div id="JSNLC_Inner_Image_Container">
                <img src={Img5} alt="JSNLC1" />
              </div>
              <div id="JSNLC_Inner_Image_text">
                <div>Thickest Joint Space</div>
                <div>Decreasing Joint Space</div>
                <div>Least Joint Space</div>
              </div>
            </div>
            <div id="JSNLC_Next_Button_Div">
              <Button
                id="JSNLC_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.Navigate(
                    BackPage
                  );
                }}
              >
                {" "}
                back{" "}
              </Button>

              {this.state.clickState >= 4 && (
                <div className="tutorial-Complete-Box">
                  <div className="tutorial-Complete-Box-tick">
                    <CheckIcon fontSize={"large"} />
                  </div>
                  Complete !
                </div>
              )}

              {/* {this.state.clickState >= 4 ? <div className='complete_div'>
                <Check fontSize='large' coloe='white' />
                <span > Complete</span>
              </div> : null} */}
              <Button
                id="JSNLC_Next_Button"
                variant="contained"
                disabled={this.state.clickState < 4 ? true : false}
                style={
                  this.state.clickState < 4 ? { opacity: 0.5 } : { opacity: 1 }
                }
                onClick={() => {
                  this.context.setCookie(
                    "tutorial-" + this.context.state.user_id,
                    25
                  );
                  this.context.Navigate(
                   NextPage
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
JSNAPPZ2.contextType = MyContext;
export default JSNAPPZ2;

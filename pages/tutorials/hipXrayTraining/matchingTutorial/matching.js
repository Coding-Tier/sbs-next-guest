import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import MyContext from "../../../helper/themeContext";
import NoMatching from "../../../assets/no_matching.png";
import Ruler from "../../../assets/ruler.png";

// // AP PELVIS ZONE 1
// import MF1 from "../../assets/hip/xray_train/1 Train-AP_Normal_Z1.png";
// import MF2 from "../../assets/hip/xray_train/2 Train-AP_NES_Z1.png";
// import MF3 from "../../assets/hip/xray_train/3 Train-AP_Moderate_Z1.png";
// import MF4 from "../../assets/hip/xray_train/4 Train-AP_End Stage_Z1.png";

// // AP PELVIS ZONE 2
// import MNF1 from "../../assets/hip/xray_train/1 Train-AP_Moderate_Z2.png";
// import MNF2 from "../../assets/hip/xray_train/2 Train-AP_End Stage_Z2.png";
// import MNF3 from "../../assets/hip/xray_train/3 Train-AP_NES_Z2.png";
// import MNF4 from "../../assets/hip/xray_train/4 Train-AP_Normal_Z2.png";

// // LATERAL ZONE 1
// import LF1 from "../../assets/hip/xray_train/1 Train-Lateral_End Stage_Z1.png";
// import LF2 from "../../assets/hip/xray_train/2 Train-Lateral_Normal_Z1.png";
// import LF3 from "../../assets/hip/xray_train/3 Train-Lateral_NES_Z1.png";
// import LF4 from "../../assets/hip/xray_train/4 Train-Lateral_Moderate_Z1.png";

// // LATERAL ZONE 2
// import LNF1 from "../../assets/hip/xray_train/1 Train-Lateral_NES_Z2.png";
// import LNF2 from "../../assets/hip/xray_train/2 Train-Lateral_Normal_Z2.png";
// import LNF3 from "../../assets/hip/xray_train/3 Train-Lateral_Moderate_Z2.png";
// import LNF4 from "../../assets/hip/xray_train/4 Train-Lateral_End Stage_Z2.png";



import KV1 from "../../assets/xray-training-kneecap-view1.png";
import KV2 from "../../assets/xray-training-kneecap-view2.png";
import KV3 from "../../assets/xray-training-kneecap-view3.png";
import KV4 from "../../assets/xray-training-kneecap-view4.png";

import ProgressBarIni from "../../assets/progress_bar_ini.png";
import ProgressBar from "../../assets/progress_bar.png";
import ProgressBar0 from "../../assets/progress_bar0.png";
import ProgressBar1 from "../../assets/progress_bar1.png";
import ProgressBar2 from "../../assets/progress_bar2.png";
import ProgressBar3 from "../../assets/progress_bar3.png";
import ProgressBar4 from "../../assets/progress_bar4.png";
import ProgressBar5 from "../../assets/progress_bar5.png";

import "./matching.css";


// AP PELVIS ZONE 1
const MF1 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2Fhip-matching-training%2FAP%20PELVIS%2FZONE%201%2F1%20Train-AP_Z1.png?alt=media";
const MF2 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2Fhip-matching-training%2FAP%20PELVIS%2FZONE%201%2F2%20Train-AP_Z1.png?alt=media";
const MF3 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2Fhip-matching-training%2FAP%20PELVIS%2FZONE%201%2F3%20Train-AP_Z1.png?alt=media";
const MF4 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2Fhip-matching-training%2FAP%20PELVIS%2FZONE%201%2F4%20Train-AP_Z1.png?alt=media";

// AP PELVIS ZONE 2
const MNF1 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2Fhip-matching-training%2FAP%20PELVIS%2FZONE%202%2F1%20Train-AP_Z2.png?alt=media";
const MNF2 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2Fhip-matching-training%2FAP%20PELVIS%2FZONE%202%2F2%20Train-AP_Z2.png?alt=media";
const MNF3 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2Fhip-matching-training%2FAP%20PELVIS%2FZONE%202%2F3%20Train-AP_Z2.png?alt=media";
const MNF4 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2Fhip-matching-training%2FAP%20PELVIS%2FZONE%202%2F4%20Train-AP_Z2.png?alt=media";

// LATERAL ZONE 1
const LF1 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2Fhip-matching-training%2FLATERAL%2FZONE%201%2F1%20Train-Lateral_Z1.png?alt=media";
const LF2 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2Fhip-matching-training%2FLATERAL%2FZONE%201%2F2%20Train-Lateral_Z1.png?alt=media";
const LF3 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2Fhip-matching-training%2FLATERAL%2FZONE%201%2F3%20Train-Lateral_Z1.png?alt=media";
const LF4 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2Fhip-matching-training%2FLATERAL%2FZONE%201%2F4%20Train-Lateral_Z1.png?alt=media";

// LATERAL ZONE 2
const LNF1 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2Fhip-matching-training%2FLATERAL%2FZONE%202%2F1%20Train-Lateral_Z2.png?alt=media";
const LNF2 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2Fhip-matching-training%2FLATERAL%2FZONE%202%2F2%20Train-Lateral_Z2.png?alt=media";
const LNF3 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2Fhip-matching-training%2FLATERAL%2FZONE%202%2F3%20Train-Lateral_Z2.png?alt=media";
const LNF4 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2Fhip-matching-training%2FLATERAL%2FZONE%202%2F4%20Train-Lateral_Z2.png?alt=media";

const answers = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2Fhip-matching-training%2Fanswers.txt?alt=media"

let MedialFlex = [
  { imageUrl: MF1, answer: "1" },
  { imageUrl: MF2, answer: "3" },
  { imageUrl: MF3, answer: "2" },
  { imageUrl: MF4, answer: "4" },
];
let MedialNonFlex = [
  { imageUrl: MNF1, answer: "2" },
  { imageUrl: MNF2, answer: "4" },
  { imageUrl: MNF3, answer: "3" },
  { imageUrl: MNF4, answer: "1" },
];
let LateralFlex = [
  { imageUrl: LF1, answer: "4" },
  { imageUrl: LF2, answer: "1" },
  { imageUrl: LF3, answer: "3" },
  { imageUrl: LF4, answer: "2" },
];
let LateralNonFlex = [
  { imageUrl: LNF1, answer: "3" },
  { imageUrl: LNF2, answer: "1" },
  { imageUrl: LNF3, answer: "2" },
  { imageUrl: LNF4, answer: "4" },
];
let KneecapView = [
  { imageUrl: KV1, answer: "4" },
  { imageUrl: KV2, answer: "1" },
  { imageUrl: KV3, answer: "3" },
  { imageUrl: KV4, answer: "2" },
];

class Matching extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Active: null,
      Notes: null,
      error: false,
      next: false,
      Xrays: [],
      loading: true,
      training: 0,
    };
  }

  UNSAFE_componentWillMount() {

    fetch(answers)
    .then(response => response.text())
    .then(data => {
      // Do something with your data

     
      data = data.replace(/\s\s+/g,'')
      data  = JSON.parse(data);
      console.log(data)
      console.log(data["AP-PELVIS-Z1"]["1"])

      MedialFlex = [
        { imageUrl: MF1, answer: data["AP-PELVIS-Z1"]["1"] },
        { imageUrl: MF2, answer: data["AP-PELVIS-Z1"]["2"] },
        { imageUrl: MF3, answer: data["AP-PELVIS-Z1"]["3"] },
        { imageUrl: MF4, answer: data["AP-PELVIS-Z1"]["4"] },
      ];
      MedialNonFlex = [
        { imageUrl: MNF1, answer: data["AP-PELVIS-Z2"]["1"] },
        { imageUrl: MNF2, answer: data["AP-PELVIS-Z2"]["2"] },
        { imageUrl: MNF3, answer: data["AP-PELVIS-Z2"]["3"] },
        { imageUrl: MNF4, answer: data["AP-PELVIS-Z2"]["4"] },
      ];
      LateralFlex = [
        { imageUrl: LF1, answer: data["LATERAL-Z1"]["1"] },
        { imageUrl: LF2, answer: data["LATERAL-Z1"]["2"] },
        { imageUrl: LF3, answer: data["LATERAL-Z1"]["3"] },
        { imageUrl: LF4, answer: data["LATERAL-Z1"]["4"] },
      ];
      LateralNonFlex = [
        { imageUrl: LNF1, answer: data["LATERAL-Z2"]["1"] },
        { imageUrl: LNF2, answer: data["LATERAL-Z2"]["2"] },
        { imageUrl: LNF3, answer: data["LATERAL-Z2"]["3"] },
        { imageUrl: LNF4, answer: data["LATERAL-Z2"]["4"] },
      ];
      this.initializeData();
    })
    .catch((e)=>
    {
      this.initializeData();
    });
    // console.log(this.props.ActiveType + "" + this.props.ActiveXray);
    
  }


  initializeData = () =>
  {
    if (this.props.ActiveType + this.props.ActiveXray == "AP PelvisZone 1") {
      this.setState({ Xrays: MedialFlex, training: 0, loading: false });
    } else if (
      this.props.ActiveType + this.props.ActiveXray ==
      "AP PelvisZone 2"
    ) {
      this.setState({ Xrays: MedialNonFlex, training: 0, loading: false });
    } else if (
      this.props.ActiveType + this.props.ActiveXray ==
      "Lateral ViewZone 1"
    ) {
      this.setState({ Xrays: LateralFlex, training: 0, loading: false });
    } else if (
      this.props.ActiveType + this.props.ActiveXray ==
      "Lateral ViewZone 2"
    ) {
      this.setState({ Xrays: LateralNonFlex, training: 0, loading: false });
    } else if (
      this.props.ActiveType + this.props.ActiveXray ==
      "KneecapKneecap"
    ) {
      this.setState({ Xrays: KneecapView, training: 0, loading: false });
    }
  }

  handleClick = (id) => {
    if (this.state.next == false) {
      this.setState({ Active: id, error: false });
      console.log(id);
    }
  };
  handleConfirmClick = () => {
    if (this.state.Active) {
      if (this.state.next == false) {
        if (this.state.Active != this.state.Xrays[this.state.training]?.answer) {
          this.setState({ error: true });
        } else if (
          this.state.Active == this.state.Xrays[this.state.training]?.answer
        ) {
          this.setState({ error: false, next: true });
        }
      } else {
        if (this.state.training == 3) {
          this.props.handleClick(this.state.Active, this.state.Notes);
        } else
          this.setState({
            training: this.state.training + 1,
            error: false,
            next: false,
            Active: null,
            Notes: null,
          });
      }
    }
  };
  render() {
    return (
      <div>
        <div id="Evaluaion_XrayMatching_Matching_Content1_Wrapper">
          <div id="Evaluaion_XrayMatching_Matching_Heading1_Div">
            X-Ray Matching
          </div>
          <div id="Evaluaion_XrayMatching_Matching_Heading2_Div">
            Click on the levels of degeneration to view X-rays from the
            database. Once you believe you have found a match, click "Confirm
            Evaluation" to move onto the next view.
          </div>
          {[
            { name: "Normal to Slight", id: "1" },
            { name: "Moderate", id: "2" },
            { name: "Near End Stage", id: "3" },
            { name: "End Stage", id: "4" },
          ].map((text, id) => (
            <div
              className="Evaluaion_XrayMatching_Matching_State_Button_Div"
              key={id}
            >
              <Button
                className="Evaluaion_XrayMatching_Matching_State_Button"
                style={{
                  background:
                    this.state.Active === text.id
                      ? this.state.error == true
                        ? "#C50000"
                        : "#fffb00"
                      : "hsla(0, 0%, 100%, 0.08)",
                }}
                variant="contained"
                onClick={() => this.handleClick(text.id)}
              >
                {" "}
                <span
                  style={{
                    color:
                      this.state.Active === text.id
                        ? this.state.error == true
                          ? "#ffffff"
                          : "#000000"
                        : "#ffffff",
                  }}
                >
                  {" "}
                  {text.name}{" "}
                </span>{" "}
              </Button>
            </div>
          ))}
          <div style={{ display: "block", width: "100%", marginTop: "40px" }}>
            {this.state.next == true ? (
              <div className="Tutorial_XrayMatching_Matching_Correct_Div">
                Correct answer
              </div>
            ) : null}
            {this.state.error == false ? (
              <div className="Evaluaion_XrayMatching_Matching_Confirm_Button_Div">
                <Button
                  className="Evaluaion_XrayMatching_Matching_Confirm_Button"
                  disabled={!this.state.Active}
                  variant="contained"
                  onClick={this.handleConfirmClick}
                >
                  {" "}
                  {this.state.next == false
                    ? "Confirm Evaluation"
                    : "Next Evaluation"}{" "}
                </Button>
              </div>
            ) : (
              <div className="Tutorial_XrayMatching_Matching_Error_Div">
                Incorrect. Please Try Again.
              </div>
            )}

            {/* {
                            this.state.Active &&
                            <div className="Evaluaion_XrayMatching_Matching_AddNotes_Button_Div">
                                <Button className="Evaluaion_XrayMatching_Matching_AddNotes_Button" variant="contained" onClick={this.handleNotesClick}> Add Notes </Button>
                            </div>
                        } */}
          </div>
        </div>
        <div id="Evaluaion_XrayMatching_Matching_Content2_Wrapper">
          <div id="Evaluaion_XrayMatching_Matching_Heading3_Div">
            RIGHT HIP -{" "}
            {this.props.ActiveType == "Kneecap" ? (
              "KNEECAP"
            ) : (
              <span>
                {" "}
                {this.props.ActiveType.toUpperCase()} <br />{" "}
                <span> {this.props.ActiveXray.toUpperCase()} </span>{" "}
              </span>
            )}
          </div>

          <div className="Evaluaion_XrayMatching_Matching_Xray_Image_Wrapper">
            <img
              className="Evaluaion_XrayMatching_Matching_Xray_Image"
              src={this.state.Xrays[this.state.training]?.imageUrl}
              style={{ height: "35vh" }}
              alt="x-ray"
            />
            <div className="Evaluaion_XrayMatching_Matching_Image_Label1">
              YOUR PATIENT
            </div>
          </div>
          {this.state.Active != null ? (
            <div className="Evaluaion_XrayMatching_Matching_Xray_Image_Wrapper">
              <img
                className="Evaluaion_XrayMatching_Matching_Xray_Image"
                src={
                  this.props.eval.Xrays[this.props.ActiveTypeIndex].xrays[
                    this.props.ActiveXrayIndex
                  ][`up${this.state.Active}`]
                }
                alt="x-ray"
                style={{ height: "35vh" }}
              />
              <img
                style={{ position: "absolute", right: "0px" }}
                src={Ruler}
                alt="img"
              />
            </div>
          ) : (
            <div className="matching-down">
              <img
                className="Evaluaion_XrayMatching_Matching_Xray_Image"
                src={NoMatching}
                alt="img"
                style={{ height: "35vh" }}
              />
              <div className="Evaluaion_XrayMatching_Matching_Image_Label2">
                COMPARISION X-RAYS
              </div>
            </div>
          )}
        </div>

        <div id="Evaluaion_XrayMatching_Matching_Content3_Wrapper">
          <img
            src={
              this.state.training == 0
                ? this.state.next == false
                  ? ProgressBarIni
                  : ProgressBar
                : this.state.training == 1
                ? this.state.next == false
                  ? ProgressBar0
                  : ProgressBar1
                : this.state.training == 2
                ? this.state.next == false
                  ? ProgressBar2
                  : ProgressBar3
                : this.state.training == 3
                ? this.state.next == false
                  ? ProgressBar4
                  : ProgressBar5
                : null
            }
            width="auto"
            style={{
              maxHeight: "calc(100vh - 40px)",
              maxWidth: "32px",
              height: "auto",
              width: "auto",
            }}
            alt="img"
          />
        </div>
      </div>
    );
  }
}
Matching.contextType = MyContext;
export default Matching;

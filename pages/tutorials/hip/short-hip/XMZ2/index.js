import React, { Component } from 'react';

import Button from "@material-ui/core/Button";

import MyContext from "../../../../helper/themeContext";
import Modal from "@material-ui/core/Modal";

import NoMatching from "../../../../assets/no_matching.png";
import NotesIcon from "../../../../assets/notes.png";

import MNFV from "../../../../assets/eval-comp-xrays/thumb/Right AP Z2.png";
// import MNFVUP from "../../../../assets/hip/xray_ai/Asset6APZ2.png";
import CEimage from "../../../../assets/eval-comp-xrays/cannotEval.jpg";

// import "./matching.css";

const NextPage = "/tutorials/hip/short-hip/Sample-hip-eval"




//AP PELVIS ZONE2

const MNFVUP1 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2FShortHipEdu%2FXMZ2%2F1.png?alt=media";
const MNFVUP2 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2FShortHipEdu%2FXMZ2%2F2.png?alt=media";
const MNFVUP3 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2FShortHipEdu%2FXMZ2%2F3.png?alt=media";
const MNFVUP4 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2FShortHipEdu%2FXMZ2%2F4.png?alt=media";

const MNFVUP = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2FShortHipEdu%2FXMZ2%2F5.png?alt=media"  //patient-xray


// const MNFVUP1 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2Fcomparision_images_global%2FAP_Normal_Z2.png?alt=media";
// const MNFVUP2 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2Fcomparision_images_global%2FAP_Moderate_Z2.png?alt=media";
// const MNFVUP3 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2Fcomparision_images_global%2FAP_NES_Z2.png?alt=media";
// const MNFVUP4 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2Fcomparision_images_global%2FAP_ES_Z2.png?alt=media";


const xray = 
    {
      name: "Right Zone 1",
      id: 1,
      image: null,
      isDone: false,
      enable: true,
      state: null,
      state_id: null,
      notes: null,
      thumbnail: MNFV,
      up: MNFVUP,
      up1: MNFVUP1,
      up2: MNFVUP2,
      up3: MNFVUP3,
      up4: MNFVUP4,
      up5: CEimage,
      prediction: "moderate",
      answer:"2"
    };

class XMZ2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Active: null,
      Notes: "",
      error: false,
      next: false,
      openModal: false,
      textIndent: "0px",
      Aiprediction: 5,
    };
  }

  componentDidMount() {
  }

  handleClick = (id) => {
    if (this.state.next == false) {
      this.setState({ Active: id, error: false });
    }
  };
  handleConfirmClick = () => {
    if (this.state.Active) {
      if (this.state.next == false) {
        if (this.state.Active != xray?.answer) {
          this.setState({ error: true });
        } else if (
          this.state.Active == xray?.answer
        ) {
          this.setState({ error: false, next: true });
        }
      }
      else {
        this.context.Navigate(NextPage)
      }
    }
  };

  handleModalClose = () => {
    this.setState({ openModal: false });
  };
  handleModalOpen = () => {
    this.setState({ openModal: true, tempNotes: this.state.Notes });
  };

  handleModalClose1 = () => {
    this.setState({ openModal1: false });
  };
  handleModalOpen1 = () => {
    this.setState({ openModal1: true, tempNotes1: this.state.Notes1 });
  };

  textAreaChange1 = (e) => {
    this.setState({ tempNotes1: e.target.value });
  };

  handleConfirmFromModal = () => {
    this.setState({ Notes1: this.state.tempNotes1, openModal1: false });
    if (this.state.Active) {
      let addonNotes = "";
      if (this.state.Active.toString() === "5") {
        if (this.state.tempNotes1) {
          addonNotes = "Cannot Eval: " + this.state.tempNotes1;
        } else addonNotes = "Cannot Eval: No Notes";
      } else if (
        this.state.Active.toString() !== this.state.Aiprediction.toString()
      ) {
        if (this.state.tempNotes1) {
          addonNotes = "Change Eval: " + this.state.tempNotes1;
        } else addonNotes = "Change Eval: No Notes";
      }
      this.props.handleClick(this.state.Active, this.state.Notes + addonNotes);
    }
  };

  Submit = () => {
    this.setState({ Notes: this.state.tempNotes, openModal: false });
  };

  textAreaChange = (e) => {
    this.setState({ tempNotes: e.target.value });
  };

  render() {
    return (
        <div id="Evaluaion_XrayMatching_Intro_Main_Div">

            <div>
                <div id="Evaluaion_XrayMatching_Matching_Content1_Wrapper">
                <div id="Evaluaion_XrayMatching_Matching_Heading1_Div">
                    X-Ray Matching
                </div>
                <div id="Evaluaion_XrayMatching_Matching_Heading2_Div">
                    Click on the levels of degeneration to view X-rays from the database. Once you believe you have found a match, click "Confirm Evaluation" to move onto the next view.

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
                    {/* {this.state.Aiprediction.toString() === text.id ? (
                        <div className="Evaluaion_XrayMatching_Matching_State_Button_Prediction_Box">
                        <span> AI Result </span>
                        </div>
                    ) : null} */}
                    <Button
                        className="Evaluaion_XrayMatching_Matching_State_Button"
                        style={{
                        border:
                            text.id.toString() === this.state.Aiprediction.toString()
                            ? "4px orange solid"
                            : "1px hsla(0, 0%, 100%, 0.34) solid",
                        color:
                            this.state.Active === text.id.toString()
                            ? text.id.toString() === "5"
                                ? "white"
                                : ""
                            : "#fff",
                        background:
                            this.state.Active === text.id.toString()
                            ? text.id.toString() === "5"
                                ? "red"
                                : "#fffb00"
                            : "hsla(0, 0%, 100%, 0.08)",
                        }}
                        variant="contained"
                        onClick={() => this.handleClick(text.id)}
                    >
                        {" "}
                        {text.name}{" "}
                    </Button>
                    </div>
                ))}


                <div style={{ display: "block", width: "100%" }}>
                    {
                        this.state.next==true?<div className="Tutorial_XrayMatching_Matching_Correct_Div">
                            Correct answer
                        </div>:null
                    }
                
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

                    {/* {this.state.Active && (
                    <div className="Evaluaion_XrayMatching_Matching_AddNotes_Button_Div">
                        <Button
                        className="Evaluaion_XrayMatching_Matching_AddNotes_Button"
                        variant="contained"
                        onClick={this.handleModalOpen}
                        >
                        {" "}
                        Add Notes{" "}
                        <img
                            style={{ marginLeft: "15px" }}
                            alt="Notes"
                            src={NotesIcon}
                        />
                        </Button>
                    </div>
                    )} */}
                </div>
                </div>
                <div id="Evaluaion_XrayMatching_Matching_Content2_Wrapper">
                <div id="Evaluaion_XrayMatching_Matching_Heading3_Div">
                    RIGHT HIP -{" "}
                
                    <span>
                        AP PELVIS <br />{" "}
                        <span> ZONE 2 </span>{" "}
                    </span>
                
                </div>

                <div className="Evaluaion_XrayMatching_Matching_Xray_Image_Wrapper">
                    {/* <img className="Evaluaion_XrayMatching_Matching_Xray_Image" src={this.props.eval.Xrays[this.props.ActiveTypeIndex].xrays[this.props.ActiveXrayIndex].up}/>
                                <div className="Evaluaion_XrayMatching_Matching_Image_Label1">
                                    YOUR PATIENT
                                </div> */}

                    <img alt="Patient Xray" className="Evaluaion_XrayMatching_Matching_Xray_Image" src={xray.up}/>

                    {/* <div
                    className="Evaluaion_XrayMatching_Matching_Xray_Image_Cropper"
                    style={{
                        background: `url(${
                        this.props.eval.Xrays[this.props.ActiveTypeIndex].xrays[this.props.ActiveXrayIndex].up
                        })`,
                        maxHeight: "35vh",
                    }}
                    >
                    </div> */}
                
                    <div className="Evaluaion_XrayMatching_Matching_View_FullXray_Button_Div">
                    <Button
                        id="Evaluaion_XrayMatching_Matching_View_FullXray_Button"
                        variant="contained"
                        onClick={this.fullXrayModalOpen}
                    >
                        {" "}
                        View Full Xray{" "}
                    </Button>
                    </div>
                    <div className="Evaluaion_XrayMatching_Matching_Image_Label1">
                    Patient's X-ray
                    </div>
                </div>
                {this.state.Active != null ? (
                    // <div className="Evaluaion_XrayMatching_Matching_Xray_Image_Wrapper" >
                    //     <img className="Evaluaion_XrayMatching_Matching_Xray_Image" src={this.props.eval.Xrays[this.props.ActiveTypeIndex].xrays[this.props.ActiveXrayIndex][`up${this.state.Active}`] }/>
                    // </div>
                    <div
                    className={`Evaluaion_XrayMatching_Matching_Xray_Image_Wrapper`}
                    >

                    <img
                        alt="Comparing Xray"
                        className="Evaluaion_XrayMatching_Matching_Xray_Image_Compairing"
                        src={
                        xray[`up${this.state.Active}`]
                        }
                    />
                    <div className="Evaluaion_XrayMatching_Matching_Image_Label3">
                        Comparison X-ray
                    </div>
                    </div>
                ) : (
                    <div className="matching-down">
                    <img
                        className="Evaluaion_XrayMatching_Matching_Xray_Image"
                        src={NoMatching}
                    />
                    <div className="Evaluaion_XrayMatching_Matching_Image_Label2">
                        COMPARISION X-RAYS
                    </div>
                    </div>
                )}
                </div>
                {/* <Modal
                open={this.state.openModal}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                style={{
                    position: "absolute",
                    left: "calc(50vw - 250px)",
                    top: "calc(50vh - 250px)",
                }}
                >
                <div className="Evaluaion_XrayMatching_Matching_Modal_Div">
                    <div className="Evaluaion_XrayMatching_Matching_Modal_Heading">
                    Notes
                    </div>
                    <div className="Evaluaion_XrayMatching_Matching_Modal_Notes_Div">
                    <div className="Evaluaion_XrayMatching_Matching_Modal_Notes_Heading">
                        {"RIGHT " +
                        (this.props.ActiveXray === "Flexion View"
                            ? "Flexion " + this.props.ActiveType + " : "
                            : this.props.ActiveXray === "Non-Flexion View"
                            ? "Non-Flexion " + this.props.ActiveType + " : "
                            : "Kneecap : ")}
                    </div>

                    <textarea
                        className="Evaluaion_XrayMatching_Matching_Modal_Notes_TextArea"
                        style={{ textIndent: this.state.textIndent }}
                        value={this.state.tempNotes}
                        onChange={this.textAreaChange}
                    ></textarea>
                    </div>
                    <div style={{ marginTop: "20px", marginLeft: "50px" }}>
                    <div className="Evaluaion_XrayMatching_Matching_Modal1_Button_Div">
                        <Button
                        className="Evaluaion_XrayMatching_Matching_AddNotes_Button"
                        variant="contained"
                        onClick={this.Submit}
                        >
                        {" "}
                        Submit{" "}
                        </Button>
                    </div>
                    <div className="Evaluaion_XrayMatching_Matching_Modal2_Button_Div">
                        <Button
                        className="Evaluaion_XrayMatching_Matching_Modal2_Button"
                        variant="outlined"
                        onClick={this.handleModalClose}
                        >
                        {" "}
                        Cancel{" "}
                        </Button>
                    </div>
                    </div>
                </div>
                </Modal>

                <Modal
                open={this.state.openModal1}
                aria-labelledby="confirm-modal-title"
                aria-describedby="confirm-modal-description"
                style={{
                    position: "absolute",
                    left: "calc(50vw - 250px)",
                    top: "calc(50vh - 250px)",
                }}
                >
                <div className="Evaluaion_XrayMatching_Matching_Modal_Div1">
                    <div className="Evaluaion_XrayMatching_Matching_Modal_Heading1">
                    {this.state.Active
                        ? this.state.Active.toString() === "5"
                        ? "Cannot Evaluate"
                        : this.state.Aiprediction.toString() !==
                            this.state.Active.toString()
                        ? "Evaluation Change"
                        : null
                        : null}
                    </div>

                    <div className="Evaluaion_XrayMatching_Matching_Modal_Description">
                    {this.state.Active
                        ? this.state.Active.toString() === "5"
                        ? "Why are you unable to evaluate this compartment"
                        : this.state.Aiprediction.toString() !==
                            this.state.Active.toString()
                        ? "Are you sure you want to update evaluation"
                        : null
                        : null}
                    </div>

                    <div className="Evaluaion_XrayMatching_Matching_Modal_Sub_Head">
                    Notes
                    </div>

                    <div className="Evaluaion_XrayMatching_Matching_Modal_Notes_Div">
                    <div className="Evaluaion_XrayMatching_Matching_Modal_Notes_Heading">
                        {this.state.Active
                        ? this.state.Active.toString() === "5"
                            ? "Cannot Eval: "
                            : this.state.Aiprediction.toString() !==
                            this.state.Active.toString()
                            ? "Eval Change: "
                            : null
                        : null}
                    </div>
                    <textarea
                        style={{
                        textIndent: this.state.Active
                            ? this.state.Active.toString() === "5"
                            ? "105px"
                            : "112px"
                            : "",
                        }}
                        className="Evaluaion_XrayMatching_Matching_Modal_Notes_TextArea"
                        value={this.state.tempNotes1}
                        onChange={this.textAreaChange1}
                    ></textarea>
                    </div>
                    <div style={{ marginTop: "20px", marginLeft: "50px" }}>
                    <div className="Evaluaion_XrayMatching_Matching_Modal1_Button_Div">
                        <Button
                        className="Evaluaion_XrayMatching_Matching_AddNotes_Button"
                        variant="contained"
                        onClick={this.handleConfirmFromModal}
                        >
                        {" "}
                        Submit{" "}
                        </Button>
                    </div>
                    <div className="Evaluaion_XrayMatching_Matching_Modal2_Button_Div">
                        <Button
                        className="Evaluaion_XrayMatching_Matching_Modal2_Button"
                        variant="outlined"
                        onClick={this.handleModalClose1}
                        >
                        {" "}
                        Cancel{" "}
                        </Button>
                    </div>
                    </div>
                </div>
                </Modal> */}
            </div>
        </div>

    );
  }
}
XMZ2.contextType = MyContext;
export default XMZ2;

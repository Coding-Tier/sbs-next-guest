import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";

import MyContext from "../../../../helper/themeContext";

import boxBg from "../../../../assets/boxbg3.png";

import Tick from "../../../../assets/tick-black.png";
import Search from "../../../../assets/search.png";
import Notes from "../../../../assets/notes.png";

// import html2canvas from 'html2canvas'
// import './report.css'
import ImageViewModalWithZoom from "../../../../components/ImageViewModal/ImageViewModalWithZoom";

import Image from 'next/image'

const height = "60px";

class ShowReport extends Component {
  constructor(props) {
    super(props);
    this.state = { Evaluation: {}, modal: false, total: 0, openModal: false };
  }

  UNSAFE_componentWillMount() {
    let Evaluation = this.props.Evaluation;
    this.setState({ Evaluation });
  }
  handleSelect(
    Type,
    Xray,
    State,
    Image,
    Aiprediction,
    MatchingXray,
    roi_updated,
    roi_updated_url
  ) {
    console.log(this.props);
    let JointName = this.state.Evaluation.name;
    this.props.handleState(
      State,
      Type,
      Xray,
      Image,
      Aiprediction,
      JointName,
      MatchingXray,
      roi_updated,
      roi_updated_url
    );
    this.props.handleView("Selected");
  }

  handleModalClose = () => {
    this.setState({ openModal: false });
  };

  handleModalOpen = () => {
    this.setState({ openModal: true });
  };

  modalClose = () => {
    this.setState({ modal: false });
  };
  handleSearchClick = (Xray) => {
    this.setState({ ActiveImage: Xray, modal: true });
  };

  handleNotesClick = (id) => {
    let notes = "";
    let Joint = "Right ";

    if (id.toString() === "7") {
      notes = Joint + "Flexion " + "Medial : ";
      notes =
        notes +
        this.state.Evaluation.Xrays.find((x) => x.name === "Medial").xrays.find(
          (y) => y.name === "Flexion View"
        ).notes;
      notes = notes + "\n";

      notes = notes + Joint + "Flexion " + "Lateral : ";
      notes =
        notes +
        " " +
        this.state.Evaluation.Xrays.find(
          (x) => x.name === "Lateral"
        ).xrays.find((y) => y.name === "Flexion View").notes;
    } else if (id.toString() === "1") {
      notes = Joint + "Non-Flexion " + "Medial : ";
      notes =
        notes +
        this.state.Evaluation.Xrays.find((x) => x.name === "Medial").xrays.find(
          (y) => y.name === "Non-Flexion View"
        ).notes;
      notes = notes + "\n";

      notes = notes + Joint + "Non-Flexion " + "Lateral : ";
      notes =
        notes +
        " " +
        this.state.Evaluation.Xrays.find(
          (x) => x.name === "Lateral"
        ).xrays.find((y) => y.name === "Non-Flexion View").notes;
    } else if (
      id.toString() === "6" ||
      id.toString() === "2" ||
      id.toString() === "4"
    ) {
      notes = Joint + "Kneecap : ";
      notes =
        notes +
        this.state.Evaluation.Xrays.find(
          (x) => x.name === "Kneecap"
        ).xrays.find((y) => y.name === "Kneecap").notes;
    }
    console.log(notes);

    this.setState({ Notes: notes, openModal: true });
  };

  handleNextClick = () => {
    // this.context.setCookie("tutorial-" + this.context.state.user_id,38);
    this.context.Navigate("/tutorials/knee/matching-education/completed");
  };

  render() {
    return (
      <div id="Evaluaion_Report_Main_Div">
        <div id="Evaluaion_Report_Content_Wrapper">
          <div id="ReportMainDiv">
            <Grid container>
              <Grid
                container
                item
                xs={12}
                spacing={0}
                style={{ height: "80px" }}
              >
                <React.Fragment>
                  <Grid item xs={8}>
                    <span className="Evaluaion_Report_Box_Text1">
                      {"Joint Evaluation: "}
                    </span>
                    <span className="Evaluaion_Report_Box_Text2">
                      Right Knee
                    </span>
                  </Grid>
                  <Grid container item xs={4}>
                    <React.Fragment>
                      <Grid item xs={9}>
                        <span className="Evaluaion_Report_Box_Priority">
                          Joint Priority:
                        </span>
                      </Grid>
                      <Grid item xs={3}>
                        <span className="Evaluaion_Report_Box_Priority_Box">
                          1
                        </span>
                      </Grid>
                    </React.Fragment>
                  </Grid>
                </React.Fragment>
              </Grid>

              <Grid
                container
                item
                xs={6}
                spacing={0}
                style={{ height: "100px" }}
              >
                {/* <React.Fragment>
                          
                                  <Grid item xs={12}>
                                      <span className="Evaluaion_Report_Box_Text3">
                                          X-ray Evaluations: {this.context.state.patient.date} <br/>
                                          Date X-ray Taken: {this.context.state.patient.date} 
                                      </span>
                                  </Grid>
                              </React.Fragment> */}
              </Grid>
              <Grid
                container
                item
                xs={6}
                spacing={0}
                style={{ height: "100px" }}
              >
                <React.Fragment>
                  <Grid item xs={3}>
                    <div
                      style={{
                        width: "2px",
                        height: "100px",
                        background: "white",
                        transform:
                          "rotate(45deg) translateY(-15px) translateX(35px)",
                      }}
                    ></div>
                    <div className="Evaluaion_Report_Box_Text4">
                      Normal/Slight
                    </div>
                  </Grid>
                  <Grid item xs={3}>
                    <div
                      style={{
                        width: "2px",
                        height: "100px",
                        background: "white",
                        transform:
                          "rotate(45deg) translateY(-15px) translateX(35px)",
                      }}
                    ></div>
                    <div className="Evaluaion_Report_Box_Text4">Moderate</div>
                  </Grid>
                  <Grid item xs={3}>
                    <div
                      style={{
                        width: "2px",
                        height: "100px",
                        background: "white",
                        transform:
                          "rotate(45deg) translateY(-15px) translateX(35px)",
                      }}
                    ></div>
                    <div className="Evaluaion_Report_Box_Text4">
                      Near End Stage
                    </div>
                  </Grid>
                  <Grid item xs={3}>
                    <div
                      style={{
                        width: "2px",
                        height: "100px",
                        background: "white",
                        transform:
                          "rotate(45deg) translateY(-15px) translateX(35px)",
                      }}
                    ></div>
                    <div className="Evaluaion_Report_Box_Text4">End Stage</div>
                  </Grid>
                </React.Fragment>
              </Grid>
              {this.state.Evaluation.Xrays.map((type, id) => (
                <Grid container item xs={12} key={id}>
                  <Grid
                    container
                    item
                    xs={3}
                    spacing={0}
                    style={{
                      border: "1px solid #fff",
                      height: `calc((${type.xrays.length} * ${height}) - (2px * ${type.xrays.length}))`,
                    }}
                  >
                    <React.Fragment>
                      <Grid item xs={12} style={{ height: "100%" }}>
                        <div className="Evaluaion_Report_Box_Text5">
                          {type.name} <br />{" "}
                          {type.name !== "Kneecap" && "Compartment"}
                        </div>
                      </Grid>
                    </React.Fragment>
                  </Grid>
                  <Grid container item xs={9} spacing={0}>
                    {type.xrays.map((xray, id) => (
                      <React.Fragment key={id}>
                        <Grid
                          item
                          xs={4}
                          style={{
                            position: "relative",
                            border: "1px solid #fff",
                            height: `calc(${height} - 2px)`,
                          }}
                        >
                          <div className="Evaluaion_Report_Box_Button_Div">
                            {/* <Button
                              className="Evaluaion_Report_Box_Button"
                              variant="contained"
                              onClick={() =>
                                this.handleSelect(
                                  type.name,
                                  xray.name,
                                  xray.state,
                                  xray.image,
                                  xray.prediction,
                                  xray[`up${xray.state}`],
                                  xray.roi_updated,
                                  xray.roi_updated_url
                                )
                              }
                            >
                              {" "}
                              {xray.name}{" "}
                            </Button> */}
                            <span className="Evaluaion_Report_Box_Text" > {xray.name} </span>
                          </div>
                        </Grid>

                        {xray.state.toString() === "5" ? (
                          <Grid
                            item
                            xs={8}
                            style={{
                              border: "1px solid #fff",
                              height: `calc(${height} - 2px)`,
                              background: "#A7A9AC",
                            }}
                          >
                            <div className="Evaluaion_Report_Box_Selected_Box">
                              {" "}
                              Cannot Evaluate{" "}
                            </div>
                          </Grid>
                        ) : (
                          <React.Fragment>
                            <Grid
                              item
                              xs={2}
                              style={{
                                border: "1px solid #fff",
                                height: `calc(${height} - 2px)`,
                                background:
                                  xray.state.toString() === "1"
                                    ? "#6C8D31"
                                    : "",
                              }}
                            >
                              <div
                                className="Evaluaion_Report_Box_Selected_Box"
                                style={{
                                  background:
                                    xray.state.toString() !== "1" &&
                                    xray.prediction === "normal"
                                      ? `url(${boxBg})`
                                      : "",
                                }}
                              >
                                {" "}
                                {xray.state.toString() === "1" ? (
                                  <img  src={Tick} alt="Ticked" />
                                ) : xray.prediction === "normal" ? (
                                  <span className="Evaluaion_Report_Box_Selected_Box_Eval_Change">
                                    {" "}
                                  </span>
                                ) : null}{" "}
                              </div>
                            </Grid>
                            <Grid
                              item
                              xs={2}
                              style={{
                                border: "1px solid #fff",
                                height: `calc(${height} - 2px)`,
                                background:
                                  xray.state.toString() === "2" ? "yellow" : "",
                              }}
                            >
                              <div
                                className="Evaluaion_Report_Box_Selected_Box"
                                style={{
                                  background:
                                    xray.state.toString() !== "2" &&
                                    xray.prediction === "moderate"
                                      ? `url(${boxBg})`
                                      : "",
                                }}
                              >
                                {" "}
                                {xray.state.toString() === "2" ? (
                                  <img  src={Tick} alt="Ticked" />
                                ) : xray.prediction === "moderate" ? (
                                  <span className="Evaluaion_Report_Box_Selected_Box_Eval_Change">
                                    {" "}
                                  </span>
                                ) : null}{" "}
                              </div>
                            </Grid>
                            <Grid
                              item
                              xs={2}
                              style={{
                                border: "1px solid #fff",
                                height: `calc(${height} - 2px)`,
                                background:
                                  xray.state.toString() === "3"
                                    ? "#fa9e2d"
                                    : "",
                              }}
                            >
                              <div
                                className="Evaluaion_Report_Box_Selected_Box"
                                style={{
                                  background:
                                    xray.state.toString() !== "3" &&
                                    xray.prediction === "nearendstage"
                                      ? `url(${boxBg})`
                                      : "",
                                }}
                              >
                                {" "}
                                {xray.state.toString() === "3" ? (
                                  <img  src={Tick} alt="Ticked" />
                                ) : xray.prediction === "nearendstage" ? (
                                  <span className="Evaluaion_Report_Box_Selected_Box_Eval_Change">
                                    {" "}
                                  </span>
                                ) : null}{" "}
                              </div>
                            </Grid>
                            <Grid
                              item
                              xs={2}
                              style={{
                                border: "1px solid #fff",
                                height: `calc(${height} - 2px)`,
                                background:
                                  xray.state.toString() === "4"
                                    ? "#C50000"
                                    : "",
                              }}
                            >
                              <div
                                className="Evaluaion_Report_Box_Selected_Box"
                                style={{
                                  background:
                                    xray.state.toString() !== "4" &&
                                    xray.prediction === "endstage"
                                      ? `url(${boxBg})`
                                      : "",
                                }}
                              >
                                {" "}
                                {xray.state.toString() === "4" ? (
                                  <img  src={Tick} alt="Ticked" />
                                ) : xray.prediction === "endstage" ? (
                                  <span className="Evaluaion_Report_Box_Selected_Box_Eval_Change">
                                    {" "}
                                  </span>
                                ) : null}{" "}
                              </div>
                            </Grid>
                          </React.Fragment>
                        )}
                      </React.Fragment>
                    ))}
                  </Grid>
                </Grid>
              ))}
            </Grid>

            <div style={{ paddingTop: "10px" }}>
              <imgViewModalWithZoom
                modalState={this.state.modal}
                modalClose={this.modalClose}
                ActiveImage={this.state.ActiveImage}
              />
              {this.context.state.MatchingXrays.filter(
                (i) => i.id === 7 || i.id === 1 || i.id === 2 || i.id === 3
              ).map((xray) => (
                <div
                  style={{
                    display: "inline-block",
                    padding: "0px 10px 0px 0px",
                    position: "relative",
                    maxWidth: "25%",
                  }}
                >
                  <img 
                    src={xray.thumbnail}
                    alt="Xray"
                    style={{
                      maxHeight: "125px",
                      height: "auto",
                      width: "auto",
                    }}
                  />
                  <div
                    className="Evaluaion_Report_Box_Search_Box"
                    onClick={() => {
                      this.handleSearchClick(xray.thumbnail);
                    }}
                  >
                    <img  src={Search} alt="Search" style={{ width: "20px" }} />
                  </div>
                  {xray.id.toString() === "3" ||
                  xray.id.toString() === "5" ? null : (
                    <div
                      className="Evaluaion_Report_Box_Notes_Box"
                      onClick={() => {
                        this.handleNotesClick(xray.id);
                      }}
                    >
                      <img  src={Notes} alt="Notes" style={{ width: "20px" }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div id="Evaluaion_Report_Next_Button_Div">
          {/* <Button id="Evaluaion_Report_Next_Button" variant="contained" onClick={this.handleNextClick}> {this.state.total>1?'Next Report':'View Report Summary'}  </Button> */}
          <Button
            id="Evaluaion_Report_Next_Button"
            variant="contained"
            onClick={this.handleNextClick}
          >
            {/* {this.state.total>1?'Next Report':'Next'} */}
            Next
          </Button>
        </div>
        <Modal
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
              <textarea
                className="Evaluaion_XrayMatching_Matching_Modal_Notes_TextArea"
                value={this.state.Notes}
              ></textarea>
            </div>
            <div style={{ marginTop: "20px", marginLeft: "50px" }}>
              <div className="Evaluaion_XrayMatching_Matching_Modal2_Button_Div">
                <Button
                  className="Evaluaion_XrayMatching_Matching_Modal2_Button"
                  variant="outlined"
                  onClick={this.handleModalClose}
                >
                  {" "}
                  Close{" "}
                </Button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
ShowReport.contextType = MyContext;
export default ShowReport;

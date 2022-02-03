import React, { Component } from 'react';
import { SemipolarLoading } from "react-loadingg";
import { Grid, Button } from "@material-ui/core";
import Bone2Image from "../assets/bone1_Bitmap.png";
import MyContext from '../helper/themeContext';

class Guest extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() {
    
        return (
          <div id="Home_Main_Div">
            {this.state.loading === true ? (
              <SemipolarLoading size={"large"} color={"#b4ec51"} />
            ) : (
              <div id="Home_Content1_Wrapper">
                <div id="Home_Heading1_Div">
                  Welcome to <br />
                  <span style={{ color: "#b4ec51", fontWeight: "bold" }}>
                    Hip
                  </span>{" "}
                  &
                  <span style={{ color: "#b4ec51", fontWeight: "bold" }}>
                    {" "}
                    Knee{" "}
                  </span>{" "}
                  Step by Step
                  {/* <div id="Home_Neon_Line"></div> */}
                </div>
                <div className="Home_Button_Div"></div>
    
                <Grid container>
                  <Grid item xs={12} md={5} lg={4} xl={4}>
                    <div className="home-grid-left">
                      <div className="home-grid-inside-heading">
                        Step by Step Education
                      </div>
    
                      <div className="Home_Button_Div">
                        <Button
                          id="Home_Button"
                          variant="contained"
                          onClick={() => {
                            this.context.history.push("./tutorials/sbs/welcome");
                          }}
                        >
                          Get Started
                        </Button>
                        {/* {this._checkIncomplete(1) ? (
                          <div className="Home_Incomplete_Div">Incomplete</div>
                        ) : (
                          <div className="Home_Complete_Div">Complete</div>
                        )} */}
                      </div>
    
                      <div className="Home_Button_Div">
                        <Button
                          id="Home_Button"
                          variant="contained"
                          onClick={() => {
                            this.context.history.push("./tutorials/knee/options");
                          }}
                        >
                          {" "}
                          Knee Education{" "}
                        </Button>
                        {/* {this._checkIncomplete(2) ? (
                          <div className="Home_Incomplete_Div">Incomplete</div>
                        ) : (
                          <div className="Home_Complete_Div">Complete</div>
                        )} */}
                      </div>
    
                      <div className="Home_Button_Div">
                        <Button
                          id="Home_Button"
                          variant="contained"
                          onClick={() => {
                            this.context.history.push("./tutorials/hip/options");
                          }}
                        >
                          {" "}
                          Hip Education{" "}
                        </Button>
                        {/* {this._checkIncomplete(3) ? (
                          <div className="Home_Incomplete_Div">Incomplete</div>
                        ) : (
                          <div className="Home_Complete_Div">Complete</div>
                        )} */}
                      </div>
    
                      <div className="Home_Button_Div">
                        <Button
                          id="Home_Button"
                          variant="contained"
                          onClick={() => {
                            this.context.history.push(
                              "/tutorials/automatic-xray-evaluation"
                            );
                          }}
                        >
                          {" "}
                          Automatic X-ray Evaluation{" "}
                        </Button>
                        {/* {this._checkIncomplete(4) ? (
                          <div className="Home_Incomplete_Div">Incomplete</div>
                        ) : (
                          <div className="Home_Complete_Div">Complete</div>
                        )} */}
                      </div>
                    </div>
                  </Grid>
    
                  <Grid item xs={12} md={4} lg={4} xl={4}>
                    <div id="Home_Image_div_wrapper">
                      {/* <div className="Home_Button_Div"id='Get_started_Div'>
                                            <Button id="Home_Button" variant="contained"
                                                onClick={() => { this.context.history.push("./tutorials/sbs/welcome"); }}>
                                                Get Started
                                            </Button>
                                        </div> */}
                      <div id="Home_Image_div">
                        <img src={Bone2Image} alt="SBS" id="Home_Image_Bone" />
                      </div>
                    </div>
                  </Grid>
    
                  {/* <Grid item xs={12} md={4} lg={4} xl={4}>
                    <div className="home-grid-left">
                      <div className="home-grid-inside-heading">
                        Patient Evaluations
                      </div>
                      <div className="Home_Button_Div">
                        <Button
                          id="Home_Button"
                          variant="contained"
                          style={{
                            opacity: EvaButtonOpacityClass,
                            cursor: EvaButtonCursorClass,
                          }}
                          disabled={!this._checkEvaluationUser()}
                          onClick={this.startEvaluation}
                        >
                          {" "}
                          New Evaluation{" "}
                        </Button>
                      </div>
    
                      <div className="Home_Button_Div">
                        <Button
                          id="Home_Button"
                          variant="contained"
                          disabled={resumeEvalDisable}
                          style={{ opacity: resumeEvalOpacityClass }}
                          onClick={this.handleRecover}
                        >
                          {" "}
                          Resume Last Evaluation{" "}
                        </Button>
                      </div>
    
                      <div className="Home_Button_Div">
                        <Button
                          id="Home_Button"
                          variant="contained"
                          style={{
                            opacity: EvaButtonOpacityClass,
                            cursor: EvaButtonCursorClass,
                          }}
                          disabled={!this._checkEvaluationUser()}
                          onClick={this._handleEvaluationHistory}
                        >
                          {" "}
                          Evaluation History{" "}
                        </Button>
                      </div>
    
                      <div className="Home_Button_Div">
                        <Button
                          id="Home_Button"
                          variant="contained"
                          style={{ opacity: incompleteEvalOpacityClass }}
                          onClick={() =>
                            this.context.history.push("/incomplete-evaluations")
                          }
                          disabled={incompleteEvalDisable}
                        >
                          {" "}
                          Incomplete Evaluations{" "}
                        </Button>
                      </div>
                    </div>
                  </Grid> */}
                </Grid>
              </div>
            )}
            {/* <Rodal visible={this.state.resumeWarningModal} onClose={this.closeResumeWarningModal}>
                        <div>
                            <div className="Evaluation_Home_ResumeEvaluationWarningModal_Text_Div">
                                This will delete your on-going evaluation. Would you like to continue?
                            </div>
    
                            <div className="Evaluation_ResumeEvaluation_Button_Div">
                                <Button className="Evaluation_ResumeEvaluation_Button" variant="contained" onClick={this.deleteReportAndStartNew}> Yes </Button>
                            </div>
                        </div>
                    </Rodal> */}
          </div>
        );
      }
}
 
Guest.contextType = MyContext;
export default Guest;
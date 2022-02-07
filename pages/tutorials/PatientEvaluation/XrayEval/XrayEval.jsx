import React, { Component } from "react";
import Button from "@material-ui/core/Button";
// import "../SBSVideo.css";
import MyContext from "../../../helper/themeContext";
import ReactPlayer from 'react-player'
import SemipolarLoading from "react-loadingg/lib/SemipolarLoading";


class XrayEval extends Component {
  constructor(props) {
    super(props);
    this.state = { light: false, loading: true };
  }

  onVideoEnd = () => {
    this.setState({ light: true })
  }
  onVideoReady = () => {
    this.setState({ loading: false })
  }

  render() {
    return (
      <div id="SBSVideo_Main_Div">
        <div id="SBSVideo_Content_Wrapper">
          <div id="SBSVideo_Center_Wrapper">
            <div id="SBSVideo_Image_Wrapper">
              <div className="sbs-video-text-wrapper">
                <div id="SBSVideo_Heading1_Div">
                  Completing a Patient Evaluation
                </div>
              </div>
              {this.state.loading == true ? (
                <SemipolarLoading size={"large"} color={"#b4ec51"} />
              )
                : null}

              <ReactPlayer onReady={this.onVideoReady}
                height='700px'
                width='1000px'
                url='https://vimeo.com/466661642' controls={true} playing={true} onEnded={this.onVideoEnd} light={this.state.light} />

            </div>
            <div id="SBSVideo_Next_Button_Div">
              <Button
                id="SBSVideo_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.setCookie(
                    "tutorial-" + this.context.state.user_id,
                    2
                  );
                  this.context.Navigate(
                    "/tutorials/patient-evaluation-education/options"
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
XrayEval.contextType = MyContext;
export default XrayEval;

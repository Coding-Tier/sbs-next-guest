import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../../helper/themeContext";
import ReactPlayer from 'react-player'
import SemipolarLoading from "react-loadingg/lib/SemipolarLoading";

class MatchingVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="SBSVideo_Main_Div">
        <div id="SBSVideo_Content_Wrapper">
          <div style={{
            minHeight: '700px',
          }} >
            <div id="SBSVideo_Image_Wrapper">
              <div  >
                <div id="SBSVideo_Heading1_Div">
                  How to Confirm Evaluations
                </div>
              </div>
              {this.state.loading == true ? (
                <SemipolarLoading size={"large"} color={"#b4ec51"} />
              )
                : null}
              <ReactPlayer onReady={this.onVideoReady}
                url='https://vimeo.com/546626552'
                height='700px'
                width='1000px'
                controls={true}
                playing={true}
                onEnded={this.onVideoEnd} light={this.state.light} />
            </div>
            <div id="SBSVideo_Next_Button_Div">
              <Button
                id="SBSVideo_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.setCookie("tutorial-" + this.context.state.user_id, 34);
                  this.context.Navigate("./lets-get-started");
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
MatchingVideo.contextType = MyContext;
export default MatchingVideo;

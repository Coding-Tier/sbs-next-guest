import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import ReactPlayer from 'react-player'
import SemipolarLoading from "react-loadingg/lib/SemipolarLoading";

import MyContext from "../../../helper/themeContext";

// import "../../../SBS/SBSVideo/SBSVideo.css";

const NextPage = "/tutorials/hip/short-hip/LATTZOTH";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="SBSVideo_Main_Div">
      <div id="SBSVideo_Content_Wrapper">
        <div id="SBSVideo_Center_Wrapper">
          <div id="SBSVideo_Image_Wrapper">
            

            {this.state.loading == true ? (
              <SemipolarLoading size={"large"} color={"#b4ec51"} />
            )
              : null}
            <ReactPlayer onReady={this.onVideoReady}
              height='700px'
              width='1000px'
              url='https://vimeo.com/691087512/628b581380'  controls={true} playing={true} onEnded={this.onVideoEnd} light={this.state.light} />

          </div>
          <div id="SBSVideo_Next_Button_Div">
            <Button
              id="SBSVideo_Next_Button"
              variant="contained"
              onClick={
            
                ()=>this.context.Navigate(
                  NextPage
                )
              }
            >
              {" "}Continue{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
Welcome.contextType = MyContext;
export default Welcome;

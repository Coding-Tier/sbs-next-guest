import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../../helper/themeContext";

// import Img1 from "../../../assets/hip/get_hip_about/Zones Image.png";

const Img1 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2FAboutHip%2FCOTH%2FZones%20Image.png?alt=media"


class COTK extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="COTK_Main_Div">
        <div id="COTK_Content_Wrapper">
          <div id="COTK_Center_Wrapper">
            <div id="COTK_Text_wrapper">
              <div id="COTK_Heading1_Div">Zones of the Hip</div>
              <div id="COTK_Text_Div">
                This hip joint is divided into three zones
                <br />
                <strong>Zone 1</strong>: Top (Weight-Bearing) -{" "}
                <strong>Zone 2</strong>: Middle (Medial) -{" "}
                <strong>Zone 3</strong>: Bottom(Inferior)
              </div>
            </div>
            <div id="COTK_Image_Wrapper">
              <div id="COTK_Image_Container">
                <img
                  src={Img1}
                  alt="COTK1"
                  style={{ width: "100%", objectFit: "contain" }}
                />
              </div>
            </div>
            <div id="COTK_Next_Button_Div">
              <Button
                id="COTK_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.Navigate("./hip-degeneration-and-arthritis");
                }}
              >
                {" "}
                Back{" "}
              </Button>
              <Button
                id="COTK_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.setCookie(
                    "tutorial-" + this.context.state.user_id,
                    8
                  );
                  this.context.Navigate(
                    "./learn-about-the-medial-and-lateral-compartments-of-the-hip"
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
COTK.contextType = MyContext;
export default COTK;

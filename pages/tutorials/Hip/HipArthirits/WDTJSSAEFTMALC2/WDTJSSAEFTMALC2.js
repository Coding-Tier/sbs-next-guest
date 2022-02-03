import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../../helper/themeContext";

// import Img1 from "../../../../assets/HipEducationAssets/Acetab and femoral.png";
// import Img2 from "../../../../assets/HipEducationAssets/Subcondral.png";

import "./WDTJSSAEFTMALC2.css";

const Img1 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2FAboutHip%2FWDTJSSAEFTMALC2%2FAcetab%20and%20femoral.png?alt=media";
const Img2 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2FAboutHip%2FWDTJSSAEFTMALC2%2FSubcondral.png?alt=media";

class WDTJSSAEFTMALC2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="HTIJSNAD_Main_Div">
        <div id="HTIJSNAD_Content_Wrapper">
          <div id="HTIJSNAD_Center_Wrapper">
            <div id="HTIJSNAD_Text_wrapper">
              <div id="HTIJSNAD_Heading1_Div">
                In the Lateral View Where does the Joint Space Start & End in
                the Hip?
              </div>
              {/* <div id="HTIJSNAD_Heading1_Div">Narrowing and Degeneration</div> */}
              <div id="HTIJSNAD_Text_Div">
                Since the bone in this area is more sclerotic (dense and rigid),
                the subcondral line appears as an area of whiter bone than the
                surrounding area. The joint space of the hip is the area between
                the subchondral bone of the femoral head(ball) and subchondral
                bone of the acetabulum (socket). Always judge the amount of
                joint space by the most narrowed portion of this gap.
              </div>
            </div>
            <div id="HTIJSNAD_Image_Wrapper">
              <div id="HTIJSNAD_Inner_text">
                Subchondral Lines in the Lateral View
              </div>
              <div id="HTIJSNAD_Image_Pair_Wrapper">
                <div id="HTIJSNAD_Inner_Wrapper">
                  <div id="HTIJSNAD_Inner_Image_Container">
                    <img src={Img1} alt="HTIJSNAD1" />
                  </div>
                </div>
                <div id="HTIJSNAD_Inner_Wrapper">
                  <div id="HTIJSNAD_Inner_Image_Container">
                    <img src={Img2} alt="HTIJSNAD2" />
                  </div>
                </div>
              </div>
            </div>
            <div id="HTIJSNAD_Next_Button_Div">
              <Button
                id="HTIJSNAD_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.history.push(
                    "./where-does-the-joint-space-start-and-end-for-the-medial-and-lateral-compartments"
                  );
                }}
              >
                {" "}
                back{" "}
              </Button>
              <Button
                id="HTIJSNAD_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.setCookie(
                    "tutorial-" + this.context.state.user_id,
                    20
                  );
                  this.context.history.push(
                    "./levels-of-joint-space-narrowing-degeneration"
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
WDTJSSAEFTMALC2.contextType = MyContext;
export default WDTJSSAEFTMALC2;

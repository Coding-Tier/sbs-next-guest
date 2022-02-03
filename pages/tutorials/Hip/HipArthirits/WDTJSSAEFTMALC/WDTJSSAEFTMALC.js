import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../../helper/themeContext";

// import Img1 from "../../../../assets/HipEducationAssets/Pelvis_Acetabular and Fem.png";
// import Img2 from "../../../../assets/HipEducationAssets/Pelvis_Subchondral.png";

import "./WDTJSSAEFTMALC.css";

const Img1 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2FAboutHip%2FWDTJSSAEFTMALC%2FPelvis_Acetabular%20and%20Fem.png?alt=media";
const Img2 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2FAboutHip%2FWDTJSSAEFTMALC%2FPelvis_Subchondral.png?alt=media";

class WDTJSSAEFTMALC extends Component {
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
                In the AP Pelvis View Where does the Joint Space Start & End in
                the Hip?
              </div>
              {/* <div id="HTIJSNAD_Heading1_Div">Narrowing and Degeneration</div> */}
              <div id="HTIJSNAD_Text_Div">
                X-rays show a shadow of a three-dimensional object, knowing
                where the bones surfaces are is important. Step by Step uses the
                subchondral line as the key reference when analyzing joint
                space. The subchondral line is where bone and cartilage meet. By
                following the subchondral bone around the articulating surface
                of the femoral head (ball) and the articulating surface of the
                acetabulum (socket), key areas of the joint space narrowing can
                be determined.
              </div>
            </div>
            <div id="HTIJSNAD_Image_Wrapper">
              <div id="HTIJSNAD_Inner_text">
                Subchondral Lines in the AP Pelvis View
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
                    "./how-to-identify-joint-space-narrowing-and-degeneration"
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
                    "./where-does-the-joint-space-start-and-end-for-the-medial-and-lateral-compartments-2"
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
WDTJSSAEFTMALC.contextType = MyContext;
export default WDTJSSAEFTMALC;

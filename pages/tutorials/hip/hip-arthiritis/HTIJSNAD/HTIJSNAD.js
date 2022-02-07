import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../../helper/themeContext";

// import Img1 from "../../../assets/hip/get_hip_about/Wide Joint Space.png";
// import Img2 from "../../../../assets/HipEducationAssets/Narrowed Joint Space.png";
// import Img3 from "../../../../assets/HipEducationAssets/No Joint Space.png";

const Img1 ="https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2FAboutHip%2FHTIJSNAD%2FWide%20Joint%20Space.png?alt=media";
const Img2 ="https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2FAboutHip%2FHTIJSNAD%2FNarrowed%20Joint%20Space.png?alt=media";
const Img3 ="https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2FAboutHip%2FHTIJSNAD%2FNo%20Joint%20Space.png?alt=media";

class HTIJSNAD extends Component {
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
              <div id="HTIJSNAD_Heading1_Div">How to Identify Joint Space</div>
              <div id="HTIJSNAD_Heading1_Div">Narrowing and Degeneration</div>
              <div id="HTIJSNAD_Text_Div">
                When reviewing X-rays, note the space between the bone surfaces.
                Healthy hips have wide joint spaces which are filled with
                cartilage. Degenerated hips have a narrowed space of various
                degrees and eventually no space at all. In cases of end stage
                arthritis, X-rays depict bone contacting bone.
              </div>
            </div>
            <div id="HTIJSNAD_Image_Wrapper">
              {/* <div id="HTIJSNAD_Inner_text">
                Comparing Two Medial Compartments
              </div> */}
              <div id="HTIJSNAD_Image_Pair_Wrapper">
                <div id="HTIJSNAD_Inner_Wrapper">
                  <div id="HTIJSNAD_Inner_Image_Container">
                    <div className="HTIJSNAD_Inner_text">Wide Joint Space</div>
                    <img src={Img1} alt="HTIJSNAD1" />
                  </div>
                </div>
                <div id="HTIJSNAD_Inner_Wrapper">
                  <div id="HTIJSNAD_Inner_Image_Container">
                    <div className="HTIJSNAD_Inner_text">
                      Narrowed Joint Space
                    </div>
                    <img src={Img2} alt="HTIJSNAD2" />
                  </div>
                </div>
                <div id="HTIJSNAD_Inner_Wrapper">
                  <div id="HTIJSNAD_Inner_Image_Container">
                    <div className="HTIJSNAD_Inner_text">
                      Little to No Joint Space
                    </div>
                    <img src={Img3} alt="HTIJSNAD2" />
                  </div>
                </div>
              </div>
            </div>
            <div id="HTIJSNAD_Next_Button_Div">
              <Button
                id="HTIJSNAD_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.Navigate(
                    "./evaluating-hip-degeneration-with-x-rays"
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
                  this.context.Navigate(
                    "./where-does-the-joint-space-start-and-end-for-the-medial-and-lateral-compartments"
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
HTIJSNAD.contextType = MyContext;
export default HTIJSNAD;

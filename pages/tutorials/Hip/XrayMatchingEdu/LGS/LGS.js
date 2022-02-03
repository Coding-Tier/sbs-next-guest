import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../../helper/themeContext";
import Bulb from "../../../../tutorials/assets/bulbimage.png";
import Bone1Image from "../../../../assets/bone1_Bitmap.png";

import LGSStyleSheet from "./LGS.module.scss";

class LGS extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="Evaluaion_Welcome_Main_Div">
        {console.log(LGSStyleSheet)}
        <div id="Evaluaion_Welcome_Text_Wrapper">
          <div id="Evaluaion_Welcome_Heading1_Div">
            <div
              className="gradient_div"
              style={{ height: "100px", margin: "0px", paddingLeft: "10px" }}
            >
              <img
                alt={"Bulb"}
                src={Bulb}
                style={{ width: "80px", height: "80px", margin: "5px" }}
              />
              <span className={LGSStyleSheet.test_span}>
                Test Your Knowledge
              </span>
            </div>
          </div>
          <div id="Evaluaion_Welcome_Neon_Line"></div>
          <div id="Evaluaion_Welcome_Heading2_Div">
            How to Review and Confirm X-ray Evaluations
            {/* <br/>
                    and Diagnosis */}
          </div>
          <div id="Evaluaion_Welcome_Text_Div">
            Review and confirm the AI predicitions using X-ray Matching and the
            comparison X-rays. Do this for each view and zone.
          </div>
          <div id="Evaluaion_Welcome_Next_Button_Div">
            <Button
              id="Evaluaion_Welcome_Next_Button"
              variant="contained"
              onClick={() => {
                this.context.setCookie(
                  "tutorial-" + this.context.state.user_id,
                  35
                );
                this.context.history.push("./matching-tutorial");
              }}
            >
              {" "}
              Continue{" "}
            </Button>
          </div>
        </div>
        <div id="Evaluaion_Welcome_Image_div">
          <img src={Bone1Image} alt="SBS" id="Evaluaion_Welcome_Image_Bone" />
        </div>
      </div>
    );
  }
}
LGS.contextType = MyContext;
export default LGS;

import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../helper/themeContext";

import Bone1Image from "../../../assets/bone1_Bitmap.png";

import LGSStyleSheet from "../hip-matching-education/lets-get-started/LGS.module.scss";
import Bulb from "../../../assets/bulbimage.png";

import Image from 'next/image'
class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="Evaluaion_Welcome_Main_Div">
        <div id="Evaluaion_Welcome_Text_Wrapper">
          {/* <div id="Evaluaion_Welcome_Heading1_Div">
            Hip & Knee <br />
            Step by Step
          </div> */}
          <div id="Evaluaion_Welcome_Heading1_Div">
            <div
              className="gradient_div"
              style={{ height: "100px", margin: "0px", paddingLeft: "10px" }}
            >
              <img 
                alt={"Bulb"}
                src={Bulb}
                width={"80px"}
                  height={"80px"}
                style={{ width: "80px", height: "80px", margin: "5px" }}
              />
              <span className={LGSStyleSheet.test_span}>
                Test Your Knowledge
              </span>
            </div>
          </div>
          <div id="Evaluaion_Welcome_Neon_Line"></div>
          <div id="Evaluaion_Welcome_Heading2_Div">
            X-ray Training
            {/* <br/>
                    and Diagnosis */}
          </div>
          <div id="Evaluaion_Welcome_Text_Div">
            Start matching X-rays and perfect your evaluation skills. Practice
            matching X-rays for the three compartments of the knee. Realtime
            feedback will be provided with each evaluation.
          </div>
          <div id="Evaluaion_Welcome_Next_Button_Div">
            <Button
              id="Evaluaion_Welcome_Next_Button"
              variant="contained"
              onClick={() => {
                
                this.context.Navigate("./matching-tutorial");
              }}
            >
              {" "}
              Continue{" "}
            </Button>
          </div>
        </div>
        <div id="Evaluaion_Welcome_Image_div">
          <img  src={Bone1Image} alt="SBS" id="Evaluaion_Welcome_Image_Bone" />
        </div>
      </div>
    );
  }
}
Welcome.contextType = MyContext;
export default Welcome;

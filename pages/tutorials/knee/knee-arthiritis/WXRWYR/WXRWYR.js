import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import CheckIcon from '@material-ui/icons/Check';


import MyContext from "../../../../helper/themeContext";
import Bulb from '../../../../assets/bulbimage.png';
import Img1 from "../../../../assets/WXRWYR1.png";
import Img2 from "../../../../assets/WXRWYR2.png";
import Img3 from "../../../../assets/WXRWYR3.png";
import Img4 from "../../../../assets/WXRWYR4.png";
import Img5 from "../../../../assets/WXRWYR5.png";
import Img6 from "../../../../assets/WXRWYR6.png";
import tick from "../../../../assets/tick_white.png";
import cross from "../../../../assets/cross_white.png";

class WXRWYR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      IMG1: "white",
      IMG2: "white",
      IMG3: "white",
      IMG4: "white",
      IMG5: "white",
      IMG6: "white",
      disableBtn: true,
    };
  }

  clickHandler = (x, c) => {
    this.setState({
      [x]: c,
    });
  };
  render() {
    return (
      <div id="WXRWYR_Main_Div">
        <div id="WXRWYR_Content_Wrapper">
          <div id="WXRWYR_Center_Wrapper">
            <div id="WXRWYR_Text_wrapper">
              <div id="WXRWYR_Heading1_Div">What X-rays Would You Request?</div>
              <div className='gradient_div' >
                <img src={Bulb} alt="Bulb"
                  style={{ width: '40px', height: '40px', margin: '5px' }} />
                <span className='test_span'>Test Your Knowledge</span>
              </div>
              <div id="WXRWYR_Text_Div">
                A 70-year-old female patient states that she has left knee pain.
                Which X-rays are needed to evaluate this patient for joint
                degeneration?{" "}
                <strong style={{ color: "white" }}>
                  Click on all boxes that apply.
                </strong>
              </div>
            </div>
            <div id="WXRWYR_Image_Wrapper">
              <div id="WXRWYR_Images_col">
                <div id="WXRWYR_Images_row">
                  <div id="WXRWYR_Inner_Image_Container">
                    <div id="WXRWYR_Image_heading">
                      Standing Bilateral Flexion
                    </div>
                    <div
                      id="WXRWYR_Helper_Div"
                      onClick={() => this.clickHandler("IMG1", "green")}
                    >
                      <div
                        id="WXRWYR_Image_box"
                        style={{ backgroundColor: this.state.IMG1 }}
                      >
                        <img src={tick} alt="tick" id="WXRWYR_tick" />
                      </div>
                      <div id="WXRWYR_Image">
                        <img src={Img1} alt="WXRWYR1" />
                      </div>
                    </div>
                  </div>
                </div>
                <div id="WXRWYR_Images_row">
                  <div id="WXRWYR_Inner_Image_Container">
                    <div id="WXRWYR_Image_heading">
                      Standing Bilateral Non-Flexion
                    </div>
                    <div
                      id="WXRWYR_Helper_Div"
                      onClick={() => this.clickHandler("IMG4", "green")}
                    >
                      <div
                        id="WXRWYR_Image_box"
                        style={{ backgroundColor: this.state.IMG4 }}
                      >
                        <img src={tick} alt="tick" id="WXRWYR_tick" />
                      </div>
                      <div id="WXRWYR_Image">
                        <img src={Img4} alt="WXRWYR1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="WXRWYR_Images_col">
                <div id="WXRWYR_Images_row">
                  <div id="WXRWYR_Inner_Image_Container">
                    <div id="WXRWYR_Image_heading">Right Kneecap View</div>
                    <div
                      id="WXRWYR_Helper_Div"
                      onClick={() => this.clickHandler("IMG2", "red")}
                    >
                      <div
                        id="WXRWYR_Image_box"
                        style={{ backgroundColor: this.state.IMG2 }}
                      >
                        <img src={cross} alt="tick" id="WXRWYR_tick" />
                      </div>
                      <div id="WXRWYR_Image">
                        <img src={Img2} alt="WXRWYR1" />
                      </div>
                    </div>
                  </div>
                </div>
                <div id="WXRWYR_Images_row">
                  <div id="WXRWYR_Inner_Image_Container">
                    <div id="WXRWYR_Image_heading">Left Kneecap View</div>
                    <div
                      id="WXRWYR_Helper_Div"
                      onClick={() => this.clickHandler("IMG5", "green")}
                    >
                      <div
                        id="WXRWYR_Image_box"
                        style={{ backgroundColor: this.state.IMG5 }}
                      >
                        <img src={tick} alt="tick" id="WXRWYR_tick" />
                      </div>
                      <div id="WXRWYR_Image">
                        <img src={Img5} alt="WXRWYR1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="WXRWYR_Images_col">
                <div id="WXRWYR_Images_row">
                  <div id="WXRWYR_Inner_Image_Container">
                    <div id="WXRWYR_Image_heading">Right Lateral View</div>
                    <div
                      id="WXRWYR_Helper_Div"
                      onClick={() => this.clickHandler("IMG3", "red")}
                    >
                      <div
                        id="WXRWYR_Image_box"
                        style={{ backgroundColor: this.state.IMG3 }}
                      >
                        <img src={cross} alt="tick" id="WXRWYR_tick" />
                      </div>
                      <div id="WXRWYR_Image">
                        <img src={Img3} alt="WXRWYR1" />
                      </div>
                    </div>
                  </div>
                </div>
                <div id="WXRWYR_Images_row">
                  <div id="WXRWYR_Inner_Image_Container">
                    <div id="WXRWYR_Image_heading">Left Lateral View</div>
                    <div
                      id="WXRWYR_Helper_Div"
                      onClick={() => this.clickHandler("IMG6", "green")}
                    >
                      <div
                        id="WXRWYR_Image_box"
                        style={{ backgroundColor: this.state.IMG6 }}
                      >
                        <img src={tick} alt="tick" id="WXRWYR_tick" />
                      </div>
                      <div id="WXRWYR_Image">
                        <img id="WXRWYR_Exception" src={Img6} alt="WXRWYR1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="WXRWYR_Next_Button_Div">
              <Button
                id="WXRWYR_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.Navigate(
                    "./summary-of-x-ray-views-necessary-based-on-patients-symptoms"
                  );
                }}
              >
                {" "}
                Back{" "}
              </Button>

              {
                 this.state.IMG1 === "green" &&
                 this.state.IMG4 === "green" &&
                 this.state.IMG5 === "green" &&
                 this.state.IMG6 === "green" &&
                <div className="tutorial-Complete-Box">
                  <div className="tutorial-Complete-Box-tick">
                    <CheckIcon fontSize={'large'}/>
                  </div>
                   Complete !
                </div>
              }

             
                  
              <Button
                id="WXRWYR_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.setCookie(
                    "tutorial-" + this.context.state.user_id,
                    18
                  );
                  this.context.Navigate(
                    "./evaluating-knee-degeneration-with-x-rays"
                  );
                }}
                disabled={
                  this.state.IMG1 === "green" &&
                    this.state.IMG4 === "green" &&
                    this.state.IMG5 === "green" &&
                    this.state.IMG6 === "green"
                    ? false
                    : true
                }
                style={ 
                  this.state.IMG1 === "green" &&
                    this.state.IMG4 === "green" &&
                    this.state.IMG5 === "green" &&
                    this.state.IMG6 === "green"
                    ? { opacity: 1 }
                    : { opacity: 0.5 }
                }
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
WXRWYR.contextType = MyContext;
export default WXRWYR;

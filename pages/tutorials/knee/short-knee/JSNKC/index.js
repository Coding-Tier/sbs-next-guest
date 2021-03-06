import React, { Component } from "react";
import Bulb from '../../../../assets/bulbimage.png';

import Button from "@material-ui/core/Button";
import CheckIcon from '@material-ui/icons/Check';

import MyContext from "../../../../helper/themeContext";

import Img1 from "../../../../assets/JSNKC1.png";
import Img2 from "../../../../assets/JSNKC2.png";
import Img3 from "../../../../assets/JSNKC3.png";
import Img4 from "../../../../assets/JSNKC4.png";
import Img5 from "../../../../assets/LOJSND2.png";

// import "./JSNKC.css";

const NextPage = "/tutorials/knee/short-knee/Sample-knee-eval";
const BackPage = "/tutorials/knee/short-knee/JSNLC";

class JSNKC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickState: 0,
      orangeState: 1,
    };
  }

  clickHandle = (val) => {
    let orangestate = this.state.orangeState;
    let clickstate = this.state.clickState;
    if (val - 1 === this.state.clickState) {
      this.setState({
        orangeState: orangestate + 1,
        clickState: clickstate + 1,
      });
    }
  };

  
  render() {
    return (
      <div id="JSNKC_Main_Div">
        <div id="JSNKC_Content_Wrapper">
          <div id="JSNKC_Center_Wrapper">
            <div id="JSNKC_Text_wrapper">
              <div id="JSNKC_Heading1_Div">
                Joint Space Narrowing - Kneecap Compartment
              </div>
              <div className='gradient_div'>
                <img src={Bulb} alt="Bulb"
                  style={{ width: '40px', height: '40px', margin: '5px' }} />
                <span className='test_span'>Test Your Knowledge</span>
              </div>
              <div id="JSNKC_Text_Div">
                Starting with the knee with the least degeneration, put the
                X-rays in order of severity of degeneration seen in the kneecap
                compartment
              </div>
            </div>
            <div id="JSNKC_Image_Wrapper">
              <div id="JSNKC_Grid_Container">
                <div id="JSNKC_Row_Container">
                  <div
                    id="JSNKC_box_Container"
                    onClick={() => this.clickHandle(4)}
                    style={{ opacity: this.state.orangeState > 4 ? 0.5 : 1, height:'10.47vw', verticalAlign:'top' }}

                  >
                    <img
                      src={Img1}
                      alt="JSNKC1"
                      style={
                        this.state.orangeState === 4 ||
                          this.state.orangeState < 4
                          ? { display: "block" }
                          : { display: "none" }
                      }
                    />
                  </div>
                  <div
                    id="JSNKC_box_Container"
                    onClick={() => this.clickHandle(2)}
                    style={
                      this.state.orangeState > 2
                        ? { opacity: 0.5 }
                        : { opacity: 1 }
                    }
                  >
                    <img
                      src={Img2}
                      alt="JSNKC1"
                      style={
                        this.state.orangeState === 2 ||
                          this.state.orangeState < 2
                          ? { display: "block" }
                          : { display: "none" }
                      }
                    />
                  </div>
                  <div
                    id="JSNKC_box_Container"
                    onClick={() => this.clickHandle(3)}
                    style={
                      this.state.orangeState > 3
                        ? { opacity: 0.5 }
                        : { opacity: 1 }
                    }
                  >
                    <img
                      src={Img3}
                      alt="JSNKC1"
                      style={
                        this.state.orangeState === 3 ||
                          this.state.orangeState < 3
                          ? { display: "block" }
                          : { display: "none" }
                      }
                    />
                  </div>
                  <div
                    id="JSNKC_box_Container"
                    onClick={() => this.clickHandle(1)}
                    style={
                      this.state.orangeState > 1
                        ? { opacity: 0.5 }
                        : { opacity: 1 }
                    }
                  >
                    <img
                      src={Img4}
                      alt="JSNKC1"
                      style={
                        this.state.orangeState === 1 ||
                          this.state.orangeState < 1
                          ? { display: "block" }
                          : { display: "none" }
                      }
                    />
                  </div>
                </div>
                <div id="JSNKC_Row_Container">
                  <div id="JSNKC_box_Container">
                  {
                      this.state.orangeState === 1 ?
                        <div
                          style={{ display: "flex" }}
                        >
                          Click on the X-ray with Normal/Slight degeneration
                        </div>

                      :
                      this.state.orangeState > 1 ?
                      <img
                      src={Img4}
                      alt="JSNkC1"
                      />
                      :
                      <div className={`JSNMC_Secondary_Image_Block ${this.state.orangeState<1&&'JSNMC_DispalyNone'}`}>
                      </div>
                    }
                  </div>
                  <div id="JSNKC_box_Container">
                    <div
                      style={
                        this.state.orangeState === 2
                          ? { display: "flex" }
                          : { display: "none" }
                      }
                    >
                      Click on the X-ray with Moderate degeneration
                    </div>
                    <img
                      src={Img2}
                      alt="JSNKC1"
                      style={
                        this.state.orangeState > 2
                          ? { display: "block" }
                          : { display: "none" }
                      }
                    />
                  </div>
                  <div id="JSNKC_box_Container">
                    <div
                      style={
                        this.state.orangeState === 3
                          ? { display: "flex" }
                          : { display: "none" }
                      }
                    >
                      Click on the X-ray with Near End Stage degeneration
                    </div>
                    <img
                      src={Img3}
                      alt="JSNKC1"
                      style={
                        this.state.orangeState > 3
                          ? { display: "block" }
                          : { display: "none" }
                      }
                    />
                  </div>
                  <div id="JSNKC_box_Container">
                    <div
                      style={
                        this.state.orangeState === 4
                          ? { display: "flex" }
                          : { display: "none" }
                      }
                    >
                      Click on the X-ray with End Stage degeneration
                    </div>
                    <img
                      src={Img1}
                      alt="JSNKC1"
                      style={
                        this.state.orangeState > 4
                          ? { display: "block" }
                          : { display: "none" }
                      }
                    />
                  </div>
                </div>
              </div>
              <div id="JSNKC_Inner_Image_Container">
                <img src={Img5} alt="JSNKC1" />
              </div>
              <div id="JSNKC_Inner_Image_text">
                <div>Thickest Joint Space</div>
                <div>Decreasing Joint Space</div>
                <div>Least Joint Space</div>
              </div>
            </div>
            <div id="JSNKC_Next_Button_Div">
              <Button
                id="JSNKC_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.Navigate(
                   BackPage
                  );
                }}
              >
                {" "}
                back{" "}
              </Button>

              {
                this.state.clickState >= 4 &&
                <div className="tutorial-Complete-Box">
                  <div className="tutorial-Complete-Box-tick">
                    <CheckIcon fontSize={'large'}/>
                  </div>
                   Complete !
                </div>
              }

              
              <Button
                id="JSNKC_Next_Button"
                variant="contained"
                disabled={this.state.clickState < 4 ? true : false}
                style={
                  this.state.clickState < 4 ? { opacity: 0.5 } : { opacity: 1 }
                }
                onClick={() => {
                  
                  this.context.Navigate(
                    NextPage
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
JSNKC.contextType = MyContext;
export default JSNKC;

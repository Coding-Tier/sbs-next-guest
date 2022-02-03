import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import Bulb from '../../../assets/bulbimage.png';
import CheckIcon from '@material-ui/icons/Check';

import MyContext from "../../../../helper/themeContext";

import Img1 from "../../../assets/JSNMC1.png";
import Img2 from "../../../assets/JSNMC2.png";
import Img3 from "../../../assets/JSNMC3.png";
import Img4 from "../../../assets/JSNMC4.png";
import Img5 from "../../../assets/LOJSND2.png";

import "./JSNMC.css";

class JSNMC extends Component {
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
      <div id="JSNMC_Main_Div">
        <div id="JSNMC_Content_Wrapper">
          <div id="JSNMC_Center_Wrapper">
            <div id="JSNMC_Text_wrapper">
              <div id="JSNMC_Heading1_Div">
                Joint Space Narrowing - Medial Compartment
              </div>
              <div className='gradient_div' >
                <img src={Bulb} alt="Bulb"
                  style={{ width: '40px', height: '40px', margin: '5px' }} />
                <span className='test_span'>Test Your Knowledge</span>
              </div>
              <div id="JSNMC_Text_Div">
                Starting with the knee with the least degeneration, put the
                X-rays in order of severity of degeneration seen in the medial
                compartment
              </div>
            </div>
            <div id="JSNMC_Image_Wrapper">
              <div id="JSNMC_Grid_Container">
                <div id="JSNMC_Row_Container">
                  <div
                    id="JSNMC_box_Container"
                    onClick={() => this.clickHandle(2)}
                    style={{ opacity: this.state.orangeState > 2 ? 0.5 : 1, height:'10.47vw', verticalAlign:'top' }}
                  >
                    <img
                      src={Img1}
                      alt="JSNMC1"
                      style={
                        this.state.orangeState === 2 ||
                          this.state.orangeState < 2
                          ? { display: "block" }
                          : { display: "none" }
                      }
                    />
                  </div>
                  <div
                    id="JSNMC_box_Container"
                    onClick={() => this.clickHandle(4)}
                    style={
                      this.state.orangeState > 4
                        ? { opacity: 0.5 }
                        : { opacity: 1 }
                    }
                  >
                    <img
                      src={Img2}
                      alt="JSNMC1"
                      style={
                        this.state.orangeState === 4 ||
                          this.state.orangeState < 4
                          ? { display: "block" }
                          : { display: "none" }
                      }
                    />
                  </div>
                  <div
                    id="JSNMC_box_Container"
                    onClick={() => this.clickHandle(1)}
                    style={
                      this.state.orangeState > 1
                        ? { opacity: 0.5 }
                        : { opacity: 1 }
                    }
                  >
                    <img
                      src={Img3}
                      alt="JSNMC1"
                      style={
                        this.state.orangeState === 1 ||
                          this.state.orangeState < 1
                          ? { display: "block" }
                          : { display: "none" }
                      }
                    />
                  </div>
                  <div
                    id="JSNMC_box_Container"
                    onClick={() => this.clickHandle(3)}
                    style={
                      this.state.orangeState > 3
                        ? { opacity: 0.5 }
                        : { opacity: 1 }
                    }
                  >
                    <img
                      src={Img4}
                      alt="JSNMC1"
                      style={
                        this.state.orangeState === 3 ||
                          this.state.orangeState < 3
                          ? { display: "block" }
                          : { display: "none" }
                      }
                    />
                  </div>
                </div>
                <div id="JSNMC_Row_Container">
                  <div id="JSNMC_box_Container">
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
                      src={Img3}
                      alt="JSNMC1"
                      />
                      :
                      <div className={`JSNMC_Secondary_Image_Block ${this.state.orangeState<1&&'JSNMC_DispalyNone'}`}>
                      </div>
                    }
                  </div>
                  <div id="JSNMC_box_Container">
                  {
                      this.state.orangeState === 2 ?
                        <div
                          style={{ display: "flex" }}
                        >
                          Click on the X-ray with Moderate degeneration
                        </div>

                      :
                      this.state.orangeState > 2 ?
                      <img
                      src={Img1}
                      alt="JSNMC1"
                      />
                      :
                      <div className={`JSNMC_Secondary_Image_Block ${this.state.orangeState<2&&'JSNMC_DispalyNone'}`}>
                      </div>
                    }
                  </div>
                  <div id="JSNMC_box_Container">
                    {
                      this.state.orangeState === 3 ?
                        <div
                          style={{ display: "flex" }}
                        >
                          Click on the X-ray with Near End Stage degeneration
                        </div>

                      :
                      this.state.orangeState > 3 ?
                      <img
                      src={Img4}
                      alt="JSNMC1"
                      />
                      :
                      <div className={`JSNMC_Secondary_Image_Block ${this.state.orangeState<3&&'JSNMC_DispalyNone'}`}>
                      </div>
                    }
                  </div>
                  <div id="JSNMC_box_Container">
                    {
                      this.state.orangeState === 4 ?
                        <div
                          style={{ display: "flex" }}
                        >
                          Click on the X-ray with End Stage degeneration
                        </div>

                      :
                      this.state.orangeState > 4 ?
                      <img
                      src={Img2}
                      alt="JSNMC1"
                      />
                      :
                      <div className={`JSNMC_Secondary_Image_Block ${this.state.orangeState<4&&'JSNMC_DispalyNone'}`}>
                      </div>
                    }
                  </div>
                </div>
              </div>
              <div id="JSNMC_Inner_Image_Container">
                <img src={Img5} alt="JSNMC1" />
              </div>
              <div id="JSNMC_Inner_Image_text">
                <div>Thickest Joint Space</div>
                <div>Decreasing Joint Space</div>
                <div>Least Joint Space</div>
              </div>
            </div>
            <div id="JSNMC_Next_Button_Div">
              <Button
                id="JSNMC_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.history.push(
                    "./levels-of-joint-space-narrowing-degeneration"
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
                id="JSNMC_Next_Button"
                variant="contained"
                disabled={this.state.clickState < 4 ? true : false}
                style={
                  this.state.clickState < 4 ? { opacity: 0.5 } : { opacity: 1 }
                }
                onClick={() => {
                  this.context.setCookie(
                    "tutorial-" + this.context.state.user_id,
                    24
                  );
                  this.context.history.push(
                    "./joint-space-narrowing-lateral-compartment"
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
JSNMC.contextType = MyContext;
export default JSNMC;

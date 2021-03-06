import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import CheckIcon from '@material-ui/icons/Check';

import MyContext from "../../../../helper/themeContext";

import Img1 from "../../../../assets/COTK2_1.png";
import Img2 from "../../../../assets/COTK2_2.png";
import Img3 from "../../../../assets/COTK2_3.png";
import Bulb from '../../../../assets/bulbimage.png';

import Img4 from "../../../../assets/COTK2_4.png";
import Img5 from "../../../../assets/COTK2_5.png";

class COTK2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kneeState: 0,
    };
  }

  handleClick = (num) => {
    let c = this.state.kneeState;
    if (this.state.kneeState === num - 1) {
      c = c + 1;
      this.setState({ kneeState: c });
    }
  };

  render() {
    let imageSource1;
    let imageSource2;
    if (this.state.kneeState === 0) {
      imageSource1 = Img1;
      imageSource2 = Img2;
    } else if (this.state.kneeState === 1) {
      imageSource1 = Img3;
      imageSource2 = Img4;
    } else if (this.state.kneeState === 2) {
      imageSource1 = Img5;
      imageSource2 = Img4;
    }
    return (
      <div id="COTK2_Main_Div">
        <div id="COTK2_Content_Wrapper">
          <div id="COTK2_Center_Wrapper">
            <div id="COTK2_Text_wrapper">
              <div id="COTK2_Heading1_Div">Compartments of the Knee</div>
              <div className='gradient_div' >
                <img src={Bulb} alt="Bulb"
                  style={{ width: '40px', height: '40px', margin: '5px' }} />
                <span className='test_span'>Test Your Knowledge</span>
              </div>
              <div id="COTK2_Text_Div">
                Click on the compartment name that matches the highlighted
                compartment.
              </div>
            </div>
            <div id="COTK2_Buttons_wrapper">
              <Button
                id="COTK2_Button"
                variant="contained"
                onClick={() => this.handleClick(1)}
                style={
                  this.state.kneeState === 1 || this.state.kneeState > 1
                    ? { display: "none" }
                    : null
                }
              >
                Right Kneecap <br /> Compartment
              </Button>
              <Button
                id="COTK2_Button"
                variant="contained"
                onClick={() => this.handleClick(2)}
                style={
                  this.state.kneeState === 2 || this.state.kneeState > 2
                    ? { display: "none" }
                    : null
                }
              >
                Left Kneecap <br /> Compartment
              </Button>
            </div>
            <div id="COTK2_Image_Wrapper">
              <div id="COTK2_Image_Container">
                <img src={imageSource1} alt="COTK2" />
              </div>
              <div id="COTK2_Image_Container">
                <img src={imageSource2} alt="COTK2" />
              </div>
            </div>
            <div id="COTK2_Next_Button_Div">
              <Button
                id="COTK2_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.Navigate(
                    "./viewing-degeneration-with-x-rays-the-kneecap-compartment"
                  );
                }}
              >
                {" "}
                Back{" "}
              </Button>

              {
                this.state.kneeState === 2 &&
                <div className="tutorial-Complete-Box">
                  <div className="tutorial-Complete-Box-tick">
                    <CheckIcon fontSize={'large'}/>
                  </div>
                   Complete !
                </div>
              }


              <Button
                id="COTK2_Next_Button"
                variant="contained"
                disabled={this.state.kneeState === 2 ? false : true}
                onClick={() => {
                  this.context.setCookie(
                    "tutorial-" + this.context.state.user_id,
                    12
                  );
                  this.context.Navigate(
                    "./evaluating-the-medial-and-lateral-compartments-v2"
                  );
                }}
                style={
                  this.state.kneeState === 2 ? { opacity: 1 } : { opacity: 0.5 }
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
COTK2.contextType = MyContext;
export default COTK2;

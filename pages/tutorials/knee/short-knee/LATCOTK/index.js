import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import CheckIcon from '@material-ui/icons/Check';

import MyContext from "../../../../helper/themeContext";

import Img1 from "../../../../assets/1 knee ex.png";
import Img2 from "../../../../assets/2 knee ex.png";
import Img3 from "../../../../assets/3 knee ex.png";
import Img4 from "../../../../assets/4 knee ex.png";
import Img5 from "../../../../assets/LATMALCOTKITX5.png";
import Bulb from '../../../../assets/bulbimage.png';

// import "./LATMALCOTKITX.css";

const NextPage = "/tutorials/knee/short-knee/EVALKV";
const BackPage = "/tutorials/knee/short-knee/welcome"

class LATCOTK extends Component {
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
    let imageSource;
    this.state.kneeState === 0
      ? (imageSource = Img1)
      : this.state.kneeState === 1
        ? (imageSource = Img2)
        : this.state.kneeState === 2
          ? (imageSource = Img3)
          : this.state.kneeState === 3
            ? (imageSource = Img4)
            : (imageSource = Img5);
    return (
      <div id="LATMALCOTKITX_Main_Div">
        <div id="LATMALCOTKITX_Content_Wrapper">
          <div id="LATMALCOTKITX_Center_Wrapper">
            <div id="LATMALCOTKITX_Text_wrapper">
              <div id="LATMALCOTKITX_Heading1_Div">
                Learn about the Compartments of the Knee
              </div>
              <div className='gradient_div' >
                <img src={Bulb} alt="Bulb" style={{ width: '40px', height: '40px',margin:'5px' }} />
                <span className='test_span'>Test Your Knowledge</span>
              </div>
              <div id="LATMALCOTKITX_Text_Div">
                Click on the compartment name that matches the highlighted
                compartment.
              </div>
            </div>
            <div id="LATMALCOTKITX_Buttons_wrapper">
              <div id="LATMALCOTKITX_Pair_Buttons_wrapper">
                <Button
                  id="LATMALCOTKITX_Button"
                  variant="contained"
                  onClick={() => this.handleClick(2)}
                  style={
                    this.state.kneeState === 2 || this.state.kneeState > 2
                      ? { display: "none" }
                      : null
                  }
                >
                  Right Medial
                </Button>
                <Button
                  id="LATMALCOTKITX_Button"
                  variant="contained"
                  onClick={() => this.handleClick(3)}
                  style={
                    this.state.kneeState === 3 ||
                      this.state.kneeState > 3
                      ? { display: "none" }
                      : null
                  }
                >
                  Kneecap
                </Button>
              </div>
              <div id="LATMALCOTKITX_Pair_Buttons_wrapper">
                <Button
                  id="LATMALCOTKITX_Button"
                  variant="contained"
                  onClick={() => this.handleClick(1)}
                  style={
                    this.state.kneeState === 1 || this.state.kneeState > 1
                      ? { display: "none" }
                      : null
                  }
                >
                  Right Lateral
                </Button>
              </div>
            </div>
            <div id="LATMALCOTKITX_Image_Wrapper">
              <div id="LATMALCOTKITX_Image_Container">
                <img src={imageSource} alt="LATMALCOTKITX" />
              </div>
            </div>
            <div
              id="LATMALCOTKITX_Next_Button_Div"
            >
              <Button
                id="LATMALCOTKITX_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.Navigate(
                    BackPage
                  );
                }}
              >
                {" "}
                Back{" "}
              </Button>

              {
                this.state.kneeState === 3 &&
                <div className="tutorial-Complete-Box">
                  <div className="tutorial-Complete-Box-tick">
                    <CheckIcon fontSize={'large'}/>
                  </div>
                   Complete !
                </div>
              }
              <Button
                id="LATMALCOTKITX_Next_Button"
                variant="contained"
                disabled={this.state.kneeState === 3 ? false : true}
                onClick={() => {
                  
                  this.context.Navigate(
                   NextPage
                  );
                }}
                style={
                  this.state.kneeState === 3 ? { opacity: 1 } : { opacity: 0.5 }
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
LATCOTK.contextType = MyContext;
export default LATCOTK;

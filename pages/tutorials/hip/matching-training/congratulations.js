import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../helper/themeContext";

import Bone1Image from "../../../assets/bone1_Bitmap.png";
import GetData from "../../../Fetch/getDataUniversal";
import SemipolarLoading from "react-loadingg/lib/SemipolarLoading";
import PostData from "../../../Fetch/postDataUniversal";

import Image from 'next/image'

const tutorialCompleteId = 16;

class Congratulations extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }

  _checkComplete = () =>
  {
    if(this.context.checkGuesUserMode())
    {
      this.context.Navigate('/tutorials/hip/options')
    }
    else this._setComplete();
  }

  _setComplete = () => {
    let req = {
      id: tutorialCompleteId,
    };
    PostData(
      this.context.baseUrl + "/api/v1/user/tutorials/complete-tutorial",
      200,
      req,
      this.context.state.token,
      this._handleComplete
    );
  };

  _handleComplete = (response) => {
    if (response.ResponseCode === "Success") {
      let completed_tutorials = this.context.state.tutorials;
      completed_tutorials.push(tutorialCompleteId);
      this.context.multipleUpdateValueWithHistory(
        [{ key: "tutorials", value: completed_tutorials }],
        "/tutorials/hip/options"
      );
    } else {
      alert("unable to complete education! Please try again");
    }
  };

  // handleComplete= () =>
  // {
  //     this.setState({loading:true})
  //     GetData(this.context.baseUrl+'/api/v1/user/tutorials/completed',200,this.context.state.token,this.setMe);

  // }

  // setMe = (response) =>
  // {
  //     console.log(response)
  //     this.context.Navigate('/tutorials/knee/options')
  // }

  render() {
    return (
      <div id="Evaluaion_Welcome_Main_Div">
        {this.state.loading == true ? (
          <SemipolarLoading size={"large"} color={"#b4ec51"} />
        ) : (
          <div>
            <div id="Evaluaion_Welcome_Text_Wrapper">
              <div id="Evaluaion_Welcome_Heading1_Div">Congratulations</div>
              <div id="Evaluaion_Welcome_Neon_Line"></div>
              <div id="Evaluaion_Welcome_Heading2_Div">
                You have passed the X-ray Training Module. Here is how you
                scored:
                {/* <br/>
                        and Diagnosis */}
              </div>
              <div id="Evaluaion_Welcome_Text_Div">
                <span
                  style={{
                    display: "block",
                    marginBottom: "10px",
                    marginTop: "10px",
                    marginLeft: "20px",
                  }}
                >
                  AP Zone 1: 4/4
                  <br />
                  AP Zone 2: 4/4 <br />
                  Lateral Zone 1: 4/4 <br />
                  Lateral Zone 2: 4/4
                </span>
                Now you are ready to evaluate your own patient! <br /> <br />
                If you would like to more practice, click on “Try Training
                Again.”{" "}
              </div>
              <div id="Evaluaion_Welcome_Next_Button_Div">
                <Button
                  id="Evaluaion_Welcome_Next_Button"
                  style={{ marginRight: "20px" }}
                  variant="contained"
                  onClick={this._checkComplete}
                >
                  {" "}
                  Continue{" "}
                </Button>
                <Button
                  id="Evaluaion_Welcome_Next_Button"
                  variant="contained"
                  onClick={() => {
                    this.context.Navigate("./matching-tutorial");
                  }}
                >
                  {" "}
                  Try Training Again{" "}
                </Button>
              </div>
            </div>
            <div id="Evaluaion_Welcome_Image_div">
              <img 
                src={Bone1Image}
                alt="SBS"
                id="Evaluaion_Welcome_Image_Bone"
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}
Congratulations.contextType = MyContext;
export default Congratulations;

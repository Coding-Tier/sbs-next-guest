import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../../helper/themeContext";

import Bone1Image from "../../../../assets/bone1_Bitmap.png";

import PostData from "../../../../Fetch/postDataUniversal";

const tutorialCompleteId = 5;

class Congrats extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _checkComplete = () =>
  {
    if(this.context.checkGuesUserMode())
    {
      this.context.Navigate('/tutorials/knee/options')
    }
    else this._setComplete();
  }

  _setComplete = () =>
  {
    let req = {
      id:tutorialCompleteId
    }
    PostData(this.context.baseUrl + '/api/v1/user/tutorials/complete-tutorial',200,req,this.context.state.token,this._handleComplete)
  }

  _handleComplete = (response) =>
  {
    if (response.ResponseCode === "Success") {
      this.context.setCookie("tutorial-" + this.context.state.user_id, 2);
      let completed_tutorials = this.context.state.tutorials;
      completed_tutorials.push(tutorialCompleteId)
      this.context.multipleUpdateValueWithHistory([{ key: 'tutorials', value: completed_tutorials}], '/tutorials/knee/options')
    }
    else
    {
      alert('unable to complete education! Please try again');
    }
  }

  render() {
    return (
      <div id="Tutorials_Congrats_Main_Div">
        <div id="Tutorials_Congrats_Content_Wrapper">
          <div id="Tutorials_Congrats_Center_Wrapper">
            <div id="Tutorials_Congrats_Inner_Content_Wrapper">
              <div id="Tutorials_Congrats_Text_Wrapper">
                <div>
                  <div id="Tutorials_Congrats_Heading1_Div">Congratulations</div>
                  <div id="Tutorials_Congrats_Neon_Line"></div>
                  <div id="Tutorials_Congrats_Heading2_Div">You have finished the What You Knee'd To Know Education Module.</div>
                  <div id="Tutorials_Congrats_Heading2_Div">
                    You are now ready to start the X-ray Matching and Artificial Intelligence Module.
                  </div>
                </div>
              </div>
              <div id="Tutorials_Congrats_Image_div">
                <img src={Bone1Image} alt="SBS" id="Tutorials_Congrats_Image_Bone" />
              </div>
            </div>
            <div id="Tutorials_Congrats_Next_Button_Div">
              <Button
                id="Tutorials_Congrats_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.Navigate("./x-ray-matching-moderate-selected");
                }}>
                {" "}
                back{" "}
              </Button>
              <Button
                id="Tutorials_Congrats_Next_Button"
                variant="contained"
                onClick={this._checkComplete}>
                {" "}
                BACK TO HOME{" "}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Congrats.contextType = MyContext;
export default Congrats;

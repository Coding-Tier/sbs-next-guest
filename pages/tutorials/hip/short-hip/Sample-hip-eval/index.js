import React, { Component } from "react";
import Button from "@material-ui/core/Button";
// import "../SBSVideo.css";
import MyContext from "../../../../helper/themeContext";
import ReactPlayer from 'react-player'
import SemipolarLoading from "react-loadingg/lib/SemipolarLoading";
import PostData from "../../../../Fetch/postDataUniversal";
// import { GetRequiredHipEdu } from "../../../../StoreFunctions/tutorialStoreFunction";

const NextPage = "/tutorials/hip/short-hip/Congrats"
const BackPage = "/tutorials/hip/short-hip/XMZ2";

class SampleHipEval extends Component {
  constructor(props) {
    super(props);
    this.state = { light: false, loading: true };
  }

  onVideoEnd = () => {
    this.setState({ light: true })
  }

  onVideoReady = () => {
    this.setState({ loading: false })
  }

  _setComplete = () =>
  {
    // let req = {
    // id:GetRequiredHipEdu()
    // }
    // PostData(this.context.baseUrl + '/api/v1/user/tutorials/complete-tutorial',200,req,this.context.state.token,this._handleComplete)
    this._handleComplete();
  }

  _handleComplete = (response) =>
  {
    this.context.Navigate(NextPage)
    // const tutorialCompleteId = GetRequiredHipEdu();

    // let completed_tutorials = this.context.state.tutorials;
    // completed_tutorials.push(tutorialCompleteId)

    // if (response.ResponseCode === "Success") {    
    //   this.context.multipleUpdateValueWithHistory([{ key: 'tutorials', value: completed_tutorials}], NextPage)
    // }
    // else
    // {
    // alert('unable to complete education! Please try again');
    // }
  }

  render() {
    return (
      <div id="SBSVideo_Main_Div">
        <div id="SBSVideo_Content_Wrapper">
          <div id="SBSVideo_Center_Wrapper">
            <div id="SBSVideo_Image_Wrapper">
              <div className="sbs-video-text-wrapper">
                <div id="SBSVideo_Heading1_Div">
                  Sample Hip Evaluation
                </div>
              </div>

              {this.state.loading == true ? (
                <SemipolarLoading size={"large"} color={"#b4ec51"} />
              )
                : null}
              <ReactPlayer onReady={this.onVideoReady}
                height='700px'
                width='1000px'
                url='https://vimeo.com/595396603/c275dbeda1' controls={true} playing={true} onEnded={this.onVideoEnd} light={this.state.light} />

            </div>
            <div id="SBSVideo_Next_Button_Div">
              <Button
                id="SBSVideo_Next_Button"
                variant="contained"
                onClick={this._setComplete}
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
SampleHipEval.contextType = MyContext;
export default SampleHipEval;

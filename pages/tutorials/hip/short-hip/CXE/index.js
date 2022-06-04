import React, { Component } from 'react';

import Button from "@material-ui/core/Button";

import MyContext from "../../../../helper/themeContext";
import ReactPlayer from 'react-player'
import SemipolarLoading from "react-loadingg/lib/SemipolarLoading";

const NextPage = "/tutorials/hip/short-hip/XMZ1";

class CXE extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() {
        return (
          <div id="SBSVideo_Main_Div">
          <div id="SBSVideo_Content_Wrapper">
            <div id="SBSVideo_Center_Wrapper">
              <div id="SBSVideo_Image_Wrapper">
                
    
                {this.state.loading == true ? (
                  <SemipolarLoading size={"large"} color={"#b4ec51"} />
                )
                  : null}
                <ReactPlayer onReady={this.onVideoReady}
                  height='700px'
                  width='1000px'
                  url='https://vimeo.com/691092596/5e518c6f52'  controls={true} playing={true} onEnded={this.onVideoEnd} light={this.state.light} />
    
              </div>
              <div id="SBSVideo_Next_Button_Div">
                <Button
                  id="SBSVideo_Next_Button"
                  variant="contained"
                  onClick={
                
                    ()=>this.context.Navigate(
                      NextPage
                    )
                  }
                >
                  {" "}Continue{" "}
                </Button>
              </div>
            </div>
          </div>
        </div>
        );
      }
}
 
export default CXE;
CXE.contextType = MyContext;




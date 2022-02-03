import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

import MyContext from '../../../../helper/themeContext';

import Bone1Image from '../../../../assets/bone1_Bitmap.png'




class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {  } 
    }

    
    render() { 
        return ( 
        
        <div id="Evaluaion_Welcome_Main_Div">

            <div  id="Evaluaion_Welcome_Text_Wrapper">
                <div id="Evaluaion_Welcome_Heading1_Div">
                    Hip & Knee <br/>
                    Step by Step
                </div>
                <div id="Evaluaion_Welcome_Neon_Line"></div>
                <div id="Evaluaion_Welcome_Heading2_Div">
                    X-ray Matching & Artificial Intelligence
                    {/* <br/>
                    and Diagnosis */}
                </div>
                <div id="Evaluaion_Welcome_Text_Div">
                    Walk through the X-ray review system and learn how to navigate the evaluation confirmation process.
                </div>
                <div id="Evaluaion_Welcome_Next_Button_Div">
                    <Button id="Evaluaion_Welcome_Next_Button" variant="contained" onClick={()=>{this.context.setCookie("tutorial-" + this.context.state.user_id,33); this.context.history.push('./video')}}> Continue </Button>
                </div>

            </div>
            <div id="Evaluaion_Welcome_Image_div">
                <img src={Bone1Image} alt="SBS" id="Evaluaion_Welcome_Image_Bone"/>   
            </div>
            

        </div> );
    }
}
Welcome.contextType=MyContext;
export default Welcome;
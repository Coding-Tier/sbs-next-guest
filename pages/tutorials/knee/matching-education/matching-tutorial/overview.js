import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

import Tick from '../../../../assets/button-tick.png';

// import './overview.css'
import MyContext from '../../../../helper/themeContext';
import { TextField } from '@material-ui/core';

import RightHipIconRed from '../../../../assets/right-knee-icon-red.png'
import BoneImage from '../../../../assets/bone3_Bitmap.png'

import Image from 'next/image'

class Overview extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div id="Evaluaion_XrayMatching_OverView_Content1_Wrapper">
                    <div id="Evaluaion_XrayMatching_OverView_Heading1_Div">
                        X-ray Evaluation
                    </div>
                    <div id="Evaluaion_XrayMatching_OverView_Heading2_Div">
                        Right Knee Sample Patient
                    </div>

                    <div id="Evaluaion_XrayMatching_EvalName_Content2_Outer_Wrapper">
                        <div id="Evaluaion_XrayMatching_EvalName_Content2_Wrapper" style={{ width: '40%', verticalAlign: 'middle' }}>

                            <div className="Evaluaion_XrayMatching_EvalName_Image_Left_Div">

                                <div className="Evaluaion_PatientProfile_Image_Left_Inner_Down" >
                                    <div className="Evaluaion_PatientProfile_Image_Left_Inner_Down_Content1">
                                        <TextField value={"Priority: 1"} style={{ width: '115px' }} variant="outlined" inputProps={{ className: "textbox-height" }} />

                                    </div>
                                    <div className="Evaluaion_PatientProfile_Image_Left_Inner_Down_Content2">
                                        <div style={{ color: 'white', marginBottom: '10px', fontSize: '18px' }}>
                                            RIGHT KNEE
                                                </div>
                                        <img  style={{ width: '40px', marginBottom: '20px' }} src={RightHipIconRed} />
                                    </div>

                                </div>
                            </div>

                            <div id="Evaluaion_XrayMatching_EvalName_Image_Bone_Div"> <img  src={BoneImage} alt="SBS" id="Evaluaion_XrayMatching_EvalName_Image_Bone" /></div>
                        </div>

                        {/* <div className="Tutorials_XrayMatchingEducation_Matching_Main_Content_Wrapper"> */}
                        <div className="Tutorials_XrayMatchingEducation_Matching_Overview_Wrapper" style={{ width: '60%', verticalAlign: 'middle' }}>
                            {this.props.Evaluation.Xrays.map((type, id) =>
                                <div key={id}>
                                    <div className="Evaluaion_XrayMatching_OverView_Label_Div">
                                        {type.name}
                                    </div>
                                    <div key={id} className="Evaluaion_XrayMatching_OverView_Box_Div">
                                        {
                                            type.xrays.map((xray, id) =>
                                                <div key={id}>
                                                    <div className="Evaluaion_XrayMatching_OverView_Box1_Content1">
                                                        <img  className="Evaluaion_XrayMatching_OverView_Box1_Content1_Image" alt={xray.name} src={xray.thumbnail} />
                                                    </div>
                                                    <div className="Evaluaion_XrayMatching_OverView_Box1_Content2">

                                                        {xray.isDone === true ?
                                                            <div className="aaaa">
                                                                <div className="Evaluaion_XrayMatching_OverView_Box_DisbaleText"> {xray.name} {xray.name == "Kneecap" ? "View" : null} </div>
                                                                <div className="Evaluaion_XrayMatching_OverView_Box_DisbaleText2"> <img  src={Tick} style={{ width: '16px' }} alt="done" /> &nbsp; Complete </div>
                                                            </div>
                                                            :
                                                            xray.enable === true ?
                                                                <Button className="Evaluaion_XrayMatching_OverView_Box_Button" variant="contained" onClick={() => this.props.handleClick(type.name, xray.name)}> {xray.name} </Button>
                                                                :
                                                                <div className="Evaluaion_XrayMatching_OverView_Box_DisbaleText"> {xray.name}  {xray.name == "Kneecap" ? "View" : null} </div>
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>

                            )}
                            {/* </div> */}
                            {/* {this.props.start===true?
                                <div id="Tutorials_XrayMatchingEducation_Matching_Overview_Explanation_Div">
                                    Click on Flexion view to start evaluating
                                </div>
                            :   null
                            } */}
                        </div>
                    </div>
                    {this.props.Next && <div id="Evaluaion_XrayMatching_Overview_Next_Button_Div">
                        <Button id="Evaluaion_XrayMatching_Overview_Next_Button" variant="contained" onClick={this.props.handleNextClick}> View X-ray Report Card </Button>
                    </div>}
                </div>
            </div>
        );
    }
}
Overview.contextType = MyContext;
export default Overview;
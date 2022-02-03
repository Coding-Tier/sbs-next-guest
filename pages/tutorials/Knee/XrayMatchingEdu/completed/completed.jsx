// JointSummary Screen...!

import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
// import "./LearnMoreGeneral.css";
import MyContext from '../../../../helper/themeContext';
import PostData from '../../../../Fetch/postDataUniversal';

const tutorialCompleteId = 6;
class Completed extends Component {
    constructor(props) {
        super(props);
        this.state = { ActiveImage: null, modal: false }
        console.log(props);
    }

    _checkComplete = () =>
    {
        if(this.context.checkGuesUserMode())
        {
        this.context.history.push('/tutorials/knee/options')
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

    // handleNextClick = () => {
    //     this.context.history.push('/tutorials/knee/options')
    // }

    handleBackClick = () => {
        this.context.history.push('/tutorials/matching-education/report')
    }

    render() {
        return (
            // Main container
            <div id="JointSummary-main-box">
                <div id="all-content-wrapper">
                    <div id="JointSummary-box-1">
                        {/* <div id="Joint_Summary_Heading_2">
                            {this.props.Joint_Name}
                        </div> */}
                        <div id="JointSummary-inner-box-1" style={{ maxWidth: '500px', textAlign: 'left' }}>
                            <p id="JointSummary-heading" style={{ textAlign: 'left' }}> Evaluation Complete! </p>


                            <div className="LearnMore-heading-1"
                                style={{ lineHeight: '1.5' }}>
                                <span className="LearnMore-heading-1-span"> You just have confirmed the evaluations of a right knee. Next, you will learn about another aspect of evaluating a knee: Patient Reported Surveys.</span>
                            </div>

                        </div>
                    </div>
                    <div id="RCPE-Welcome-box-2">
                        <div id="RCPE-Welcome-footer-div1">
                            <Button
                                id="RCPE-Welcome-btn-1"
                                variant="contained"
                                onClick={this.handleBackClick}
                            >
                                {" "} Back {" "}
                            </Button>
                        </div>

                        <div id="RCPE-Welcome-footer-div3">
                            <Button
                                id="JointSummary-btn-2"
                                variant="contained"
                                onClick={this._checkComplete}
                            >
                                {" "} Next {" "}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Completed.contextType = MyContext
export default Completed;
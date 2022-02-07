import React, { Component } from 'react';

import './resumeTutorial.css';
import { Button } from '@material-ui/core';
import { SemipolarLoading } from 'react-loadingg';
import MyContext from '../../helper/themeContext';

class ResumeTutorialSelect extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: false }
    }

    handleRecover = () => {
        let page = this.context.getCookie('tutorial-' + this.context.state.user_id);
        if (page == 1) { this.context.Navigate('/tutorials/sbs/video') }
        else if (page == 2) { this.context.Navigate('/tutorials/sbs/video2') }
        else if (page == 3) { this.context.Navigate('/tutorials/knee/knee-arthiritis/welcome') }
        else if (page == 4) { this.context.Navigate('/tutorials/knee/knee-arthiritis/overview') }
        else if (page == 5) { this.context.Navigate('/tutorials/knee/knee-arthiritis/knee-degeneration-and-arthritis-2') }
        else if (page == 6) { this.context.Navigate('/tutorials/knee/knee-arthiritis/knee-degeneration-and-arthritis') }
        else if (page == 7) { this.context.Navigate('/tutorials/knee/knee-arthiritis/compartments-of-the-knee') }
        else if (page == 8) { this.context.Navigate('/tutorials/knee/knee-arthiritis/viewing-degeneration-with-x-rays-copy') }
        else if (page == 9) { this.context.Navigate('/tutorials/knee/knee-arthiritis/learn-about-the-medial-and-lateral-compartments-of-the-knee') }
        else if (page == 10) { this.context.Navigate('/tutorials/knee/knee-arthiritis/viewing-degeneration-with-x-rays-the-kneecap-compartment') }
        else if (page == 11) { this.context.Navigate('/tutorials/knee/knee-arthiritis/compartments-of-the-knee-2') }
        else if (page == 12) { this.context.Navigate('/tutorials/knee/knee-arthiritis/evaluating-the-medial-and-lateral-compartments-v2') }
        else if (page == 13) { this.context.Navigate('/tutorials/knee/knee-arthiritis/evaluating-the-kneecap-compartment') }
        else if (page == 14) { this.context.Navigate('/tutorials/knee/knee-arthiritis/lateral-view') }
        else if (page == 15) { this.context.Navigate('/tutorials/knee/knee-arthiritis/obtaining-the-correct-x-rays') }
        else if (page == 16) { this.context.Navigate('/tutorials/knee/knee-arthiritis/summary-of-x-ray-views-necessary-based-on-patients-symptoms') }
        else if (page == 17) { this.context.Navigate('/tutorials/knee/knee-arthiritis/what-x-rays-would-you-request') }
        else if (page == 18) { this.context.Navigate('/tutorials/knee/knee-arthiritis/evaluating-knee-degeneration-with-x-rays') }
        else if (page == 19) { this.context.Navigate('/tutorials/knee/knee-arthiritis/how-to-identify-joint-space-narrowing-and-degeneration') }
        else if (page == 20) { this.context.Navigate('/tutorials/knee/knee-arthiritis/where-does-the-joint-space-start-and-end-for-the-medial-and-lateral-compartments') }
        else if (page == 21) { this.context.Navigate('/tutorials/knee/knee-arthiritis/where-does-the-joint-space-start-and-end-for-the-medial-and-lateral-compartments-2') }
        else if (page == 22) { this.context.Navigate('/tutorials/knee/knee-arthiritis/levels-of-joint-space-narrowing-degeneration') }
        else if (page == 23) { this.context.Navigate('/tutorials/knee/knee-arthiritis/joint-space-narrowing-medial-compartment') }
        else if (page == 24) { this.context.Navigate('/tutorials/knee/knee-arthiritis/joint-space-narrowing-lateral-compartment') }
        else if (page == 25) { this.context.Navigate('/tutorials/knee/knee-arthiritis/where-is-the-joint-space-for-the-kneecap-compartment') }
        else if (page == 26) { this.context.Navigate('/tutorials/knee/knee-arthiritis/you-must-look-at-the-joint-space-on-both-sides-of-the-kneecap') }
        else if (page == 27) { this.context.Navigate('/tutorials/knee/knee-arthiritis/joint-space-narrowing-kneecap-compartment') }
        else if (page == 28) { this.context.Navigate('/tutorials/knee/knee-arthiritis/x-ray-matching-a-tool-to-determine-levels-of-degeneration') }
        else if (page == 29) { this.context.Navigate('/tutorials/knee/knee-arthiritis/x-ray-matching-and-levels-of-degeneration') }
        else if (page == 30) { this.context.Navigate('/tutorials/knee/knee-arthiritis/x-ray-matching-moderate-selected') }
        else if (page == 31) { this.context.Navigate('/tutorials/knee/knee-arthiritis/congrats') }
        else if (page == 32) { this.context.Navigate('/tutorials/matching-education/welcome') }
        else if (page == 33) { this.context.Navigate('/tutorials/matching-education/video') }
        else if (page == 34) { this.context.Navigate('/tutorials/matching-education/lets-get-started') }
        else if (page == 35) { this.context.Navigate('/tutorials/matching-education/matching-tutorial') }
        else if (page == 36) { this.context.Navigate('/tutorials/matching-education/video2') }
        else if (page == 37) { this.context.Navigate('/tutorials/matching-education/report') }
        else if (page == 38) { this.context.Navigate('/tutorials/matching-training/welcome') }
        else if (page == 39) { this.context.Navigate('/tutorials/matching-training/matching-tutorial') }
        else if (page == 40) { this.context.Navigate('/tutorials/matching-training/congratulations') }
        else if (page == 41) { this.context.Navigate('/evaluation/welcome') }

        // else if(page==33){ this.context.Navigate('/tutorials/knee/knee-arthiritis/evaluating-the-kneecap-compartment')}

    }


    handleRefresh = () => {
        // this.setState({loading:true})
        // GetData(this.context.baseUrl+'./api/v1/delete/report',200,this.context.state.token,this.setMeTwo)

        this.context.setCookie('tutorial-' + this.context.state.user_id, '');
        this.props.Navigate('/tutorials/sbs/welcome')


        // this.context.discardLeft();
        // this.props.Navigate('/evaluation/welcome')
    }




    render() {
        return (

            <div className="Evaluation_ResumeEvaluation_Main_Div">
                { this.state.loading == true ?
                    <SemipolarLoading size={"large"} color={'#b4ec51'} /> :
                    <div className="Evaluation_ResumeEvaluation_Content_Wrapper">
                        {/* <div className="Evaluation_ResumeEvaluation_Heading2_Div">
                        You Have an Ongoing Evaluation
                    </div> */}
                        <div className="Evaluation_ResumeEvaluation_Text_Div">
                            Would you like to resume the education
                            where you left or start over?
                    </div>

                        <div className="Evaluation_ResumeEvaluation_Button_Div">
                            <Button className="Evaluation_ResumeEvaluation_Button" variant="contained" onClick={this.handleRecover}> Resume Where I Left Off </Button>
                        </div>
                        <div className="Evaluation_ResumeEvaluation_Button_Div">
                            <Button className="Evaluation_ResumeEvaluation_Button" variant="contained" onClick={this.handleRefresh}> Start Over </Button>
                        </div>

                    </div>
                }


            </div>);
    }
}
ResumeTutorialSelect.contextType = MyContext;
export default ResumeTutorialSelect;
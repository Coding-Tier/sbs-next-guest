import React, { Component } from 'react';

// import './resumeTutorial.css';
import { Button } from '@material-ui/core';
import MyContext from '../../helper/themeContext';
import SemipolarLoading from 'react-loadingg/lib/SemipolarLoading';
import GetData from '../../Fetch/getDataUniversal';

class ResumeTutorial extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: false }
    }

    handleDelete = () => {
        //call api to delete eva
        //navigate to offer 
        if (this.context.state.evaluation_stage > 0) {
            this.setState({ loading: true })
            GetData(this.context.baseUrl + './api/v1/delete/report', 200, this.context.state.token, this.setMe)
        }
        else this.props.Navigate('/start-over')
    }

    setMe = () => {
        this.context.setCookie('evaluation_stage', '', 0);
        this.context.setCookie('temp_report_id', '', 0);
        this.context.setCookie('temp_patient_id', '', 0);
        this.context.multipleUpdateValueWithHistory([{ key: 'evaluation_stage', value: null }, { key: 'temp_report_id', value: null }, { key: 'temp_patient_id', value: null }, { key: 'old', value: false }], '/start-over');
    }


    render() {
        return (
            <div className="Evaluation_ResumeEvaluation_Main_Div">
                {this.state.loading ?
                    <SemipolarLoading size={'large'} color={'#b4ec51'} />
                    :
                    <div className="Evaluation_ResumeEvaluation_Content_Wrapper">
                        <div className="Evaluation_ResumeEvaluation_Heading2_Div">
                            Welcome back to Hip & Knee Step by Step
                    </div>
                        <div className="Evaluation_ResumeEvaluation_Text_Div">
                            Would you like to resume your previous session?
                    </div>

                        <div className="Evaluation_ResumeEvaluation_Button_Div">
                            <Button className="Evaluation_ResumeEvaluation_Button" variant="contained" onClick={() => this.props.Navigate('/tutorials/resume-tutorial/recover')}>  {this.context.state.evaluation_stage > 0 ? 'Resume Tutorial' : 'Yes'} </Button>
                        </div>

                        {
                            this.context.state.evaluation_stage > 0 ?
                                <div className="Evaluation_ResumeEvaluation_Button_Div">
                                    <Button className="Evaluation_ResumeEvaluation_Button" variant="contained" onClick={() => this.props.Navigate('/evaluation/resume-evaluation/recover')}> Resume Evaluation </Button>
                                </div> : null
                        }

                        <div className="Evaluation_ResumeEvaluation_Button_Div">
                            <Button className="Evaluation_ResumeEvaluation_Button" variant="contained" onClick={this.handleDelete}> No, I would like to start over. </Button>
                        </div>


                    </div>
                }


            </div>);
    }
}

ResumeTutorial.contextType = MyContext;
export default ResumeTutorial;
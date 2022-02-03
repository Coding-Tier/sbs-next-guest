import React, { Component } from 'react';
import ShowReport from './showReport';
import Selected from './selected';
import { SemipolarLoading } from 'react-loadingg';
import MyContext from '../../../../helper/themeContext';


class Report extends Component {
    constructor(props) {
        super(props);
        this.state = {loading:true,View:"Report",ActiveState:null,ActiveType:null,ActiveXray:null,XrayImage:null }
    }

    componentDidMount()
    {
        if(!this.context.state.MatchingEvaluation)
        {
            console.log('no matching evaluations');
            this.context.history.push("/tutorials/matching-education/welcome");
        }

        else this.setState({loading:false,Evaluation:this.context.state.MatchingEvaluation});
        console.log(this.context.state.MatchingEvaluation)

    }

    handleView = (View) =>
    {
        this.setState({View})
    }

    setActive = (ActiveState,ActiveType,ActiveXray,XrayImage) =>
    {
        console.log(ActiveState)
        this.setState({ActiveState,ActiveType,ActiveXray,XrayImage})
    }

    render() { 
        return ( 
            this.state.loading===true?
            <div id="Evaluaion_XrayMatching_Intro_Main_Div">
                <SemipolarLoading size={"large"} color={'#b4ec51'}/>
            </div>
            :
            <div>
                {this.state.View==="Report" && <ShowReport handleView={(View)=>this.handleView(View)} handleState={(ActiveState,ActiveType,ActiveXray,XrayImage)=>this.setActive(ActiveState,ActiveType,ActiveXray,XrayImage)} Evaluation={this.state.Evaluation} />}
                {this.state.View==="Selected" && <Selected Image={this.state.XrayImage} State={this.state.ActiveState} Type={this.state.ActiveType} Xray={this.state.ActiveXray} handleView={(View)=>this.handleView(View)} handleState={(ActiveState,ActiveType,ActiveXray,XrayImage)=>this.setActive(ActiveState,ActiveType,ActiveXray,XrayImage)} />}
            </div>
        );
    }
}
 
Report.contextType = MyContext;
export default Report;
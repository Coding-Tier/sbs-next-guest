import React, { Component } from 'react';


import Overview from './overview';
import Matching from './matching';

import Bone1Image from '../../../../assets/bone3_Bitmap.png'
import MFV from '../../../../assets/medial-flexion.png'
import MNFV from '../../../../assets/medial-nonflexion.png'
import LFV from '../../../../assets/lateral-flexion.png'
import LNFV from '../../../../assets/lateral-nonflexion.png'
import KV from '../../../../assets/kneecapview.jpg'

import MFVUP from '../../../../assets/matching-education-medial-flexion-up.png'
import MNFVUP from '../../../../assets/matching-education-medial-nonflexion-up.png'
import LFVUP from '../../../../assets/matching-education-lateral-flexion-up.png'
import LNFVUP from '../../../../assets/matching-education-lateral-nonflexion-up.png'
import KVUP from '../../../../assets/matching_tutorial_keencap_up.png'

import MFVUP1 from "../../../../assets/eval-comp-xrays/medial-flexion-up-1.png";
import MNFVUP1 from "../../../../assets/eval-comp-xrays/medial-nonflexion-up-1.png";
import LFVUP1 from "../../../../assets/eval-comp-xrays/lateral-flexion-up-1.png";
import LNFVUP1 from "../../../../assets/eval-comp-xrays/lateral-nonflexion-up-1.png";
import KVUP1 from "../../../../assets/eval-comp-xrays/kneecap-up-1.png";

import MFVUP2 from "../../../../assets/eval-comp-xrays/medial-flexion-up-2.png";
import MNFVUP2 from "../../../../assets/eval-comp-xrays/medial-nonflexion-up-2.png";
import LFVUP2 from "../../../../assets/eval-comp-xrays/lateral-flexion-up-2.png";
import LNFVUP2 from "../../../../assets/eval-comp-xrays/lateral-nonflexion-up-2.png";
import KVUP2 from "../../../../assets/eval-comp-xrays/kneecap-up-2.png";

import MFVUP3 from "../../../../assets/eval-comp-xrays/medial-flexion-up-3.png";
import MNFVUP3 from "../../../../assets/eval-comp-xrays/medial-nonflexion-up-3.png";
import LFVUP3 from "../../../../assets/eval-comp-xrays/lateral-flexion-up-3.png";
import LNFVUP3 from "../../../../assets/eval-comp-xrays/lateral-nonflexion-up-3.png";
import KVUP3 from "../../../../assets/eval-comp-xrays/kneecap-up-3.png";

import MFVUP4 from "../../../../assets/eval-comp-xrays/medial-flexion-up-4.png";
import MNFVUP4 from "../../../../assets/eval-comp-xrays/medial-nonflexion-up-4.png";
import LFVUP4 from "../../../../assets/eval-comp-xrays/lateral-flexion-up-4.png";
import LNFVUP4 from "../../../../assets/eval-comp-xrays/lateral-nonflexion-up-4.png";
import KVUP4 from "../../../../assets/eval-comp-xrays/kneecap-up-4.png";

import CEimage from '../../../../assets/eval-comp-xrays/cannotEval.jpg'

// import './xrayMatching.css';
import MyContext from '../../../../helper/themeContext';
import { SemipolarLoading } from 'react-loadingg';


let BluePrint_Evaluation = 
    {
        name:'Right Knee',image:Bone1Image  , joint_id:'3',
        Xrays:[ 
            {name:'Medial',id:1,isDone:false,enable:true,xrays:[{name:'Flexion View',id:1,image:null,isDone:false,enable:true,state:null,state_id:null,notes:null,thumbnail:MFV,up:MFVUP,up1:MFVUP1,up2:MFVUP2,up3:MFVUP3,up4:MFVUP4,up5:CEimage,prediction:'nearendstage'},{name:'Non-Flexion View',image:null,id:2,isDone:false,enable:false,state:null,state_id:null,notes:null,thumbnail:MNFV,up:MNFVUP,up1:MNFVUP1,up2:MNFVUP2,up3:MNFVUP3,up4:MNFVUP4,up5:CEimage,prediction:'nearendstage'}]},
            {name:'Lateral',id:2,isDone:false,enable:false,xrays:[{name:'Flexion View',id:1,image:null,isDone:false,enable:false,state:null,state_id:null,notes:null,thumbnail:LFV,up:LFVUP,up1:LFVUP1,up2:LFVUP2,up3:LFVUP3,up4:LFVUP4,up5:CEimage,prediction:'normal'},{name:'Non-Flexion View',image:null,id:2,isDone:false,enable:false,state:null,state_id:null,notes:null,thumbnail:LNFV,up:LNFVUP,up1:LNFVUP1,up2:LNFVUP2,up3:LNFVUP3,up4:LNFVUP4,up5:CEimage,prediction:'normal'}]},
            {name:'Kneecap',id:3,isDone:false,enable:false,xrays:[{name:'Kneecap',id:3,image:null,isDone:false,enable:false,state:null,state_id:null,notes:null,thumbnail:KV,up:KVUP,up1:KVUP1,up2:KVUP2,up3:KVUP3,up4:KVUP4,up5:CEimage,prediction:'endstage'}]},
        ] 
    }


class MatchingTutorial extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Next:false,
            Evaluation:{},
            activeId:0,
            ActivePage:'Overview',
            ActiveType:null,
            ActiveXray:null,
            Next:false,
            req:[],
            start:true,
            loading:true,
        
        }
    }

    componentDidMount()
    {
        let Evaluation = JSON.parse(JSON.stringify(BluePrint_Evaluation))
        this.setState({Evaluation,loading:false});
    }


    handleOverviewClick = (ActiveType,ActiveXray) =>
    {
        let Evaluation=this.state.Evaluation;
        let ActiveTypeIndex=Evaluation.Xrays.findIndex(ev=>ev.name===ActiveType);
        let ActiveXrayIndex=Evaluation.Xrays[ActiveTypeIndex].xrays.findIndex(eva=>eva.name===ActiveXray);
        console.log(ActiveTypeIndex,'ActiveTypeIndex')
        console.log(ActiveXrayIndex,'ActiveXrayIndex')
        this.setState({ActivePage:'Matching',ActiveType,ActiveXray,ActiveXrayIndex,ActiveTypeIndex,start:false})
    }
    handleMatchingClick = (state,notes) =>
    {
        let Evaluation=this.state.Evaluation;
        let type=Evaluation.Xrays.find(type => type.name===this.state.ActiveType)
        let Xray=type.xrays.find(xray => xray.name===this.state.ActiveXray)
        let XrayIndex=type.xrays.findIndex(xray => xray.name===this.state.ActiveXray)

        if(type.name==="Medial")
        {
            if(Xray.name==="Flexion View")
            {
                this.context.updateValue('TMFVNotes',notes);
            }

            else if(Xray.name==="Non-Flexion View")
            {
                this.context.updateValue('TMNFVNotes',notes); 
            }
        }

        else if(type.name==="Lateral")
        {
            if(Xray.name==="Flexion View")
            {
                this.context.updateValue('TLFVNotes',notes);
            }

            else if(Xray.name==="Non-Flexion View")
            {
                this.context.updateValue('TLNFVNotes',notes); 
            }
        }

        else if(type.name==="Kneecap")
        {
            this.context.updateValue('TKCVNotes',notes); 
        }
        Xray.state=state;
        Xray.notes=notes;
        Xray.isDone=true;

        if(type.xrays[XrayIndex+1] && type.xrays[XrayIndex+1]!==null)
        {
            type.xrays[XrayIndex+1].enable=true;
        }
        else 
        {
            type.isDone=true;
            let typeIndex=Evaluation.Xrays.findIndex(type => type.name===this.state.ActiveType)
            if( Evaluation.Xrays[typeIndex+1] &&  Evaluation.Xrays[typeIndex+1]!==null)
            {
                Evaluation.Xrays[typeIndex+1].enable=true;
                Evaluation.Xrays[typeIndex+1].xrays[0].enable=true;
            }

            else 
            {
                // Next=true;
                this.setState({Next:true})          
            }
            

        }
        this.setState({ActivePage:'Overview'})
    }

    
    handleNextClick = async () =>
    {
        // this.context.updateValue('Evaluations',this.state.Evaluations)
        // this.context.Navigate('./report')
        // await this.handleReportUpload();
        // this.context.updateSession();
        // this.context.setCookie("tutorial-" + this.context.state.user_id,36);
        // this.context.Navigate('./report')

        this.context.multipleUpdateValueWithHistory([{key:'MatchingEvaluation',value:this.state.Evaluation}],'./report')
    }

    render() { 
        let Next = this.state.Next;
        return ( 
            <div id="Evaluaion_XrayMatching_Intro_Main_Div">
                {this.state.loading===true?<SemipolarLoading size={"large"} color={'#b4ec51'}/>
            
            
                :   <div>
                        {
                            this.state.ActivePage==='Overview' && <Overview start={this.state.start} Next={Next} Evaluation={this.state.Evaluation} handleClick={(ActiveType,ActiveXray)=>this.handleOverviewClick(ActiveType,ActiveXray)} handleNextClick={this.handleNextClick}/>
                        }
                        {
                            this.state.ActivePage==='Matching' && <Matching   eval={this.state.Evaluation} ActiveTypeIndex={this.state.ActiveTypeIndex}  ActiveXrayIndex={this.state.ActiveXrayIndex} ActiveType={this.state.ActiveType} ActiveXray={this.state.ActiveXray} handleClick={(state,notes)=>this.handleMatchingClick(state,notes)}/>
                        }
                    </div>
                }
               
               
            </div>
        );
    }
}
MatchingTutorial.contextType=MyContext;
export default MatchingTutorial;
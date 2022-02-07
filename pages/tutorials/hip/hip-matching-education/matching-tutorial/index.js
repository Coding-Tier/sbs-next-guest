import React, { Component } from "react";

import Overview from "./overview";
import Matching from "./matching";

import Bone1Image from "../../../../assets/bone3_Bitmap.png";
import MFV from "../../../../assets/eval-comp-xrays/thumb/Right AP Z1.png";
import MNFV from "../../../../assets/eval-comp-xrays/thumb/Right AP Z2.png";
import LFV from "../../../../assets/eval-comp-xrays/thumb/Right Lateral Z1.png";
import LNFV from "../../../../assets/eval-comp-xrays/thumb/Right Lateral Z2.png";


import MFVUP from "../../../../assets/hip/xray_ai/Asset5APZ1.png";
import MNFVUP from "../../../../assets/hip/xray_ai/Asset6APZ2.png";
import LFVUP from "../../../../assets/hip/xray_ai/Asset7LateralZ1.png";
import LNFVUP from "../../../../assets/hip/xray_ai/Asset8LateralZ2.png";

// import MFVUP1 from "../../../assets/hip/xray_ai/compa/AP_Normal_Z1.png";
// import MFVUP2 from "../../../assets/hip/xray_ai/compa/AP_Moderate_Z1.png";
// import MFVUP3 from "../../../assets/hip/xray_ai/compa/AP_NES_Z1.png";
// import MFVUP4 from "../../../assets/hip/xray_ai/compa/AP_ES_Z1.png";

// import MNFVUP1 from "../../../assets/hip/xray_ai/compa/AP_Normal_Z2.png";
// import MNFVUP2 from "../../../assets/hip/xray_ai/compa/AP_Moderate_Z2.png";
// import MNFVUP3 from "../../../assets/hip/xray_ai/compa/AP_NES_Z2.png";
// import MNFVUP4 from "../../../assets/hip/xray_ai/compa/AP_ES_Z2.png";

// import LFVUP1 from "../../../assets/hip/xray_ai/compa/Lateral_Normal_Z1.png";
// import LFVUP2 from "../../../assets/hip/xray_ai/compa/Lateral_Moderate_Z1.png";
// import LFVUP3 from "../../../assets/hip/xray_ai/compa/Lateral_NES_Z1.png";
// import LFVUP4 from "../../../assets/hip/xray_ai/compa/Lateral_End Stage_Z1.png";

// import LNFVUP1 from "../../../assets/hip/xray_ai/compa/Lateral_Normal_Z2.png";
// import LNFVUP2 from "../../../assets/hip/xray_ai/compa/Lateral_Moderate_Z2.png";
// import LNFVUP3 from "../../../assets/hip/xray_ai/compa/Lateral_NES_Z2.png";
// import LNFVUP4 from "../../../assets/hip/xray_ai/compa/Lateral_End Stage_Z2.png";

import CEimage from "../../../../assets/eval-comp-xrays/cannotEval.jpg";

// import './xrayMatching.css';
import MyContext from "../../../../helper/themeContext";
import { SemipolarLoading } from "react-loadingg";

//AP PELVIS ZONE1
const MFVUP1 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2Fcomparision_images_global%2FAP_Normal_Z1.png?alt=media";
const MFVUP2 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2Fcomparision_images_global%2FAP_Moderate_Z1.png?alt=media";
const MFVUP3 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2Fcomparision_images_global%2FAP_NES_Z1.png?alt=media";
const MFVUP4 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2Fcomparision_images_global%2FAP_ES_Z1.png?alt=media";

//AP PELVIS ZONE2
const MNFVUP1 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2Fcomparision_images_global%2FAP_Normal_Z2.png?alt=media";
const MNFVUP2 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2Fcomparision_images_global%2FAP_Moderate_Z2.png?alt=media";
const MNFVUP3 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2Fcomparision_images_global%2FAP_NES_Z2.png?alt=media";
const MNFVUP4 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2Fcomparision_images_global%2FAP_ES_Z2.png?alt=media";


//LATERAL ZONE 1
const LFVUP1 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2Fcomparision_images_global%2FLateral_Normal_Z1.png?alt=media";
const LFVUP2 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2Fcomparision_images_global%2FLateral_Moderate_Z1.png?alt=media";
const LFVUP3 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2Fcomparision_images_global%2FLateral_NES_Z1.png?alt=media";
const LFVUP4 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2Fcomparision_images_global%2FLateral_ES_Z1.png?alt=media";

//LATERAL ZONE 2
const LNFVUP1 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2Fcomparision_images_global%2FLateral_Normal_Z2.png?alt=media";
const LNFVUP2 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2Fcomparision_images_global%2FLateral_Moderate_Z2.png?alt=media";
const LNFVUP3 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2Fcomparision_images_global%2FLateral_NES_Z2.png?alt=media";
const LNFVUP4 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/tutorialassets%2Fhip%2Fcomparision_images_global%2FLateral_ES_Z2.png?alt=media";

let BluePrint_Evaluation = {
  name: "Right Hip",
  image: Bone1Image,
  joint_id: "3",
  Xrays: [
    {
      name: "AP Pelvis",
      id: 1,
      isDone: false,
      enable: true,
      xrays: [
        {
          name: "Right Zone 1",
          id: 1,
          image: null,
          isDone: false,
          enable: true,
          state: null,
          state_id: null,
          notes: null,
          thumbnail: MFV,
          up: MFVUP,
          up1: MFVUP1,
          up2: MFVUP2,
          up3: MFVUP3,
          up4: MFVUP4,
          up5: CEimage,
          prediction: "endstage",
        },
        {
          name: "Right Zone 2",
          image: null,
          id: 2,
          isDone: false,
          enable: false,
          state: null,
          state_id: null,
          notes: null,
          thumbnail: MNFV,
          up: MNFVUP,
          up1: MNFVUP1,
          up2: MNFVUP2,
          up3: MNFVUP3,
          up4: MNFVUP4,
          up5: CEimage,
          prediction: "normal",
        },
      ],
    },
    {
      name: "Lateral View",
      id: 2,
      isDone: false,
      enable: false,
      xrays: [
        {
          name: "Right Zone 1",
          id: 1,
          image: null,
          isDone: false,
          enable: false,
          state: null,
          state_id: null,
          notes: null,
          thumbnail: LFV,
          up: LFVUP,
          up1: LFVUP1,
          up2: LFVUP2,
          up3: LFVUP3,
          up4: LFVUP4,
          up5: CEimage,
          prediction: "nearendstage",
        },
        {
          name: "Right Zone 2",
          image: null,
          id: 2,
          isDone: false,
          enable: false,
          state: null,
          state_id: null,
          notes: null,
          thumbnail: LNFV,
          up: LNFVUP,
          up1: LNFVUP1,
          up2: LNFVUP2,
          up3: LNFVUP3,
          up4: LNFVUP4,
          up5: CEimage,
          prediction: "normal",
        },
      ],
    },
    // {name:'Kneecap',id:3,isDone:false,enable:false,xrays:[{name:'Kneecap',id:3,image:null,isDone:false,enable:false,state:null,state_id:null,notes:null,thumbnail:KV,up:KVUP,up1:KVUP1,up2:KVUP2,up3:KVUP3,up4:KVUP4,up5:CEimage,prediction:'endstage'}]},
  ],
};

class MatchingTutorial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Next: false,
      Evaluation: {},
      activeId: 0,
      ActivePage: "Overview",
      ActiveType: null,
      ActiveXray: null,
      Next: false,
      req: [],
      start: true,
      loading: true,
    };
  }

  componentDidMount() {
    let Evaluation = JSON.parse(JSON.stringify(BluePrint_Evaluation));
    this.setState({ Evaluation, loading: false });
  }

  handleOverviewClick = (ActiveType, ActiveXray) => {
    let Evaluation = this.state.Evaluation;
    let ActiveTypeIndex = Evaluation.Xrays.findIndex(
      (ev) => ev.name === ActiveType
    );
    let ActiveXrayIndex = Evaluation.Xrays[ActiveTypeIndex].xrays.findIndex(
      (eva) => eva.name === ActiveXray
    );
    console.log(ActiveTypeIndex, "ActiveTypeIndex");
    console.log(ActiveXrayIndex, "ActiveXrayIndex");
    this.setState({
      ActivePage: "Matching",
      ActiveType,
      ActiveXray,
      ActiveXrayIndex,
      ActiveTypeIndex,
      start: false,
    });
  };
  handleMatchingClick = (state, notes) => {
    let Evaluation = this.state.Evaluation;
    let type = Evaluation.Xrays.find(
      (type) => type.name === this.state.ActiveType
    );
    let Xray = type.xrays.find((xray) => xray.name === this.state.ActiveXray);
    let XrayIndex = type.xrays.findIndex(
      (xray) => xray.name === this.state.ActiveXray
    );

    if (type.name === "Medial") {
      if (Xray.name === "Flexion View") {
        this.context.updateValue("TMFVNotes", notes);
      } else if (Xray.name === "Non-Flexion View") {
        this.context.updateValue("TMNFVNotes", notes);
      }
    } else if (type.name === "Lateral") {
      if (Xray.name === "Flexion View") {
        this.context.updateValue("TLFVNotes", notes);
      } else if (Xray.name === "Non-Flexion View") {
        this.context.updateValue("TLNFVNotes", notes);
      }
    } else if (type.name === "Kneecap") {
      this.context.updateValue("TKCVNotes", notes);
    }
    Xray.state = state;
    Xray.notes = notes;
    Xray.isDone = true;

    if (type.xrays[XrayIndex + 1] && type.xrays[XrayIndex + 1] !== null) {
      type.xrays[XrayIndex + 1].enable = true;
    } else {
      type.isDone = true;
      let typeIndex = Evaluation.Xrays.findIndex(
        (type) => type.name === this.state.ActiveType
      );
      if (
        Evaluation.Xrays[typeIndex + 1] &&
        Evaluation.Xrays[typeIndex + 1] !== null
      ) {
        Evaluation.Xrays[typeIndex + 1].enable = true;
        Evaluation.Xrays[typeIndex + 1].xrays[0].enable = true;
      } else {
        // Next=true;
        this.setState({ Next: true });
      }
    }
    this.setState({ ActivePage: "Overview" });
  };

  handleNextClick = async () => {
    // this.context.updateValue('Evaluations',this.state.Evaluations)
    // this.context.Navigate('./report')
    // await this.handleReportUpload();
    // this.context.updateSession();
    // this.context.Navigate('./report')

    this.context.multipleUpdateValueWithHistory(
      [{ key: "MatchingEvaluation", value: this.state.Evaluation }],
      "./report"
    );
  };

  render() {
    let Next = this.state.Next;
    return (
      <div id="Evaluaion_XrayMatching_Intro_Main_Div">
        {this.state.loading === true ? (
          <SemipolarLoading size={"large"} color={"#b4ec51"} />
        ) : (
          <div>
            {this.state.ActivePage === "Overview" && (
              <Overview
                start={this.state.start}
                Next={Next}
                Evaluation={this.state.Evaluation}
                handleClick={(ActiveType, ActiveXray) =>
                  this.handleOverviewClick(ActiveType, ActiveXray)
                }
                handleNextClick={this.handleNextClick}
              />
            )}
            {this.state.ActivePage === "Matching" && (
              <Matching
                eval={this.state.Evaluation}
                ActiveTypeIndex={this.state.ActiveTypeIndex}
                ActiveXrayIndex={this.state.ActiveXrayIndex}
                ActiveType={this.state.ActiveType}
                ActiveXray={this.state.ActiveXray}
                handleClick={(state, notes) =>
                  this.handleMatchingClick(state, notes)
                }
              />
            )}
          </div>
        )}
      </div>
    );
  }
}
MatchingTutorial.contextType = MyContext;
export default MatchingTutorial;

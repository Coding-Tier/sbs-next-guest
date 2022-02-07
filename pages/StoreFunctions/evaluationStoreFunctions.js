import React from "react";

import GetDataJson from "../Fetch/getDataJsonAsync";

//images

//general
import Bone1Image from "../assets/bone3_Bitmap.png";

//upload-xray-thumbnails
import Xray1 from "../assets/uploadBoxThumb/xray1.jpg";
import Xray2 from "../assets/uploadBoxThumb/xray2.jpg";
import Xray3 from "../assets/uploadBoxThumb/xray3.jpg";
import Xray4Left from "../assets/uploadBoxThumb/xray4Left.jpg";
import Xray4Right from "../assets/uploadBoxThumb/xray4Right.jpg";
import UNIKnee from "../assets/uploadBoxThumb/unilateral_knee.jpg";
import RightFrogXrayThumb from "../assets/uploadBoxThumb/right_frog_lat.jpg";
import LeftFrogXrayThumb from "../assets/uploadBoxThumb/left_frog_lat.jpg";
import ApPelvisXrayThumb from "../assets/uploadBoxThumb/pelvis.jpg";

//matching evaluation static images

//left hip thumbnails
import LAPZ1 from "../assets/eval-comp-xrays/thumb/Left AP Z1.png";
import LAPZ2 from "../assets/eval-comp-xrays/thumb/Left AP Z2.png";
import LLZ1 from "../assets/eval-comp-xrays/thumb/Left Lateral Z1.png";
import LLZ2 from "../assets/eval-comp-xrays/thumb/Left Lateral Z2.png";

//right hip thumbnails
import RAPZ1 from "../assets/eval-comp-xrays/thumb/Right AP Z1.png";
import RAPZ2 from "../assets/eval-comp-xrays/thumb/Right AP Z2.png";
import RLZ1 from "../assets/eval-comp-xrays/thumb/Right Lateral Z1.png";
import RLZ2 from "../assets/eval-comp-xrays/thumb/Right Lateral Z1.png";

//right knee thumbnails
import MFV from "../assets/medial-flexion.png";
import MNFV from "../assets/medial-nonflexion.png";
import LFV from "../assets/lateral-flexion.png";
import LNFV from "../assets/lateral-nonflexion.png";
import KV from "../assets/kneecapview.jpg";

//left knee thumbnails
import LMFV from "../assets/left-medial-flexion.png";
import LMNFV from "../assets/left-medial-nonflexion.png";
import LLFV from "../assets/left-lateral-flexion.png";
import LLNFV from "../assets/left-lateral-nonflexion.png";

//right-knee-matching-dummy-images
import MFVUP from "../assets/medial-flexion-up.png";
import MNFVUP from "../assets/medial-nonflexion-up.png";
import LFVUP from "../assets/lateral-flexion-up.png";
import LNFVUP from "../assets/lateral-nonflexion-up.png";
import KVUP from "../assets/kneecap-up.png";

//left-knee-matching-dummy-images
import LMFVUP from "../assets/left-medial-flexion-up.png";
import LMNFVUP from "../assets/left-medial-nonflexion-up.png";
import LLFVUP from "../assets/left-lateral-flexion-up.png";
import LLNFVUP from "../assets/left-lateral-nonflexion-up.png";
import LKVUP from "../assets/left-kneecap-up.png";

//matching images

//Hip Pelvis Z1
// import APZ1UP1 from "../assets/eval-comp-xrays/hip/ap/AP_Normal_Z1.png"; //normal
// import APZ1UP2 from "../assets/eval-comp-xrays/hip/ap/AP_Moderate_Z1.png"; //moderate
// import APZ1UP3 from "../assets/eval-comp-xrays/hip/ap/AP_NES_Z1.png"; //near end stage
// import APZ1UP4 from "../assets/eval-comp-xrays/hip/ap/AP_ES_Z1.png"; //end stage



//Hip Pelvis Z2
// import APZ2UP1 from "../assets/eval-comp-xrays/hip/ap/AP_Normal_Z2.png"; //normal
// import APZ2UP2 from "../assets/eval-comp-xrays/hip/ap/AP_Moderate_Z2.png"; //moderate
// import APZ2UP3 from "../assets/eval-comp-xrays/hip/ap/AP_NES_Z2.png"; //near end stage
// import APZ2UP4 from "../assets/eval-comp-xrays/hip/ap/AP_ES_Z2.png"; //end stage



//Lateral Z1
// import LZ1UP1 from "../assets/eval-comp-xrays/hip/lateral/Lateral_Normal_Z1.png"; //normal
// import LZ1UP2 from "../assets/eval-comp-xrays/hip/lateral/Lateral_Moderate_Z1.png"; //moderate
// import LZ1UP3 from "../assets/eval-comp-xrays/hip/lateral/Lateral_NES_Z1.png"; //near end stage
// import LZ1UP4 from "../assets/eval-comp-xrays/hip/lateral/Lateral_End Stage_Z1.png"; //end stage



//Lateral Z2
// import LZ2UP1 from "../assets/eval-comp-xrays/hip/lateral/Lateral_Normal_Z2.png"; //normal
// import LZ2UP2 from "../assets/eval-comp-xrays/hip/lateral/Lateral_Moderate_Z2.png"; //moderate
// import LZ2UP3 from "../assets/eval-comp-xrays/hip/lateral/Lateral_NES_Z2.png"; //near end stage
// import LZ2UP4 from "../assets/eval-comp-xrays/hip/lateral/Lateral_End Stage_Z2.png"; //end stage



//normal
import MFVUP1 from "../assets/eval-comp-xrays/medial-flexion-up-1.png";
import MNFVUP1 from "../assets/eval-comp-xrays/medial-nonflexion-up-1.png";
import LFVUP1 from "../assets/eval-comp-xrays/lateral-flexion-up-1.png";
import LNFVUP1 from "../assets/eval-comp-xrays/lateral-nonflexion-up-1.png";
import KVUP1 from "../assets/eval-comp-xrays/kneecap-up-1.png";

//moderate
import MFVUP2 from "../assets/eval-comp-xrays/medial-flexion-up-2.png";
import MNFVUP2 from "../assets/eval-comp-xrays/medial-nonflexion-up-2.png";
import LFVUP2 from "../assets/eval-comp-xrays/lateral-flexion-up-2.png";
import LNFVUP2 from "../assets/eval-comp-xrays/lateral-nonflexion-up-2.png";
import KVUP2 from "../assets/eval-comp-xrays/kneecap-up-2.png";

//near-end-stage
import MFVUP3 from "../assets/eval-comp-xrays/medial-flexion-up-3.png";
import MNFVUP3 from "../assets/eval-comp-xrays/medial-nonflexion-up-3.png";
import LFVUP3 from "../assets/eval-comp-xrays/lateral-flexion-up-3.png";
import LNFVUP3 from "../assets/eval-comp-xrays/lateral-nonflexion-up-3.png";
import KVUP3 from "../assets/eval-comp-xrays/kneecap-up-3.png";

//end-stage
import MFVUP4 from "../assets/eval-comp-xrays/medial-flexion-up-4.png";
import MNFVUP4 from "../assets/eval-comp-xrays/medial-nonflexion-up-4.png";
import LFVUP4 from "../assets/eval-comp-xrays/lateral-flexion-up-4.png";
import LNFVUP4 from "../assets/eval-comp-xrays/lateral-nonflexion-up-4.png";
import KVUP4 from "../assets/eval-comp-xrays/kneecap-up-4.png";

//cannot-eval-image
import CEimage from "../assets/eval-comp-xrays/cannotEval.jpg";

const APZ1UP1 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/assets%2Feval-comp-xrays%2Fhip%2Fap%2FAP_Normal_Z1.png?alt=media"; //normal
const APZ1UP2 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/assets%2Feval-comp-xrays%2Fhip%2Fap%2FAP_Moderate_Z1.png?alt=media"; //moderate
const APZ1UP3 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/assets%2Feval-comp-xrays%2Fhip%2Fap%2FAP_NES_Z1.png?alt=media"; //near end stage
const APZ1UP4 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/assets%2Feval-comp-xrays%2Fhip%2Fap%2FAP_ES_Z1.png?alt=media"; //end stage

const APZ2UP1 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/assets%2Feval-comp-xrays%2Fhip%2Fap%2FAP_Normal_Z2.png?alt=media"; //normal
const APZ2UP2 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/assets%2Feval-comp-xrays%2Fhip%2Fap%2FAP_Moderate_Z2.png?alt=media"; //moderate
const APZ2UP3 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/assets%2Feval-comp-xrays%2Fhip%2Fap%2FAP_NES_Z2.png?alt=media"; //near end stage
const APZ2UP4 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/assets%2Feval-comp-xrays%2Fhip%2Fap%2FAP_ES_Z2.png?alt=media"; //end stage

const LZ1UP1 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/assets%2Feval-comp-xrays%2Fhip%2Flateral%2FLateral_Normal_Z1.png?alt=media"; //normal
const LZ1UP2 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/assets%2Feval-comp-xrays%2Fhip%2Flateral%2FLateral_Moderate_Z1.png?alt=media"; //moderate
const LZ1UP3 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/assets%2Feval-comp-xrays%2Fhip%2Flateral%2FLateral_NES_Z1.png?alt=media"; //near end stage
const LZ1UP4 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/assets%2Feval-comp-xrays%2Fhip%2Flateral%2FLateral_End Stage_Z1.png?alt=media"; //end stage

const LZ2UP1 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/assets%2Feval-comp-xrays%2Fhip%2Flateral%2FLateral_Normal_Z2.png?alt=media"; //normal
const LZ2UP2 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/assets%2Feval-comp-xrays%2Fhip%2Flateral%2FLateral_Moderate_Z2.png?alt=media"; //moderate
const LZ2UP3 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/assets%2Feval-comp-xrays%2Fhip%2Flateral%2FLateral_NES_Z2.png?alt=media"; //near end stage
const LZ2UP4 = "https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/assets%2Feval-comp-xrays%2Fhip%2Flateral%2FLateral_End Stage_Z2.png?alt=media"; //end stage

const PROStageId = 3;
const XraysUploadStageId = 4;
const EvaluationStageId = 5;
const lastStageId = 5;

//Joint_Compartments || Processed_Xray_Type
/* 
    1.Medial
    2.Lateral
    3.Kneecap
    4. ApPelvis Lateral
    5. Ap Pelvis
*/

/* const Views

    Flexion = 1;
    NonFlexion = 2;
    Kneecap = 3;
    Zone 1 = 4;
    Zone 2 = 5;

*/

const RightHipId = "1";
const LeftHipId = "2";
const RightKneeId = "3";
const LeftKneeId = "4";

const HIPIDs = [RightHipId,LeftHipId]
const KNEEIDs = [RightKneeId,LeftKneeId]

const HIPCOMPARTMENTNAME = "View";
const KNEECOMPARTMENTNAME = "Compartment";

const MedialCompartmentId = "1",
  LateralCompartmentId = "2",
  KneecapCompartmentId = "3",
  ApPelvisLateralCompartmentId = "4",
  ApPelvisCompartmentId = "5";

let Compartments = [
  { name: "Medial", id: MedialCompartmentId },
  { name: "Lateral", id: LateralCompartmentId },
  { name: "Kneecap", id: KneecapCompartmentId },
  { name: "AP Pelvis Lateral", id: ApPelvisLateralCompartmentId },
  { name: "AP Pelvis", id: ApPelvisCompartmentId },
];

const ChartOverAll = [100, 91.975, 84.600, 79.914, 76.332, 73.342, 70.704, 68.284, 65.994, 63.776, 61.583,
  59.381, 57.140, 54.840, 52.465, 50.012, 47.487, 44.905, 42.281, 39.625, 36.931,
  34.174, 31.307, 28.251, 24.875, 20.941, 15.939, 8.291, 0.000]

const KneeChartOverAllRounded = [
  100, 92, 85, 80, 76, 73, 71, 68, 66, 64, 62,
  59, 57, 55, 52, 50, 47, 45, 42, 40, 37,
  34, 31, 28, 25, 21, 16, 8, 0
]

const HipChartOverAllRounded = [
  100, 92, 85, 80, 76, 73, 70, 67, 64, 61, 58,
  55, 52, 49, 46, 43, 39, 36, 32, 29, 25,
  20, 15, 8, 0
]


export function getJointCompartmentName(joint_id)
{
  if(joint_id)
  {
    let joint = joint_id.toString();
    if(HIPIDs.includes(joint))
    {
      return HIPCOMPARTMENTNAME;
    }
    else if(KNEEIDs.includes(joint))
    {
      return KNEECOMPARTMENTNAME;
    }
  }

  return "";
}

export function getApPelvisCompartmentId()
{
  return ApPelvisCompartmentId
}

export function getApPelvisLateralCompartmentId()
{
  return ApPelvisLateralCompartmentId
}

export function getProStageId() {
  return PROStageId;
}

export function getXraysUploadStageId() {
  return XraysUploadStageId;
}

export function getEvaluationStageId() {
  return EvaluationStageId;
}

export function getCompartmentName(id) {
  return Compartments.find((c) => c.id.toString() === id.toString()).name;
}

export function getCompartment(id) {
  return Compartments.find((c) => c.id.toString() === id.toString());
}

const Joint1 = {
  name: "Right Hip",
  joint_id: RightHipId,
  image: Bone1Image,
  Xrays: [
    {
      name: "AP Pelvis",
      id: ApPelvisCompartmentId,
      isDone: false,
      enable: true,
      xrays: [
        {
          name: "Right Zone 1",
          id: 4,
          image: null,
          isDone: false,
          enable: true,
          state: null,
          state_id: null,
          notes: null,
          thumbnail: RAPZ1,
          up: MFVUP,
          up1: APZ1UP1,
          up2: APZ1UP2,
          up3: APZ1UP3,
          up4: APZ1UP4,
          up5: CEimage,
          prediction: "",
        },
        {
          name: "Right Zone 2",
          image: null,
          id: 5,
          isDone: false,
          enable: false,
          state: null,
          state_id: null,
          notes: "",
          thumbnail: RAPZ2,
          up: MNFVUP,
          up1: APZ2UP1,
          up2: APZ2UP2,
          up3: APZ2UP3,
          up4: APZ2UP4,
          up5: CEimage,
          prediction: "",
        },
      ],
    },
    {
      name: "Lateral",
      id: ApPelvisLateralCompartmentId,
      isDone: false,
      enable: false,
      xrays: [
        {
          name: "Right Zone 1",
          id: 4,
          image: null,
          isDone: false,
          enable: false,
          state: null,
          state_id: null,
          notes: null,
          thumbnail: RLZ1,
          up: LFVUP,
          up1: LZ1UP1,
          up2: LZ1UP2,
          up3: LZ1UP3,
          up4: LZ1UP4,
          up5: CEimage,
          prediction: "",
        },
        {
          name: "Right Zone 2",
          image: null,
          id: 5,
          isDone: false,
          enable: false,
          state: null,
          state_id: null,
          notes: "",
          thumbnail: RLZ2,
          up: LNFVUP,
          up1: LZ2UP1,
          up2: LZ2UP2,
          up3: LZ2UP3,
          up4: LZ2UP4,
          up5: CEimage,
          prediction: "",
        },
      ],
    },
  ],
};
const Joint2 = {
  name: "Left Hip",
  joint_id: LeftHipId,
  image: Bone1Image,
  Xrays: [
    {
      name: "AP Pelvis",
      id: ApPelvisCompartmentId,
      isDone: false,
      enable: true,
      xrays: [
        {
          name: "Left Zone 1",
          id: 4,
          image: null,
          isDone: false,
          enable: true,
          state: null,
          state_id: null,
          notes: null,
          thumbnail: LAPZ1,
          up: MFVUP,
          up1: APZ1UP1,
          up2: APZ1UP2,
          up3: APZ1UP3,
          up4: APZ1UP4,
          up5: CEimage,
          prediction: "",
        },
        {
          name: "Left Zone 2",
          image: null,
          id: 5,
          isDone: false,
          enable: false,
          state: null,
          state_id: null,
          notes: "",
          thumbnail: LAPZ2,
          up: MNFVUP,
          up1: APZ2UP1,
          up2: APZ2UP2,
          up3: APZ2UP3,
          up4: APZ2UP4,
          up5: CEimage,
          prediction: "",
        },
      ],
    },
    {
      name: "Lateral",
      id: ApPelvisLateralCompartmentId,
      isDone: false,
      enable: false,
      xrays: [
        {
          name: "Left Zone 1",
          id: 4,
          image: null,
          isDone: false,
          enable: false,
          state: null,
          state_id: null,
          notes: null,
          thumbnail: LLZ1,
          up: LFVUP,
          up1: LZ1UP1,
          up2: LZ1UP2,
          up3: LZ1UP3,
          up4: LZ1UP4,
          up5: CEimage,
          prediction: "",
        },
        {
          name: "Left Zone 2",
          image: null,
          id: 5,
          isDone: false,
          enable: false,
          state: null,
          state_id: null,
          notes: "",
          thumbnail: LLZ2,
          up: LNFVUP,
          up1: LZ2UP1,
          up2: LZ2UP2,
          up3: LZ2UP3,
          up4: LZ2UP4,
          up5: CEimage,
          prediction: "",
        },
      ],
    },
  ],
};
const Joint3 = {
  name: "Right Knee",
  joint_id: RightKneeId,
  image: Bone1Image,
  Xrays: [
    {
      name: "Medial",
      id: MedialCompartmentId,
      isDone: false,
      enable: true,
      xrays: [
        {
          name: "Flexion View",
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
          prediction: "",
        },
        {
          name: "Non-Flexion View",
          image: null,
          id: 2,
          isDone: false,
          enable: false,
          state: null,
          state_id: null,
          notes: "",
          thumbnail: MNFV,
          up: MNFVUP,
          up1: MNFVUP1,
          up2: MNFVUP2,
          up3: MNFVUP3,
          up4: MNFVUP4,
          up5: CEimage,
          prediction: "",
        },
      ],
    },
    {
      name: "Lateral",
      id: LateralCompartmentId,
      isDone: false,
      enable: false,
      xrays: [
        {
          name: "Flexion View",
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
          prediction: "",
        },
        {
          name: "Non-Flexion View",
          image: null,
          id: 2,
          isDone: false,
          enable: false,
          state: null,
          state_id: null,
          notes: "",
          thumbnail: LNFV,
          up: LNFVUP,
          up1: LNFVUP1,
          up2: LNFVUP2,
          up3: LNFVUP3,
          up4: LNFVUP4,
          up5: CEimage,
          prediction: "",
        },
      ],
    },
    {
      name: "Kneecap",
      id: KneecapCompartmentId,
      isDone: false,
      enable: false,
      xrays: [
        {
          name: "Kneecap",
          id: 3,
          image: null,
          isDone: false,
          enable: false,
          state: null,
          state_id: null,
          notes: null,
          thumbnail: KV,
          up: KVUP,
          up1: KVUP1,
          up2: KVUP2,
          up3: KVUP3,
          up4: KVUP4,
          up5: CEimage,
          prediction: "",
        },
      ],
    },
  ],
};
const Joint4 = {
  name: "Left Knee",
  joint_id: LeftKneeId,
  Xrays: [
    {
      name: "Medial",
      id: MedialCompartmentId,
      isDone: false,
      enable: true,
      xrays: [
        {
          name: "Flexion View",
          id: 1,
          image: null,
          isDone: false,
          enable: true,
          state: null,
          notes: null,
          thumbnail: LMFV,
          up: LMFVUP,
          up1: MFVUP1,
          up2: MFVUP2,
          up3: MFVUP3,
          up4: MFVUP4,
          up5: CEimage,
          prediction: "",
        },
        {
          name: "Non-Flexion View",
          image: null,
          id: 2,
          isDone: false,
          enable: false,
          state: null,
          notes: "",
          thumbnail: LMNFV,
          up: LMNFVUP,
          up1: MNFVUP1,
          up2: MNFVUP2,
          up3: MNFVUP3,
          up4: MNFVUP4,
          up5: CEimage,
          prediction: "",
        },
      ],
    },
    {
      name: "Lateral",
      id: LateralCompartmentId,
      isDone: false,
      enable: false,
      xrays: [
        {
          name: "Flexion View",
          id: 1,
          image: null,
          isDone: false,
          enable: false,
          state: null,
          notes: null,
          thumbnail: LLFV,
          up: LLFVUP,
          up1: LFVUP1,
          up2: LFVUP2,
          up3: LFVUP3,
          up4: LFVUP4,
          up5: CEimage,
          prediction: "",
        },
        {
          name: "Non-Flexion View",
          image: null,
          id: 2,
          isDone: false,
          enable: false,
          state: null,
          notes: "",
          thumbnail: LLNFV,
          up: LLNFVUP,
          up1: LNFVUP1,
          up2: LNFVUP2,
          up3: LNFVUP3,
          up4: LNFVUP4,
          up5: CEimage,
          prediction: "",
        },
      ],
    },
    {
      name: "Kneecap",
      id: KneecapCompartmentId,
      isDone: false,
      enable: false,
      xrays: [
        {
          name: "Kneecap",
          id: 3,
          image: null,
          isDone: false,
          enable: false,
          state: null,
          notes: "",
          thumbnail: KV,
          up: LKVUP,
          up1: KVUP1,
          up2: KVUP2,
          up3: KVUP3,
          up4: KVUP4,
          up5: CEimage,
          prediction: "",
        },
      ],
    },
  ],
};

const Joints = [Joint1, Joint2, Joint3, Joint4];

const RightKneeXrays = [
  {
    id: 7,
    name: "Bilateral PA Standing with Flexion",
    type: "ap_knee",
    isDone: false,
    image: null,
    thumbnail: Xray1,
    enable: true,
  },
  {
    id: 1,
    name: "Bilateral PA Standing with no Flexion",
    type: "ap_knee",
    isDone: false,
    image: null,
    thumbnail: Xray2,
    enable: false,
  },
  {
    id: 2,
    name: "Right Kneecap",
    type: "unilateral_kneecap",
    isDone: false,
    image: null,
    thumbnail: UNIKnee,
    enable: false,
  },
  {
    id: 3,
    name: "Right Lateral",
    type: "lateral_knee",
    isDone: false,
    image: null,
    thumbnail: Xray4Right,
    enable: false,
  },
];

const LeftKneeXrays = [
  {
    id: 7,
    name: "Bilateral PA Standing with Flexion",
    type: "ap_knee",
    isDone: false,
    image: null,
    thumbnail: Xray1,
    enable: true,
  },
  {
    id: 1,
    name: "Bilateral PA Standing with no Flexion",
    type: "ap_knee",
    isDone: false,
    image: null,
    thumbnail: Xray2,
    enable: false,
  },
  {
    id: 4,
    name: "Left Kneecap",
    type: "unilateral_kneecap",
    isDone: false,
    image: null,
    thumbnail: UNIKnee,
    enable: false,
  },
  {
    id: 5,
    name: "Left Lateral",
    type: "lateral_knee",
    isDone: false,
    image: null,
    thumbnail: Xray4Left,
    enable: false,
  },
];

const RightLeftKneeXrays = [
  {
    id: 7,
    name: "Bilateral PA Standing with Flexion",
    type: "ap_knee",
    isDone: false,
    image: null,
    thumbnail: Xray1,
    enable: true,
  },
  {
    id: 1,
    name: "Bilateral PA Standing with no Flexion",
    type: "ap_knee",
    isDone: false,
    image: null,
    thumbnail: Xray2,
    enable: false,
  },
  {
    id: 6,
    name: "Bilateral Kneecap",
    type: "bilateral_kneecap",
    isDone: false,
    image: null,
    thumbnail: Xray3,
    enable: false,
  },
  {
    id: 3,
    name: "Right Lateral",
    type: "lateral_knee",
    isDone: false,
    image: null,
    thumbnail: Xray4Right,
    enable: false,
  },
  {
    id: 5,
    name: "Left Lateral",
    type: "lateral_knee",
    isDone: false,
    image: null,
    thumbnail: Xray4Left,
    enable: false,
  },
];

const LeftHipXrays = [
  {
    id: 8,
    name: "AP Pelvis View",
    type: "ap_pelvis",
    isDone: false,
    image: null,
    thumbnail: ApPelvisXrayThumb,
    enable: true,
  },
  {
    id: 9,
    name: "Left Lateral View",
    type: "left_frog",
    isDone: false,
    image: null,
    thumbnail: LeftFrogXrayThumb,
    enable: false,
  },
  
];

const RightHipXrays = [
  {
    id: 8,
    name: "AP Pelvis View",
    type: "ap_pelvis",
    isDone: false,
    image: null,
    thumbnail: ApPelvisXrayThumb,
    enable: true,
  },
  {
    id: 10,
    name: "Right Lateral View",
    type: "right_frog",
    isDone: false,
    image: null,
    thumbnail: RightFrogXrayThumb,
    enable: false,
  },
];

const RightLeftHipXrays = [
  {
    id: 8,
    name: "AP Pelvis View",
    type: "ap_pelvis",
    isDone: false,
    image: null,
    thumbnail: ApPelvisXrayThumb,
    enable: true,
  },
  {
    id: 10,
    name: "Right Lateral View",
    type: "right_frog",
    isDone: false,
    image: null,
    thumbnail: RightFrogXrayThumb,
    enable: false,
  },
  {
    id: 9,
    name: "Left Lateral View",
    type: "left_frog",
    isDone: false,
    image: null,
    thumbnail: LeftFrogXrayThumb,
    enable: false,
  },
];

const evaluationRoutes = [
  { id: "0", stage: "0", route: "./evaluation/demographics" },
  {
    id: "1",
    stage: "1",
    route: "./evaluation/new-evaluation",
    name: "Patient Demographics Submitted",
  },
  {
    id: "2",
    stage: "2",
    route: "./evaluation/pro",
    name: "Joints Priority Selected",
  },
  {
    id: "3",
    stage: "3",
    route: "./evaluation/upload-xrays",
    name: "Question Form Submitted",
  },
  {
    id: "4",
    stage: "4",
    route: "./evaluation/x-ray-matching",
    name: "All Xrays Uploaded",
  },
];

export function getRightHipId()
{
  return RightHipId
}
export function getLeftHipId()
{
  return LeftHipId
}
export function getRightKneeId()
{
  return RightKneeId
}
export function getLeftKneeId()
{
  return LeftKneeId
}


export function getCommonEval(activeJointIndex, Eval) {
  let currentCommonJoints = [];
  let current_joint_id = Eval[activeJointIndex].joint_id.toString();

  currentCommonJoints.push(Eval[activeJointIndex]);

  if (current_joint_id === "3") {
    let sameTypeJoint = Eval.find((ev) => ev.joint_id.toString() === "4");
    if (sameTypeJoint) {
      currentCommonJoints.push(sameTypeJoint);
    }
  } else if (current_joint_id === "4") {
    let sameTypeJoint = Eval.find((ev) => ev.joint_id.toString() === "3");
    if (sameTypeJoint) {
      currentCommonJoints.push(sameTypeJoint);
    }
  } else if (current_joint_id === "1") {
    let sameTypeJoint = Eval.find((ev) => ev.joint_id.toString() === "2");
    if (sameTypeJoint) {
      currentCommonJoints.push(sameTypeJoint);
    }
  } else if (current_joint_id === "2") {
    let sameTypeJoint = Eval.find((ev) => ev.joint_id.toString() === "1");
    if (sameTypeJoint) {
      currentCommonJoints.push(sameTypeJoint);
    }
  }

  return currentCommonJoints;
}

export function collectCommonJoints(activeJointId, Eval) {
  let currentCommonJoints = [];
  let stringify_joint_id = activeJointId.toString();

  currentCommonJoints.push({ isDone: false, joint_id: stringify_joint_id });

  if (stringify_joint_id === "3") {
    let sameTypeJoint = Eval.find((ev) => ev.joint_id.toString() === "4");
    if (sameTypeJoint) {
      currentCommonJoints.push({ isDone: false, joint_id: "4" });
    }
  } else if (stringify_joint_id === "4") {
    let sameTypeJoint = Eval.find((ev) => ev.joint_id.toString() === "3");
    if (sameTypeJoint) {
      currentCommonJoints.push({ isDone: false, joint_id: "3" });
    }
  } else if (stringify_joint_id === "1") {
    let sameTypeJoint = Eval.find((ev) => ev.joint_id.toString() === "2");
    if (sameTypeJoint) {
      currentCommonJoints.push({ isDone: false, joint_id: "2" });
    }
  } else if (stringify_joint_id === "2") {
    let sameTypeJoint = Eval.find((ev) => ev.joint_id.toString() === "1");
    if (sameTypeJoint) {
      currentCommonJoints.push({ isDone: false, joint_id: "1" });
    }
  }

  return currentCommonJoints;
}

export function currentCommonJointsArray(Store) {
  let currentCommonJointsArray = [];
  let Eval = Store.Eval;
  let activeJointIndex = Store.activeJointIndex;
  let activeJointId = Eval[activeJointIndex].joint_id.toString();

  currentCommonJointsArray.push(activeJointId);

  if (activeJointId === "3") {
    let sameTypeJoint = Eval.find((ev) => ev.joint_id == "4");
    if (sameTypeJoint) {
      currentCommonJointsArray.push("4");
    }
  }
  if (activeJointId === "4") {
    let sameTypeJoint = Eval.find((ev) => ev.joint_id == "3");
    if (sameTypeJoint) {
      currentCommonJointsArray.push("3");
    }
  }

  if (activeJointId === "1") {
    let sameTypeJoint = Eval.find((ev) => ev.joint_id == "2");
    if (sameTypeJoint) {
      currentCommonJointsArray.push("2");
    }
  }
  if (activeJointId === "2") {
    let sameTypeJoint = Eval.find((ev) => ev.joint_id == "1");
    if (sameTypeJoint) {
      currentCommonJointsArray.push("1");
    }
  }

  return currentCommonJointsArray;
}

export function getRequiredXrays(arrayOfJointIds,priority_id) {
  console.log(arrayOfJointIds);

  if (arrayOfJointIds.includes("3") && arrayOfJointIds.includes("4"))
  {
    let Xrays = JSON.parse(JSON.stringify(RightLeftKneeXrays));    
    if(priority_id)
    {
      //sorting xray

      if(priority_id===LeftKneeId)
      {
        let temp_xray = [];
        temp_xray.push(Xrays[0]) //Bilateral PA Standing with Flexion
        temp_xray.push(Xrays[1]) //Bilateral PA Standing with no Flexion
        temp_xray.push(Xrays[2]) //Bilateral Kneecap
        temp_xray.push(Xrays[4]) //Left Lateral
        temp_xray.push(Xrays[3]) //Right Lateral
        Xrays = temp_xray;
      }
      else
      {
        //right priority already sorted
      }
      return Xrays
    }
    else return Xrays
  } 
  if (arrayOfJointIds.includes("3"))
    return JSON.parse(JSON.stringify(RightKneeXrays));
  if (arrayOfJointIds.includes("4"))
    return JSON.parse(JSON.stringify(LeftKneeXrays));

  if (arrayOfJointIds.includes("1") && arrayOfJointIds.includes("2"))
  {
    let Xrays = JSON.parse(JSON.stringify(RightLeftHipXrays));
    
    if(priority_id)
    {
      //sorting xray

      if(priority_id===LeftHipId)
      {
        let temp_xray = [];
        temp_xray.push(Xrays[0]) //ap_pelvis_xray
        temp_xray.push(Xrays[2]) //left_frog_xray
        temp_xray.push(Xrays[1]) //right_frog_xray
        Xrays = temp_xray;
      }
      else
      {
        //right priority already sorted
      }
      return Xrays
    }
    else return Xrays
  } 
  if (arrayOfJointIds.includes("1"))
    return JSON.parse(JSON.stringify(RightHipXrays));
  if (arrayOfJointIds.includes("2"))
    return JSON.parse(JSON.stringify(LeftHipXrays));
}

export function getJointNameById(joint_id) {
  let stringify_joint_id = JSON.parse(joint_id).toString();
  let JointName = "Unknown";
  let findedJoint = Joints.find(
    (joint) => joint.joint_id === stringify_joint_id
  );
  console.log(stringify_joint_id);
  console.log(findedJoint);

  if (findedJoint) {
    JointName = findedJoint.name;
  }
  return JointName;
}

export async function LoadNewEval(Store, oldEvaluation, route = null) {
  let patient = {};
  let visitor_stage;
  let evaluation_stage;
  if (oldEvaluation.stage) {
    visitor_stage = oldEvaluation.stage.id;
  }

  //1
  patient["name"] = oldEvaluation.patient[0].name;
  patient["birth_date"] = DateFormatter(oldEvaluation.patient[0].birthday, "/");
  patient["age"] = oldEvaluation.patient[0].age;
  patient["gender"] = oldEvaluation.patient[0].gender;
  patient["height"] = oldEvaluation.patient[0].height;
  patient["home_phone"] = oldEvaluation.patient[0].homephone;
  patient["cell_phone"] = oldEvaluation.patient[0].cellphone;
  patient["weight"] = oldEvaluation.patient[0].weight;
  patient["home_address"] = oldEvaluation.patient[0].homeaddress;
  patient["email"] = oldEvaluation.patient[0].email;
  patient["marital_status"] = oldEvaluation.patient[0].maritalstatus;
  patient["date"] = DateFormatter(oldEvaluation.patient[0].date, "-");

  console.log(patient);
  let temp_report_id = oldEvaluation.incomplete_vistor_id;
  if (!temp_report_id) {
    temp_report_id = oldEvaluation.report_id;
  }
  console.log(temp_report_id);
  let temp_patient_id = oldEvaluation.patient[0].id;
  console.log(temp_patient_id);
  console.log(oldEvaluation);

  let Eval = [];
  let activeJointIndex = 0;

  //populating forms
  let newForm = [];
  let Xrays = [];
  let noOfEvalRemainToUpload = null;

  //2
  if (parseInt(visitor_stage) > 1) {
    //new evaluation (joint hurt selection done)
    if (oldEvaluation.joint_hurt_priority.length > 0) {
      let LoadedInfo = await setNewEval(oldEvaluation.joint_hurt_priority); //Sorted Eval
      Eval = LoadedInfo.Eval;
      newForm = LoadedInfo.newForm;

      activeJointIndex = Eval.findIndex((Eval) => Eval.stage_id < lastStageId);
      // newForm = await initializeForm(oldEvaluation.joint_hurt_priority);

      let activeEval = Eval[activeJointIndex];
      let currentCommonJoints = collectCommonJoints(activeEval.joint_id, Eval);
      let arrayOfJointIds = [];
      currentCommonJoints.forEach((cCF) => {
        arrayOfJointIds.push(cCF.joint_id);
      });
      // Xrays = await getRequiredXrays(arrayOfJointIds);  loaded in componentWillUnmount of uploadedXrays

      evaluation_stage = activeEval.stage_id;
    }
  }

  if (parseInt(evaluation_stage) > 2) {
    //patient survey (pro form done)
    if (oldEvaluation.form.length > 0) {
      oldEvaluation.form.forEach((element) => {
        let question = newForm.find(
          (el) =>
            el.question_id == element.question_id &&
            el.joint_id.toString() == element.joint_id.toString()
        );

        if(question)
        {
          question.visitor_id = element.visitor_id;
          question.pro_severity_id = element.pro_severity_id;
        }
        
      });
    }
  }

  if (parseInt(evaluation_stage) > 3) {
    //xray upload done
    let activeEval = Eval[activeJointIndex];
    let currentCommonJoints = collectCommonJoints(activeEval.joint_id, Eval);
    let arrayOfJointIds = [];
    currentCommonJoints.forEach((cCF) => {
      arrayOfJointIds.push(cCF.joint_id);
    });
    Xrays = await getRequiredXrays(arrayOfJointIds);
    if (oldEvaluation.Uploaded_xrays.length > 0) {
      oldEvaluation.Uploaded_xrays.forEach((uploaded_xray) => {
        let xray = Xrays.find(
          (xray) => xray.id.toString() === uploaded_xray.xray_type_id.toString()
        );
        if (xray) {
          xray.isDone = true;
          xray.image = uploaded_xray.image_url;
        }
      });
    }

    if (oldEvaluation.Processed_Xray.length > 0) {
      oldEvaluation.Processed_Xray.forEach((xray) => {
        console.log(xray);

        let Curr_Joint_id = oldEvaluation.joint_hurt_priority.find(
          (joint) => joint.id.toString() === xray.joint_hurt_id.toString()
        ).joint_id;
        console.log(Store.state.Evaluations);
        console.log(Curr_Joint_id.toString());
        let tempEvaluation = Store.state.Evaluations.find(
          (eva) => eva.joint_id.toString() === Curr_Joint_id.toString()
        );
        console.log(tempEvaluation);

        let tempEvaType = tempEvaluation.Xrays.find(
          (type) =>
            type.id.toString() === xray.processed_xray_type_id.toString()
        );
        let Curr_Processed_Xray = tempEvaType.xrays.find(
          (view) => view.id.toString() === xray.view_id.toString()
        );
        Curr_Processed_Xray.processed_xray_id = xray.id;
        Curr_Processed_Xray.image = xray.image_url;
        Curr_Processed_Xray.prediction = xray.prediction;
        Curr_Processed_Xray.roi_updated_url = xray.roi_updated_url;
        Curr_Processed_Xray.roi_updated = xray.roi_updated;

        if (oldEvaluation.evaluation.length > 0) {
          let matchingEval = oldEvaluation.evaluation.find(
            (matchingEval) =>
              matchingEval.processed_xray_id.toString() === xray.id.toString()
          );
          if (matchingEval) {
            Curr_Processed_Xray.state = matchingEval.xray_matching_id;
          }
        }
      });
      Store.state.Evaluations["apiKey"] = oldEvaluation.apiKey;
      Store.state.Evaluations["Nonce"] = oldEvaluation.Nonce;
      Store.state.Evaluations["baseUrl"] = oldEvaluation.baseUrl;
    }

    console.log("final", Store.state.Evaluations);
  }

  if (parseInt(evaluation_stage) > 4) {
  }

  if (route == null) {
    route = "/evaluation/demographics";
  }

  //get processed xrays images and move on
  if (evaluation_stage > 3) {
    await SetProcessedXrays(Xrays, temp_report_id, Store);
    let stateArray = [
      { key: "noOfEvalRemainToUpload", value: noOfEvalRemainToUpload },
      { key: "evaluation_stage", value: evaluation_stage },
      { key: "form", value: newForm },
      { key: "Eval", value: Eval },
      { key: "activeJointIndex", value: activeJointIndex },
      { key: "report_id", value: temp_report_id },
      { key: "patient_id", value: temp_patient_id },
      { key: "patient", value: patient },
      { key: "Xrays", value: Xrays },
    ];
    Store.multipleUpdateValueWithHistory(stateArray, route);
  }

  //move on
  else
    Store.multipleUpdateValueWithHistory(
      [
        { key: "noOfEvalRemainToUpload", value: noOfEvalRemainToUpload },
        { key: "evaluation_stage", value: evaluation_stage },
        { key: "Xrays", value: Xrays },
        { key: "form", value: newForm },
        { key: "Eval", value: Eval },
        { key: "activeJointIndex", value: activeJointIndex },
        { key: "report_id", value: temp_report_id },
        { key: "patient_id", value: temp_patient_id },
        { key: "patient", value: patient },
      ],
      route
    );
}

async function SetProcessedXrays(Xrays, report_id, Store) {
  const isExist = await CheckXrays(Xrays);
  if (isExist === false) {
    const response = await getXrays(
      report_id,
      Store.baseUrl,
      Store.state.token
    );
    const abcd = await setXrays(response, Xrays, Store);
  }

  return;
}

function CheckXrays(Xrays) {
  let xrayExist = true;

  console.log("checking xrays => ", Xrays);
  Xrays.forEach((xray) => {
    if (xray.image) {
      if (
        xray.image.toString() === "null" ||
        xray.image.toString() === "" ||
        xray.image.toString() === " "
      ) {
        xrayExist = false;
      }
    } else xrayExist = false;
  });

  return xrayExist;
}

async function getXrays(report_id, baseUrl, token) {
  let req = {
    visitor_id: report_id,
  };
  const response = await GetDataJson(
    baseUrl + "/api/v1/xrays",
    200,
    req,
    token
  );
  return response;
}

async function setXrays(response, Xrays, Store) {
  console.log("in set xrays => ", response);
  let contextXrays = Xrays;
  if (response.ResponseCode === "Success") {
    response.Xrays.forEach((xray) => {
      let row = contextXrays.find(
        (x) => x.id.toString() === xray.xray_type_id.toString()
      );
      if (row) {
        row.image = xray.url;
        row.isDone = true;
      }
    });
  }

  console.log(contextXrays);
  await Store.multipleUpdateValue([{ key: "Xrays", value: contextXrays }]);
  return;
}

function DateFormatter(date, splitter = "/") {
  let CustomDate = date.toString().match(/\d+/g).map(Number);
  let CustomDate_year = CustomDate[0];
  let CustomDate_month = CustomDate[1];
  let CustomDate_date = CustomDate[2];
  if (CustomDate_month.toString().length == 1) {
    CustomDate_month = "0" + CustomDate_month;
  }
  if (CustomDate_date.toString().length == 1) {
    CustomDate_date = "0" + CustomDate_date;
  }
  return (
    CustomDate_date + splitter + CustomDate_month + splitter + CustomDate_year
  );
}

export function initializeForm(joint_hurts) {
  let Form = [];
  for (let i = 0; i < joint_hurts.length; i++) {
    let element = joint_hurts[i];
    Form.push({
      name: "Question1",
      question_id: 1,
      pro_severity_id: null,
      visitor_id: null,
      joint_id: element.joint_id,
    });
    Form.push({
      name: "Question2",
      question_id: 2,
      pro_severity_id: null,
      visitor_id: null,
      joint_id: element.joint_id,
    });
    Form.push({
      name: "Question3",
      question_id: 3,
      pro_severity_id: null,
      visitor_id: null,
      joint_id: element.joint_id,
    });
    Form.push({
      name: "Question4",
      question_id: 4,
      pro_severity_id: null,
      visitor_id: null,
      joint_id: element.joint_id,
    });
    Form.push({
      name: "Question5",
      question_id: 5,
      pro_severity_id: null,
      visitor_id: null,
      joint_id: element.joint_id,
    });
    Form.push({
      name: "Question6",
      question_id: 6,
      pro_severity_id: null,
      visitor_id: null,
      joint_id: element.joint_id,
    });

    if(element.joint_id.toString()==="3" || element.joint_id.toString()==="4")
    {
        Form.push({
            name: "Question7",
            question_id: 7,
            pro_severity_id: null,
            visitor_id: null,
            joint_id: element.joint_id,
          });
    }
    
  }

  return Form;
}

export async function setNewEval(joint_hurts) {
  let Eval = await setEval(joint_hurts);
  let newForm = await initializeForm(joint_hurts);
  return { Eval, newForm };
}

function setEval(joint_hurts) {
  /* Example Joint Hurt [
        {created_by: 2
        id: 276
        joint_id: 4
        priority_id: 2
        updated_by: null
        visitor_id: 367,
        stage_id:3
        }
    ] */

  //Any change in this function, then evaluation/newEvaluation  should also be changed.
  let Eval = [];
  for (let i = 0; i < joint_hurts.length; i++) {
    let name = null;
    let element = joint_hurts[i];
    for (let z = 0; z < Joints.length; z++) {
      if (element.joint_id.toString() === Joints[z].joint_id) {
        name = Joints[z].name;
        break;
      }
    }

    Eval.push({
      visitor_id: element.visitor_id,
      joint_id: element.joint_id,
      name: name,
      priority_id: element.priority_id,
      stage_id: element.stage_id,
      isEvaluated: false,
      joint_hurt_id: element.id,
      stage_id: element.stage_id,
    });
  }

  Eval = sortEval(Eval);
  return Eval;
}

export function sortEval(Eval) {
  Eval.sort(function (a, b) {
    let int1 = parseInt(a.priority_id);
    let int2 = parseInt(b.priority_id)
    return int1 - int2;
  });
  return Eval;
}

export function emptyVisitorState(global) {
  let Evaluations = [];

  Joints.forEach((joint) => {
    Evaluations.push({
      name: joint.name,
      image: joint.image,
      joint_id: joint.joint_id,
      Xrays: JSON.parse(JSON.stringify(joint.Xrays)),
    });
  });

  global.setState({
    old: false,
    evaluation_stage: 0,
    noOfEvalRemainToUpload: null,
    Evaluations: Evaluations,
    Eval: [],
    form: [],
    patient: {},
    report_id: null,
    patient_id: null,
    activeJointIndex: 0,
  });
  emptyEvalState(global);
}

export function emptyEvalState(global) {
  global.setState({ Xrays: [], XrayMatch: false, UXray: false, Pro: false });
}

export function LoadDummyEvaluation(Store, route) {
  let form = [
    {
      name: "Question1",
      question_id: 1,
      joint_id: 3,
      pro_severity_id: 4,
      visitor_id: 39,
    },
    {
      name: "Question2",
      question_id: 2,
      joint_id: 3,
      pro_severity_id: 3,
      visitor_id: 39,
    },
    {
      name: "Question3",
      question_id: 3,
      joint_id: 3,
      pro_severity_id: 3,
      visitor_id: 39,
    },
    {
      name: "Question4",
      joint_id: 3,
      question_id: 4,
      pro_severity_id: 3,
      visitor_id: 39,
    },
    {
      name: "Question5",
      question_id: 5,
      joint_id: 3,
      pro_severity_id: 3,
      visitor_id: 39,
    },
    {
      name: "Question6",
      joint_id: 3,
      question_id: 6,
      pro_severity_id: 3,
      visitor_id: 39,
    },
    {
      name: "Question7",
      question_id: 7,
      joint_id: 3,
      pro_severity_id: 3,
      visitor_id: 39,
    },
    {
      name: "Question1",
      question_id: 1,
      joint_id: 4,
      pro_severity_id: 4,
      visitor_id: 39,
    },
    {
      name: "Question2",
      question_id: 2,
      joint_id: 4,
      pro_severity_id: 4,
      visitor_id: 39,
    },
    {
      name: "Question3",
      question_id: 3,
      joint_id: 4,
      pro_severity_id: 2,
      visitor_id: 39,
    },
    {
      name: "Question4",
      joint_id: 4,
      question_id: 4,
      pro_severity_id: 2,
      visitor_id: 39,
    },
    {
      name: "Question5",
      question_id: 5,
      joint_id: 4,
      pro_severity_id: 2,
      visitor_id: 39,
    },
    {
      name: "Question6",
      joint_id: 4,
      question_id: 6,
      pro_severity_id: 2,
      visitor_id: 39,
    },
    {
      name: "Question7",
      question_id: 7,
      joint_id: 4,
      pro_severity_id: 2,
      visitor_id: 39,
    },
  ];

  let Xrays = JSON.parse(JSON.stringify(RightLeftHipXrays));

  let patient = {};
  patient.name = "Muhammad Ammar";
  patient.date = "08-15-2020";

  //[{name:'Normal to Slight',id:'1'},{name:'Moderate',id:'2'},{name:'Near End Stage',id:'3'},{name:'End Stage',id:'4'},{name:'Cannot Evaluate',id:'5'}]

  let Evaluations = [Joint1];
  let Eval = [];
  Eval.push({
    joint_hurt_id: "12",
    visitor_id: "39",
    joint_id: Joint4.id,
    name: Joint4.name,
    priority_id: 1,
    isEvaluated: false,
    stage_id: 3,
  });
  Eval.push({
    joint_hurt_id: "11",
    visitor_id: "39",
    joint_id: Joint3.id,
    name: Joint3.name,
    priority_id: 3,
    isEvaluated: false,
    stage_id: 3,
  }); // Right Knee

  Store.multipleUpdateValueWithHistory(
    [
      { key: "type", value: "2" },
      { key: "user_id", value: "2" },
      { key: "user_email", value: "Dummy_ammar@sbs.com" },
      { key: "user_type", value: { id: "2", type: "admin" } },
      { key: "isTutorialCompleted", value: "true" },
      { key: "loading", value: false },
      { key: "patient_id", value: "4948" },
      { key: "Xrays", value: Xrays },
      { key: "activeJointIndex", value: 0 },
      { key: "Eval", value: Eval },
      { key: "form", value: form },
      { key: "patient", value: patient },
      { key: "evaluation_stage", value: 4 },
      { key: "report_id", value: 39 },
      { key: "Evaluations", value: Evaluations },
      {
        key: "token",
        value:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjMsImlhdCI6MTU4OTIwNTk4N30.k8ywG7mAJjyGq3lCmCwY-VVBzqvyP_9kmIKufZYIghs",
      },
      { key: "UXray", value: "true" },
    ],
    route
  );
}

export function _setMatchingEductaionStuff(setState) {
  let Xrays = [
    {
      id: 7,
      name: "Bilateral PA Standing with Flexion",
      type: "ap_knee",
      isDone: false,
      image: null,
      thumbnail: Xray1,
      enable: true,
    },
    {
      id: 1,
      name: "Bilateral PA Standing with no Flexion",
      type: "ap_knee",
      isDone: false,
      image: null,
      thumbnail: Xray2,
      enable: false,
    },
    {
      id: 2,
      name: "Right Kneecap",
      type: "unilateral_kneecap",
      isDone: false,
      image: null,
      thumbnail: UNIKnee,
      enable: false,
    },
    {
      id: 3,
      name: "Right Lateral",
      type: "lateral_knee",
      isDone: false,
      image: null,
      thumbnail: Xray4Right,
      enable: false,
    },
    {
      id: 8,
      name: "Ap Pelvis View",
      type: "ap_pelvis",
      isDone: false,
      image: null,
      thumbnail: ApPelvisXrayThumb,
      enable: false,
    },
    {
      id: 10,
      name: "Right Frog",
      type: "right_frog",
      isDone: false,
      image: null,
      thumbnail: RightFrogXrayThumb,
      enable: true,
    },
  ];
  setState({ MatchingXrays: Xrays });
}

export function getPriorityJointRoute(joint_hurt_priority) {
  let sortedEval = sortEval(joint_hurt_priority);
  let stage_id = sortedEval.find((ev) => ev.stage_id < lastStageId).stage_id;
  let route = evaluationRoutes.find(
    (el) => el.id === stage_id.toString()
  ).route;
  return route;
}

export function getLastStageId() {
  return lastStageId;
}

export function getEvaluationRoutes() {
  return evaluationRoutes;
}

function initializeXrays(Eval) {
  let RightKnee = false;
  let LeftKnee = false;
  let Xrays = [];

  Eval.forEach((element) => {
    if (element.name === "Right Knee") {
      RightKnee = true;
    } else if (element.name === "Left Knee") {
      LeftKnee = true;
    }
  });

  console.log(RightKnee);
  console.log(LeftKnee);

  if (RightKnee === true && LeftKnee === true) {
    Xrays = [
      {
        id: 7,
        name: "Bilateral PA Standing with Flexion",
        type: "ap_knee",
        isDone: false,
        image: null,
        thumbnail: Xray1,
        enable: true,
      },
      {
        id: 1,
        name: "Bilateral PA Standing with no Flexion",
        type: "ap_knee",
        isDone: false,
        image: null,
        thumbnail: Xray2,
        enable: false,
      },
      {
        id: 6,
        name: "Bilateral Kneecap",
        type: "bilateral_kneecap",
        isDone: false,
        image: null,
        thumbnail: Xray3,
        enable: false,
      },
      {
        id: 3,
        name: "Right Lateral",
        type: "lateral_knee",
        isDone: false,
        image: null,
        thumbnail: Xray4Right,
        enable: false,
      },
      {
        id: 5,
        name: "Left Lateral",
        type: "lateral_knee",
        isDone: false,
        image: null,
        thumbnail: Xray4Left,
        enable: false,
      },
    ];
  } else if (RightKnee == true) {
    Xrays = [
      {
        id: 7,
        name: "Bilateral PA Standing with Flexion",
        type: "ap_knee",
        isDone: false,
        image: null,
        thumbnail: Xray1,
        enable: true,
      },
      {
        id: 1,
        name: "Bilateral PA Standing with no Flexion",
        type: "ap_knee",
        isDone: false,
        image: null,
        thumbnail: Xray2,
        enable: false,
      },
      {
        id: 2,
        name: "Right Kneecap",
        type: "unilateral_kneecap",
        isDone: false,
        image: null,
        thumbnail: UNIKnee,
        enable: false,
      },
      {
        id: 3,
        name: "Right Lateral",
        type: "lateral_knee",
        isDone: false,
        image: null,
        thumbnail: Xray4Right,
        enable: false,
      },
    ];
  } else if (LeftKnee == true) {
    Xrays = [
      {
        id: 7,
        name: "Bilateral PA Standing with Flexion",
        type: "ap_knee",
        isDone: false,
        image: null,
        thumbnail: Xray1,
        enable: true,
      },
      {
        id: 1,
        name: "Bilateral PA Standing with no Flexion",
        type: "ap_knee",
        isDone: false,
        image: null,
        thumbnail: Xray2,
        enable: false,
      },
      {
        id: 4,
        name: "Left Kneecap",
        type: "unilateral_kneecap",
        isDone: false,
        image: null,
        thumbnail: UNIKnee,
        enable: false,
      },
      {
        id: 5,
        name: "Left Lateral",
        type: "lateral_knee",
        isDone: false,
        image: null,
        thumbnail: Xray4Left,
        enable: false,
      },
    ];
  }

  return Xrays;
}

export function MarkComplete(Store, joint_id = null) {
  //last stage completion for current joint only
  let currentJointId = joint_id;
  let AllEval = Store.Eval;

  if (currentJointId) {
    currentJointId = currentJointId.toString();
    let findedRow = AllEval.find(
      (ev) => ev.joint_id.toString() === currentJointId
    );
    findedRow.isEvaluated = true;
    findedRow.stage_id = lastStageId;
  } else {
    AllEval[Store.activeJointIndex].isEvaluated = true;
    AllEval[Store.activeJointIndex].stage_id = lastStageId;
  }
  return AllEval;
}

export function completeStage(Store, stage_id) {
  // stage completion for all common joint
  let jointArray = currentCommonJointsArray(Store);
  let AllEval = Store.Eval;
  jointArray.forEach((joint_id) => {
    AllEval.find(
      (ev) => ev.joint_id.toString() === joint_id.toString()
    ).stage_id = stage_id;
  });

  return AllEval;
}

export function findNextAvailCommonEval(Store) {
  let CurrentJoints = currentCommonJointsArray(Store);
  let NewIndex = Store.Eval.findIndex(
    (ev) =>
      CurrentJoints.includes(ev.joint_id.toString()) && ev.isEvaluated === false
  );
  return NewIndex;
}

export function loadNextEval(context) {
  let Eval = context.state.Eval;
  let activeJointIndex = Eval.findIndex((Eval) => Eval.stage_id < lastStageId);
  context.multipleUpdateValueWithHistory(
    [
      { key: "Xrays", value: [] },
      { key: "XrayMatch", value: false },
      { key: "UXray", value: false },
      { key: "Pro", value: false },
      { key: "activeJointIndex", value: activeJointIndex },
    ],
    "./patient-profile"
  ); //should be same as emptyEvalState with activeJointIndex
}

export function NextEvalIndex(Store, joint = null, Eval = null) {
  let AllEval = Eval;
  let currentJoint = joint;
  if (currentJoint) {
    currentJoint = joint.toString();
  }

  if (AllEval == null) {
    AllEval = Store.Eval;
  }

  if (parseInt(currentJoint) > -1) {
    return AllEval.findIndex(
      (ev) =>
        parseInt(ev.stage_id) < lastStageId &&
        ev.joint_id.toString() !== currentJoint
    );
  } else {
    return AllEval.findIndex((ev) => parseInt(ev.stage_id) < lastStageId);
  }
}

export function getJointMapObject(context,joint,availform) {

  let ChartObject = [];
  let form = context.state.form;
  if(context==null)
  {
    form = availform;
  }
  let joint_id = joint.toString();

  let SumStiff = 0,SumPain = 0,SumFunction = 0;

  let Question1Answer = parseInt(form.find(ques => ques.question_id.toString() == "1" && ques.joint_id.toString() === joint_id).pro_severity_id);
  if (Question1Answer.toString() !== "NaN") {
    SumStiff = Question1Answer - 1;
  }
  else SumStiff = 0;



  // let PainInterval = Math.round(( (1 - SumPain/16) *100) *10) /10;
  // let StiffInterval =  Math.round(((1 - SumStiff/4) *100) *10) /10;
  // let FunctionInterval = Math.round( ( (1 - SumFunction/8) *100 ) *10)/10;
  // let OverallInterval = Math.round( ( OverAll[SumPain+SumStiff+SumFunction]) * 10)/10; 

  let PainInterval = 0;
  let StiffInterval = Math.round(((1 - SumStiff / 4) * 100));
  let FunctionInterval = 0;
  let OverallInterval = 0;

  if(joint_id==="1" || joint_id==="2")
  {
    form.filter(ques => { if ((parseInt(ques.question_id) > 0 && parseInt(ques.question_id) < 3) && ques.joint_id.toString() === joint_id) { if (parseInt(ques.pro_severity_id).toString() != "NaN") { SumPain = SumPain + parseInt(ques.pro_severity_id) - 1 } } });
    form.filter(ques => { if ((parseInt(ques.question_id) > 2 && parseInt(ques.question_id) < 7) && ques.joint_id.toString() === joint_id) { if (parseInt(ques.pro_severity_id).toString() != "NaN") { SumFunction = SumFunction + parseInt(ques.pro_severity_id) - 1 } } });


    PainInterval = Math.round(((1 - SumPain / 8) * 100));
    FunctionInterval = Math.round(((1 - SumFunction / 16) * 100));
    OverallInterval = Math.round((HipChartOverAllRounded[SumPain + SumFunction]));
    ChartObject.push({label:"Overall Hip Health",score:OverallInterval});
    ChartObject.push({label:"Pain",score:PainInterval});
    ChartObject.push({label:"Function",score:FunctionInterval});
  }

  else if(joint_id==="3" || joint_id==="4")
  {
    form.filter(ques => { if ((parseInt(ques.question_id) > 1 && parseInt(ques.question_id) < 6) && ques.joint_id.toString() === joint_id) { if (parseInt(ques.pro_severity_id).toString() != "NaN") { SumPain = SumPain + parseInt(ques.pro_severity_id) - 1 } } });
    form.filter(ques => { if ((parseInt(ques.question_id) > 5 && parseInt(ques.question_id) < 8) && ques.joint_id.toString() === joint_id) { if (parseInt(ques.pro_severity_id).toString() != "NaN") { SumFunction = SumFunction + parseInt(ques.pro_severity_id) - 1 } } });
    PainInterval = Math.round(((1 - SumPain / 16) * 100));
    FunctionInterval = Math.round(((1 - SumFunction / 8) * 100));
    OverallInterval = Math.round((KneeChartOverAllRounded[SumPain + SumStiff + SumFunction]));
    ChartObject.push({label:"Overall Knee Health",score:OverallInterval});
    ChartObject.push({label:"Pain",score:PainInterval});
    ChartObject.push({label:"Function",score:FunctionInterval});
    ChartObject.push({label:"Stiffness",score:StiffInterval});
  }

  return ChartObject;

}

export function getUploadedXrayById(jointId,context)
{
  let joint_id = jointId.toString();
  let Store = context.state;
  let Xrays = Store.Xrays;
  let gatheredXrays = [];

  let selectedJointXrays = [];

  if(joint_id === RightKneeId)
  {
    selectedJointXrays = [...RightKneeXrays,{
      id: 6,
      name: "Bilateral Kneecap",
      type: "bilateral_kneecap",
      isDone: false,
      image: null,
      thumbnail: Xray3,
      enable: false,
    }]
  }
  else if(joint_id === LeftKneeId)
  {
    selectedJointXrays = [...LeftKneeXrays,{
      id: 6,
      name: "Bilateral Kneecap",
      type: "bilateral_kneecap",
      isDone: false,
      image: null,
      thumbnail: Xray3,
      enable: false,
    }]
  }
  else if(joint_id === RightHipId)
  {
    selectedJointXrays = RightHipXrays
  }
  else if(joint_id === LeftHipId)
  {
    selectedJointXrays = LeftHipXrays
  }
  selectedJointXrays.forEach((x)=> {
    let Finded = Xrays.find((xray) => xray.id === x.id);
    if(Finded)
    {
      gatheredXrays.push(Finded);
    }
  })
  return gatheredXrays;
} 

export function getChartOverallByHip()
{
  return HipChartOverAllRounded;
} 

export function getChartOverallByKnee()
{
  return KneeChartOverAllRounded;
} 

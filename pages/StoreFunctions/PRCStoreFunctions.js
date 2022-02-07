import { getLeftHipId, getLeftKneeId, getRightHipId, getRightKneeId } from "./evaluationStoreFunctions"

const TJRPath = "Operative Candidate - Total Joint Replacement"
const PJRPath = "Operative Candidate - Partial Joint Replacement"
const NOCPath = "Non Operative Candidate"
const NOCOIPath = "Non Operative Candidate - Operational Injection"

const TJRPathId = "1"
const PJRPathId = "2"
const NOCPathId = "3"
const NOCOIPathId = "4"

const THRPathId = "5"
const PHRPathId = "6"

// const JointReplacementThreshold = 75;
const JointReplacementThreshold = 50;


export function getJointReplacementThreshold()
{
    return JointReplacementThreshold;
}


const Paths = [
    {id:TJRPathId, label1:"TJR", label2:"Total Knee Replacement", class1:'treatment-c-wrapper',pathLabel:TJRPath,},
    {id:PJRPathId, label1:"PJR", label2:"Partial Knee Replacement", class1:'treatment-c-wrapper',pathLabel:PJRPath},
    {id:NOCPathId, label1:"NOC", label2:"Non Operative Treatment", class1:'treatment-c-wrapper',pathLabel:NOCPath},
    {id:NOCOIPathId, label1:"NOC-OI", label2:"Non Operative Treatment - Optional Injection", class1:'treatment-c-wrapper',pathLabel:NOCOIPath},

    {id:THRPathId, label1:"THR", label2:"Total Hip Replacement", class1:'treatment-c-wrapper',pathLabel:TJRPath,},
    {id:PHRPathId, label1:"PHR", label2:"Partial Hip Replacement", class1:'treatment-c-wrapper',pathLabel:PJRPath},
]

const Ratings = [
    { name: 'Normal to Slight', id: '1', color: '#B3D89B' }, //seegreen 
    { name: 'Moderate', id: '2', color: '#FAF075' }, //yellow
    { name: 'Near End Stage', id: '3', color: '#F26E82' }, //pink
    { name: 'End Stage', id: '4', color: '#F26E82' }, //pink
    { name: 'Cannot Evaluate', id: '5', color: '#E4E4E4' } //gray
]

export function getTJRPathId()
{
    return TJRPathId;
}
export function getPJRPathId()
{
    return PJRPathId;
}
export function getNOCPathId()
{
    return NOCPathId;
}
export function getNOCOIPathId()
{
    return NOCOIPathId;
}

export function getTHRPathId()
{
    return THRPathId;
}

export function getPHRPathId()
{
    return PHRPathId;
}

export function getRatingById(id)
{
    let findedRow = Ratings.find((rating)=>rating.id===id.toString());
    if(findedRow)
    {
        return findedRow;
    }
    else return {};
}

export function getPathClassById(id)
{
    let findedPath = Paths.find((p)=>p.id.toString()===id.toString());
    if(findedPath)
    {
        return findedPath.class1;
    }
    else return "";
}

export function getPathById(id)
{
    let findedPath = Paths.find((p)=>p.id.toString()===id.toString());
    if(findedPath)
    {
        return findedPath;
    }
    else return {};
}


export function LoadDegeneration(Compartments,Joint_id)
{
    console.log(Compartments);
    console.log(Joint_id);

    let Score = 0;
    if(Joint_id)
    {
        let joint_id = Joint_id.toString();
        if(joint_id==="3" || joint_id==="4")
        {
            Score = getAggregate(Compartments[0].score,Compartments[1].score,Compartments[2].score)
        }

        else if(joint_id==="1" || joint_id==="2")
        {
            Score = getAggregate(Compartments[0].score,Compartments[1].score)
        }

        console.log(Score);
    }

    else if(Compartments.length===3)
    {
        Score = getAggregate(Compartments[0].score,Compartments[1].score,Compartments[2].score)
    }
    else if(Compartments.length===2)
    {
        Score = getAggregate(Compartments[0].score,Compartments[1].score)
    }

    return Score;
}

export function LoadPath (Score, Compartments,Joint_id){

    let pathId = "";
    let Replacement = "";
    let Res = null;
    if(Joint_id)
    {
        let joint_id = Joint_id.toString();
        if(joint_id===getRightKneeId() || joint_id===getLeftKneeId())
        {
            Res = LoadPathKnee(Score,Compartments[0],Compartments[1],Compartments[2]);
        }

        else if(joint_id=== getRightHipId() || joint_id===getLeftHipId())
        {
            Res = LoadPathHip(Score,Compartments[0],Compartments[1]);
        }
    }

    else if(Compartments.length===3)
    {
        Res = LoadPathKnee(Score,Compartments[0],Compartments[1],Compartments[2]);
    }
    else if(Compartments.length===2)
    {
        Res = LoadPathHip(Score,Compartments[0],Compartments[1]);
    }

    pathId = Res.pathId;
    Replacement = Res.Replacement;

    return {pathId,Replacement};
}

function LoadPathKnee(Score,Compartment1,Compartment2,Compartment3)
{
    let Replacement = "";
    let Path = "";
    if (Score < JointReplacementThreshold) {
        if (Compartment1.score > 2 || Compartment2.score > 2 || Compartment3.score > 2) {

            //surgical Candidate Care Pathway
            if ((Compartment1.score === 1 && Compartment2.score === 1) || (Compartment1.score === 1 && Compartment3.score === 1) || (Compartment2.score === 1 && Compartment3.score === 1)) {
                //Optional Injections - Partial Joint Replacement
                if (Compartment1.score > 2) {
                    Replacement = "Medial"
                }
                else if (Compartment2.score > 2) {
                    Replacement = "Lateral"
                }
                else if (Compartment3.score > 2) {
                    Replacement = "Kneecap"
                }

                Path = PJRPathId;
            }

            else {
                //Optional Injections - Total Joint Replacement
                Path = TJRPathId
            }
        }

        else {
            //Non Operative Care Pathway
            if (Compartment1.score > 1 || Compartment2.score > 1 || Compartment3.score > 1) {
                //Non Operative Candidate (Operational Injection)
                Path = NOCOIPathId
            }
            else {
                //Non Operative Candidate
                Path = NOCPathId;
            }
        }
    }

    else {
        //Non Operative Care Pathway
        if (Compartment1.score > 1 || Compartment2.score > 1 || Compartment3.score > 1) {
            //Non Operative Candidate (Operational Injection)
            Path = NOCOIPathId;
        }
        else {
            //Non Operative Candidate
            Path = NOCPathId;
        }
    }
    return { pathId:Path, Replacement }
}

function LoadPathHip(Score,Compartment1,Compartment2){
    let Path = "";
    let Replacement = "";

    if((JSON.parse(Score)<JointReplacementThreshold) && (Compartment1.score > 2 || Compartment2.score > 2) )
    {
        //Optional Injections - Total Joint Replacement
        Path = THRPathId
    }
    else {
        Path = NOCPathId
    }
    return {pathId:Path}
}

export function getAggregate (a, b){
    let int1 = parseInt(a)
    let int2 = parseInt(b)

    if(int1 === 5) //for cannot Evaluate
    {
        int1 = -1;
    }
    if(int2 === 5) //for cannot Evaluate
    {
        int1 = -1;
    }

    console.log('int1',int1)
    console.log('int2',int2)

    if(int1 && int2)
    {
        if (int1 - int2 > 0) {
            return int1;
        }
        else return int2;
    }

    else if(int1)
    {
        return int1
    }

    else if (int2)
    {
        return int2
    }
   
}

export function getScore (ChartOverAll,joint_id,form){
    let OverallInterval = 0;
    let SumPain = 0;
    let SumStiff = 0;
    let SumFunction = 0;

    let Question1Answer = parseInt(form.find(ques => ques.question_id.toString() === "1" && ques.joint_id.toString() === joint_id.toString()).pro_severity_id);
    if (Question1Answer.toString() !== "NaN") {
        SumStiff = Question1Answer - 1;
    }
    else SumStiff = 0;

    form.filter(ques => { if ((parseInt(ques.question_id) > 1 && parseInt(ques.question_id) < 6) && ques.joint_id.toString() === joint_id.toString()) { if (parseInt(ques.pro_severity_id).toString() != "NaN") { SumPain = SumPain + parseInt(ques.pro_severity_id) - 1 } } });
    form.filter(ques => { if ((parseInt(ques.question_id) > 5 && parseInt(ques.question_id) < 8) && ques.joint_id.toString() === joint_id.toString()) { if (parseInt(ques.pro_severity_id).toString() != "NaN") { SumFunction = SumFunction + parseInt(ques.pro_severity_id) - 1 } } });

    OverallInterval = ChartOverAll[SumPain + SumStiff + SumFunction];
    return OverallInterval
}

export default ()=>{}
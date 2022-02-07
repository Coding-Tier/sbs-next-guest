import React from 'react';

// import RightOverlayZone1 from '../../assets/Zone1RightHipOverlay.png'
// import RightOverlayZone2 from '../../assets/Zone2RightHipOverlay.png'
// import LeftOverlayZone1 from '../../assets/Zone1LeftHipOverlay.png'
// import LeftOverlayZone2 from '../../assets/Zone2LeftHipOverlay.png'

// import RightOverlayZone1 from 'https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/Zone1RightHipOverlay.png?alt=media'
// import RightOverlayZone2 from 'https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/Zone2RightHipOverlay.png?alt=media'
// import LeftOverlayZone1 from 'https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/Zone1LeftHipOverlay.png?alt=media'
// import LeftOverlayZone2 from 'https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/Zone2LeftHipOverlay.png?alt=media'
import { getLeftHipId, getRightHipId } from '../../StoreFunctions/evaluationStoreFunctions';


import Image from 'next/image'



const HipsOverlay = (props) => {

    const [image,setImage] = React.useState(null);
    const {joint_id,ActiveType} = props;

    React.useEffect(()=>{

        if(joint_id===getRightHipId())
        {
            if(ActiveType==="RIGHT ZONE 1")
            {
                setImage("https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/Zone1RightHipOverlay.png?alt=media")
            }
            if(ActiveType==="RIGHT ZONE 2")
            {
                setImage("https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/Zone2RightHipOverlay.png?alt=media")
            }
        }

        else if(joint_id===getLeftHipId())
        {
            if(ActiveType==="LEFT ZONE 1")
            {
                setImage("https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/Zone1LeftHipOverlay.png?alt=media")
            }
            if(ActiveType==="LEFT ZONE 2")
            {
                setImage("https://firebasestorage.googleapis.com/v0/b/sbs-stag.appspot.com/o/Zone2LeftHipOverlay.png?alt=media")
            }
        }
    },[])
    return ( 
    <div style={{width:"100%",position:"absolute",top:"0px",left:"0px"}}>
        {
            image && <img  src={image}  style={{maxWidth:"450px",maxHeight:"calc(50vh - 50px)"}}/>
        }
    </div> );
}
 
export default HipsOverlay;
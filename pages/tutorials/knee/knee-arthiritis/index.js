import React, { Component } from "react";

// import MyContext from "../../../helper/themeContext";
// import { Redirect, Route, Router } from "react-router-dom";

import Welcome from "./welcome/Welcome";
import Overview from "./Overview/overview";
import KDAA from "./KDAA/KDAA";
import KDAA2 from "./KDAA2/KDAA2";
import COTK from "./COTK/COTK";
import VDWXR from "./VDWXR/VDWXR";
import LATMALCOTKITX from "./LATMALCOTKITX/LATMALCOTKITX";
import VDWXRTKC from "./VDWXRTKC/VDWXRTKC";
import COTK2 from "./COTK2/COTK2";
import ETMALC from "./ETMALC/ETMALC";
import ETKC from "./ETKC/ETKC";
import LV from "./LV/LV";
import OTCXR from "./OTCXR/OTCXR";
import SOXRVNBOPS from "./SOXRVNBOPS/SOXRVNBOPS";
import WXRWYR from "./WXRWYR/WXRWYR";
import EKDWXR from "./EKDWXR/EKDWXR";
import HTIJSNAD from "./HTIJSNAD/HTIJSNAD";
import WDTJSSAEFTMALC from "./WDTJSSAEFTMALC/WDTJSSAEFTMALC";
import LOJSND from "./LOJSND/LOJSND";
import JSNMC from "./JSNMC/JSNMC";
import JSNLC from "./JSNLC/JSNLC";
import WDTJSSAEFTMALC2 from "./WDTJSSAEFTMALC2/WDTJSSAEFTMALC2";
import WITJSFTKC from "./WITJSFTKC/WITJSFTKC";
import YMLATJSONBSOTK from "./YMLATJSONBSOTK/YMLATJSONBSOTK";
import JSNKC from "./JSNKC/JSNKC";
import XRMATTDLOD from "./XRMATTDLOD/XRMATTDLOD";
import XRMALOD from "./XRMALOD/XRMALOD";
import XRMMS from "./XRMMS/XRMMS";
import Congrats from "./Congrats/Congrats";

import { useRouter } from 'next/router'

import EducationStepper from "../../../components/educationStepper/educationStepper";

const sections = [
  {
    id:1,
    label:'Introduction',
    path:'/tutorials/knee/knee-arthiritis/welcome',
  },
  {
    id:2,
    label:'What is Arthritis?',
    path:'/tutorials/knee/knee-arthiritis/knee-degeneration-and-arthritis-2',

  },
  {
    id:3,
    label:'Anatomy of the knee',
    path:'/tutorials/knee/knee-arthiritis/compartments-of-the-knee',
  },
  {
    id:4,
    label:'Viewing Arthritis with X-rays',
    path:'/tutorials/knee/knee-arthiritis/viewing-degeneration-with-x-rays-copy',
  },
  {
    id:5,
    label:'What X-Rays Do You Need?',
    path:'/tutorials/knee/knee-arthiritis/evaluating-the-medial-and-lateral-compartments-v2',
  },
  {
    id:6,
    label:'Degeneration – Medial and Lateral',
    path:'/tutorials/knee/knee-arthiritis/evaluating-knee-degeneration-with-x-rays',
  },
  {
    id:7,
    label:'Degeneration – Kneecap',
    path:'/tutorials/knee/knee-arthiritis/where-is-the-joint-space-for-the-kneecap-compartment',
  },
  {
    id:8,
    label:'Intro to X-Ray Matching',
    path:'/tutorials/knee/knee-arthiritis/x-ray-matching-a-tool-to-determine-levels-of-degeneration',
  }
]
const pages = [
  {
    id:1,
    path:"/tutorials/knee/knee-arthiritis/welcome",
    component:<Welcome/>,
    exact:true,
    sectionId:1
  },
  {
    id:2,
    path:"/tutorials/knee/knee-arthiritis/overview",
    component:<Overview/>,
    exact:true,
    sectionId:1
  },
  
  {
    id:3,
    path:"/tutorials/knee/knee-arthiritis/knee-degeneration-and-arthritis-2",
    component:<KDAA2/>,
    exact:true,
    sectionId:2
  },
  {
    id:4,
    path:"/tutorials/knee/knee-arthiritis/knee-degeneration-and-arthritis",
    component:<KDAA/>,
    exact:true,
    sectionId:2
  },
  
  {
    id:5,
    path:"/tutorials/knee/knee-arthiritis/compartments-of-the-knee",
    component:<COTK/>,
    exact:true,
    sectionId:3
  },
  {
    id:6,
    path:"/tutorials/knee/knee-arthiritis/viewing-degeneration-with-x-rays-copy",
    component:<VDWXR/>,
    exact:true,
    sectionId:4
  },
  {
    id:7,
    path:"/tutorials/knee/knee-arthiritis/learn-about-the-medial-and-lateral-compartments-of-the-knee",
    component:<LATMALCOTKITX/>,
    exact:true,
    sectionId:4
  },
  {
    id:8,
    path:"/tutorials/knee/knee-arthiritis/viewing-degeneration-with-x-rays-the-kneecap-compartment",
    component:<VDWXRTKC/>,
    exact:true,
    sectionId:4
  },
  {
    id:9,
    path:"/tutorials/knee/knee-arthiritis/compartments-of-the-knee-2",
    component:<COTK2/>,
    exact:true,
    sectionId:4
  },
  {
    id:10,
    path:"/tutorials/knee/knee-arthiritis/evaluating-the-medial-and-lateral-compartments-v2",
    component:<ETMALC/>,
    exact:true,
    sectionId:5
  },
  {
    id:11,
    path:"/tutorials/knee/knee-arthiritis/evaluating-the-kneecap-compartment",
    component:<ETKC/>,
    exact:true,
    sectionId:5
  },
  {
    id:12,
    path:"/tutorials/knee/knee-arthiritis/lateral-view",
    component:<LV/>,
    exact:true,
    sectionId:5
  },
  {
    id:13,
    path:"/tutorials/knee/knee-arthiritis/obtaining-the-correct-x-rays",
    component:<OTCXR/>,
    exact:true,
    sectionId:5
  },
  {
    id:14,
    path:"/tutorials/knee/knee-arthiritis/summary-of-x-ray-views-necessary-based-on-patients-symptoms",
    component:<SOXRVNBOPS/>,
    exact:true,
    sectionId:5
  },
  {
    id:15,
    path:"/tutorials/knee/knee-arthiritis/what-x-rays-would-you-request",
    component:<WXRWYR/>,
    exact:true,
    sectionId:5
  },
  {
    id:16,
    path:"/tutorials/knee/knee-arthiritis/evaluating-knee-degeneration-with-x-rays",
    component:<EKDWXR/>,
    exact:true,
    sectionId:6
  },
  {
    id:17,
    path:"/tutorials/knee/knee-arthiritis/how-to-identify-joint-space-narrowing-and-degeneration",
    component:<HTIJSNAD/>,
    exact:true,
    sectionId:6
  },
  {
    id:18,
    path:"/tutorials/knee/knee-arthiritis/where-does-the-joint-space-start-and-end-for-the-medial-and-lateral-compartments",
    component:<WDTJSSAEFTMALC/>,
    exact:true,
    sectionId:6
  },
  {
    id:19,
    path:"/tutorials/knee/knee-arthiritis/where-does-the-joint-space-start-and-end-for-the-medial-and-lateral-compartments-2",
    component:<WDTJSSAEFTMALC2/>,
    exact:true,
    sectionId:6
  },
  {
    id:20,
    path:"/tutorials/knee/knee-arthiritis/levels-of-joint-space-narrowing-degeneration",
    component:<LOJSND/>,
    exact:true,
    sectionId:6
  },
  {
    id:21,
    path:"/tutorials/knee/knee-arthiritis/joint-space-narrowing-medial-compartment",
    component:<JSNMC/>,
    exact:true,
    sectionId:6
  },
  {
    id:22,
    path:"/tutorials/knee/knee-arthiritis/joint-space-narrowing-lateral-compartment",
    component:<JSNLC/>,
    exact:true,
    sectionId:6
  },
  {
    id:23,
    path:"/tutorials/knee/knee-arthiritis/where-is-the-joint-space-for-the-kneecap-compartment",
    component:<WITJSFTKC/>,
    exact:true,
    sectionId:7
  },
  {
    id:24,
    path:"/tutorials/knee/knee-arthiritis/you-must-look-at-the-joint-space-on-both-sides-of-the-kneecap",
    component:<YMLATJSONBSOTK/>,
    exact:true,
    sectionId:7
  },

  {
    id:25,
    path:"/tutorials/knee/knee-arthiritis/joint-space-narrowing-kneecap-compartment",
    component:<JSNKC/>,
    exact:true,
    sectionId:7
  },
  {
    id:26,
    path:"/tutorials/knee/knee-arthiritis/x-ray-matching-a-tool-to-determine-levels-of-degeneration",
    component:<XRMATTDLOD/>,
    exact:true,
    sectionId:8
  },
  {
    id:27,
    path:"/tutorials/knee/knee-arthiritis/x-ray-matching-and-levels-of-degeneration",
    component:<XRMALOD/>,
    exact:true,
    sectionId:8
  },
  {
    id:28,
    path:"/tutorials/knee/knee-arthiritis/x-ray-matching-moderate-selected",
    component:<XRMMS/>,
    exact:true,
    sectionId:8
  },
  {
    id:29,
    path:"/tutorials/knee/knee-arthiritis/you-must-look-at-the-joint-space-on-both-sides-of-the-kneecap",
    component:<YMLATJSONBSOTK/>,
    exact:true,
    sectionId:8
  },
  {
    id:30,
    path:"/tutorials/knee/knee-arthiritis/you-must-look-at-the-joint-space-on-both-sides-of-the-kneecap",
    component:<YMLATJSONBSOTK/>,
    exact:true,
    sectionId:8
  },
  {
    id:31,
    path:"/tutorials/knee/knee-arthiritis/congrats",
    component:<Congrats/>,
    exact:true,
    sectionId:9
  },


]




const KneeArthiritis = () => {

  const router = useRouter()
  const { pid } = router.query

  const _getPage = () =>
  {
    if(window.location.pathname==="/tutorials/knee/knee-arthiritis")
    {
      return <Welcome/>
    }
    
    let findedRow = pages.find((page)=>page.path===window.location.pathname)
    if(findedRow)
    {
      return findedRow.component;
    }
  }

  return ( 

    <>
      <EducationStepper pages={pages} sections={sections} currentPageId={5} />
      <div id="tutorial_main_wrapper">
        {
          _getPage()
        }
      </div>
    </>
    /* {
      pages.map((cR) => <Route exact={cR.exact} path={cR.path} component={cR.component} />)
    }
    <Redirect to="/tutorials/knee/knee-arthiritis/welcome" /> */
  );
}
 
export default KneeArthiritis;

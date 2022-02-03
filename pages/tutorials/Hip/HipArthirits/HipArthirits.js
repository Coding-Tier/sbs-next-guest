import React, { Component } from "react";
import MyContext from "../../../helper/themeContext";
import { Redirect, Route, Router } from "react-router-dom";
import Welcome from "./welcome";
import Overview from "./Overview/overview";
import KDAA from "./KDAA/KDAA";
import KDAA2 from "./KDAA2/KDAA2";
import COTK from "./COTK/COTK";
import VDWXR from "./VDWXR/VDWXR";
import LATMALCOTKITX from "./LATMALCOTKITX/LATMALCOTKITX";
import ETMALC from "./ETMALC/ETMALC";
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
import XRMATTDLOD from "./XRMATTDLOD/XRMATTDLOD";
import XRMALOD from "./XRMALOD/XRMALOD";
import XRMALODLV from "./XRMALODLV/XRMALODLV";
import XRMMS from "./XRMMS/XRMMS";
import Congrats from "./Congrats/Congrats";
import EducationStepper from "../../../components/educationStepper/educationStepper";

const sections = [
  {
    id: 1,
    label: "Introduction",
    path: "/tutorials/hip-arthiritis/welcome",
  },
  {
    id: 2,
    label: "What is Arthritis?",
    path: "/tutorials/hip-arthiritis/hip-degeneration-and-arthritis-2",
  },
  {
    id: 3,
    label: "Anatomy of the hip",
    path: "/tutorials/hip-arthiritis/compartments-of-the-hip",
  },
  {
    id: 4,
    label: "Viewing Arthritis with X-rays",
    path: "/tutorials/hip-arthiritis/evaluating-the-medial-and-lateral-compartments-v2",
  },
  {
    id: 5,
    label: "What X-Rays Do You Need?",
    path: "/tutorials/hip-arthiritis/obtaining-the-correct-x-rays",
  },
  {
    id: 6,
    label: "Degeneration - AP Pelvis + Lateral",
    path: "/tutorials/hip-arthiritis/evaluating-hip-degeneration-with-x-rays",
  },

  {
    id: 7,
    label: "Intro to X-Ray Matching",
    path: "/tutorials/hip-arthiritis/x-ray-matching-a-tool-to-determine-levels-of-degeneration",
  },
];
const pages = [
  {
    id: 1,
    path: "/tutorials/hip-arthiritis/welcome",
    component: Welcome,
    exact: true,
    sectionId: 1,
  },
  {
    id: 2,
    path: "/tutorials/hip-arthiritis/overview",
    component: Overview,
    exact: true,
    sectionId: 1,
  },

  {
    id: 3,
    path: "/tutorials/hip-arthiritis/hip-degeneration-and-arthritis-2",
    component: KDAA2,
    exact: true,
    sectionId: 2,
  },
  {
    id: 4,
    path: "/tutorials/hip-arthiritis/hip-degeneration-and-arthritis",
    component: KDAA,
    exact: true,
    sectionId: 2,
  },

  {
    id: 5,
    path: "/tutorials/hip-arthiritis/compartments-of-the-hip",
    component: COTK,
    exact: true,
    sectionId: 3,
  },
  
  {
    id: 6,
    path: "/tutorials/hip-arthiritis/learn-about-the-medial-and-lateral-compartments-of-the-hip",
    component: LATMALCOTKITX,
    exact: true,
    sectionId: 4,
  },
  {
    id: 7,
    path: "/tutorials/hip-arthiritis/evaluating-the-medial-and-lateral-compartments-v2",
    component: ETMALC,
    exact: true,
    sectionId: 5,
  },
  {
    id: 8,
    path: "/tutorials/hip-arthiritis/lateral-view",
    component: LV,
    exact: true,
    sectionId: 5,
  },

  {
    id: 9,
    path: "/tutorials/hip-arthiritis/viewing-degeneration-with-x-rays-copy",
    component: VDWXR,
    exact: true,
    sectionId: 5,
  },

  {
    id: 10,
    path: "/tutorials/hip-arthiritis/obtaining-the-correct-x-rays",
    component: OTCXR,
    exact: true,
    sectionId: 5,
  },
  {
    id: 14,
    path: "/tutorials/hip-arthiritis/summary-of-x-ray-views-necessary-based-on-patients-symptoms",
    component: SOXRVNBOPS,
    exact: true,
    sectionId: 5,
  },
  {
    id: 11,
    path: "/tutorials/hip-arthiritis/what-x-rays-would-you-request",
    component: WXRWYR,
    exact: true,
    sectionId: 5,
  },
  {
    id: 12,
    path: "/tutorials/hip-arthiritis/evaluating-hip-degeneration-with-x-rays",
    component: EKDWXR,
    exact: true,
    sectionId: 6,
  },
  {
    id: 13,
    path: "/tutorials/hip-arthiritis/how-to-identify-joint-space-narrowing-and-degeneration",
    component: HTIJSNAD,
    exact: true,
    sectionId: 6,
  },
  {
    id: 14,
    path: "/tutorials/hip-arthiritis/where-does-the-joint-space-start-and-end-for-the-medial-and-lateral-compartments",
    component: WDTJSSAEFTMALC,
    exact: true,
    sectionId: 6,
  },
  {
    id: 15,
    path: "/tutorials/hip-arthiritis/where-does-the-joint-space-start-and-end-for-the-medial-and-lateral-compartments-2",
    component: WDTJSSAEFTMALC2,
    exact: true,
    sectionId: 6,
  },
  {
    id: 20,
    path: "/tutorials/hip-arthiritis/levels-of-joint-space-narrowing-degeneration",
    component: LOJSND,
    exact: true,
    sectionId: 6,
  },
  {
    id: 21,
    path: "/tutorials/hip-arthiritis/joint-space-narrowing-medial-compartment",
    component: JSNMC,
    exact: true,
    sectionId: 6,
  },
  {
    id: 22,
    path: "/tutorials/hip-arthiritis/joint-space-narrowing-lateral-compartment",
    component: JSNLC,
    exact: true,
    sectionId: 6,
  },
  {
    id: 26,
    path: "/tutorials/hip-arthiritis/x-ray-matching-a-tool-to-determine-levels-of-degeneration",
    component: XRMATTDLOD,
    exact: true,
    sectionId: 8,
  },
  {
    id: 27,
    path: "/tutorials/hip-arthiritis/x-ray-matching-and-levels-of-degeneration",
    component: XRMALOD,
    exact: true,
    sectionId: 8,
  },
  {
    id: 28,
    path: "/tutorials/hip-arthiritis/x-ray-matching-and-levels-of-degeneration-lateral-view",
    component: XRMALODLV,
    exact: true,
    sectionId: 8,
  },
  {
    id: 29,
    path: "/tutorials/hip-arthiritis/x-ray-matching-moderate-selected",
    component: XRMMS,
    exact: true,
    sectionId: 8,
  },
  {
    id: 32,
    path: "/tutorials/hip-arthiritis/congrats",
    component: Congrats,
    exact: true,
    sectionId: 9,
  },
];

class HipArthirits extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router history={this.context.history}>
        {
          <EducationStepper
            pages={pages}
            sections={sections}
            currentPageId={5}
          />
        }
        {pages.map((cR) => (
          <Route exact={cR.exact} path={cR.path} component={cR.component} />
        ))}
        <Redirect to="/tutorials/hip-arthiritis/welcome" />
      </Router>
    );
  }
}

HipArthirits.contextType = MyContext;
export default HipArthirits;

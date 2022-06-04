import React, { Component } from 'react';
import { Route, Router } from "react-router-dom";
import MyContext from '../../../helper/themeContext';
import CXE from './CXE';
import EHAWX from './EHAWX';
import JSNAPPZ1 from './JSNAPPZ1';
import JSNAPPZ2 from './JSNAPPZ2';
import LATTZOTH from './LATTZOTH';
import LATTZOTHX from './LATTZOTHX';
import SampleHipEval from './SampleHipEval';
import Welcome from '.';
import XMZ1 from './XMZ1';
import XMZ2 from './XMZ2';
import Congrats from './Congrats/Congrats';
// import COTK2 from './COTK2/COTK2';
// import EVALKV from './EVALKV';
// import JSNKC from './JSNKC/JSNKC';
// import JSNLC from './JSNLC/JSNLC';
// import JSNMC from './JSNMC/JSNMC';

// import LATCOTK from './LATCOTK/LATCOTK';
// import LATMALCOTKITX from './LATMALCOTKITX/LATMALCOTKITX';
// import SampleKneeEval from './SampleKneeEval/SampleKneeEval';
// import Welcome from './Welcome';

class ShortHip extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
        <Router history={this.context.history}>
            <Route exact path="/tutorials/hip/short-hip/" component={Welcome} />
            <Route exact path="/tutorials/hip/short-hip/welcome" component={Welcome} />
            <Route exact path="/tutorials/hip/short-hip/LATTZOTH" component={LATTZOTH} />
            <Route exact path="/tutorials/hip/short-hip/LATTZOTHX" component={LATTZOTHX} />
            <Route exact path="/tutorials/hip/short-hip/EHAWX" component={EHAWX} />
            <Route exact path="/tutorials/hip/short-hip/JSNAPPZ1" component={JSNAPPZ1} />
            <Route exact path="/tutorials/hip/short-hip/JSNAPPZ2" component={JSNAPPZ2} />
            <Route exact path="/tutorials/hip/short-hip/CXE" component={CXE} />
            <Route exact path="/tutorials/hip/short-hip/XMZ1" component={XMZ1} />
            <Route exact path="/tutorials/hip/short-hip/XMZ2" component={XMZ2} />
            <Route exact path="/tutorials/hip/short-hip/Sample-hip-eval" component={SampleHipEval} />
            <Route exact path="/tutorials/hip/short-hip/Congrats" component={Congrats} />


        </Router> );
    }
}
 
export default ShortHip;
ShortHip.contextType = MyContext
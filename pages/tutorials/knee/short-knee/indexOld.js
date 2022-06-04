import React, { Component } from 'react';
import { Route, Router } from "react-router-dom";
import MyContext from '../../../helper/themeContext';
import Congrats from './Congrats';
import COTK2 from './COTK2';
import EVALKV from './EVALKV';
import JSNKC from './JSNKC';
import JSNLC from './JSNLC';
import JSNMC from './JSNMC';

import LATCOTK from './LATCOTK';
import LATMALCOTKITX from './LATMALCOTKITX';
import SampleKneeEval from './Sample-knee-eval';
import Welcome from './Welcome';

class ShortKnee extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
        <Router history={this.context.history}>

            <Route exact path="/tutorials/knee/short-knee/" component={Welcome} />
            <Route exact path="/tutorials/knee/short-knee/welcome" component={Welcome} />
            <Route exact path="/tutorials/knee/short-knee/LATCOTK" component={LATCOTK} />
            <Route exact path="/tutorials/knee/short-knee/EVALKV" component={EVALKV} />
            <Route exact path="/tutorials/knee/short-knee/LATMALCOTKITX" component={LATMALCOTKITX} />
            <Route exact path="/tutorials/knee/short-knee/COTK2" component={COTK2} />
            <Route exact path="/tutorials/knee/short-knee/JSNMC" component={JSNMC} />
            <Route exact path="/tutorials/knee/short-knee/JSNLC" component={JSNLC} />
            <Route exact path="/tutorials/knee/short-knee/JSNKC" component={JSNKC} />
            <Route exact path="/tutorials/knee/short-knee/Sample-knee-eval" component={SampleKneeEval} />
            <Route exact path="/tutorials/knee/short-knee/Congrats" component={Congrats} />
        </Router> );
    }
}
 
export default ShortKnee;
ShortKnee.contextType = MyContext
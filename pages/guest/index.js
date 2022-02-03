import React, { Component } from 'react';
import { SemipolarLoading } from "react-loadingg";
import { Grid, Button } from "@material-ui/core";
import Bone2Image from "../assets/bone1_Bitmap.png";
import MyContext from '../helper/themeContext';

class Guest extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() {
    
        return (
          <div id="Home_Main_Div">
            
          </div>
        );
      }
}
 
Guest.contextType = MyContext;
export default Guest;
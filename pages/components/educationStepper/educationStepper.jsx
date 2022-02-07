import MyContext from "../../helper/themeContext";
import openIcon from "../../assets/open-education-stepper.png";
import React, { useState, useEffect,useContext,Component } from 'react'

import Image from 'next/image'

const themeGrey = "rgb(194, 194, 194)";

// const EducationStepper = ({pages,sections}) => {

//   const [currentSectionId,setCurrentSectionId] = useState(1);
//   const [path,setPath] = useState(null);
//   const [isMenuOpen,setIsMenuOpen] = useState(false);

//   const context = useContext(MyContext);

//   useEffect(()=>{
//     _checkSection();
//   })

//   const _getBg = (id) => {
//     return id === currentSectionId
//       ? themeGrey
//       : currentSectionId > id
//       ? "orange"
//       : "white";
//   };

//   const _toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const _checkSection = () =>
//   {
//     if (path !== window.location.pathname) {
//       const Ppages = pages;
//       const tempPath = window.location.pathname;
//       const currentPage = Ppages.find((page) => page.path === path);
//       let tempCurrentSectionId = 0;
//       if (currentPage) {
//         tempCurrentSectionId = currentPage.sectionId;
//       }
//       setCurrentSectionId(tempCurrentSectionId);
//       setPath(tempPath);
//     }
//   }

//   const _handleClick = (path) => {
//     context.Navigate(path);
//     _checkSection();
//   };

//   const transformClass = isMenuOpen ? "rotate(0deg)" : "rotate(180deg)";
//   const widthClass = isMenuOpen ? "300px" : "22px";
//   console.log("Sections", sections);
class EducationStepper extends Component {
  constructor(props) {
    super(props);
    this.state = { currentSectionId: 1, path: null, isMenuOpen: false };
  }

  _toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  componentDidUpdate() {
    if (this.state.path !== window.location.pathname) {
      const pages = this.props.pages;
      const path = window.location.pathname;
      const currentPage = pages.find((page) => page.path === path);
      let currentSectionId = 0;
      if (currentPage) {
        currentSectionId = currentPage.sectionId;
      }
      this.setState({ currentSectionId, path });
    }
  }

  _getBg = (id) => {
    let { currentSectionId } = this.state;
    return id === currentSectionId
      ? themeGrey
      : currentSectionId > id
      ? "orange"
      : "white";
  };

  _handleClick = (path) => {
    this.context.Navigate(path);
  };

  render() {
    const { sections } = this.props;
    const { isMenuOpen } = this.state;

    const transformClass = isMenuOpen ? "rotate(0deg)" : "rotate(180deg)";
    const widthClass = isMenuOpen ? "300px" : "22px";
    console.log("Sections", sections);
  return (
    <div className="education-stepper-wrapper">
      <div className="vertical-stepper-wrapper">
        {sections.map((section, id) => {
          return (
            <div
              className="vertical-stepper-box-wrapper"
              onClick={() => this._handleClick(section.path)}
              style={{ width: widthClass }}
            >
              <div
                className="vertical-stepper-box"
                style={{ background: this._getBg(section.id) }}
              ></div>
              <div
                className="vertical-stepper-menu"
                style={{ background: this._getBg(section.id) }}
              >
                {section.label}
              </div>
            </div>
          );
        })}
      </div>

      <div
        className="vertical-stepper-toggler-wrapper"
        onClick={this._toggleMenu}
      >
        <img 
          src={openIcon}
          className="vertical-stepper-toggler-icon"
          style={{ transform: transformClass }}
          alt={"open menu"}
        />
      </div>

      <style global>
        {
          `
          .education-stepper-wrapper
{
  position: absolute;
  z-index: 1;
  margin-top: 120px;
  margin-left: 100px;
  /* display: inline-block;
  width: 100px;
  height: 100px; */
}

.vertical-stepper-wrapper
{
  display: inline-block;
  vertical-align: top;
  cursor: pointer;
}

.vertical-stepper-box-wrapper
{
  vertical-align: top;
  /* overflow: hidden; */
  height: 52px;
  /* text-overflow: inherit; */
  transition: 1s all;
  white-space: nowrap;
overflow: hidden;
background: white;
}

.vertical-stepper-box
{
  width: 20px;
  height: 50px;
  border: 1px solid rgb(194, 194, 194);
  border-right: 0px;
  display: inline-block;
}

.vertical-stepper-menu
{
  height: 50px;
  border: 1px solid rgb(194, 194, 194);
  border-left: 0px;

  width: 100%;
  display: inline-block;
  /* background: tomato; */
  vertical-align: top;
  line-height: 50px;
}

.vertical-stepper-menu-wrapper
{
  transition: all 1s;
}

.vertical-stepper-toggler-wrapper
{
  display: inline-block;
  vertical-align: top;
  width: 50px;
  height: 52px;
  background: rgb(194, 194, 194);
  cursor: pointer;
}

.vertical-stepper-toggler-icon
{
  width: 50px;
  transition: all 1s;
}
          `
        }

      </style>
    </div>
  );
  }
}

EducationStepper.contextType = MyContext
export default EducationStepper;

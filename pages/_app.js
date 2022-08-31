import MyContext from "./helper/themeContext";
import { useRouter } from 'next/router'
import './styles.css'
import React, { useState, useEffect } from 'react'
import { _setMatchingEductaionStuff } from "./StoreFunctions/evaluationStoreFunctions";
import Script from 'next/script'

const baseUrlH = "https://sbs-server-adonis.herokuapp.com"; //old Env
const baseUrlA = "https://sbs-backend-dw.herokuapp.com"
const baseUrlL = "http://127.0.0.1:3333";
const baseUrl = baseUrlA;



//-------- Session Variables --------------------
  //1- type
  //2- user_id
  //4- user_email
  //3- user_type
  //4- isTutorialCompleted
  //5- organization
  //6- loggedIn
  //7- oldEvaluations
  //8- isOldEvaluation
  let sessionVariables = {
    user_mode:'guest',
    token:null,
    type:null,
    user_id:null,
    user_email:null,
    user_type_id:null,
    user_type_name:null,
    isTutorialCompleted:null,
    organization:null,
    loggedIn:null,
    isOldEvaluations:null,
    tutorials:null,
  }
  //-----------------------------------------------

  const MyApp = ({Component, pageProps}) => {

    const [state,setState] = useState({
        loading:true
    });
    const router = useRouter()

    const tsetState = (newState) =>
    {
        if(window==window.top) {
            // setState({
            //     ...sessionVariables,
            //     ...newState,
            //     loading:false
            // })
            // not in an iframe
        }

        else
        {
            console.log(newState)
            setState({
                ...sessionVariables,
                ...newState,
                loading:false
            })
        }
       
    }


    useEffect(async () => {
        // await loadPrevSession();
        await _setMatchingEductaionStuff(tsetState);
    },[])


    const loadPrevSession = async () => {
        setState({
            ...sessionVariables,
            loading: false,
        })
      }
    
    const checkGuesUserMode = () =>
    {
        if(state.user_mode==="guest")
        {
            return true
        }
        else false;
    }

    const setCookie = () =>
    {

    }

    const Navigate = (path) =>
    {
        router.push(path)
    }

    const updateValue = (key, value) => {
        setState({...state,[key]: value})
    };

    const multipleUpdateValueWithHistory = (objects, url) => {
        let newState = {};
        for (var obj in objects) {
          newState[objects[obj].key] = objects[obj].value;
        }
        setState({
            ...state,
            ...newState
        })
        // this.setState(newState, () => { this.updateSession() });
        Navigate(url)
        // history.push(url);
    };
    return state.loading === false ? (
        <MyContext.Provider
            value={{
                checkGuesUserMode:checkGuesUserMode,
                Navigate:Navigate,
                state:state,
                setCookie:setCookie,
                updateValue:updateValue,
                multipleUpdateValueWithHistory:multipleUpdateValueWithHistory
            }}
        >
            <link
            href="https://fonts.googleapis.com/css?family=Lato&amp;display=swap"
            rel="stylesheet"
            />
            <Component {...pageProps} />
        </MyContext.Provider>
        ) : (
            <div>Loadng</div>
        );
  }
   
  export default MyApp;


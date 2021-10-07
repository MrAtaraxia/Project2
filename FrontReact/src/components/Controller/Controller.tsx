import React, {useState, useCallback} from 'react';
import styles from './Controller.module.scss';
import Login from '../Login/Login'
import ValidateForm from '../Login/Input/ValidateForm'
import MNav from '../Pages/MNav';
import MHome from '../Pages/MHome';
import MRequests from '../Pages/MRequests';
import MListUsers from '../Pages/MListUsers';
import MCreateUser from '../Pages/MCreateUser';
import ENav from '../Pages/ENav';
import EHome from '../Pages/EHome';
import EReimbursementForm from '../Pages/EReimbursementForm';
import EListReimbursements from '../Pages/EListReimbursements';
import EAccountInformation from '../Pages/EAccountInformation';
//import { combineReducers, createStore } from 'redux';
//import { sessionReducer, sessionService } from 'redux-react-session';
const Controller = (props:any) =>  {
  const [page, setPage] = useState("login");
  const [nextPage, setNextPage] = useState("none");
  const [userInfo, setUserInfo] = useState({
    "id":"",
    "uname":"",
    "pass":"",
    "fname":"",
    "lname":"",
    "email":"",
    "role":""
  });


  let nextPageHandler = useCallback(
      (props:string) => {
    console.log("SettingNextPage TO:" + props)
    setNextPage(props);},[],
  );
  
  let pageList = [
    "Login", 
    "MHome", 
    "MListUsers",
    "MRequests",
    "MCreateUser",
    "EHome", 
    "EReimbursementForm",
    "EListReimbursements",
    "EAccountInformation"
  ];
  
  if(nextPage==="home"){
    if(userInfo.role==="MANAGER"){
      setNextPage("MHome");
    }else{
      setNextPage("EHome");
    }
  }

  if(nextPage!=="none" && nextPage!=="home"){
      //if(nextPage in pageList){
      console.log("SETTING PAGE FROM NEXT PAGE:"+ nextPage);

      setPage(nextPage);
      setNextPage("none");
      console.log("TO:" + page);
    //}
  }
  let Buttons=<span></span>;
  
  let toDisplay;
  Buttons = 
    <span>
      {pageList.map((item:any) => (
       <button onClick={()=>nextPageHandler(item)}>{item}</button>
      ))}
    </span>
  
  let managerPages = [
    "MHome", 
    "MListUsers",
    "MRequests",
    "MCreateUser",
    "Login"
  ]
  let employeePages = [
    "EHome", 
    "EReimbursementForm",
    "EListReimbursements",
    "EAccountInformation",
    "Login"
  ]
  let managerNav = 
    <MNav 
    onclick={nextPageHandler} 
    nextPages={managerPages}
    ></MNav>
    let employeeNav = <div>
    <ENav 
    onclick={nextPageHandler} 
    nextPages={employeePages}
    ></ENav>
  </div>
  if(page==="Login"){
    toDisplay =     
    <div>
      <Login
      nextPageHandler={nextPageHandler}
      userInfo = {userInfo}
      setUserInfo = {setUserInfo}

      ></Login>
    </div>
  }  
  else if(page==="MHome"){
    toDisplay = 
    <div>
      {managerNav}
      <MHome onclick={nextPageHandler} 
      nextPage="EHome"></MHome>
    </div>
  }
  else if(page==="MListUsers"){
    toDisplay = 
    <div>
      {managerNav}
      <MListUsers 
      onclick={nextPageHandler} 
      nextPage="MHome"></MListUsers>
    </div>
  }
  else if(page==="MRequests"){
    toDisplay = 
    <div>
      {managerNav}
      <MRequests 
      onclick={nextPageHandler} 
      nextPage="MHome"></MRequests>
    </div>
  }
  else if(page==="MCreateUser"){
    toDisplay = 
    <div>
      {managerNav}
      <MCreateUser 
      onclick={nextPageHandler} 
      nextPage="MHome"></MCreateUser>
    </div>
  }
  else if(page==="EHome"){
    toDisplay = 
    <div>
      {employeeNav}
      <EHome 
      onclick={nextPageHandler} 
      nextPage="MHome"></EHome>
    </div>
  }
  else if(page==="EReimbursementForm"){
    toDisplay = 
    <div>
    {employeeNav}
      <EReimbursementForm nextPage="EHome"></EReimbursementForm>
    </div>
  }
  else if(page==="EListReimbursements"){
    toDisplay = 
    <div>
    {employeeNav}
      <EListReimbursements nextPage="EHome"></EListReimbursements>
    </div>
  }
  else if(page==="EAccountInformation"){
    toDisplay = 
    <div>
    {employeeNav}
      <EAccountInformation nextPage="EHome"></EAccountInformation>
    </div>
  }
  else{
    toDisplay = <ValidateForm></ValidateForm>
  }

  return(
    
    <div className={styles.Controller} data-testid="Controller">
      {Buttons}Controller
      {toDisplay}
    </div>
  );
}

export default Controller;

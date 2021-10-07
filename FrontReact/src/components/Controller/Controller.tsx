import React, {useState, useCallback} from 'react';
import styles from './Controller.module.scss';
import Login from '../Login/Login'
import ValidateForm from '../Login/Input/ValidateForm'
import Nav from '../Pages/Nav';
import Home from '../Pages/Home';
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
    "Home"
  ];

  if(nextPage!=="none" ){
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
  
  let pages = [
    "Home",
    "Login"
  ]
  let theNav = 
    <Nav 
    onclick={nextPageHandler} 
    nextPages={pages}
    ></Nav>
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
  else if(page==="Home"){
    toDisplay = 
    <div>
      {Nav}
      <Home onclick={nextPageHandler} 
      nextPage="EHome"></Home>
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

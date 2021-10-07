import React, {useState, useCallback} from 'react';
import styles from './Controller.module.scss';
import Login from '../Login/Login'
import Nav from '../Pages/Nav';
import Home from '../Pages/Home';
import Reg from '../Registration/Registration';

//import { combineReducers, createStore } from 'redux';
//import { sessionReducer, sessionService } from 'redux-react-session';
const Controller = (props:any) =>  {
  const [page, setPage] = useState("login");
  const [nextPage, setNextPage] = useState("none");
  const [userInfo, setUserInfo] = useState({
    "id":"",
    "Username":"",
    "FirstName":"",
    "LastName":"",
    "Email":"",
  });


  let nextPageHandler = useCallback(
      (props:string) => {
    console.log("SettingNextPage TO:" + props)
    setNextPage(props);},[],
  );
  
  let pageList = [
    "Login", 
    "Home",
    "Registration"
  ];
  if(nextPage==="undefined" || nextPage === undefined){
    //if(nextPage in pageList){
    setNextPage("none");
  //}
}
  if(nextPage!=="none" && nextPage!==undefined && nextPage!=="undefined"){
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
    "Login",
    "Registration"
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
      {theNav}
      <Home onclick={nextPageHandler} 
      nextPage="Home"></Home>
    </div>
  }
  else if(page==="Addresses"){
    toDisplay = 
    <div>
      {theNav}
      <Addresses></Addresses>
    </div>
  }
  else if(page==="AddressKeys"){
    toDisplay = 
    <div>
      {theNav}
      <AddressKeys></AddressKeys>
    </div>
  }
  else if(page==="CreateKey"){
    toDisplay = 
    <div>
      {theNav}
      <CreateKey ></CreateKey>
    </div>
  }
  else if(page==="InputAddress"){
    toDisplay = 
    <div>
      {theNav}
      <InputAddress></InputAddress>
    </div>
  }
  else if(page==="Registration"){
    toDisplay = 
    <div>
      {Nav}
      <Reg onclick={nextPageHandler} 
      nextPage="EHome"></Reg>
    </div>
  }
  else{
    toDisplay = <div><button onClick={()=>nextPageHandler("Home")}></button></div>
  }

  return(
    
    <div className={styles.Controller} data-testid="Controller">
      {toDisplay}
    </div>
  );
}

export default Controller;

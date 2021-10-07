import React, { useState } from 'react';
import './Login.module.scss';
import axios from 'axios';
import Input from './Input/Input';

const Login = (props:any) => {
  const nextPageHandler = props.nextPageHandler;
  const userInfo = props.userInfo;
  const setUserInfo = props.setUserInfo;
  const [userName, setUserName]=useState("");
  const [userPass, setUserPass]=useState("");
  
  let buttonHandler = (username:String, password:String) => {
    let toSend = {
      username: username,
      password: password,
      method: "POST"
    };
    let json = JSON.stringify(toSend);
    console.log("POST WITH AXIOS!Sending:" + json)
    axios.post(
      'http://localhost:8080/Project2/LoginServlet',
      json,
      
      {withCredentials: true,},).then(
          res => {
            console.log("DATA:"+res);
            
            //json = JSON.parse(res.data)
            //console.log("JSON" + json);
            console.log("DATA0:"+res.data)
            let myString = JSON.stringify(res.data);
            console.log(myString);
            let myJson = JSON.parse(myString);
            console.log(myJson);
            let {FirstName, LastName, Username, Email, UserID, nextPage} = myJson;
            console.log(myJson["'message'"]);
            console.log(Object.keys(myJson))
            setUserInfo({
              "id":UserID,
              "Username":Username,
              "FirstName":FirstName,
              "LastName":LastName,
              "Email":Email
            });
            const nextPageTemp = nextPage;
            if(nextPageHandler!==undefined){
              nextPageHandler(nextPageTemp);
            }
            console.log("DATA0:"+res.data)
            console.log("THINGS"+nextPageTemp)
            console.log("ID"+UserID)
        })
        .catch((err) => {
          console.log({err});
          alert(err.response);
        });
  }

  let nameChangeHandler = (e:any) => {
    setUserName(e.target.value);
    console.log(userName);
  }  
  let passChangeHandler = (e:any) => {
    setUserPass(e.target.value);
    console.log(userPass);
  }
  return(
    <div>
      <div>
        <div className="limiter">
          <div className="container-login3">
            <div className="wrap-login3">
              <div className="login3-form validate-form">
                <span className="login3-form-title p-b-46">Welcome
                </span>
                <Input 
                value={userName}
                element="words" 
                changed={nameChangeHandler} />
                <span className="focus-input3a" data-placeholder="User"></span>  
                <Input 
                value={userPass} 
                element="password" 
                changed={passChangeHandler}/>                    
                <span className="focus-input3a" data-placeholder="Password"></span>                  
                </div>
                <div className="container-home3-form-btn">
                  <div className="wrap-home3-form-btn">
                    <div className="home3-form-bgbtn"></div>
                    <button className="home3-form-btn" onClick={()=>buttonHandler(userName, userPass)}>
                      Login
                    </button>
                  </div>
                </div>
              </div>
          </div>
        </div>
      <script src="https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossOrigin="anonymous"></script>
      <script src="../../assets/js/main.js"></script>
      </div>
    </div>
  )
};

export default Login;

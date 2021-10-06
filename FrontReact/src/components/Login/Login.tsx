import React from 'react';
import styles from './Login.module.scss';
import Radium from 'radium';
import axios from 'axios';

const Login = () => {

  let buttonHandler = (buttonType:string) => {
    if(buttonType==="POST"){
      buttonPost();
    } else if (buttonType==="GET"){
      buttonGet();
    } else if (buttonType==="PUT"){
      buttonPut();
    } else if (buttonType==="DELETE"){
      buttonDelete();
    }
  }

  const buttonPost = () => {
    let toSend = {
      UserID:4,
      Username: "user",
      Password: "pass",
      FirstName: "user",
      LastName: "name",
      UserRole:"USER",
      Email:"best@email"
    };
    let json = JSON.stringify(toSend);
    console.log("POST WITH AXIOS!Sending:" + json)
    axios.post(
      'http://localhost:8080/greeting',
      //'http://localhost:8080/Project2/UserServlet',
      json,
      
      {withCredentials: true,},).then(
          res => {
            console.log(res.data);
        })
        .catch((err) => {
          console.log({err});
          alert(err.response);
        });
  }

  const buttonGet = () => {

    let destination = 'http://localhost:8080/greeting'
    //'http://localhost:8080/Project2/UserServlet',
    let params = {
      id: 2
    }
    console.log("Get with Axios! Sending:" + params)
    axios.get(
      destination,
      {withCredentials: true,
        params:params
      },).then(
          res => {
            console.log(res.data);
        })
        .catch((err) => {
          console.log({err});
          alert(err.response);
        });
  }

  const buttonPut = () => {
    let toSend = {
      UserID:2,
      Username: "user",
      Password: "pass",
      FirstName: "user",
      LastName: "name",
      UserRole:"USER",
      Email:"best@email"
    };
    let json = JSON.stringify(toSend);
    console.log("POST WITH AXIOS!Sending:" + json)
    axios.post(
      'http://localhost:8080/greeting',
      //'http://localhost:8080/Project2/UserServlet',
      json,
      
      {withCredentials: true,},).then(
          res => {
            console.log(res.data);
        })
        .catch((err) => {
          console.log({err});
          alert(err.response);
        });
  }

  const buttonDelete = () => {
    let toSend = {
      id:4,
      Username: "user",
      Password: "pass",
      FirstName: "user",
      LastName: "name",
      UserRole:"USER",
      Email:"bestest@email"
    };
    let json = JSON.stringify(toSend);
    console.log("Delete WITH AXIOS!Sending:" + json)
    axios.delete(
      'http://localhost:8080/greeting',
      //'http://localhost:8080/Project2/UserServlet',
      
      ).then(
          res => {
            console.log(res.data);
        })
        .catch((err) => {
          console.log({err});
          alert(err.response);
        });

  }

  return (
  <div className={styles.Login} data-testid="Login">
    <button onClick={()=>buttonHandler("PUT")}>Click Me!</button>
    Login Component
  </div>
)};

export default Radium(Login);

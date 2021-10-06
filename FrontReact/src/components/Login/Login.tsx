import React from 'react';
import styles from './Login.module.scss';
import Radium from 'radium';
import axios from 'axios';

const Login = () => {

  let buttonHandler = () => {
    buttonGet();
  }

  let buttonPost = () => {
    let toSend = {
      id:4,
      username: "user",
      password: "pass",
      FirstName: "user",
      LastName: "name"
    };
    let json = JSON.stringify(toSend);
    console.log("POST WITH AXIOS!Sending:" + json)
    axios.post(
      'http://localhost:8080/Project2/UserServlet',
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

  let buttonGet = () => {
    let toSend = {
      id:4
    };
    let json = JSON.stringify(toSend);
    console.log("POST WITH AXIOS!Sending:" + json)
    axios.get(
      'http://localhost:8080/Project2/UserServlet',
      {withCredentials: true,},).then(
          res => {
            console.log(res.data);
        })
        .catch((err) => {
          console.log({err});
          alert(err.response);
        });
  }

  let buttonPut = () => {
    let toSend = {
      id:4,
      username: "user",
      password: "pass",
      FirstName: "user",
      LastName: "name"
    };
    let json = JSON.stringify(toSend);
    console.log("POST WITH AXIOS!Sending:" + json)
    axios.put(
      'http://localhost:8080/Project2/UserServlet',
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

  return (
  <div className={styles.Login} data-testid="Login">
    <button onClick={()=>buttonHandler()}>Click Me!</button>
    Login Component - alexx wuz here
  </div>
)};

export default Radium(Login);

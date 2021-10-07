import React from "react"

const Input = (props:any) => {
    let output;
    if(props.element === "words"){
       output = <div className="wrap-input3 validate-input" data-validate="Valid username is: abcd">
                    <input className="input3" onChange={props.changed} type="text" name="username"/>
                    <span className="focus-input3" data-placeholder="Username"></span>
                </div>
    } else if(props.element==="password") {
        output = <div className="wrap-input3 validate-input" data-validate="Enter password">
                        <span className="btn-show-pass">
							<i className="bi bi-eye"></i>
						</span>
                        <input className="input3" onChange={props.changed} type="password" name="pass"/>
                        <span className="focus-input3" data-placeholder="Password"></span>
                    </div>
    } else {
        output = <div></div>
    }
    return (
        output
    )
}
export default Input;
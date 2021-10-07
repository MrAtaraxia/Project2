import React from "react";


const MCreateUser = (props:any) => {

    const doClick = () =>{
        props.nextPage = ""
    }

    return (
        <div className="MCreateUser">
            <h1>MCreateUser</h1>
            <p>Stuff about MCreateUser</p>
            <button onClick={doClick}>AButton</button>
        </div>
    )
}

export default MCreateUser;
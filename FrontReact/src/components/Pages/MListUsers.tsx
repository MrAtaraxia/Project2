import React from "react";


const MListUsers = (props:any) => {

    const doClick = () =>{
        props.nextPage = ""
    }

    return (
        <div className="MListUsers">
            <h1>MListUsers</h1>
            <p>Stuff about MListUsers</p>
            <button onClick={doClick}>AButton</button>
        </div>
    )
}

export default MListUsers;
import React from "react";


const EHome = (props:any) => {

    const doClick = () =>{
        props.nextPage = ""
    }

    return (
        <div className="EHome">
            <h1>E-HOME</h1>
            <p>Stuff about e-home</p>
            <button onClick={doClick}>AButton</button>
        </div>
    )
}

export default EHome;
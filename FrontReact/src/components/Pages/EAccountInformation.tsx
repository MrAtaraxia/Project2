
import React from "react";


const EAccountInformation = (props:any) => {

    const doClick = () =>{
        props.nextPage = ""
    }

    return (
        <div className="EAccountInformation">
            <h1>EAccountInformation</h1>
            <p>Stuff about EAccountInformation</p>
            <button onClick={doClick}>AButton</button>
        </div>
    )
}

export default EAccountInformation;
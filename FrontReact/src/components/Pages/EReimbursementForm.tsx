
import React from "react";


const EReimbursementForm = (props:any) => {

    const doClick = () =>{
        props.nextPage = ""
    }

    return (
        <div className="EReimbursementForm">
            <h1>EReimbursementForm</h1>
            <p>Stuff about EReimbursementForm</p>
            <button onClick={doClick}>AButton</button>
        </div>
    )
}

export default EReimbursementForm;
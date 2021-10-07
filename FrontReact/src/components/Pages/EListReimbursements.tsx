
import React from "react";


const EListReimbursements = (props:any) => {

    const doClick = () =>{
        props.nextPage = ""
    }

    return (
        <div className="EListReimbursements">
            <h1>EListReimbursements</h1>
            <p>Stuff about EListReimbursements</p>
            <button onClick={doClick}>AButton</button>
        </div>
    )
}

export default EListReimbursements;
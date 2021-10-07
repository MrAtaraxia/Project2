import React, {useState} from 'react';


const ValidateField = (props: any) => {
    return(
        <React.Fragment>
            <label>{props.name}</label>
            <input name={props.name} type={props.type || "text"}
            onChange={props.onchange} />
        <div></div>
        </React.Fragment>
    );
}
export default ValidateField;
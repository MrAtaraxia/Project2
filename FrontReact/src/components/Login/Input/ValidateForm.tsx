import React, {useState} from 'react';
import ValidateField from './ValidateField';

const ValidateForm = () => {
    
    let[validOptions, setValidOptions] = useState({name: false, age: false});
    
    const validateName=(e: any)=>{
        if(e.target.value.length > 2){ 
            setValidOptions({name: true, age: validOptions.age}); } 
        else{
            setValidOptions({name: false, age: validOptions.age}); }
    }
    const validateAge = (e: any)=>{
        if(e.target.value > 18 && e.target.value < 150){
            setValidOptions({name: validOptions.name, age: true}); }
        else{
            setValidOptions({name: validOptions.name, age: false}); }
    }

    return(
        <form >
            <ValidateField name="name" onchange={validateName}></ValidateField>
            <ValidateField name="age" onchange={validateAge}></ValidateField>
            <button disabled={!validOptions.name || !validOptions.age}>Submit</button>
        </form>
    );
}

export default ValidateForm;
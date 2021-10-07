import React, {useState} from "react";
import icon from '../../assets/img/favicons/favicon-32x32.png'; // Tell webpack this JS file uses this image
import './Style.scss'

const ENav = (props:any) => {
    const [collapse, setCollapse] = useState(false)
    const propsClick = props.onclick;
    const home = props.nextPages[0];
    const EReimbursementForm = props.nextPages[1];
    const EListReimbursements = props.nextPages[2];
    const EAccountInformation = props.nextPages[3];
    const Login = props.nextPages[4];
    const logout = props.logout;
    
    const navbarCollapse = () => {
        collapse? setCollapse(false):setCollapse(true);
    }
    let Collapsable;
    if(!collapse){
        Collapsable = <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <button className="nav-link txt3" onClick={()=>propsClick(EReimbursementForm)}>Submit Reimbursement</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link txt3" onClick={()=>propsClick(EListReimbursements)}>List Reimbursement</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link txt3" onClick={()=>propsClick(EAccountInformation)}>Account Information</button>
                            </li>
                            <li className="nav-item">
                            </li>
                            <li className="nav-item">
                                <button className="icon " onClick={()=>navbarCollapse()}></button>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <button className="nav-item txt3" onClick={()=>propsClick(Login)} >Logout</button>
                        </form>
                    </div>
    } else{
        Collapsable = <div className="collapse navbar-collapse show" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <button className="nav-link txt3" onClick={()=>propsClick(EReimbursementForm)}>Submit Reimbursement</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link txt3" onClick={()=>propsClick(EListReimbursements)}>List Reimbursement</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link txt3" onClick={()=>propsClick(EAccountInformation)}>Account Information</button>
                            </li>
                            <li className="nav-item">
                            </li>
                            <li className="nav-item">
                                <button className="icon " onClick={()=>navbarCollapse()}></button>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <button className="nav-item txt3" onClick={()=>propsClick(Login)} >Logout</button>
                        </form>
                    </div>
    }
    return (
        <div className="ENav" data-testid="ENav">
            <div className="ENav">
                <nav className="navbar navbar-expand-sm navbar-light bg-light nav-home3 mb-4">
                    <div className="container-fluid">
                        <button className="navbar-brand" onClick={()=>propsClick(home)}><img src={icon} alt="blue"/></button>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                        data-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="true" 
                        aria-label="Toggle navigation" onClick={()=>navbarCollapse()}>
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        {Collapsable}
                    </div>
                </nav>
            </div>
        </div>
    )
}
export default ENav;
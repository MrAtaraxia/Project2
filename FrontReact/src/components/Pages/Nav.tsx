import React, {useState} from "react";
import './Style.scss'
import styles from './Nav.module.scss';

const MNav = (props:any) => {
    const [collapse, setCollapse] = useState(false)
    const propsClick = props.onclick;
    const home = props.nextPages[0];
    const Addresses = props.nextPages[1];
    const AddressKeys = props.nextPages[2];
    const CreateKey = props.nextPages[3];
    const InputAddress = props.nextPages[4];
    const Login =props.nextPages[5];
    
    const navbarCollapse = () => {
        collapse? setCollapse(false):setCollapse(true);
    }
    let Collapsable;
    if(!collapse){
        Collapsable = <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <button className="nav-link txt3" onClick={()=>propsClick(Addresses)}>Addresses</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link txt3" onClick={()=>propsClick(AddressKeys)}>View Keys</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link txt3" onClick={()=>propsClick(CreateKey)}>Create Key</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link txt3" onClick={()=>propsClick(InputAddress)}>Input Address</button>
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
                                <button className="nav-link txt3" onClick={()=>propsClick(Addresses)}>Addresses</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link txt3" onClick={()=>propsClick(AddressKeys)}>View Keys</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link txt3" onClick={()=>propsClick(CreateKey)}>Create Key</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link txt3" onClick={()=>propsClick(InputAddress)}>Input Address</button>
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
        <div className={styles.MNav} data-testid="MNav">
            <div className="MNav">
                <nav className="navbar navbar-expand-sm navbar-light bg-light nav-home3 mb-4">
                    <div className="container-fluid">
                        <button className="navbar-brand" onClick={()=>propsClick(home)}>A</button>
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

export default MNav;
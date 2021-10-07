import React,{useState} from "react";
import approve_i from '../../assets/img/Approve1.png';
import deny_i from '../../assets/img/Deny1.png';
import $ from "jquery"
import axios from "axios"
{/* <script src="https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js "></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js " integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ " crossorigin="anonymous "></script>

<script src="assets/js/main.js "></script> */}

const MRequests = (props:any) => {

    const doClick = () =>{
        props.nextPage = ""
    }
    const [reimbursements, setReimbursements] = useState("");
    const [pending, setPending]= useState(false);
    const [resolved, setResolved] = useState(false);
    const [employees, setEmployees] = useState(false);
    const [currentEmployee, setCurrentEmployee] = useState(0);

    const showPending = () => {
        setPending(true);
        setResolved(false);
        setEmployees(false);
    }

    const showResolved = () => {
        setPending(false);
        setResolved(true);
        setEmployees(false);
    }

    const showEmployees = () => {
        setPending(false);
        setResolved(false);
        setEmployees(true);
    }

    function fetchResolved() {
        let VPe = 5;
        let VRe = 5;
        $.ajax({
            url: "http://localhost:8080/WiIIProject1/GetReimbursements",
            //type: 'GET',
            type: "POST",
            crossDomain: true,
            data: {
                name: "Resolved",
                version: ""+5,
                choice: "0"
            },
            cache: false,
            dataType: 'json',
            success: function(result) {
                //###########################
                //  alert(jQuery.dataType);
                if (result) {
                    let currRes = 0;
                    let tempResult = 0;
                    let keepGoing = false;
                    //if (VRe <= result[0]) {
                    VRe = result[0];
                    keepGoing = true;
                    //}
                    if (keepGoing) {
                        result = result[1];
                        result = JSON.parse(result);
                        console.log("FETCHING:" + result);
                        console.log("VPE:" + VPe);
                        console.log(VPe + ":" + result);
                        //result.result[1];
                        var tblBody = document.getElementsByClassName("t-b-res")[0];
                        while (tblBody.firstChild) {
                            tblBody.removeChild(tblBody.firstChild);
                        }
                        //var dd = JSON.parse(result);
                        for (let i in result) {
                            //if (i.length > 1) {
                            //console.log("RESULTS:" + result[i]);
                            let ID = "";
                            let AMOUNT = "";
                            let RECEIPT = "";
                            let AUTHOR = "";
                            let DESCRIPTION = "";
                            let RESLOVER = "";
                            let RESOLVED = "";
                            let STATUS = "";
                            let SUBMITTED = "";
                            let TYPE = "";
                            for (var j in result[i]) {
                                if (j === "ID") {
                                    ID = result[i][j];
                                }
                                if (j === "AMOUNT") {
                                    AMOUNT = result[i][j];
                                }
                                if (j === "RECEIPT") {
                                    RECEIPT = result[i][j];
                                }
                                if (j === "AUTHOR") {
                                    AUTHOR = result[i][j];
                                }
                                if (j === "DESCRIPTION") {
                                    DESCRIPTION = result[i][j];
                                }
                                if (j === "RESLOVER") {
                                    RESLOVER = result[i][j];
                                }
                                if (j === "RESOLVED") {
                                    RESOLVED = result[i][j];
                                }
                                if (j === "STATUS") {
                                    STATUS = result[i][j];
                                }
                                if (j === "SUBMITTED") {
                                    SUBMITTED = result[i][j];
                                }
                                if (j === "TYPE") {
                                    TYPE = result[i][j];
                                }
                                if (j.length > 1) {
                                    console.log("" + j + ":" + result[i][j]);
                                }
                            }


                            // <td id="colSUBM">SUBMITTED</td>
                            // <td id="colRESR">RESLOVER</td>
                            // <td id="colRESD">RESOLVED</td>
                            // <td id="colAPPR">A</td>
                            // <td id="colDENY">D</td>
                            let myArray = [ID, AMOUNT, TYPE, DESCRIPTION, RECEIPT, AUTHOR, STATUS, SUBMITTED, RESLOVER, RESOLVED];
                            let myArray2 = ["RcolID", "RcolAMOU", "RcolTYPE", "RcolDESC", "RcolRECE", "RcolAUTH", "RcolSTAT", "RcolSUBM", "RcolRESR", "RcolRESD"]; {
                                let row = document.createElement("tr");
                                for (let k = 0; k < myArray.length; k++) {

                                    let cell = document.createElement("td");
                                    cell.setAttribute('id', myArray2[k]);
                                    console.log("FROM ARRAY" + myArray[k]);
                                    var cellText = document.createTextNode(myArray[k]);
                                    cell.appendChild(cellText);
                                    row.appendChild(cell);
                                }
                                tblBody.appendChild(row);
                            }
                        }
                    }
                    //alert(result);
                    toggleEles();
                }//###########################
            },
            error: function() {
                alert("An error occured when attempting to update your reiimbursments list. Please try again later.");
            }
        });
    }

    function fetchPending() {
        let VPe = 12345;
        let VRe = 12345;
        let toSend= {
        name: "Pending",
        version: ""+VPe,
        choice: "0",
        }
        let json = JSON.stringify(toSend);
        axios.post(
            "http://localhost:8080/WiIIProject1/GetReimbursements",
            json,
            
            {withCredentials: true,},).then(
                (res:any) => {
                    console.log(res);
                    console.log(res.data);
                    let currRes = 0;
                    let tempResult = 0;
                    let keepGoing = false;
                    //if (VRe <= result[0]) {
                    VRe = res.data[0];
                    console.log("VRE:" +VRe);
                    keepGoing = true;
                    //}
                    if (keepGoing) {
                        let result = res.data[1];
                        console.log("RESULT:"+result);
                        result = JSON.parse(result);
                        console.log("FETCHING:" + result);
                        console.log("VPE:" + VPe);
                        setPending(result);
                    }
                    //alert(result);
                    //toggleEles();
                }
            ).catch((err) => {
                console.log({err});
                alert("An error occured when denying the employee. Please try again later.");
            });
    }

    function approveEmployee(anApple:any) {
        console.log("APPROVING:" + anApple);
        $.ajax({
            url: "http://localhost:8080/WiIIProject1/GetReimbursements",
            type: "POST",
            crossDomain: true,
            data: {
                name: "Approve",
                version: "1",
                choice: anApple
            },
            cache: false,
            dataType: 'json',
            success: function(result) {
                //  alert(jQuery.dataType);
                fetchBoth();
                alert(result);
            },
            error: function() {
                alert("An error occured when approving the employee. Please try again later.");
            }
        });
    }

    function denyEmployee(aaa:any) {
        let toSend= {
        name: "Deny",
        version: "1",
        choice: aaa
        }
        let json = JSON.stringify(toSend);
        console.log("DENYING:" + aaa);
        axios.post(
            "http://localhost:8080/WiIIProject1/GetReimbursements",
            json,
            
            {withCredentials: true,},).then(
                result => {
                fetchBoth();
                alert(result);
            })
        .catch((err) => {
          console.log({err});
          alert("An error occured when denying the employee. Please try again later.");
        });
    }

    function fetchBoth() {
        //Make something that prevents them from spamming this,
        //or that at least prevents it from reaching the server.
        fetchPending();
        //setTimeout(() => {
        //    fetchResolved();
        //}, 1000);
    }

    function onLoad() {
        fetchBoth();
        // if (!sessionStorage.user) {
        //     logout();
        // }
        // document.getElementById("empname").innerHTML = sessionStorage.user;
        // document.getElementById("empmail").innerHTML = sessionStorage.email;
        // document.getElementById("toReplace").innerHTML = sessionStorage.table;
    }


    let width = $(window).width();
    let content;
    if(width==null){
        width=0;
    }

    if(pending){
        content = <div className="container-home3-new Pending" id="Pending">
            <div className="row">
                <div className="ftable-back col-12">
                    <p className="toCenter">
                        PENDING
                    </p>
                    <table className="table table-striped table-hover border border-4 t-main-3 t-pending" id="t-pending">
                        <thead className="t-header-3">
                            <tr>
                                <td id="colID">ID</td>
                                <td id="colAMOU">AMOUNT</td>
                                <td id="colTYPE">TYPE</td>
                                <td id="colDESC">DESCRIPTION</td>
                                <td id="colRECE">RECEIPT</td>
                                <td id="colAUTH">BY</td>
                                <td id="colSTAT">STATUS</td>
                                <td id="colSUBM">SUBMITTED</td>
                                <td id="colRESR">RESLOVER</td>
                                <td id="colRESD">RESOLVED</td>
                                <td id="colAPPR">A</td>
                                <td id="colDENY">D</td>
                            </tr>
                        </thead>
                        <tbody className="t-b-pen" id="t-b-pen">
                            <tr>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    }
    if(resolved){
        content = <div className="container-home3-new Resolved" id="Resolved">
            <div className="ftable-back ">
                <p className="toCenter">
                    RESOLVED
                </p>
                <table className="table table-striped table-hover border border-4 t-main-3 t-resolved" id="t-resolved">

                    <thead className="t-header-3">
                        <tr>
                            <td id="RcolID">ID</td>
                            <td id="RcolAMOU">AMOUNT</td>
                            <td id="RcolTYPE">TYPE</td>
                            <td id="RcolDESC">DESCRIPTION</td>
                            <td id="RcolRECE">RECEIPT</td>
                            <td id="RcolAUTH">BY</td>
                            <td id="RcolSTAT">STATUS</td>
                            <td id="RcolSUBM">SUBMITTED</td>
                            <td id="RcolRESR">RESLOVER</td>
                            <td id="RcolRESD">RESOLVED</td>
                        </tr>
                    </thead>
                    <tbody className="t-b-res" id="t-b-res">
                    </tbody>
                </table>
            </div>
        </div>
    }

    function toggleEles() {
        $('#colID,#colDESC,#colRECE,#colSTAT,#colRESR,#colRESD,#colSUBM').hide();
        $('#RcolID,#RcolDESC,#RcolRECE,#RcolRESD,#RcolSUBM').hide();
        if (width!=null && width >= 900) {
            $('#colDESC,#colSUBM,#colID,#colRECE').show();
            $('#RcolDESC,#RcolRESD,#RcolID').show();
        } else {
            $('#colDESC,#colSUBM,#colID,#colRECE').hide();
            $('#RcolDESC,#RcolRESD,#RcolID').hide();
        }
        // "# colAMOU, #colTYPE, #colAUTH, #colAPPR, #colDENY "
        // "#RcolRESR,#RcolSTAT,"
        // Write other conditions here..
    }
    $(window).resize(function() {
        width = $(window).width();
        toggleEles();
    });
    return (
        <div>
            <div className="MRequests">
                <div className="content">
                <div className="limiter" id="limiter-home3">

                    <div className="container-home3-buttons ">
                        <div className="btn-group btn-group-12 col-12" role="group" aria-label="Basic example">

                            <div className="wrap-home3-form-btn3 container-home3-buttons theStyleUsed2" >

                                <div className="wrap-home2-fform-btn ">
                                    <div className="home3-form-bgbtn">
                                    </div>
                                    <button type="button" className="btn home3-form-btn3" onClick={()=>showResolved()}>Resolved</button>
                                </div>

                            </div>
                            <div className="wrap-home3-form-rev-btn3 container-home3-buttons">
                                <div className="wrap-home2-form-btn ">
                                    <div className="home3-form-rev-bgbtn">
                                    </div>
                                    <button type="button" className="btn home3-form-rev-btn3" onClick={()=>fetchBoth()}>Update</button>
                                </div>
                            </div>

                            <div className="wrap-home3-form-btn3 container-home3-buttons theStyleUsed">
                                <div className="wrap-home2-form-btn ">
                                    <div className="home3-form-bgbtn">
                                    </div>
                                    <button type="button" className="btn home3-form-btn3" onClick={()=>showPending()}>Pending</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {content}
                    
                    <div className="container-home3-new CreateNew" id="CreateNew" style={{display: 'none'}}>

                        <div className="ftable-back ">
                            <p className="toCenter">
                                CreateNew
                            </p>
                            <table className="table table-striped table-hover border border-4 t-main-3 t-pending" id="t-pending">
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

   
    )
}

export default MRequests;
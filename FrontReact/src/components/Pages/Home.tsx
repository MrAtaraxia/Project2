import React from "react";
import "./Style.scss"

const MHome = (props:any) => {
    const propsClick = props.onclick;
    const nextPage = props.nextPage;
    return (
        <div className="MHome">
            <div className="content">
        <div className="limiter" id="limiter-home3">
            <div className="container-home3 ">
                <div className="wrap-home3 ">
                    <div>
                        <form className="home3-form validate-form ">
                            <span className="text-center home3-form-title ">
						        <p className="toBeStyled" >
                                    Homepage </p>
					        </span>
                            <span className="home3-form-title p-b-48 ">
						        <i className="zmdi zmdi-font "></i>
					        </span>
                            <div className="container-home3-form-btn ">
                                <div className="wrap-home3-form-btn ">
                                    <div className="home3-form-bgbtn ">
                                    </div>
                                        <button className="home3-form-btn" onClick={()=>propsClick(nextPage)}>
								            Button Because Button!
							            </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}

export default MHome;
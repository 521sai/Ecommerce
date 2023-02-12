import React from 'react'
const Login = () => {
    return (
        <>
            {/*<!-- Button trigger modal -->*/}
            <button id="login" type="button" className="btn btn-outline-primary ms-2" data-bs-toggle="modal" data-bs-target="#SignupModal">
                <span className='fa fa-sign-in me-2'></span><bold><font color="yellow">Login</font></bold>
            </button>

            {/*<!-- Modal -->*/}
            <div className="modal fade" id="SignupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-2" id="exampleModalLabel">Login</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button className="btn btn-primary w-100 mb-2">
                                <span className='fa fa ms-auto'>Guest Acount</span>
                            </button>
                            <form id="sample">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                        
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                        <label className="form-check-label" htmlFor="exampleCheck1">Remember me </label>
                                </div>
                                <div id="emailHelp" className="form-text me-2">Dont't have an account? <strong>SignUp</strong></div>
                                <button type="submit" className="btn btn-primary w-100 mt-5">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login
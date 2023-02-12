import React from 'react'
const Signup = () => {
    return (
        <>
            {/*<!-- Button trigger modal -->*/}
            <button id="signup" type="button" className="btn btn-outline-primary ms-2" data-bs-toggle="modal" data-bs-target="#signupModal">
                <span className='fa fa-user-plus me-1'></span><italic>SignUp</italic>
            </button>

            {/*<!-- Modal -->*/}
            <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-contents">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">SignUp</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button className="btn btn-primary w-100 mb-4">
                                <span className="fa fa-google ms-auto">Sign in with google</span>
                            </button>
                            <form>
                                <form className="row g-3">
                                    <div className="col-md-6 mb-2">
                                        <label for="inputEmail4" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="inputEmail4"/>
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <label for="inputPassword4" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="inputPassword4"/>
                                    </div>
                                    <div className="col-12 mb-2">
                                        <label for="inputAddress" className="form-label">Address 1</label>
                                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                                    </div>
                                    <div className="col-12">
                                        <label for="inputAddress2" className="form-label">Address 2</label>
                                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label for="inputCity" className="form-label">City</label>
                                        <input type="text" className="form-control" id="inputCity"/>
                                    </div>
                                    <div className="col-md-4">
                                        <label for="inputState" className="form-label">State</label>
                                        <select id="inputState" className="form-select">
                                            <option selected>Choose...</option>
                                            <option>Andhra Pradesh</option>
                                            <option>Telagana</option>
                                            <option>Tamilnadu</option>
                                            <option>Karnataka</option>
                                        </select>
                                    </div>
                                    <div className="col-md-2 mb-1">
                                        <label for="inputZip" className="form-label">Zip</label>
                                        <input type="text" className="form-control" id="inputZip"/>
                                    </div>
                                   
                                    
                                </form>

                                <div id="emailHelp" className="form-text me-2">Create Account for Purchasing items ? <strong>Login</strong></div>
                                <button type="submit" className="btn btn-primary w-100 mt-5">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
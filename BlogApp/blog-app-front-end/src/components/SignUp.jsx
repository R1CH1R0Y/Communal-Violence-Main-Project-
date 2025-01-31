import axios from 'axios'
import React, { useState } from 'react'

const SignUp = () => {
    const [input,setInput]=new useState(
        { "name" : "","phone":"","email":"","password":"","cpswd":"" }
    )
    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        if (input.password==input.cpswd) {
            let newInput={ "name" :input.name,"phone":input.phone,"email":input.email,"password":input.password }
            axios.post("http://localhost:3030/signup",newInput).then(
                (response)=>{
                    console.log(response.data)
                    if (response.data.status=="success") {
                        alert("Registered successfully!")
                        setInput({ "name" : "","phone":"","email":"","password":"","cpswd":"" })
                    } else {
                        alert("Email ID already exists!!!")
                        setInput({ "name" : "","phone":"","email":"","password":"","cpswd":"" })
                    }
                }
            ).catch(
                (error)=>{
                    console.log(error)
                }
            )

        } else {
            alert("Password and Confirm Password doesn't match!!!")
        }
    }
    return (
        <div>
            <div className="card text-center mb-3">
                <div className="card-body">
                    <h5 className="card-title">Sign Up</h5>
                    <p></p><p></p>
                    <div className="container">
                        <div className="row">
                            <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row g-3">
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Name :</label>
                                        <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler}/>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Phone No. :</label>
                                        <input type="text" className="form-control" name='phone' value={input.phone} onChange={inputHandler}/>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Email ID :</label>
                                        <input type="text" className="form-control" name='email' value={input.email} onChange={inputHandler}/>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Password :</label>
                                        <input type="password" className="form-control" name='password' value={input.password} onChange={inputHandler}/>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Confirm Password :</label>
                                        <input type="password" className="form-control" name='cpswd' value={input.cpswd} onChange={inputHandler}/>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-lg-6 col-xl-6 col-xxl-6">
                                        <button className="btn btn-success" onClick={readValue}>Sign Up</button>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-lg-6 col-xl-6 col-xxl-6">
                                        <a href="/" className="btn btn-primary">Back to Log In</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
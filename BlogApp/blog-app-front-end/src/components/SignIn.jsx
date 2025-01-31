import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
    const navigate=useNavigate()
    const [input,setInput]=new useState(
        {"email":"","password":""}
    )
    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        axios.post("http://localhost:3030/signin",input).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="incorrect password") {
                    alert("Incorrect Password!!!")
                } else if (response.data.status=="invalid email id"){
                    alert("Invalid Email ID!!!")
                } else {
                    let token=response.data.token
                    let userId=response.data.userId
                    sessionStorage.setItem("userId",userId)
                    sessionStorage.setItem("token",token)
                    navigate("/createposts")
                }
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    }
    return (
        <div>
            <div class="card text-center mb-3">
                <div class="card-body">
                    <h5 class="card-title">Sign In</h5>
                    <p></p><p></p>
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row g-3">
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Email ID :</label>
                                        <input type="text" className="form-control" name='email' value={input.email} onChange={inputHandler}/>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Password :</label>
                                        <input type="password" className="form-control" name='password' value={input.password} onChange={inputHandler}/>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <button className="btn btn-success" onClick={readValue}>Sign In</button>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <a href="/signup" className="btn btn-primary">Sign Up</a>
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

export default SignIn
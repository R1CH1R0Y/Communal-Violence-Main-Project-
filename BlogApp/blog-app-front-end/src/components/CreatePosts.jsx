import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const CreatePosts = () => {
  const [input,setInput]=new useState(
    {"userId":sessionStorage.getItem("userId"),"Message":""}
  )
  const inputHandler=(event)=>{
    setInput({...input,[event.target.name]:event.target.value})
  }
  const readValue=()=>{
    axios.post("http://localhost:3030/create",input,{
      headers:{"token":sessionStorage.getItem("token"),"Content-Type":"application/json"}
  }).then(
    (response)=>{
      console.log(response.data)
      if (response.data.status=="success") {
        alert("Posted Successfully!!")
      } else {
        alert("Something went wrong!!!")
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
      <NavBar />
      <br />
      <br />
      <div class="card text-center mb-3">
        <div class="card-body">
          <h5 class="card-title">Create your Post</h5>
          <p></p><p></p>
          <div className="container">
            <div className="row">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                  <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Post a Message :</label>
                    <textarea name="Message" value={input.Message} className="form-control" onChange={inputHandler}></textarea>
                  </div>
                  <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-success" onClick={readValue}>Post</button>
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

export default CreatePosts
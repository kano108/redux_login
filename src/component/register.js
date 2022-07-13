import React, { useState } from "react";
import "./register.css";
import {useDispatch} from "react-redux";
import {addRegData} from "../action/action"


function Register() {
const [name , setName]=useState("")
const [email, setEmail] = useState("")
const [password , setPassword] = useState("")
const [address , setAddress] = useState("") 
const dispatch = useDispatch();
  return (
    <div className="regBackImage">
      <form onSubmit={(e)=>dispatch(addRegData(e))}>
        <div className="reg_form">
          <h1 className="regHeading">Register</h1>
          <br />
          <br />

          <label>
            <h2>Name</h2>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="form-control"
            placeholder="Enter Your Name"
          />
          <br />
          <br />
          <label>
            <h2>Email</h2>
          </label>
          <input
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
            type="email"
            className="form-control"
            placeholder="Enter Your Email"
          />
          <br />
          <br />
          <label>
            <h2>Password</h2>
          </label>
          <input
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
           className="form-control"
            placeholder="Enter Your Password"
          />
          <br />
          <br />
          <label>
            <h2>Address</h2>
          </label>
          <br />
          <br />
          <textarea
          value={address}
          onChange={(e)=>setAddress(e.target.value)}
            placeholder="Enter Your Address"
            className="form-control"
            type="text"
            rows="3"
            cols="70"
          ></textarea>
          <br />
          <br />
          <button className="btn btn-dark">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Register;

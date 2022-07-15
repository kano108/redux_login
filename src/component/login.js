import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./login.css";
import {ComLogData} from "../action/action";



function Login() {
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const dispatch = useDispatch();
  
  const sub_ligin =(e) =>{
    e.preventDefault()
    dispatch(ComLogData({email,password}))
    setEmail("")
    setPassword("")
  }


  // const getData = useSelector((state)=>state.ReLogReducer && state.ReLogReducer.list)
  // console.log("getData",getData);
  
  return (
    <div className="regBackImage">
      <div className="reg_form">
        <br/><br/><br/><br/><br/>
        <h1 className="loginHeading">Login</h1>
        <br />
        <br />

        <label>
          <h2>Email</h2>
        </label>
        <br/><br/><br/>
        <input
          type="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="form-control"
          placeholder="Enter Your Email"
        />
        <br />
        <br />
        <label>
          <h2>Password</h2>
        </label>
        <br/><br/><br/>
        <input
          type="text"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className="form-control"
          placeholder="Enter Your Password"
        />
        <br />
        <br />
        <button className="btn btn-dark" onClick={(e)=>sub_ligin(e)}>Submit</button>
      </div>
    </div>
  );
}

export default Login;

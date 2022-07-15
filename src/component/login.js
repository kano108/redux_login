import React from "react";
import { useSelector } from "react-redux";
import "./login.css";
function Login() {
const getData = useSelector((state)=>state.ReLogReducer && state.ReLogReducer.list)
console.log("getData",getData);

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
          type="text"
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
          className="form-control"
          placeholder="Enter Your Password"
        />
        <br />
        <br />
        <button className="btn btn-dark">Submit</button>
      </div>
    </div>
  );
}

export default Login;

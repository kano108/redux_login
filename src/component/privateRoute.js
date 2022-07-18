import React, { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom"

function PrivateRoute({Children}) {
const [isLogged , setIsLogged]= useState(true)
const navigate = useNavigate()

const login = JSON.parse(localStorage.getItem("islogin"))
useEffect(()=>{
 // console.log("login",login);
  if(login)
  { 
    setIsLogged(true)
  }
  else{
    setIsLogged(false)
  } 
},[])


if(!isLogged)
{
    return navigate("/") 
}
else{
    return  Children
}

};

export default PrivateRoute
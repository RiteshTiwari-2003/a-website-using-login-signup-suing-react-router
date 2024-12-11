import React from 'react';
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import { Link } from 'react-router-dom';
import {useState} from "react";

const LoginForm = () => {
    const [formData,setFormData]=useState({
        email:"",
        password:""
    })
    const [showPassword,setShowPassword]=useState(false);
    function changeHandler(event){
        setFormData((prevData)=>({...prevData,
            [event.target.name]:event.target.value
        }))

    }
  return (
    <form>
        <label>
            <p>Email address:<sup>*</sup></p>
            <input
            required
            type="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="enter email id"
            name="email"/>
        </label>
        <label>
            <p>Password:<sup>*</sup></p>
            <input
            required
            type={showPassword?("text"):("password")}
            value={formData.password}
            onChange={changeHandler}
            placeholder="enter password"
            name="password"/>
            <span onClick={()=>{setShowPassword((prev)=>!prev)}}>
                {showPassword?(<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
            </span>
            <Link to="#"><p>forget password</p></Link>
        </label>
        <button>
            Sign in
        </button>
    </form>
  )
}

export default LoginForm

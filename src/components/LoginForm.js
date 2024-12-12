import React from 'react';
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import { Link } from 'react-router-dom';
import {useState} from "react";
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({setIsLoggedIn}) => {
    const navigate=useNavigate();
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
    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("logged in");
        navigate('/dashboard');

    }
  return (
    <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6 '>
        <label className="w-full ">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ">Email address:<sup className="text-pink-200">*</sup></p>
            <input
            required
            type="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="enter email id"
            name="email"
            classname="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"/>
        </label>
        <label className="w-full ">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ">Password:<sup>*</sup></p>
            <input
            required
            type={showPassword?("text"):("password")}
            value={formData.password}
            onChange={changeHandler}
            placeholder="enter password"
            name="password"
            classname="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"/>
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

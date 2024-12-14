import React from 'react';
import {useState} from "react";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {
    const navigate=useNavigate();
    const [formData,setFormData]=useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        confirmPassword:""
    })
    const [showPassword,setShowPassword]=useState(false);
    function changeHandler(event){
        setFormData((prevData)=>({...prevData,
            [event.target.name]:event.target.value
        }))

    }
    function submitHandler(event){
        event.preventDefault();
        if (formData.password!== formData.confirmPassword){
            toast.error("password do not match");
        }
        setIsLoggedIn(true);
        toast.success("account created");
        const accountData={
            ...formData
        };
        console.log("printing account data");
        console.log(accountData);
        navigate("/dashboard");

    }
  return (
    <div>
        <div>
            <button>
                Student
            </button>
            <button>
                Instructor
            </button>
        </div>
        <form onSubmit={submitHandler}>
            <div>
            <label>
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ">first name:<sup>*</sup></p>
                <input
                required
                type="text"
                name="firstname"
                onChange={changeHandler}
                placeholder="Enter the first name"
                value={formData.firstname}/>

            </label>
            <label>
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ">last name:<sup>*</sup></p>
                <input
                required
                type="text"
                name="lastname"
                onChange={changeHandler}
                placeholder="Enter the last name"
                value={formData.lastname}/>

            </label>
            </div>
            <label>
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ">email address:<sup>*</sup></p>
                <input
                required
                type="email"
                name="email"
                onChange={changeHandler}
                placeholder="Enter the email address"
                value={formData.email}/>

            </label>
            <div>
            <label className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ">
                <p>create password<sup>*</sup></p>
                <input
                required
                type={showPassword?("text"):("password")}
                name="password"
                onChange={changeHandler}
                placeholder="Enter the password"
                value={formData.password}/>
                <span onClick={()=>{setShowPassword((prev)=>!prev)}}>
                    {showPassword?(<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
                </span>

            </label>
            <label className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ">
                <p>confirm password<sup>*</sup></p>
                <input
                required
                type={showPassword?("text"):("password")}
                name="confirmPassword"
                onChange={changeHandler}
                placeholder="confirm password"
                value={formData.confirmPassword}/>
                <span onClick={()=>{setShowPassword((prev)=>!prev)}}>
                    {showPassword?(<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
                </span>

            </label>
            </div>
            <button>
                create account
            </button>
            
        </form>
      
    </div>
  )
}

export default SignupForm

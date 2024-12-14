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
    const [accountType,setAccountType]=useState("student");
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
        <div childrenlassname="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
            <button classname={`${accountType==="student"?"bg-richblack-900 text-richblack-5":"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}onClick={()=>{setAccountType("student")}}>
                Student
            </button>
            <button classname={`${accountType==="instructor"?"bg-richblack-900 text-richblack-5":"bg-transparent text-richblack-200"}py-2 px-5 rounded-full transition-all duration-200`}onClick={()=>{setAccountType("instructor")}}>
                Instructor
            </button>
        </div>
        <form onSubmit={submitHandler}>
            <div classname="flex justify-between mt-[20px]">
            <label className="w-full">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ">first name:<sup className="text-pink-200">*</sup></p>
                <input
                required
                type="text"
                name="firstname"
                onChange={changeHandler}
                placeholder="Enter the first name"
                value={formData.firstname}
                classname="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"/>

            </label>
            <label className='w-full'>
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ">last name:<sup className="text-pink-200">*</sup></p>
                <input
                required
                type="text"
                name="lastname"
                onChange={changeHandler}
                placeholder="Enter the last name"
                value={formData.lastname}
                classname="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"/>

            </label>
            </div>
            <div classname="mt-[20px]">
            <label classname="w-full mt-[20px]">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ">email address:<sup className="text-pink-200">*</sup></p>
                <input
                required
                type="email"
                name="email"
                onChange={changeHandler}
                placeholder="Enter the email address"
                value={formData.email}
                classname="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"/>

            </label>
            </div>
            
            <div className="w-full flex gap-x-4 mt-[20px]">
            <label className="w-full relative">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ">create password<sup className="text-pink-200">*</sup></p>
                <input
                required
                type={showPassword?("text"):("password")}
                name="password"
                onChange={changeHandler}
                placeholder="Enter the password"
                value={formData.password}
                classname="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"/>
                <span onClick={()=>{setShowPassword((prev)=>!prev)}} className="absolute right-3 top-[38px] cursor-pointer ">
                    {showPassword?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>

            </label>
            <label classname="w-full relative">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ">confirm password<sup className="text-pink-200">*</sup></p>
                <input
                required
                type={showPassword?("text"):("password")}
                name="confirmPassword"
                onChange={changeHandler}
                placeholder="confirm password"
                value={formData.confirmPassword}
                classname="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"/>
                <span onClick={()=>{setShowPassword((prev)=>!prev)}} className="absolute right-3 top-[38px] cursor-pointer ">
                    {showPassword?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>

            </label>
            </div>
            <button className="w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
                create account
            </button>
            
        </form>
      
    </div>
  )
}

export default SignupForm

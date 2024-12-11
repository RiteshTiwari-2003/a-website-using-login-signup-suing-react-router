import React from 'react';
import {useState} from "react";

const SignupForm = () => {
    const [formData,setFormData]=useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        confirmPassword:""
    })
    function changeHandler(event){
        setFormData((prevData)=>({...prevData,
            [event.target.name]:event.target.value
        }))

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
        <form>
            <label>
                <p>first name:<sup>*</sup></p>
                <input
                required
                type="text"
                name="firstname"
                onChange={changeHandler}
                placeholder="Enter the first name"
                value={formData.firstname}/>

            </label>
        </form>
      
    </div>
  )
}

export default SignupForm

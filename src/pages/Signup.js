import React from 'react';
import {Template} from "../components/Template";
import SignupImg from "../assets/signup.png";


const Signup = ({setIsLoggedIn}) => {
  return (
    <div>
        <Template
        title="welcome back"
        desc1="build skill for today, tommarrow and beyond "
        desc2="education to future proof your code"
        image={SignupImg}
        formType="login"
        setIsLoggedIn={setIsLoggedIn}
    />
      
    </div>
  )
}

export default Signup

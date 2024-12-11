/* eslint-disable no-undef */
import React from 'react';
import Template from '../components/Template';
import loginImg from "../assets/login.png";

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
    title="welcome back"
    desc1="build skill for today, tommarrow and beyond "
    desc2="education to future proof your code"
    image={loginImg}
    formType="login"
    setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login

/* eslint-disable no-undef */
import React from 'react';
import Template from '../components/Template';

const Login = () => {
  return (
    <Template
    title="welcome back"
    description="build skill for today, tommarrow and beyond "
    description2="education to future proof your code"
    image={loginImg}
    formType="login"
    setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login

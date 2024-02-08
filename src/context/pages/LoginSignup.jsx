import React from 'react'
import '../pages/css/loginsignup.css'
import { Link } from 'react-router-dom'

export default function LoginSignup() {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='email Address'/>
          <input type="password" placeholder='Create Password'/>
        </div>
        <button>Continue</button>
        <p className='loginsingup-login'>Already have an account? <span> <Link to="/login">Login here</Link> </span></p>
        <div className="loginsignup-agree">
         <input type="checkbox" name="" id=""/>
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}


import React from 'react'
import '../pages/css/loginsignup.css'

export default function Login() {
  return (
    <div className='loginsignup hello' style={{height:"100vh"}}>
    <div className="loginsignup-container " style={{height:"400px",padding:"50px"}}>
      <h1>Login</h1>
      <div className="loginsignup-fields">
        <input type="email" placeholder='Enter email Address'/>
        <input type="password" placeholder='Enter Your Password'/>
      </div>
      <button>Continue</button>
    </div>
  </div>
  )
}

import React, { useState } from 'react'
import './navbar.css'
import logo from './assets/logo.png'
import cart_icon from './assets/cart_icon.png'
import { Link } from 'react-router-dom'


export default function Navbar() {

    const[menu,setMenu] = useState("shop")

    return (
        <>
            <div className="navbar d-flex justify-content-around ">
                <div className="nav-logo d-flex align-items-center ">
                    <img src={logo} alt="logo" />
                    <p>SHOPPER</p>
                </div>
                <ul className='nav-menu'>
                    <li onClick={()=>{setMenu("shop")}}> <Link style={{textDecoration:"none",color:"grey"}} to="/">Shop</Link> {menu==="shop"?<hr/>:""}</li>
                    <li onClick={()=>{setMenu("men")}}><Link to="/men" style={{textDecoration:"none",color:"grey"}}>Men</Link> {menu==="men"?<hr/>:""}</li>
                    <li onClick={()=>{setMenu("women")}}><Link to="/women" style={{textDecoration:"none",color:"grey"}}>Women</Link> {menu==="women"?<hr/>:""}</li>
                    <li onClick={()=>{setMenu("kids")}}><Link to="/kids" style={{textDecoration:"none",color:"grey"}}>Kids</Link> {menu==="kids"?<hr/>:""}</li>
                </ul>
                <div className="nav-login-cart">
                    <Link to="/login"><button>Login</button></Link>
                   <Link to="/cart"><img src={cart_icon} alt="cart-icon" /></Link> 
                    <div className="nav-cart-count">0</div>
                </div>

            </div>
        </>
    )
}

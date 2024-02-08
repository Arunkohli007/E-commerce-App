import React from 'react'
import Navbar from './Navbar'
import Shop from './context/pages/shop'
import { BrowserRouter,Route,Routes, } from 'react-router-dom'
import ShopCategory from './context/pages/ShopCategory'
import Cart from './context/pages/Cart'
import LoginSignup from './context/pages/LoginSignup'
import Footer from './footer/Footer'
import men_banner from './assets/banner_mens.png'
import women_banner from './assets/banner_women.png'
import kids_banner from './assets/banner_kids.png'
import Product from './context/pages/Product'
import Login from './context/pages/Login'


export default function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid"/>}/>
        <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/loginsignup' element={<LoginSignup/>}/>
        <Route path='/login' element={<Login/>} />
      </Routes>

        <Footer/>

      </BrowserRouter>

    </>
  )
}

import React from 'react'
import Navbar from './Navbar'
import Shop from './context/pages/shop'
import { BrowserRouter,Route,Routes, } from 'react-router-dom'
import ShopCategory from './context/pages/ShopCategory'
import Product from './context/pages/Product'
import Cart from './context/pages/Cart'
import LoginSignup from './context/pages/LoginSignup'
export default function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<ShopCategory category="men"/>}/>
        <Route path='/women' element={<ShopCategory category="women"/>}/>
        <Route path='/kids' element={<ShopCategory category="kid"/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path=':productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/log' element={<LoginSignup/>}/>
      </Routes>





      </BrowserRouter>

    </>
  )
}

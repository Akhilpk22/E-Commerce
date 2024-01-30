import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu,setMenu]=useState("shop");



  return (
    <div className='navbar'>
       <div className="nav-log">
         <img src={logo} alt="" />
         <p>SHOPPER </p>
       </div> 
       <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:"none"}} to="/">Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Mens")}}><Link style={{textDecoration:"none"}}to="/mens">Men</Link> {menu==="Men"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Women")}}><Link style={{textDecoration:"none"}} to="/womens">womens</Link> {menu==="Women"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Kids")}}><Link style={{textDecoration:"none"}} to="/kids">kids</Link> {menu==="Kids"?<hr/>:<></>}</li>
       </ul>
       <div className="nav-login-cart">
        <button><Link style={{textDecoration:"none"}} to="/Auth">longin</Link></button>
        <Link style={{textDecoration:"none"}} to="/cart"><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">
            0
        </div>
       </div>


    </div>
  )
}

export default Navbar
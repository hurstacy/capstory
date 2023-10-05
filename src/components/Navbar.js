import React from "react";
import {Link,useNavigate} from "react-router-dom"
import { useSelector } from 'react-redux'
// import Signout from "./Signout"

const Navbar = () => {
    const navigate =useNavigate()
    const items =useSelector((state)=>state.cart)
    return (
        <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }} className='navLink'>
            <Link className='navbar-brand' to="/products">Navbar</Link>
            <Link className='logo' to="/products">Shopify Store</Link>
        <div>
            <Link to="/" className='navLink'>Home</Link>
            <span className='cartCount'>
            Cart Items:{ items.length}
        </span>
        <Link to='/cart' className='navLink'>Cart</Link>
        </div>
        </div>

    )
}

export default Navbar
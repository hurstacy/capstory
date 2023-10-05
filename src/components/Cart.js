/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useDispatch,useSelector } from "react-redux";
import {remove} from "../store/cartSlice"
import { useNavigate } from "react-router-dom";


const Cart = () => {
        const navigate =useNavigate()
        const dispatch =useDispatch()
        const products= useSelector(state=>state.cart)


        const handleremove =(id)=>{
            dispatch(remove(id))
        }
    return (
        <div>
        <h1>Cart</h1>

        {
            products.map((product)=>{
                return(
                    <>
                    <div className='card' id="cartCard" style={{width:"20rem"}}>

                    <div className='cartCard'>
                        <img src={product.image} style={{width:"130px"}} className='card-img-top' />
                        <h5 className='card-title'>{product.title}</h5>
                        <h5 className='card-text'>{product.price}</h5>
                        <button className='btn btn-primary' onClick={()=>handleremove(product.id)}>Remove</button>
                        <button className='checkout btn-btn-danger' onClick={()=>navigate("/payment")}>Checkout</button>
                     </div>
                    </div>
                    </>
                )
            })
        }
        
        </div>

    )
}


export default Cart
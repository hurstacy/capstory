import React from "react";
import Signout from './Signout'
import { useSelector } from "react-redux"

const Payment = () => {
    const products= useSelector(state=>state.cart)
    const handlePay=()=>{
        alert("payment successful")
    }
    return (
        <div>
            <h1>Payment Dashboard</h1>
            {
                products.map((product)=>{
                    return (
                        <div className='cartCard' key={product.id}>
                            <img src={product.image} style={{width:"130px"}}/>
                            <h5>{product.title}</h5>
                            <h5>{product.price}</h5>
                            <button className='btn btn-primary' onClick={handlePay}>Paynow</button>
                        </div>
                    )
                })
}
<div style={{paddingTop:"50px"}}>
    <Signout/>
</div>
        </div>
    )
}

export default Payment
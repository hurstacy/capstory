/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { add } from '../store/cartSlice';
import Navbar from './Navbar';

const Products = () => {
  const [products, setProducts] = useState([])
  const dispatch = useDispatch( )

  async function fetchData(){
    let response =await axios("https://fakestoreapi.com/products")
    let product = response.data
    setProducts(product)
    console.log(product)
  }

  useEffect(()=>{
    fetchData();
  },[]);

  const handleBuy =(ele)=> {
    dispatch(add(ele))
  }

  return (
    <div >
        <Navbar/>
      <h1 className='heading'>Products</h1>

      {
        products.map((ele)=>{
            return (
                <>
        <li>{ele.id}</li>
          <img src={ele.image} style={{ width: '130px', height: '130px'}} />
          <div className='card-title'>{ele.title}</div>
          <div>{ele.price}</div>
          <button className='btn btn-primary' onClick={handleBuy(ele)}>Add to Cart</button>
          </>
      )
            })
        }
    </div>
    
  )
}

export default Products;

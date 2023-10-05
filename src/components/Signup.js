import React, { useState } from "react";
import {auth} from "../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
    const [email,setEmail] =useState("")
    const [password, setPassword] =useState('')


    const signup=(e)=>{
        e.preventDefault()
        createUserWithEmailAndPassword(auth,email,password).then((useCredential)=>{
            console.log(useCredential)
            alert('signup successful ${email}' )
        }).catch((err)=>{
            console.log(err)
            alert("Please enter an email and password")
        })
    }


    return (
        <div className='container'>
            <form>
            <h1>Signup</h1>
            <input type="email" placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button className='btn btn-danger' onClick={signup}>sign up</button>
            </form>
        </div>
    )
}

export default Signup
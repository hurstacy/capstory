/* eslint-disable no-template-curly-in-string */
import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const Signin = () => {
const navigate= useNavigate()
    const [email,setEmail] =useState("")
    const [password, setPassword] =useState('')


    const signin=(e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(auth,email,password).then((useCredential)=>{
            console.log(useCredential)
            alert('sign in successful ${email}' )
        }).catch((err)=>{
            console.log(err)
            alert("Account does not exist, please create an account")
        })
    }
    return(
        <div className='container'>
            <form>
            <h1>Login</h1>
            <input type='email' placeholder='Enter Your Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type='password' placeholder='Enter Your Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button className='btn btn-primary' onClick={signin}>Signin</button>
            </form>
        </div>
    )
}

export default Signin
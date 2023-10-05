import { React,useEffect,useState} from "react";
import { onAuthStateChanged,signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Signout = () => {
    const [authUser,setauthUser ] =useState(null)
    const navigate= useNavigate()

    useEffect(()=>{
        const listen =onAuthStateChanged(auth,(user)=>{
            if(user){
                setauthUser(user)
            }else{
                setauthUser(null)
            }
    })
    return ()=>{
        listen()
    }
},[])

const usersignout=()=>{
    signOut(auth).then(()=>{
        console.log("signout successful")
        alert('signed out ${authUser.email}')
        navigate("/")
    }).catch(error=>{
        console.log(error)
        alert("You are signed out, please sign in again")
        navigate("/")
    })
}
return (
    <div>
        <button className='btn btn-danger' onClick={usersignout}>Signout</button>
    </div>
)

}

export default Signout
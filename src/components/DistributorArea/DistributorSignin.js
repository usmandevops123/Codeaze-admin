import React, { useState } from 'react'
import {auth} from "../Firebase";
import { useHistory } from 'react-router';


export default function DistributorSignin() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const history = useHistory();
    const handleSubmit = async (e) =>{
    e.preventDefault()
    try {
        const admin = await auth.signInWithEmailAndPassword(email,password);
        window.M.toast({html: `welcome ${admin.user.email}`,classes : "green"})
        history.push("/Distributor")
    } catch (error) {
        console.log("Error on Creation")
        window.M.toast({html: `Password must be 8 letters `,classes : "red"})

    }
    }
    return (
        <div className = "center container" style={{maxWidth:"500px"}}>
            <h3>Please Login</h3>   
            <form onSubmit={(e)=>{handleSubmit(e)}}>
            <div class="input-field ">
          <input type="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)} />
          <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn blue"> Login </button>
            </form>
        </div>
    )
}

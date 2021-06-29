import React, { useState } from 'react'
import {auth, db} from "./Firebase"

export default function Signup() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
   const handleSubmit = async (e) =>{
        e.preventDefault()
        console.log(email,password)
        try {
            const admin = await auth.createUserWithEmailAndPassword(email,password);
            window.M.toast({html: `Admin ${admin.user.email}`,classes : "green"})
            db.collection("Admin").doc(admin.user.uid).set({
                email:admin.user.email,
                role:"Admin",
            })
        } catch (error) {
            window.M.toast({html: `Password must be 8 letters `,classes : "red"})
        }
  

    }
    return (
        <div className = "center container" style={{maxWidth:"500px"}}>
            <h3>Please Signup</h3>
            <form onSubmit={(e)=>{handleSubmit(e)}}>
            <div class="input-field ">
          <input type="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)} />
          <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn blue"> Signup </button>
            </form>
        </div>
    )
}

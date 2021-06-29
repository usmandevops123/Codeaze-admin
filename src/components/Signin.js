import React, { useState,useEffect } from 'react'
import {auth, db} from "./Firebase";
import { useHistory } from 'react-router';


export default function Signin() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const history = useHistory();
      const [adminsData , getAdminsData] = useState([])

    useEffect(() => {
        db.collection("Admin").onSnapshot(snapshot =>getAdminsData(snapshot.docs.map
          (doc=> doc.data())) )
        
      } , [])   
      
    console.log(adminsData)
    const handleSubmit = async (e) =>{
    e.preventDefault()
    try {


        const admin = await auth.signInWithEmailAndPassword(email,password);
        window.M.toast({html: `welcome ${admin.user.email}`,classes : "green"})
        var newEmail = adminsData.map(function(ele){
            var email  = ele.email
            return{
              email :email
            }
          }); 
          console.log(newEmail)
        const adminLogin = newEmail.find(loginEmail => loginEmail.email === admin.user.email)
        console.log(111111,admin.user.email , adminLogin)
        if (adminLogin) {
        console.log(111111,admin.user.email)
            
            history.push("/")
        }
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

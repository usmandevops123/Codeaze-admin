import React, { useEffect, useState } from 'react'
import {auth, db} from "../Firebase";
import { useHistory } from 'react-router';
export default function BookerSignin() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const history = useHistory();
    const [bookersData , getBookersData] = useState([])
    useEffect(() => {
        db.collection("Booker").onSnapshot(snapshot =>getBookersData(snapshot.docs.map
          (doc=> doc.data())) )
        
      } , [])
    const handleSubmit = async (e) =>{
    e.preventDefault()
   
      console.log(bookersData)
    console.log(email,password)
    // var userInforSnap = async (userId) =>{
    //     const userSnapshot  =  await db.collection("test").doc(userId).get()
    //     const userInfo = userSnapshot.data()
    //     console.log(userInfo)

    //    }
    try {
     
        const booker = await auth.signInWithEmailAndPassword(email,password);
        window.M.toast({html: `welcome ${booker.user.email}`,classes : "green"})
        var bookerSpecificEmail = bookersData.map(function(ele){
            var bookerEmail  = ele.email
            return{
              email :bookerEmail
            }
          });
          console.log(bookerSpecificEmail)
        const bookerLogin = bookerSpecificEmail.find(bookerComparsion => 
            bookerComparsion.email === booker.user.email
        )
        console.log(bookerLogin)
        if(bookerLogin){
            history.push("/Booker")

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

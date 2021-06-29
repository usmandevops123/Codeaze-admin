import React from 'react'
import { Link  } from 'react-router-dom'
import {auth} from "../Firebase"
import { useHistory } from 'react-router'
export default function BookerNavbar({user,newArray}) {
  const history = useHistory();

  return (
      
    <div>
          <nav>
<div className="nav-wrapper blue">
  <Link to="/" className="brand-logo">Home</Link>
  <ul id="nav-mobile" className="right">
      {
          user ?
          <li>
          <button className = "btn red" onClick= {()=> {auth.signOut()
            history.push("/BookerSignin")
        }
        }>
          Logout
          </button>
  
          </li>
          :
          <>
          <li><Link to= "/BookerSignin" >Login</Link></li>
          <li><Link to = "/BookerSignup">Sign up</Link></li>
      </> 
      }

  
  </ul>
</div>
</nav>
    </div>
)
}

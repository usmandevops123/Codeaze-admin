import React from 'react'
import { Link  } from 'react-router-dom'
import { auth } from './Firebase'
import { useHistory } from 'react-router'
export default function Navbar({user,newArray}) {
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
                history.push("/signin")
            }
            }>
              Logout
              </button>
      
              </li>
              :
              <>
              <li><Link to= "/signin" >Login</Link></li>
              <li><Link to = "/signup">Sign up</Link></li>
          </> 
          }
  
      
      </ul>
    </div>
  </nav>
        </div>
    )
}

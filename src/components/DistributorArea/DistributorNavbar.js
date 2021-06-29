import React from 'react'
import { Link  } from 'react-router-dom'
export default function DistributorNavbar() {
    return (
        <div>
              <nav>
    <div className="nav-wrapper blue">
      <Link to="/todos" className="brand-logo">Home</Link>
      <ul id="nav-mobile" className="right">
        <li><Link to= "/Distributorsignin" >Login</Link></li>
        <li><Link to = "/Distributorsignup">Sign up</Link></li>
        <li>
        <button className = "btn red">
        Logout
        </button>

        </li>
      </ul>
    </div>
  </nav>
        </div>
    )
}

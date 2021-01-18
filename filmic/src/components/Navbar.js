import React from 'react'
import { useAuth } from "../context/auth";
import { Link } from "react-router-dom";


function Navbar() {
    const { setAuthTokens } = useAuth();
  
    function logOut() {
      setAuthTokens();
    }

  return (
     <nav className="navbar">
        <ul className="center-div">
          <Link to='/admin'>
            <li>Logo</li>
          </Link>
          <Link to='/favorites'>
            <li>Favorites</li>
          </Link>
          <Link to='/ratings'>
            <li>My ratings</li>
          </Link>
          <Link to='/'>
            <li><button onClick={logOut}>Log out</button></li>
          </Link>
        </ul>
      </nav>
  );
}

export default Navbar;
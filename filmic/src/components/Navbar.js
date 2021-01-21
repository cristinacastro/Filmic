import React from "react";
import { useAuth } from "../context/auth";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {


  return (
    <nav className="navbar">
      <ul>
        <div className="logo">
          <Link to="/">
            <li>
              <img
                src="../img/filmicwhite.png"
                alt="white logo filmic"
                width="60px"
              />
            </li>
          </Link>
        </div>
        <div className="icons-navbar">
          <Link to="/">
            <li>
              <img 
                src="../img/user.png" 
                alt="user account icon" 
                width="18px" />
            </li>
            <li>
              <img 
                src="../img/search.png" 
                alt="searching icon" 
                width="18px" />
            </li>
            <li>
              <img
                src="../img/logout.png"
                alt="user logging out icon"
                width="18px"
              />
            </li>
          </Link>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;

import React from "react";
import { useAuth } from "../context/auth";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens();
  }

  return (
    <nav className="navbar">
      <ul>
        <Link to="/">
          <li>
            <img
              src="../img/filmicwhite.png"
              alt="white logo filmic"
              width="60px"
            />
          </li>
        </Link>
        <Link to="/">
          <li>
            <button className="logout-btn" onClick={logOut}>
              <img src="./img/logout.png" alt="logout icon" width="25px" />
            </button>
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;

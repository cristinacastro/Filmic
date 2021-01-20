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
            <button className="logout-btn" onClick={logOut}>
              <img src="./img/user.png" alt="logout icon" width="18px" />
            </button>
          </li>
        <li>
            <button className="logout-btn" onClick={logOut}>
              <img src="./img/search.png" alt="logout icon" width="18px" />
            </button>
          </li>
          <li>
            <button className="logout-btn" onClick={logOut}>
              <img src="./img/logout.png" alt="logout icon" width="18px" />
            </button>
          </li>
        </Link>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;

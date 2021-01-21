import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import "./WelcomeOutsider.css";

function WelcomeOutsider(props) {
  return (
    <section className="welcome-main">
      <div className="form-background  ml30 mr30">
        <h1>Filmic</h1>
        <h5>Find, enjoy and rate your movies.</h5>
        <div className="onboarding-options">
          <div>
            <Link className="main-btn" to="/login">
              Login
            </Link>
          </div>
          <div>
            <Link className="main-btn" to="/signup">
              Signup{" "}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WelcomeOutsider;

import React from "react";
import "./WelcomeOutsider.css";

function WelcomeOutsider(props) {
  return (
    <section className="welcome-main">
      <div className="form-background  ml30 mr30">
        <h1>Filmic</h1>
        <h5>Find, enjoy and rate your movies.</h5>
        <div className="onboarding-options">
          <div className="main-btn">
            <a href="/login">Login</a>
          </div>
          <div className="main-btn">
            <a href="/signup">Signup</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WelcomeOutsider;

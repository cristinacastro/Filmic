import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/auth";
import "./Signup.css";

function Signup() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();
  const apiurl =
    "https://front-assignment.planetdataset.com/api/v1/candidates/42b619d4-e3b0-445c-89de-e0cf4261ee5a/users";

  function postSignup() {
    axios
      .post(apiurl, {
        user: {
          first_name,
          last_name,
          email,
          password,
        },
      })
      .then((result) => {
        if (result.status === 200) {
          setAuthTokens(result.data);
          setLoggedIn(true);
        } else {
          setIsError(true);
        }
      })
      .catch((e) => {
        setIsError(true);
      });
  }

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <section className="signup-main">
      <div className="form-background ml30 mr30">
        <form className="center-div">
        <div className="ta intro">
          <h1>Filmic</h1>
          <h2>Find, enjoy and rate your movies.</h2>
        </div>
        <div>
          <input
            type="text"
            value={first_name}
            onChange={(e) => {
              setFirst_name(e.target.value);
            }}
            placeholder="First Name"
          />
          </div>
          <div>
          <input
            type="text"
            value={last_name}
            onChange={(e) => {
              setLast_name(e.target.value);
            }}
            placeholder="Last Name"
          />
          </div>
          <div>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="email"
          />
          </div>
          <div>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="password"
          />
          </div>
          <div className="btn-center mt10">
            <button onClick={postSignup} className="onboard-btn">Sign up</button>
          </div>
        <Link to="/login" className="subtitle">
          Already have an account? Let's log in.
        </Link>
        </form>
        {/*   {isError && <Error>There is some invalid information, please check it out and try again</Error>} */}
      </div>
    </section>
  );
}

export default Signup;

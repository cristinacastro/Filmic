import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/auth";
import "./Login.css";

function Login(props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();
  const apiurl =
    "https://front-assignment.planetdataset.com/api/v1/candidates/42b619d4-e3b0-445c-89de-e0cf4261ee5a/users/login";

  function postLogin() {
    axios
      .post(apiurl, {
        email,
        password,
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
    <section className="login-main ">
      <div className="form-background  ml30 mr30">

        <form className="center-div">
        <div className="intro ta">
          <h1>Filmic</h1>
          <h2>Find, enjoy and rate your movies.</h2>
        </div>
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Introduce your email"
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Introduce your password"
            />
          </div>
          <div className="mt10 ">
            <button onClick={postLogin} className="onboard-btn ">
              Sign In
            </button>
          </div>
          <Link to="/signup" className="subtitle">
            Don't have an account? Let's sign Up.
          </Link>
        </form>
        {/* {isError && <Error>The email or password provided were incorrect!</Error>} */}
      </div>
    </section>
  );
}

export default Login;

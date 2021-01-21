
import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import { Card, Form, Input, Button, Error } from "../components/AuthForms";
import { useAuth } from "../context/auth";

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
    return <Redirect to= "/movies" />;
  }

  return (
    <Card>
    <h2>Log In</h2>
      <Form>
        <Input
          type="email"
          value={email}
          onChange={e => {
            setEmail(e.target.value);
          }}
          placeholder="Introduce your email"
        />
        <Input
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          placeholder="Introduce your password"
        />
        <Button onClick={postLogin}>Sign In</Button>
      </Form>
      <Link to="/signup">Don't have an account? Let's sign up.</Link>
        { isError &&<Error>The username or password provided were incorrect!</Error> }
    </Card>
  );
}


export default Login;

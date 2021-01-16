import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { Card, Form, Input, Button, Error } from "../components/AuthForms";
import { useAuth } from "../context/auth";

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
            first_name,
            last_name,
            email,
            password
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
    <Card>
    <Form>
    <Input
        type="text"
        value={first_name}
        onChange={(e) => {
          setFirst_name(e.target.value);
        }}
        placeholder="First Name"
      />
        <Input
        type="text"
        value={last_name}
        onChange={(e) => {
          setLast_name(e.target.value);
        }}
        placeholder="Last Name"
      />
      <Input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="email"
      />
      <Input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="password"
      />
      <Button onClick={postSignup}>Sign up</Button>
    </Form>
     <Link to="/login">Already have an account?</Link> 
    {isError && <Error>There is some invalid information, please check it out and try again</Error>}
  </Card>
  );
}

export default Signup;

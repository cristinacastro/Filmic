import React from "react";
import { Link } from "react-router-dom";
import { Card, Form, Input, Button } from "../components/AuthForms";

function Signup() {
  return (
    <Card>
      <Form>
        <Input type="text" placeholder="First Name" />
        <Input type="text" placeholder="Last Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button>Sign Up</Button>
      </Form>
      <Link to="/login">Already have an account?</Link>
    </Card>
  );
}

export default Signup;

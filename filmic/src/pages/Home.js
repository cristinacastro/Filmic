import React from "react";
import Login from "./Login";
import Signup from './Signup';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <div>Welcome to Filmic</div>
      <Router>
      <ul>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
            <li>
              <Link to="/login">Log in</Link>
            </li>
          </ul>
        <div>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </div>
      </Router>
    </div>
  );
}

export default Home;

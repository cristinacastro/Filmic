import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import { AuthContext } from "./context/auth";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MovieDetails from "./pages/MovieDetails";
import './App.css';
import WelcomeOutsider from "./pages/WelcomeOutsider"


function App(props) {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <div>
          <Route exact path ="/" component={WelcomeOutsider}/>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route exact path="/movies" component={Home} />
          <Route exact path="/movies/:id" component={MovieDetails} />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;

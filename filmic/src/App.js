import React , { useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Admin from './pages/Admin';
import { AuthContext } from "./context/auth";
import Login from "./pages/Login";
import Signup from './pages/Signup';
import Movies from "./pages/Movies"
import MovieDetails from "./pages/MovieDetails"
import Ratings from "./pages/Ratings"

function App(props) {

  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);
  
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/admin" component={Admin} />
          <PrivateRoute exact path="/movies" component={Movies} />
          <PrivateRoute exact path="/movies/:id" component={MovieDetails} />
          <PrivateRoute path="/ratings" component={Ratings} />

        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;

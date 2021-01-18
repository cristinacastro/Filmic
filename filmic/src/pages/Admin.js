import axios from "axios";
import React, { Component } from "react";
import Service from "../lib/Service";
import NavBar from "../components/Navbar"
class Admin extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    this.getAllMovies();
  }

  getAllMovies = async () => {
    try {
      const res = await axios({
        method: "GET",
        url:
          "https://front-assignment.planetdataset.com/api/v1/candidates/42b619d4-e3b0-445c-89de-e0cf4261ee5a/movies",
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZWI1Mjg4OGEtMWU3My00OGIwLWFlNmYtYzBjODkwYmIyMTU4In0._TY6o42XCCb9PBvkFjvl9XLZ00qGThViyjMWdcZ2GTs"
        
        }
      });
      this.setState({
        movies: res.data,
      });
      console.log(this.state.movies, "peliculas")
    } catch (error) {
      console.log(error, "Ha habido un error al cargar las películas.");
    }
  };
  
  render() {
    return (
      <div>
      <NavBar />
        <div>{this.state.movies.map(eachMovie => {
          return (
            <div key={eachMovie.id}>
              
              <p>{eachMovie.title}</p>
            </div>
          )
        })}</div>
      </div>
    );
  }
}
export default Admin;

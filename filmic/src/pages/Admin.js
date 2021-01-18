import axios from "axios";
import React, { Component } from "react";
import Service from "../lib/Service";
import NavBar from "../components/Navbar";
import { Link } from "react-router-dom";


class Admin extends Component {
  state = {
    movies: [],
    randomMovie: [],
  };

  componentDidMount() {
    this.getAllMovies();
    this.getRandomMovie();
  }

  getAllMovies = async () => {
    try {
      const res = await axios({
        method: "GET",
        url:
          "https://front-assignment.planetdataset.com/api/v1/candidates/42b619d4-e3b0-445c-89de-e0cf4261ee5a/movies",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZWI1Mjg4OGEtMWU3My00OGIwLWFlNmYtYzBjODkwYmIyMTU4In0._TY6o42XCCb9PBvkFjvl9XLZ00qGThViyjMWdcZ2GTs",
        },
      });
      this.setState({
        movies: res.data,
      });
      console.log(this.state.movies, "peliculas");
    } catch (error) {
      console.log(error, "Ha habido un error al cargar las películas.");
    }
  };

  getRandomMovie = async () => {
    try {
      const res = await axios({
        method: "GET",
        url:
          "https://front-assignment.planetdataset.com/api/v1/candidates/42b619d4-e3b0-445c-89de-e0cf4261ee5a/movies/random_unrated",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZWI1Mjg4OGEtMWU3My00OGIwLWFlNmYtYzBjODkwYmIyMTU4In0._TY6o42XCCb9PBvkFjvl9XLZ00qGThViyjMWdcZ2GTs",
        },
      });
      this.setState({
        randomMovie: res.data,
      });
      console.log(this.state.randomMovie, "pelicula random");
    } catch (error) {
      console.log(error, "Ha habido un error al cargar las películas.");
    }
  };

  render() {
    return (
      <div>
        <NavBar />
        <section>
          <h2>{this.state.randomMovie.title}</h2>
          <Link to={`/movies/${this.state.randomMovie._id}`}>Discover</Link> 
          <br></br><img src={this.state.randomMovie.poster_url} />
        </section>

        <section>
        <h2>Latest releases</h2>
          {this.state.movies.map((eachMovie) => {
            return (
              <div key={eachMovie.id}>
              <img src={eachMovie.poster_url} />
                <p>{eachMovie.title}</p>
                <Link to={`/movies/${eachMovie._id}`}>See film</Link> 
              </div>
            );
          })}
        </section>
      </div>
    );
  }
}
export default Admin;

import React, { Component } from "react";
import Service from "../lib/Service";
import NavBar from "../components/Navbar";
import { Link } from "react-router-dom";


class Movies extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    this.getAllMovies();
  }

  getAllMovies () {
    Service.getAllMovies().then((data) => {
      this.setState({
        movies: data,
      });
    })
  }


  render() {
    return (
      <div>
        <NavBar />
        <section>
        <h2>Movies</h2>
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
export default Movies;

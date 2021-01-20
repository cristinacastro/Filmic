import React, { Component } from "react";
import Service from "../lib/Service";
import NavBar from "../components/Navbar";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import "./Home.css";

class Home extends Component {
  state = {
    movies: [],
    filteredMovie: [],
  };

  componentDidMount() {
    this.getAllMovies();
  }

  getAllMovies() {
    Service.getAllMovies().then((data) => {
      this.setState({
        movies: data,
      });
    });
  }

  filteredMovie = (searchTerm) => {
    const searchedTerm = searchTerm.toLowerCase();
    const filteredList = [...this.state.movies].filter((movieObj) => {
      return movieObj.title.toLowerCase().includes(searchedTerm);
    });
    if (searchTerm) {
      this.setState({ filteredMovie: filteredList });
    } else {
      this.setState({ filteredMovie: [] });
    }
  };

  render() {
    return (
      <div>
        <NavBar />
        <section className="slider pt900">
          <img src="../img/signup-background.jpg" alt="cinema entrance" />
          <div className="slider-text">
            <h2>Escape Room</h2>
            <button className="white-btn">Discover</button>
          </div>
          <br></br>
        </section>

        <section className="search-bar pt40 pb20">
          <Search filteredMovie={this.filteredMovie} />
          {this.state.filteredMovie.map((movie) => {
            return (
              <div>
                <Link
                  to={{
                    pathname: `/movies/${movie.id}`,
                    state: { moviesState: this.state.movies },
                  }}
                >
                  <div key={movie.id} className="movie-card center-div ta pt10">
                    <img src={movie.poster_url} alt="poster movie image" />
                    <div>
                      <h3>{movie.title}</h3>
                      <button className="white-btn mb30">See movie</button>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </section>

        <section className="movies-list ta">
          <h4>Latest releases</h4>
          <div className="card-container w100">
            {this.state.movies.map((eachMovie) => {
              return (
                <Link
                  to={{
                    pathname: `/movies/${eachMovie.id}`,
                    state: { moviesState: this.state.movies },
                  }}
                >
                  <div key={eachMovie.id} className="movie-card">
                    <img src={eachMovie.poster_url} alt="poster movie image" />
                    <div>
                      <h3 className="pl20 pr20">{eachMovie.title}</h3>
                      <button className="white-btn mb30">See movie</button>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    );
  }
}
export default Home;

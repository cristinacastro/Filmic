import React, { Component } from "react";
import Service from "../lib/Service";
import NavBar from "../components/Navbar";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import "./Home.css";

class Home extends Component {
  state = {
    movies: [],
    randomMovie: [],
    filteredMovie: [],
  };

  componentDidMount() {
    this.getAllMovies();
    this.getRandomMovie();
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

  getRandomMovie() {
    Service.getRandomUnratedMovie().then((data) => {
      this.setState({
        randomMovie: data,
      });
    });
  }

  render() {
    return (
      <div>
        <NavBar />
        <section className="slider pt100">
          <img src="../img/signup-background.jpg" />
          <div className="slider-text">
            <h2>Escape Room</h2>
            <button className="white-btn">Discover</button>
          </div>

          {/* <img src={this.state.randomMovie.poster_url} />
          <h2>{this.state.randomMovie.title}</h2>
          <Link to={`/movies/${this.state.randomMovie._id}`}>Discover</Link> */}
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
                  {movie.title}
                </Link>
              </div>
            );
          })}
        </section>

        <section className="movies-list ta">
          <h3>Latest releases</h3>
          <div className="card-container w100">
            {this.state.movies.map((eachMovie) => {
              return (
                <Link
                  to={{
                    pathname: `/movies/${eachMovie.id}`,
                    state: { moviesState: this.state.movies },
                  }}
                >
                  <div key={eachMovie.id} className="movie-card w100">
                    <img src={eachMovie.poster_url} />
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

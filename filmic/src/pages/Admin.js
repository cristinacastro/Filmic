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

  getAllMovies () {
    Service.getAllMovies().then((data) => {
      this.setState({
        movies: data,
      });
    })
  }

  getRandomMovie () {
    Service.getRandomUnratedMovie().then((data) => {
      this.setState({
        randomMovie: data,
      });
    })
  }

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
          <form>
            Buscador
          </form>

        </section>
        <section>
        <h2>Latest releases</h2>
        {this.state.movies.map((eachMovie) => {
            return (
              <div key={eachMovie.id}>
              <Link to={{pathname:`/movies/${eachMovie.id}`, state: {moviesState:this.state.movies}}}>
                <img src={eachMovie.poster_url}/>
                <h3>{eachMovie.title}</h3>
                <p>See movie</p>
                </Link>

              </div>
            )
          })}
        </section>
      </div>
    );
  }
}
export default Admin;

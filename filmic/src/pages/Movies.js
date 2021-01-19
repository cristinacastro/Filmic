import React, { Component } from "react";
import Service from "../lib/Service";
import NavBar from "../components/Navbar";
import { Link } from "react-router-dom";

class Movies extends Component {
    
  constructor(props){
    super(props)
    this.state = {
      movies: [],
    };
  } 


  componentDidMount() {
    this.getAllMovies();
  }

  getAllMovies () {
    Service.getAllMovies().then((data) => {
      this.setState({
        movies: data,
      });
      console.log(this.state.movies, "the movies")
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
export default Movies;

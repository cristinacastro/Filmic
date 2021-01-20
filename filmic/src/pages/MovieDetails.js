import React, { Component } from "react";
import Service from "../lib/Service";
import NavBar from "../components/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import AddRating from "../components/AddRating";
import "./MovieDetails.css";

export default function MovieDetails(props) {
  let getMovie = (id) =>
    props.location.state.moviesState.find((obj) => obj.id === id);
  const { id } = props.match.params;
  console.log(props.location, "props locat");
  const movieFound = getMovie(id);
  console.log(movieFound, "pelicula trobada");

  return (
    <div>
      <NavBar />
      <section className="movie-info">
        <img src={movieFound.poster_url} />
        <div>
          <h1>{movieFound.title}</h1>
          <h4>{movieFound.year}</h4>
          <p>{movieFound.description}</p>
        </div>
        <div className="info-extra">
          <p>{movieFound.language}</p>
          <p>|</p>
          <p>{movieFound.duration} min</p>
          <p>|</p>
          <p>{movieFound.published_at}</p>
        </div>
      </section>

      <div className="rate-the-movie">
        <h5>Rate the movie:</h5>
        <AddRating {...props} />
      </div>
    </div>
  );
}

/* class MovieDetails extends Component {
constructor(props){
    super(props);

    this.state = {};
}

  componentDidMount() {
    this.getTheMovie();
  }

  getTheMovie () {
     const {params} = this.props.match
      console.log(params , "params") 
    Service.getTheMovie(params.id)
    .then((data) => {
        this.setState(data);
        console.log(data, "the movie")
      })
    .catch((err) => console.log(err));
  }  */

/*  render() {
    const {title} = this.state
    return (
      <div>
      <NavBar />
      <div>
        <h1>El titulo es :{title}</h1>
        <Link to={"/movies"}>Back to movies</Link>
    </div>
    </div>
    )
  }
}  */

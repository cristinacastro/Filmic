import React from "react";
import NavBar from "../components/Navbar";
import "./MovieDetails.css";
import AddRate from "../components/AddRate";

export default function MovieDetails(props) {
  let getMovie = (id) =>
    props.location.state.moviesState.find((obj) => obj.id === id);
  const { id } = props.match.params;
  const movieFound = getMovie(id);

  return (
    <div>
      <NavBar />
      <section className="movie-info pt80">
        <div className="main-info">
          <img
            src={movieFound.poster_url && movieFound.poster_url}
            alt="movie presentation"
          />
          <div>
            <h1>{movieFound.title && movieFound.title}</h1>
            <h4>{movieFound.year && movieFound.year}</h4>
            <p>{movieFound.description && movieFound.description}</p>
          </div>
        </div>
        <div className="info-extra">
          <p>{movieFound.language && movieFound.language}</p>
          <p>|</p>
          <p>{movieFound.duration && movieFound.duration} min</p>
          <p>|</p>
          <p>
            {movieFound.published_at &&
              movieFound.published_at.split("-").reverse().join("-")}
          </p>
        </div>
        <br></br>
        <hr></hr>
      </section>

      <section className="trailer-display">
        <h2>Trailer</h2>
        <iframe
          src="https://www.youtube.com/embed/zSWdZVtXT7E"
          frameBorder="0"
          title="trailer-video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </section>

      <section className="cast pt10">
        <h2>Cast</h2>
        <div className="cast-container pb20">
          <article>
            <img src=" ../img/cast_1.jpg" alt="cast profile" />
            <h6>Ellen Burstyn</h6>
          </article>
          <article>
            <img src=" ../img/cast_2.jpg" alt="cast profile" />
            <h6>Matthew McConaughey</h6>
          </article>
          <article>
            <img src=" ../img/cast_3.jpg" alt="cast profile" />
            <h6>Mackenzie Foy</h6>
          </article>
          <article>
            <img src=" ../img/cast_4.jpg" alt="cast profile" />
            <h6>John Lithgow</h6>
          </article>
        </div>
        <hr></hr>

      </section>

      <section className="rate-the-movie">
        <h5>rate this movie</h5>
        <AddRate {...props} />
      </section>
    </div>
  );
}

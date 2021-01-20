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
        <img src={movieFound.poster_url && movieFound.poster_url} alt="poster movie image"  />
        <div>
          <h1>{movieFound.title && movieFound.title}</h1>
          <h4>{movieFound.year && movieFound.year}</h4>
          <p>{movieFound.description && movieFound.description}</p>
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
      </section>

      <section className="rate-the-movie">
        <h5>Rate the movie:</h5>
        <AddRate {...props} />
      </section>

      <section className="trailer-display">
        <h3>Trailer</h3>
        <iframe
          src="https://www.youtube.com/embed/zSWdZVtXT7E"
          frameborder="0"
          title="trailer-video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </section>

      <section className="cast pt10">
        <h3>Cast</h3>
        <div className="cast-container pb20">
          <article>
            <img src=" ../img/cast_1.jpg" alt="cast profile image" />
            <h5>Ellen Burstyn</h5>
          </article>
          <article>
            <img src=" ../img/cast_2.jpg" alt="cast profile image"/>
            <h5>Matthew McConaughey</h5>
          </article>
          <article>
            <img src=" ../img/cast_3.jpg" alt="cast profile image"/>
            <h5>Mackenzie Foy</h5>
          </article>
          <article>
            <img src=" ../img/cast_4.jpg" alt="cast profile image"/>
            <h5>John Lithgow</h5>
          </article>
        </div>
      </section>
    </div>
  );
}
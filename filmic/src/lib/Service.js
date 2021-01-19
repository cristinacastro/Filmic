import axios from "axios";

class Service {
  constructor() {
    this.axios = axios.create({
      baseURL:
        "https://front-assignment.planetdataset.com/api/v1/candidates/42b619d4-e3b0-445c-89de-e0cf4261ee5a",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZWI1Mjg4OGEtMWU3My00OGIwLWFlNmYtYzBjODkwYmIyMTU4In0._TY6o42XCCb9PBvkFjvl9XLZ00qGThViyjMWdcZ2GTs",
      },
    });
  }

  getAllMovies() {
    return this.axios.get("/movies").then(({ data }) => data);
  }

  getRandomUnratedMovie() {
    return this.axios.get("/movies/random_unrated").then(({ data }) => data);
  }

  addNewRate(movie_id) {
    return this.axios.post(`/movies/${movie_id}/rate`).then(({ data }) => data);
  }

  getRatedMovies() {
    return this.axios.get("/movies/rated").then(({ data }) => data);
  }
/* 
  getTheMovie(movie_id) {
    return this.axios.get(`/movies/${movie_id}`).then(({ data }) => data);
  }  */

  getAllRates() {
    return this.axios.get("/ratings").then(({ data }) => data);
  }

  getTheRate(rating_id) {
    return this.axios.get(`/ratings/${rating_id}`).then(({ data }) => data);
  }
}

const axiosRequestFunctions = new Service();

export default axiosRequestFunctions;

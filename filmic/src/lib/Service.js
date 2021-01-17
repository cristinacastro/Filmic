import axios from "axios";


class Service {
    constructor() {
        this.axios = axios.create({
          baseURL: "https://front-assignment.planetdataset.com/api/v1/candidates/42b619d4-e3b0-445c-89de-e0cf4261ee5a",
          withCredentials: true,
        });
      }


// movies
    async getAllMovies() {
    const { data } = await this.axios.get("/movies");
    return data;
}

    async getRandomUnratedMovie () {
    const { data } = await this.axios.get("/movies/random_unrated");
    return data;
}

async addNewRate () {
    const {data} = await this.axios.post(`/movies/${movie_id}/rate`);
    return data
}

async getRatedMovies () {
    const { data } = await this.axios.get("/movies/rated");
    return data;
}

async getTheMovie () {
    const {data} = await this.axios.get(`/movies/${movie_id}`);
    return data
}

async getAllRates () {
    const {data} = await this.axios.get("/ratings");
    return data
}

//rating

}
/* import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";

class AddRating extends Component {
  state = {
    movieInfo: {},
    score: 0,
  };

  componentDidMount() {
    this.getTheRatedMovie();
  }

  getTheRatedMovie(){
    const { params } = this.props.match;
    BookingService.getTheMovie(params.movie_id).then((data) => {
      this.setState({ movieInfo: data});
    });
  }

  handleInputChange(event, propertyName) {
    let scoreCopy = this.state.score;
    scoreCopy[propertyName] = event.target.value;
    this.setState({ score: scoreCopy });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { params } = this.props.match;
    BookingService.addNewRate(
      params.movie_id,
      this.state.score
    ).then((data) => this.props.history.push("/home"));
  }
  renderMovieInfo() {
    return (
      <div>
        <h1>{}</h1>
      </div>
    );
  }
render(){
  return (
    <div>
      <h2>How much have you enjoyed this movie?</h2>
      <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            required
            type="number"
            min="1"
            max="5"
            defaultValue={this.state.review.rating}
            onChange={(e) => this.handleInputChange(e, "rating")}
          /><br/>
          <button>Save</button>
        </form>
    </div>
  );
}

}

export default withAuth(AddRating); */
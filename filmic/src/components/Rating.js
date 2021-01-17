/* 
import React, { Component } from "react";

class Rating extends Component {
  renderMovieRate = () => {
    const ratingStars = Math.round(this.props.rating);
    if (ratingStars === 0) {
      return "☆☆☆☆☆";
    }
    if (ratingStars === 1) {
      return "★☆☆☆☆";
    }
    if (ratingStars === 2) {
      return "★★☆☆☆";
    }
    if (ratingStars === 3) {
      return "★★★☆☆";
    }
    if (ratingStars === 4) {
      return "★★★★☆";
    }
    if (ratingStars === 5) {
      return "★★★★★";
    }
    return ratingStars;
  };

  render() {
    return <div>{this.renderMovieRate()}</div>;
  }
}
export default Rating; */
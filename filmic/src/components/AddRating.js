import React, { Component } from "react";
import { Link } from "react-router-dom";
import Service from "../lib/Service";

class AddRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      review: "",
      rating: 0,
      isShowing: false,
    };
  }

  handleFormSubmit = async (event) => {
    event.preventDefault();
    const { review, rating } = this.state;
    const { params } = this.props.match;
    try {
      await Service.addNewRate(params.id, review, rating);
      this.setState({ review: "", rating: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState ({ [name]: value});
  };

  //fer que la condició perque es mostri o no el form sigui en funció de si la id ja te un rating o no
  toggleForm = () => {
    if (!this.state.isShowing){
      this.setState({isShowing: true});
    } else {
      this.setState ({isShowing:false});
    }
  }

  showAddRatingForm = () => {
    if (this.state.isShowing){
      return (
        <div>
          <h3>Add Review</h3>
          <form onSubmit={this.handleFormSubmit}>
            <label>Rating:</label>
            <select>
              <option value={this.state.rating} onChange={(e) => this.handleChange(e)}>1</option>
              <option value={this.state.rating} onChange={(e) => this.handleChange(e)}>2</option>
              <option value={this.state.rating} onChange={(e) => this.handleChange(e)}>3</option>
              <option value={this.state.rating} onChange={(e) => this.handleChange(e)}>4</option>
              <option value={this.state.rating} onChange={(e) => this.handleChange(e)}>5</option>
            </select>

            <label>Review:</label>
            <textarea
              name="review"
              value={this.state.review}
              onChange={(e) => this.handleChange(e)}
            />

            <input type="submit" value="Submit" />
          </form>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <hr />
        <button onClick={() => this.toggleForm()}> Add Review </button>
        {this.showAddRatingForm()}
      </div>
    );
  }
}

export default AddRating;

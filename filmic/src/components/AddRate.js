import React, { Component } from "react";
import "./AddRate.css";

class AddRate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
    };

    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedOption);
    this.setState({
      rating: this.state.selectedOption,
    });
    console.log(this.state.rating, "rate");
  }

  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <section>
          <form
            onSubmit={this.formSubmit}
            className="rating-form pt10 center-div"
          >
            <div className="ratings-stars">
            
              <div className="radio-item">
                <label>
                  <input
                    className="radiobtn"
                    type="radio"
                    value="1"
                    checked={this.state.selectedOption === 1}
                    onChange={this.onValueChange}
                  />
                  ★
                </label>
              </div>
              <div className="radio-item">
                <label>
                  <input
                    className="radiobtn"
                    type="radio"
                    value="2"
                    checked={this.state.selectedOption === 2}
                    onChange={this.onValueChange}
                  />
                  ★★
                </label>
              </div>
              <div className="radio-item">
                <label>
                  <input
                    className="radiobtn"
                    type="radio"
                    value="3"
                    checked={this.state.selectedOption === 3}
                    onChange={this.onValueChange}
                  />
                  ★★★
                </label>
              </div>
              <div className="radio-item">
                <label>
                  <input
                    className="radiobtn"
                    type="radio"
                    value="4"
                    checked={this.state.selectedOption === 4}
                    onChange={this.onValueChange}
                  />
                  ★★★★
                </label>
              </div>
              <div className="radio-item">
                <label>
                  <input
                    className="radiobtn"
                    type="radio"
                    value="5"
                    checked={this.state.selectedOption === 5}
                    onChange={this.onValueChange}
                  />
                  ★★★★★
                </label>
              </div>
            </div>
            <button className="main-btn mt20" type="submit">
              Submit
            </button>
          </form>
        </section>
        <section className= "mb30">
          <h6 className=" ta pt10 pb10">
            You rated this movie with{" "}
            {this.state.selectedOption && this.state.selectedOption}/5!
          </h6>
        </section>
      </div>
    );
  }
}
export default AddRate;

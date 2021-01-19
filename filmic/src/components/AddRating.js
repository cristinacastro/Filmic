import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Service from "../lib/Service";
import Select from "react-select";

const options = [
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
];

class AddRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: null,
    };
  }

  handleChange = (score) => {
    this.setState({ score });
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();
    const score = this.state;
    //console.log(score)
    const { id } = this.props.match.params;
    //console.log(id)

    try {
      const data = Service.addNewRate(id, score);
      //console.log(data, "resposta")
      this.setState({ score: data });
      //console.log("opcion seleccionada", score);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <Fragment>
          <Select
            defaultValue={options[0]}
            isDisabled={false}
            isLoading={false}
            isClearable={true}
            isRtl={false}
            isSearchable={true}
            name="score"
            options={options}
            onChange={this.handleChange}
          />
        </Fragment>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddRating;

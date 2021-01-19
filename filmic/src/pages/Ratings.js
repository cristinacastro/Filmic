import React, { Component } from "react";
import Service from "../lib/Service";
import NavBar from "../components/Navbar";
import { Link } from "react-router-dom";

class Ratings extends Component {
    
  constructor(props){
    super(props)
    this.state = {
      ratings: [],
    };
  } 


  componentDidMount() {
    this.getAllRates();
  }

  getAllRates () {
    Service.getAllRates().then((data) => {
      this.setState({
        ratings: data,
      });
      console.log(this.state.ratings, "the ratings")
    })
  }


  render() {
    return (
      <div>
        <NavBar />
        <section>
        <h2>My Ratings</h2>
          {this.state.ratings.map((eachRate) => {
            return (
              <div key={eachRate.id}>
                <h3>{eachRate.score}</h3>
              </div>
            )
          })}
        </section>
      </div>
    );
  }
}
export default Ratings;

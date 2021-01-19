import React, { Component } from 'react'


class Search extends Component {
  state = {
    search: ""
  }

  handleChange = e => {
    const { name, value } = e.target;
      this.setState({[name]: value})
      this.props.filteredMovie(value);
  }

  render() {
    return (
      <div>
        <input 
          type="text" 
          className="" 
          name="search" 
          placeholder="Type here to search" 
          value={this.state.search} 
          onChange={this.handleChange} 
        />
      </div>
    )
  }
}
export default Search;

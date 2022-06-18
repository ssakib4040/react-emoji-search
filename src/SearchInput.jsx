import React, { Component } from "react";

import "./SearchInput.css";

export default class SearchInput extends Component {
  handleChange = (event) => {
    this.props.textChange(event);
  };
  render() {
    return (
      <div className=" component-search-input">
        <div>
          <input type="text" onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}

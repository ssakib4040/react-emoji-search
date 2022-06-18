import { Component } from "react";
import "./App.css";

import filterEmoji from "./filterEmoji";

// components
import Header from "./Header";
import SearchInput from "./SearchInput";
import EmojiResults from "./EmojiResults";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredEmoji: filterEmoji("", 20),
    };
  }

  handleSearchChange = (event) => {
    this.setState({
      filteredEmoji: filterEmoji(event.target.value, 20),
    });
  };
  render() {
    return (
      <div>
        <Header />
        <SearchInput textChange={this.handleSearchChange} />
        <EmojiResults emojiData={this.state.filteredEmoji} />
      </div>
    );
  }
}

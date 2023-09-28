import { PureComponent } from "react";
import Header from "./Components/Header/Header";
import SearchBar from "./Components/Searchbar/SearchBar";
import EmojiResults from "./Components/Emojis/EmojiResults";
import { Filter } from "./Components/Emojis/Filter";
export default class App extends PureComponent {
  state = {
    filteredEmojis: Filter("", 20),
  };

  handleChange = (event) => {
    this.setState({
      filteredEmojis: Filter(event.target.value, 15),
    });
  };

  render() {
    return (
      <div>
        <Header />
        <SearchBar handleChange={this.handleChange} />
        <EmojiResults emojiData={this.state.filteredEmojis} />
      </div>
    );
  }
}

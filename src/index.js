import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTsearch from "youtube-api-search";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";


import SearchBar from "./components/search_bar";
const API_KEY = "AIzaSyDh7C7SbrEgfPaBv6kKEmvCCq4eckQRtGY";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };
    YTsearch(
      {
        key: API_KEY,
        term: "surfboard"
      },
      videos => this.setState({ videos })
    );
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));

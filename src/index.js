import React, { Component } from "react";
import _ from "lodash"
import ReactDOM from "react-dom";
import YTsearch from "youtube-api-search";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

import SearchBar from "./components/search_bar";
const API_KEY = "AIzaSyDh7C7SbrEgfPaBv6kKEmvCCq4eckQRtGY";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [], selectedVideo: null };
    this.videoSearch("surfBoards");
  }

  videoSearch(term) {
    YTsearch(
      {
        key: API_KEY,
        term: term
      },
      videos => this.setState({ videos: videos, selectedVideo: videos[0] })
    );
  }
  render() {
    const VideoSearch = _.debounce((term)=>{this.videoSearch(term),300})
    return (
      <div>
        <SearchBar onSearchTermChanged={VideoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => {
            this.setState({ selectedVideo });
          }}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));

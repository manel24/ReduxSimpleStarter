import React from "react";
import ReactDOM from "react-dom";
import YTsearch from "youtube-api-search";

import SearchBar from "./components/search_bar";
const API_KEY = "AIzaSyDh7C7SbrEgfPaBv6kKEmvCCq4eckQRtGY";

YTsearch({ key: API_KEY, term: "surfboard" }, function(data) {
  console.log(data);
});
//Create a new component.
//this component should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

//Take this component's generated HTML and put it in the DOM

ReactDOM.render(<App />, document.querySelector(".container"));

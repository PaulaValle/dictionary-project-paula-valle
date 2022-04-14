import axios from "axios";
import React, { useState } from "react";
import Results from "./results.js";
import "./dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function HandleSubmit(event) {
    event.preventDefault();
    Search();
  }

  function Search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function HandleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    Search();
  }

  if (loaded) {
    return (
      <div className="dictionary">
        <section>
          <form onSubmit={HandleSubmit}>
            <input type="search" onChange={HandleKeywordChange} />
          </form>
          <div className="hint">
            suggested words: sunset, sunrise, hello, dog...
          </div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}

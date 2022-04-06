import React, { useState } from "react";
import "./dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function Search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
  }

  function HandleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="dictionary">
      <form onSubmit={Search}>
        <input type="search" onChange={HandleKeywordChange} />
      </form>
    </div>
  );
}

import React from "react";
import { directors } from "../data";

function Directors() {
  const directorPage = directors.map((director) => (
    <div key={director.name}>
      <h2>Name: {director.map}</h2>
      Movies:
      <ul>
        {director.movies.map((movie) => (
          <li key={movie}>{}movie</li>
        ))}
      </ul>
    </div>
  ))
  return (
  <div>
    {/*{code here}*/}
    <h1>Directors Page</h1>
    {directorPage}
    </div>
  );
}

export default Directors;

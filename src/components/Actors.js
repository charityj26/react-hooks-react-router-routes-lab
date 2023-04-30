import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsPage = actors.map((actor) => (
    <div key={actor.name}>
      <h2>Name: {}actor.name</h2>
      Movies:
      <ul>
        {actor.movies.map((movie)=> (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  ))
  return (
  <div>
    {/*{code here}*/}
    <h1>Actors Page</h1>
    {actorsPage}
    </div>
  );
}

export default Actors;


import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return (
  <div>
    {/*{code here}*/}
    <NavBar />
    <switch>
      <Route actuall path="/movies">
        <Movies />
      </Route>
      <Route actuall path ="/directors">
        <Directors/>
      </Route>
      <Route actuall path ="/actors">
        <Actors />
        </Route>
    </switch>
    </div>

  );
}

export default App;
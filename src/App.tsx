import React from "react";

import News from "./components/News";
import { Header } from "./components/Header";
import TvShows from "./components/TvShows";
import { Profile } from "./components/Profile";

import "./app.scss";

function App() {
  return (
    <React.Fragment>
      <Header title="Hello" />

      <div className="container pt-5 pb-5">
        <Profile />
        <News />
        <TvShows />
      </div>
    </React.Fragment>
  );
}

export default App;

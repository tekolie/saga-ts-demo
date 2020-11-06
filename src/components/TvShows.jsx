import React from "react";
import { connect } from "react-redux";

import { Loader } from "./Loader";

const TvShows = ({ list, isLoading }) => {
  return (
    <React.Fragment>
      <div className="row mt-4">
        <div className="col">
          <h3>TV Shows</h3>
        </div>
      </div>
      <div className="row" style={{ minHeight: 480 }}>
        {isLoading && <Loader />}
        {list.map((movie, i) => (
          <div className="col-3" key={movie.id + i}>
            <div className="card">
              <img src={movie.posterImg} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

const selector = ({ tvShows }) => ({
  list: tvShows.list,
  isLoading: tvShows.isLoading,
});

export default connect(selector)(TvShows);

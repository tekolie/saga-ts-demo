import React from "react";
import { useSelector } from "react-redux";

import { Form } from "./Form";
import { Loader } from "./Loader";
import * as selectors from '../selectors'

export const Profile = () => {
  const name = useSelector(selectors.getName)
  const username = useSelector(selectors.getUsername)
  const location = useSelector(selectors.getLocation)
  const profilePic = useSelector(selectors.getProfilePic)
  const publicRepos = useSelector(selectors.getPublicRepos)

  const isLoading = username === null;

  return (
    <div className="card bg-info p-3">
      <div className="row text-white">
        <div className="col">
          <h3>Git Info</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-6 text-white">
          <Form />
        </div>
        <div className="col-6">
          {(username || isLoading) && (
            <div className="card shadow p-3 rounded" style={{ height: 182 }}>
              {isLoading ? (
                <Loader />
              ) : (
                <div className="row no-gutters">
                  <div className="col-md-4">
                    {!!profilePic && <img src={profilePic} className="card-img" alt="..." />}
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">@{username}</h5>

                      <p className="card-text mb-0">Name: {name}</p>
                      <p className="card-text mb-0">Location: {location}</p>
                      <p className="card-text mb-0">
                        Public repos: {publicRepos}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


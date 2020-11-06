import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { getUserAndTvShow } from "../store/actions";
import { Input } from "./Input";

const COUNTRIES = [
  {
    label: "United Kingdom",
    value: "gb",
  },
  {
    label: "United States",
    value: "us",
  },
];

export const Form: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [countryCode, setCountryCode] = useState("");

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (username && countryCode) {
      dispatch(getUserAndTvShow(username, countryCode));
    } else {
      alert("Invalid fields!");
    }
  };

  return (
    <div>
      <div className="form-group">
        <label>Username</label>
        <Input
          defaultValue={username}
          placeholder="Enter Github username"
          onChange={setUsername}
        />
      </div>
      <div className="form-group">
        <label>News / TV Shows from:</label>
        <select
          value={countryCode}
          className="form-control"
          onChange={(e) => setCountryCode(e.target.value)}
        >
          <option value="">-- Select Country --</option>
          {COUNTRIES.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="btn btn-primary mb-2"
        onClick={handleSubmit}
      >
        Send
      </button>
    </div>
  );
};


import React from "react";

type Props = {
  readonly title: string;
};

export const Header: React.FC<Props> = ({ title }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="/">
      Navbar - {title}
    </a>

    <div className="collapse navbar-collapse" id="navbarColor01"></div>
  </nav>
);

import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        TP2
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Basculer la navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-link" to="/home">
            Accueil <span className="sr-only">(current)</span>
          </NavLink>
          <NavLink className="nav-link" to="/calendar">
            Calendrier
          </NavLink>
          <NavLink className="nav-link" to="/login">
            Connexion
          </NavLink>
          <NavLink className="nav-link" to="/subscribe">
            Inscription
          </NavLink>
          <NavLink className="nav-link" to="/about">
            À propos
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

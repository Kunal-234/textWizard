// import React,{uses, useState} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
 
  return (
    <nav
      className={` navbar navbar-expand-lg color-black border-bottom bg-body-dark `}
      data-bs-theme="light"
    >
      <div className={`container-fluid text-${props.mode===`light`?`light`:`dark`}`}>
        <Link className={`text-${props.mode===`light`?`light`:`dark`} navbar-brand `}to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse text-${props.mode===`light`?`light`:`dark`}`} id="navbarSupportedContent">
          <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link mx-2  active text-${props.mode===`light`?`light`:`dark`}`} aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link style={{textDecoration:"none"}} className={`nav-link mx-2 text-${props.mode===`light`?`light`:`dark`} `} to="/about">
                {props.about}
              </Link>
            </li>
          </ul>
            <div  className="form-check form-switch">
              <input onClick={props.toggleMode}
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label  className="form-check-label" htmlFor="flexSwitchCheckDefault">
                Enable dark Mode
              </label>
            </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = { title: PropTypes.string, about: PropTypes.string };

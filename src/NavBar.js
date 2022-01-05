import React from 'react';
import { NavLink } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./index.css";

function NavBar() {
  return (
    <div className="container-fluid nav_bg" >
      <div className="row">
        <div className="col-10 mx-auto">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to="/">🅵🅾🅾🅳🅸🅴 🅺🅸🆂🅼🅰🆃</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                <li className="nav-item active">
                  <NavLink className="nav-link" exact activeClassName='menu_class' to="/">Home <span className="sr-only"></span></NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName='menu_class' to="/contact">Contact</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName='menu_class' to="about">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName='menu_class' to="services">Services</NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default NavBar;

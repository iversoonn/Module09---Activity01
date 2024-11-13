import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () =>{
    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">

        <NavLink to="/" className="nav-link" activeclassName="active" aria-current="page">Home</NavLink>
        <NavLink to="/profile" className="nav-link" activeclassName="active">Profile</NavLink>
        <NavLink to="/contact" className="nav-link" activeclassName="active">Contact Us</NavLink>
        <NavLink to="/mymainforms" className="nav-link" activeclassName="active">Main Forms</NavLink>
      </ul>
    </div>
  </div>
</nav>
    )
};

export default Nav;
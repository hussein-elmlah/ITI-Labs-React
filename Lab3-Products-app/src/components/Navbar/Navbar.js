import React from "react";
import { Link } from "react-router-dom";
import { Navbar as BootstrapNavbar, Nav } from "react-bootstrap";

function Navbar() {
  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg" className="fixed-top">
      <BootstrapNavbar.Brand href="/">Products</BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {/* <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/movies" className="nav-link">
            Movies
          </Link> */}
          <Link to="/form" className="nav-link">
            Register
          </Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
}

export default Navbar;

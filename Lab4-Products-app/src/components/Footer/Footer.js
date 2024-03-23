import React from "react";
import { Container, Nav } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-light">
      <div className="text-center py-2 bg-secondary fixed-bottom ">
        &copy; {new Date().getFullYear()} My Website Footer
      </div>
    </footer>
  );
}

export default Footer;

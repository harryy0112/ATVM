import React, { useRef } from "react";
import logo1 from "../../assets/logo.png";
import logo2 from "../../assets/CRISlogo.png";
import "./navbar.css";

function Navbar() {
  return (
    <header>
      <nav>
        <span className="logo">
          <img src={logo1} alt="logo" />
          <img src={logo2} alt="logo" />
          <span className="logo-name">Automatic Ticket Vending System</span>
        </span>
      </nav>
    </header>
  );
}

export default Navbar;

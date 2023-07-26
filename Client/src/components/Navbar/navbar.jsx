import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./navbar.css";

function Navbar() {
  const navRef = useRef();

  function showNavbar() {
    return navRef.current.classList.toggle("responsive_nav");
  }

  function handleRegister() {
    alert("More events coming soon!");
  }

  return (
    <header>
      <nav ref={navRef}>
        <span className="logo">
          <img src={logo} alt="logo" />
          <span className="logo-name">ATVM</span>
        </span>

        <span className="links">
          <a onClick={showNavbar} href="/#about">
            <span>About</span>
          </a>
          <Link onClick={showNavbar} to="/event">
            <span>Events</span>
          </Link>
          <a onClick={showNavbar} href="/#domains">
            <span>Domains</span>
          </a>
          <Link onClick={showNavbar} to="/team">
            <span>Team</span>
          </Link>
          <a onClick={showNavbar} href="/#contact">
            <span>Contact Us</span>
          </a>
        </span>

        <button className="regbtn" onClick={handleRegister}>
          Register
        </button>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <div className="resnav">
        <button className="nav-btn nav-open-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
}

export default Navbar;

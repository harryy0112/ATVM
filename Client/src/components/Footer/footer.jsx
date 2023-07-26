import React from "react";
import { Link } from "react-router-dom";
import footerLogo from "../../assets/logo.png";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="left footer-child">
            <div className="content">
              <h1>Central Railway Information Systems</h1>
              <br />
              <p className="cnt">
                CRIS (Centre for Railway Information Systems) is an organization
                under Ministry of Railways. CRIS is a unique combination of
                competent IT professionals and experienced Railway personnel
                enabling it to successfully deliver complex Railway IT systems
                in core areas. Since its inception, CRIS is
                developing/maintaining softwares for the following key
                functional areas of the Indian Railways.
              </p>
            </div>
            <div className="menu">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/?v=domains">Domains</Link>
                </li>
                <li>
                  <Link to="/team">Team</Link>
                </li>
                <li>
                  <Link to="/event">Events</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="right footer-child">
            <img src={footerLogo} alt="logo" />
          </div>
        </div>
      </div>

      <div className="social">
        <ul>
          <li>
            <a href="mailto:bdcoe@akgec.ac.in" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-google"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/school/big-data-centre-of-excellence/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@bigdatacentreofexcellence3334"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/bdcoe/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-square-instagram"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Big-Data-Center-of-Excellence"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="copyright1">
      This Website Belongs To Centre For Railway Information Systems, An Organization Of The Ministry Of Railways.
      </div>
      <div className="copyright2">
        Copyright ©️ {new Date().getFullYear()} - CENTRE FOR RAILWAY INFORMATION SYSTEMS
      </div>
    </>
  );
};

export default Footer;

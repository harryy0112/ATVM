import React from "react";
import footerLogo1 from "../../assets/logo.png";
import footerLogo2 from "../../assets/CRISlogo.png";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="movingText">
        <marquee direction="left">
          <span style={{ color: "purple" }}>Cyber Crime Helpline :</span>
          &nbsp;&nbsp;
          <span style={{ color: "red" }}>1930</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span style={{ color: "blue" }}>www.cybercrime.gov.in</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span style={{ color: "purple" }}>Voter Helpline :</span>
          &nbsp;&nbsp;
          <span style={{ color: "red" }}>1950</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span style={{ color: "blue" }}>www.nvsp.gov.in</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </marquee>
      </div>
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
          </div>
          <div className="right footer-child">
            <img src={footerLogo1} alt="logo" />
            <img src={footerLogo2} alt="logo" />
          </div>
        </div>
      </div>
      <div className="copyright1">
        This Website Belongs To Centre For Railway Information Systems, An
        Organization Of The Ministry Of Railways.
      </div>
      <div className="copyright2">
        Copyright ©️ {new Date().getFullYear()} - CRIS
      </div>
    </>
  );
};

export default Footer;

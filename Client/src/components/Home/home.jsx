import React, { useRef } from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/image-1.jpg";
import img2 from "../../assets/image-2.jpg";
import img3 from "../../assets/image-3.jpg";
import "./home.css";

const Home = () => {
  const redirectRef = useRef();
  function redirect() {
    return redirectRef.current.classList.toggle("responsive_nav");
  }

  return (
    <>
      <div>
        <div className="home">
          <div className="main-slide">
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={img1} class="d-block w-100" alt="img1" />
                </div>
                <div className="carousel-item">
                  <img src={img2} class="d-block w-100" alt="img2" />
                </div>
                <div className="carousel-item">
                  <img src={img3} class="d-block w-100" alt="img3" />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="container">
            <div class="fieldset">
              <h1 class="legend">Book Your Ticket</h1>
              <button className="btn">
                <Link
                  style={{ textDecoration: "none" }}
                  onClick={redirect}
                  to="/map"
                >
                  <span style={{ color: "white" }}>Using Map</span>
                </Link>
              </button>
              <button className="btn">
                <Link
                  style={{ textDecoration: "none" }}
                  onClick={redirect}
                  to="/fastBook"
                >
                  <span style={{ color: "white" }}>Fast Booking</span>
                </Link>
              </button>
              <button className="btn">
                <Link
                  style={{ textDecoration: "none" }}
                  onClick={redirect}
                  to="/otherStations"
                >
                  <span style={{ color: "white" }}>All Other Stations</span>
                </Link>
              </button>
              <button className="btn">
                <Link
                  style={{ textDecoration: "none" }}
                  onClick={redirect}
                  to="/checkAvail"
                >
                  <span style={{ color: "white" }}>
                    Check Train Availability
                  </span>
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="Buttons-sec1">
          <button className="regbtn">
            <Link
              style={{ textDecoration: "none" }}
              onClick={redirect}
              to="/renew"
            >
              <span style={{ color: "white" }}>Renew Season Ticket</span>
            </Link>
          </button>
          <button className="regbtn">
            <Link
              style={{ textDecoration: "none" }}
              onClick={redirect}
              to="/rechargeSmart"
            >
              <span style={{ color: "white" }}>Recharge Smart Card</span>
            </Link>
          </button>
        </div>
        <div className="Buttons-sec1">
          <button className="regbtn">
            <Link
              style={{ textDecoration: "none" }}
              onClick={redirect}
              to="/printTicket"
            >
              <span style={{ color: "white" }}>Print Mobile Ticket</span>
            </Link>
          </button>
          <button className="regbtn">
            <Link
              style={{ textDecoration: "none" }}
              onClick={redirect}
              to="/platTicket"
            >
              <span style={{ color: "white" }}> Platform Ticket </span>
            </Link>
          </button>
        </div>
        <div className="Buttons-sec2">
          <button className="regbtn">
            <Link
              style={{ textDecoration: "none" }}
              onClick={redirect}
              to="/platTicket"
            >
              <span style={{ color: "white" }}>Smart Card Details</span>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;

import "./home.css";
import img1 from "../../assets/image-1.jpg";
import img2 from "../../assets/image-2.jpg";
import img3 from "../../assets/image-3.jpg";

const Home = () => {
  function handleRegister() {
    alert("Coming Soon");
  }

  return (
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
            <button className="btn" onClick={handleRegister}>
              Using Map
            </button>
            <button className="btn" onClick={handleRegister}>
              Fast Booking
            </button>
            <button className="btn" onClick={handleRegister}>
              All Other Stations
            </button>
            <button className="btn" onClick={handleRegister}>
              Check Train Availability
            </button>
          </div>
        </div>
      </div>
      <div className="Buttons-sec1">
        <button className="regbtn" onClick={handleRegister}>
          Renew Season Ticket
        </button>
        <button className="regbtn" onClick={handleRegister}>
          Recharge Smart Card
        </button>
      </div>
      <div className="Buttons-sec1">
        <button className="regbtn" onClick={handleRegister}>
          Print Mobile Ticket
        </button>
        <button className="regbtn" onClick={handleRegister}>
          Platform Ticket
        </button>
      </div>
      <div className="Buttons-sec2">
        <button className="regbtn" onClick={handleRegister}>
          Smart Card Detail
        </button>
      </div>
    </div>
  );
};

export default Home;

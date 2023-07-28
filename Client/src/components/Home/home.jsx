import "./home.css";
import train from "../../assets/TrainImg.jpg";

const Home = () => {
  function handleRegister() {
    alert("Coming Soon");
  }

  return (
    <div>
      <div className="home">
        <div className="left">
          <img src={train} alt="train" />
        </div>
        <div class="container">
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
      <div className="down">
        <div className="option">
          <h2>Please Select Ticket Type</h2>
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
          Platform Ticket &nbsp;
        </button>
        <button className="regbtn" onClick={handleRegister}>
          Smart Card Detail
        </button>
      </div>
      <div className="Buttons-sec2">
        <button className="regbtn" onClick={handleRegister}>
          Platform Ticket
        </button>
      </div>
    </div>
  );
};

export default Home;

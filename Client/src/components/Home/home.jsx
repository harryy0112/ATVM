import "./home.css";
import train from "../../assets/TrainImg.jpg";

const Hero = () => {
  return (
    <div className="home">
      <div className="img">
        <img src={train} alt="train" />
      </div>
      <div className="right">
        <p className="toptxt">Book Your Journey Ticket</p>
      </div>
    </div>
  );
};

export default Hero;

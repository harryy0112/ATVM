import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import "./platformTicket.css";

const platformTicket = () => {
  const back = () => {
    alert("Transaction Cancelled");
  };

  const pay = () => {
    alert("Coming Soon");
  };
  return (
    <>
      <Navbar />
      <div className="main">
        <div className="left">
          <div className="options">
            <div>
              <h5>Please Select Number of Passengers for Platform Ticket</h5>
            </div>
            <div className="btn-padding">
              <button className="btns">1</button>
              <button className="btns">2</button>
              <button className="btns">3</button>
              <button className="btns">4</button>
            </div>
            <div className="cancel-btn-padding">
              <button className="cancel-btn" onClick={back}>
                Cancel Transaction
              </button>
              <button className="pay-btn" onClick={pay}>
                Pay Now
              </button>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="card">
            <div>
              <h4 style={{ color: "purple" }}>Platform Ticket Preview</h4>
            </div>
            <div className="content">
              <h5>Location : DELHI JN</h5>
            </div>
            <div className="content">
              <h5>जगह : दिल्ली</h5>
            </div>
            <div className="content">
              <h5>No. of Passengers: 4</h5>
            </div>
            <div className="content">
              <h5>Ticket Fare : ₹ 40 </h5>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default platformTicket;

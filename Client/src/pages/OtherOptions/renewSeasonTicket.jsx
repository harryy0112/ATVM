import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import { Link } from "react-router-dom";
import "./renewSeasonTicket.css";

const renewSeasonTicket = () => {
  return (
    <>
      <Navbar />
      <div className="details">
        <div className="left-smartcard">
          <div>
            <h5>Please Enter the SmartCard Id</h5>
          </div>
          <div className="input-smartcard">
            SmartCard ID : <input type="text" />
            Enter the Amount to Add :<input type="text" />
          </div>
          <div className="cancel-btn-padding-mobile">
            <button className="cancel-btn-mobile">
              <Link style={{ textDecoration: "none" }} to="/">
                <span style={{ color: "white" }}> Cancel Transaction</span>
              </Link>
            </button>
            <button className="Submit-btn">
              <Link style={{ textDecoration: "none" }} to="/renew/payments">
                <span style={{ color: "white" }}>ADD Now</span>
              </Link>
            </button>
          </div>
        </div>
        <div className="right-smartcard">
          <div className="help">
            <p>
              <b>SmartCard Details :</b>
              <br />
              1. SmartCard ID : XXXXXXXXXX
              <br />
              2. Card Balance : XXX RS.
              <br />
              3. Card Validity : XX-XX-20XX
              <br />
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default renewSeasonTicket;

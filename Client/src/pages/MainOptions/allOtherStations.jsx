import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import { Link } from "react-router-dom";
import "./allOtherStations.css";

const allOtherStations = () => {
  return (
    <>
      <Navbar />
      <div className="left">
        <div className="fields">
          <div>
            <h5>Please Enter the Booking Id</h5>
          </div>
          <div className="input">
            From : <input type="text" />
            To : <input type="text" />
            <label for="adult">Adults :</label>
            <select id="adult" name="adult">
              <option value="take">1</option>
              <option value="take">2</option>
              <option value="take">3</option>
              <option value="take">4</option>
            </select>
            <label for="child">Child :</label>
            <select id="child" name="child">
              <option value="take">1</option>
              <option value="take">2</option>
              <option value="take">3</option>
              <option value="take">4</option>
            </select>
            <label for="JourT">Journey Type :</label>
            <select id="JourT" name="JourT">
              <option value="take">Single</option>
              <option value="take">Return</option>
            </select>
            <label for="class">Class :</label>
            <select id="class" name="class">
              <option value="take">II</option>
              <option value="take">FC</option>
            </select>
            <label for="trainT">Train Type :</label>
            <select id="trainT" name="trainT">
              <option value="take">Ordinary</option>
              <option value="take">Mail/Exp.</option>
              <option value="take">Superfast</option>
              <option value="take">Antodaya</option>
              <option value="take">AC EMU</option>
            </select>
          </div>
          <div className="cancel-btn-padding-mobile">
            <button className="cancel-btn-mobile">
              <Link style={{ textDecoration: "none" }} to="/">
                <span style={{ color: "white" }}> Cancel Transaction</span>
              </Link>
            </button>
            <button className="Submit-btn">
              <Link
                style={{ textDecoration: "none" }}
                to="/otherStations/payments"
              >
                <span style={{ color: "white" }}>Submit Now</span>
              </Link>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default allOtherStations;

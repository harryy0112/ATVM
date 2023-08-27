import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import "./rechargeSmartCard.css";

const rechargeSmartCard = () => {
  const back = () => {
    alert("Transaction Cancelled");
  };

  const Submit = () => {
    alert("Coming Soon");
  };
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
            <button className="cancel-btn-mobile" onClick={back}>
              Cancel Transaction
            </button>
            <button className="Submit-btn" onClick={Submit}>
              ADD Now
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

export default rechargeSmartCard;

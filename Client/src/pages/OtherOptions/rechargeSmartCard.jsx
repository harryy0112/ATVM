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
        <div>
          <h5>Please Enter the SmartCard Id</h5>
        </div>
        <div className="input-smartcard">
          SmartCard ID : <input type="text" />
          Enter the Amount to Add :<input type="text" />
        </div>
        <button className="cancel-btn-mobile" onClick={back}>
          Cancel Transaction
        </button>
        <button className="Submit-btn" onClick={Submit}>
          ADD Now
        </button>
      </div>
      <Footer />
    </>
  );
};

export default rechargeSmartCard;

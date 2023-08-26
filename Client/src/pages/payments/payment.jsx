import QR from "../../assets/QR.jpg";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import "./payment.css";

const payment = () => {
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
              <h5>
                <b>Please Choose Payment Option</b>
              </h5>
            </div>
            <div className="btn-paddings">
              <button className="btn-2" onClick={pay}>
                Railway Smart card
              </button>
              <p>
                Select the Railway SmartCard Option And click on the pay now
                <br />
                button
              </p>
            </div>
            <div className="btn-paddings">
              <button className="btn-1" onClick={pay}>
                pay using any UPI App
              </button>
              <p>
                <b>Additional Charges applicable:</b>
                <br />
                1. UPI payments - NIL Charges
                <br />
                2. RuPay Debit Card - NIL Charges
                <br />
                3. Others Debit Cards Upto 2000 - 0.4% and Above 2000 - 0.9%
                <br />
                4. Credit Cards/Freecharge Wallet/Net Banking - 1.0%
                <br />
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="card">
            <img className="size" src={QR} alt="logo2" />
            <p>Powered By Paytm</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default payment;

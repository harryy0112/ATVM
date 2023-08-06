import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import "./platformTicket.css";

const platformTicket = () => {
  return (
    <>
      <Navbar />
      <div className="ComingSoon">
        <div className="atvs">Platform Ticket</div>
        <div className="soon">Coming Soon</div>
      </div>
      <Footer />
    </>
  );
};

export default platformTicket;

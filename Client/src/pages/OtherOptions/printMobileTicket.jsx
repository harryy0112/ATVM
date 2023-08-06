import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import "./printMobileTicket.css";

const printMobileTicket = () => {
  return (
    <>
      <Navbar />
      <div className="ComingSoon">
        <div className="atvs">Print Mobile Ticket</div>
        <div className="soon">Coming Soon</div>
      </div>
      <Footer />
    </>
  );
};

export default printMobileTicket;

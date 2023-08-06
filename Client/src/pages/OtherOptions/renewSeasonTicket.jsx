import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import "./renewSeasonTicket.css";

const renewSeasonTicket = () => {
  return (
    <>
      <Navbar />
      <div className="ComingSoon">
        <div className="atvs">Renew Season Ticket</div>
        <div className="soon">Coming Soon</div>
      </div>
      <Footer />
    </>
  );
};

export default renewSeasonTicket;

import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import "./checkTrainAvail.css";

const checkTrainAvail = () => {
  return (
    <>
      <Navbar />
      <div className="ComingSoon">
        <div className="atvs">Using Map</div>
        <div className="soon">Coming Soon</div>
      </div>
      <Footer />
    </>
  );
};

export default checkTrainAvail;

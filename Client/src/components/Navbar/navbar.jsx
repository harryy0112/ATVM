import logo1 from "../../assets/logo.png";
import logo2 from "../../assets/CRISlogo.png";
import G20Logo from "../../assets/G20Logo.png";
import Millets from "../../assets/Millets.png";
import "./navbar.css";

function Navbar() {
  return (
    <nav>
      <span className="logo">
        <img src={logo1} alt="logo1" />
        <img src={logo2} alt="logo1" />
        <span className="logo-name">Automatic Ticket Vending System</span>
        <img className="size" src={G20Logo} alt="logo2" />
        <img className="size" src={Millets} alt="logo2" />
      </span>
    </nav>
  );
}

export default Navbar;

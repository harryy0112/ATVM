import React from "react";
import Front from "./pages/Front";
import Mapp from "./pages/MainOptions/usingMap";
import Fast from "./pages/MainOptions/fastBooking";
import Other from "./pages/MainOptions/allOtherStations";
import Check from "./pages/MainOptions/checkTrainAvail";
import Renew from "./pages/OtherOptions/renewSeasonTicket";
import RechargeSmart from "./pages/OtherOptions/rechargeSmartCard";
import PrintTicket from "./pages/OtherOptions/printMobileTicket";
import PlatTicket from "./pages/OtherOptions/platformTicket";
import SDetails from "./pages/OtherOptions/SmartCardDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Front />} />
          <Route exact path="/map" element={<Mapp />} />
          <Route exact path="/fastBook" element={<Fast />} />
          <Route exact path="/otherStations" element={<Other />} />
          <Route exact path="/checkAvail" element={<Check />} />
          <Route exact path="/renew" element={<Renew />} />
          <Route exact path="/rechargeSmart" element={<RechargeSmart />} />
          <Route exact path="/printTicket" element={<PrintTicket />} />
          <Route exact path="/platTicket" element={<PlatTicket />} />
          <Route exact path="/sCardDetails" element={<SDetails />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

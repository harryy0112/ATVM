import React from "react";
import Front from "./pages/Front";
import Mapp from "./pages/MainOptions/usingMap";
import Fast from "./pages/MainOptions/fastBooking";
import Other from "./pages/MainOptions/allOtherStations";
import Check from "./pages/MainOptions/checkTrainAvail";
// import renew from "./pages/OtherOptions/renewSeasonTicket";
// import rechargeSmart from "./pages/OtherOptions/rechargeSmartCard";
// import printTicket from "./pages/OtherOptions/printMobileTicket";
// import platTicket from "./pages/OtherOptions/platformTicket";
// import sCardDetails from "./pages/OtherOptions/smartCardDetails";
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
          <Route exact path="/renew" element={<renew />} />
          <Route exact path="/rechargeSmart" element={<rechargeSmart />} />
          <Route exact path="/printTicket" element={<printTicket />} />
          <Route exact path="/platTicket" element={<platTicket />} />
          <Route exact path="/sCardDetails" element={<sCardDetails />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

import React from "react";
import Front from "./pages/Front";
// import map from "./pages/MainOptions/usingMap";
// import fastBook from "./pages/MainOptions/fastBooking";
// import otherStations from "./pages/MainOptions/allOtherStations";
// import checkAvail from "./pages/MainOptions/checkTrainAvail";
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
          <Route exact path="/" element={<map />} />
          <Route exact path="/" element={<fastBook />} />
          <Route exact path="/" element={<otherStations />} />
          <Route exact path="/" element={<checkAvail />} />
          <Route exact path="/" element={<renew />} />
          <Route exact path="/" element={<rechargeSmart />} />
          <Route exact path="/" element={<printTicket />} />
          <Route exact path="/" element={<platTicket />} />
          <Route exact path="/" element={<sCardDetails />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

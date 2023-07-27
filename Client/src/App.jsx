import React from "react";
import Front from "./pages/Front";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Front />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

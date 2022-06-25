import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { MyMap } from "./components/MyMap/MyMap";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
        </Routes>
        <MyMap />
      </Router>
    </>
  );
}

export default App;

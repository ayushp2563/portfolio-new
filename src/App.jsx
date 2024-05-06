import "./index.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/HomeScreen";
import Navbar from "./Pages/Home/Navbar";
import HeroSection from "./Pages/Home/HeroSection";
import Darkmode from "./Pages/Darkmode";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <HeroSection />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

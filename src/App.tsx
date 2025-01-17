import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/landingPage";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import GiftAndSponsor from "./pages/gift";
import RSVPPage from "./pages/rsvp";

const App: React.FC = () => {
  return (
    <Router>
      {/* 
       */}

      <Navbar />

      <div className="container mx-auto mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gift" element={<GiftAndSponsor />} />
          <Route path="/rsvp" element={<RSVPPage /> } />

        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;

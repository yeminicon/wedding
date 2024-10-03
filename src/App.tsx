import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/landingPage";
import Login from "./pages/auth/login";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const App: React.FC = () => {
  return (
    <Router>
      {/* 
       */}

      <Navbar />

      <div className="container mx-auto mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shop" element={<Home /> } />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;

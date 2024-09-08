import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import LoginPage from "./pages/LoginPage";
import MovieListing from "./pages/MovieListing";
import RegisterPage from "./pages/RegisterPage";
import AddMoives from "./pages/AddMoives";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/movielisting" element={<MovieListing />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/addmovie" element={<AddMoives />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

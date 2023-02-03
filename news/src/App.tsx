import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* STATIC */}
        <Navbar />
        <Routes>
          {/* DYNAMIC */}
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        {/* STATIC */}
      </BrowserRouter>
    </div>
  );
}

export default App;

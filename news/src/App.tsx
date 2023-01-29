import React from "react";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterForm from "./components/RegisterForm/RegisterForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <RegisterForm />
      {/* <LoginPage /> */}
      <HomePage />
    </div>
  );
}

export default App;

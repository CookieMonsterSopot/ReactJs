import React from "react";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import LoginPage from "./components/LoginPage/LoginPage";


function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <HomePage /> */}
      <LoginPage />
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";

import LoginPage from "./pages/Auth/LoginPage";

import Signup from "./pages/Auth/Signup";
import RegistrationPage from "./pages/Registration/RegistrationPage";



export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/login" element={<LoginPage/>} />
          <Route path="/Registration" element={<RegistrationPage/>} />
      </Routes>
    </Router>
  );
}

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CarDetails from "./pages/CarDetails";
import SellCar from "./pages/SellCar";
import Login from "./pages/Login"; // Import Login Page
import Header from "./components/Header";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";
import { useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";  // Import Google OAuth Provider

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");  // Manage search state here
  const [selectedModel, setSelectedModel] = useState("");       // Model selection state


  return (
    <GoogleOAuthProvider clientId="1067308899966-i3vc23j5qqav8n0eu2kshno5ej9m4bo3.apps.googleusercontent.com">  {/* Wrap with GoogleOAuthProvider */}
    <Router>
      <Header searchQuery={searchQuery}
      setSearchQuery={setSearchQuery} 
      setSelectedModel={setSelectedModel}   /> {/* Pass as props ,Pass setSelectedModel to Header*/} 
      <Routes>
      <Route path="/" element={<Home searchQuery={searchQuery} selectedModel={selectedModel} />} />  {/* Pass searchQuery to Home */}
        <Route path="/car/:id" element={<CarDetails />} />
        <Route path="/sell" element={<SellCar />} />
        <Route path="/login" element={<Login />} /> {/* New Route for Login */}
        <Route path="/Signup" element={<Signup/>} />
      </Routes>
      <Footer/>
    </Router>
    </GoogleOAuthProvider>
  );
};

export default App;

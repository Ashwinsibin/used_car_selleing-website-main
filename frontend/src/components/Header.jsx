
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Header.css";
import React, { useState } from "react";

const Header = ({ searchQuery, setSearchQuery,setSelectedModel }) => {  // Accept props,Accept setSelectedModel prop
  const navigate = useNavigate();
  const [selectedModel, setModel] = useState("");  // State for dropdown

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    navigate("/");  // Redirect to home if not already there
  };

  const handleModelChange = (e) => {
    const model = e.target.value;
    setModel(model);
    setSelectedModel(model);  // Pass selected model to App.jsx
  };


  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Used Car Marketplace Logo" className="logo-img" onClick={() => navigate("/")} />
      </div>


      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for cars..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}  // Update search state
        />
        <button type="submit">Search</button>
      </form>

      {/* Car Model Dropdown */}
      <div className="custom-dropdown">
  <div className="dropdown">
    <button className="dropdown-btn">
      {selectedModel || "All Models"} ▼
    </button>
    <div className="dropdown-content">
      <div onClick={() => handleModelChange({ target: { value: "" } })}>All Models</div>
      <div onClick={() => handleModelChange({ target: { value: "SUV" } })}>SUV</div>
      <div onClick={() => handleModelChange({ target: { value: "Sedan" } })}>Sedan</div>
      <div onClick={() => handleModelChange({ target: { value: "Hatchback" } })}>Hatchback</div>
      <div onClick={() => handleModelChange({ target: { value: "Convertible" } })}>Convertible</div>
    </div>
  </div>
</div>


      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sell">Sell a Car</Link></li>
      </ul>

      <Link to="/login" className="login-button">Login</Link>
    </nav>
  );
};

export default Header;

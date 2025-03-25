import React from "react";
import { useNavigate } from "react-router-dom";
import "./CarCard.css"; // Import the CSS file
const CarCard = ({ car }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/car/${car.id}`, { state: { car } });
  };

  return (
    <div className="car-card">
      <img src={car.image} alt={car.name} className="car-image" />
      <div className="car-details">
        <h2 className="car-name">{car.name}</h2>
        <p className="car-price">Price: ₹{car.price}</p>
        <p className="car-year">Year: {car.year ?? "Not specified"}</p>
        <button className="view-button" onClick={handleViewDetails}>View Details</button>
      </div>
    </div>
  );
};

export default CarCard;

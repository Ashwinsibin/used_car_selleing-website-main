import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import "./CarDetails.css"; // Import the CSS file

const CarDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const car = location.state?.car;

  if (!car) {
    return <h2 className="error-message">Car not found</h2>;
  }

  return (
    <div className="car-details-container">
      <button className="back-button" onClick={() => navigate(-1)}>← Back</button>

      <div className="car-details-card">
        <img src={car.image} alt={car.name} className="car-image" />
        <div className="car-info">
          <h2 className="car-name">{car.name}</h2>
          <p className="car-price">Price: <span>{car.price}</span></p>
          <p className="car-year">Year: <span>{car.year || "N/A"}</span></p>
          <p className="car-description">{car.description || "No description available."}</p>
          <button className="buy-now">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
